import { BadGatewayException, BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Captcha } from 'src/entitys/Captcha';
import { Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import * as bcrypt from "bcrypt";
import { uid } from 'uid';
import { getCanvasImage, UltimateTextToImage } from 'ultimate-text-to-image';
import * as fs from "fs"
import { BaseResponse } from 'src/dto/BaseResponse.dto';

import { ErrorCode } from 'src/ErrorCode/ErrorCodeEnum';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class CaptchaService {

    constructor(
        @InjectRepository(Captcha)
        private captchaRepository:Repository<Captcha>
    ){}


    generateSessionAnswer(){

        let answer = "";

        const number = ["1","2","3","4","5","6","7","8","9","0"]
        const wordsLowerCase = ["a","b","c","d","e","f","g","h","j","k","l","m","n","o","p","r","s","w","t","x","y","z"]
    
        for(let i = 0; i < wordsLowerCase.length; i++){
           
            if(answer.length > 4){
                break;
            }

            const isWords = Math.floor(Math.random()*100) < Math.floor(Math.random()*100)

            if(isWords){
                
                const words = wordsLowerCase[Math.floor(Math.random()*wordsLowerCase.length-1)];

                if(answer.indexOf(words) <= -1 && words !== undefined){
                      answer += words;
                }

            }else{

                const selectNum = number[Math.floor(Math.random()*number.length-1)];

                if(answer.indexOf(selectNum) <= -1 && selectNum !== undefined){
                      answer += selectNum;
                }
                

            }


        }
    
        return answer;

    }


    async createSession(path:string):Promise<BaseResponse<{session_id:string}>>{
        const fontColors = ["green","white","orange"]

        const session_answer =  this.generateSessionAnswer();

        const session_id = uuidv4();
        const buffer = fs.readFileSync(`./${Math.floor(Math.random()*2)+1}.png`);
        
        const  canvasImage1 = await getCanvasImage({buffer})

        const session_image = new UltimateTextToImage(session_answer,{
            fontSize:40,
            fontColor:fontColors[Math.floor(Math.random()*fontColors.length-1)],
        }).render().toBuffer()

        const session_messageBuffer = await getCanvasImage({buffer:session_image})
        const textImage = new UltimateTextToImage("",{
            width:200,
            height:60,
            images: [
                {canvasImage: canvasImage1, layer: -1, repeat: "fit"},
                {canvasImage: session_messageBuffer, layer: 0, x:10 ,y:10, repeat: "fit"}
            ]
        }).render().toBuffer();
        const captcha = new Captcha();
        captcha.answer = bcrypt.hashSync(session_answer,10);
        captcha.imageBinary = textImage.toString("base64");
        captcha.session = session_id
        captcha.time = new Date(Date.now())
        await this.captchaRepository.save(captcha);

        return new BaseResponse<{session_id:string}>({session_id:session_id},path);

    }

    async getSessionImage(sessionId:string,path:string):Promise<BaseResponse<{image:string}>>{
        
        const session = await  this.captchaRepository.findOne({where:{session:sessionId}});

        if(!session) throw new NotFoundException("Session is timeout");

        return new BaseResponse<{image:string}>({image:"data:image/png;base64," +session.imageBinary},path);
        

    }

    async SessionControl(sessionId:string,path:string):Promise<BaseResponse<string>>{

        const session = await this.captchaRepository.findOne({where:{session:sessionId}});

        if(!session)  throw new NotFoundException("Session is timeout");

        return new BaseResponse("Session is Active",path);

    }

    ExpireTimeControl(date1: Date, date2: Date): number {
        return Math.floor((date2.getTime() - date1.getTime()) /60000)
      }
      

    @Cron(CronExpression.EVERY_10_SECONDS)
    async SessionExpiredDatabase(){
        const session = await this.captchaRepository.find({take:10});

        if(session.length === 0) return; 

       for await (const data of session){
        
             if(this.ExpireTimeControl(new Date(data.time),new Date(Date.now())) >= 3){
                await this.captchaRepository.delete(data.id);
             }

        }

    }


}
