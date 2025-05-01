import { Controller, Get, Header, Param, Req } from '@nestjs/common';
import { CaptchaService } from './captcha.service';
import { Request } from 'express';
@Controller('captcha')
export class CaptchaController {

    constructor(
        private captchaService :CaptchaService
    ){}

    @Get("/session")
    async getCaptcha(@Req() request:Request){

        return await this.captchaService.createSession(request.path);

    }

    @Get('/image/:id')
    async  getSessionImage(@Param('id') id:string, @Req() request:Request){
        return await this.captchaService.getSessionImage(id,request.path);
    }

    @Get('session/control/:id')
    async sessionControl(@Param('id') id:string,@Req() request:Request){
        return await this.captchaService.SessionControl(id,request.path)
    }

}
