import { Inject, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InputLoginDto } from 'src/dto/InputLogin.dto';
import { Doctor } from 'src/entitys/doctor.entity';
import { Personel } from 'src/entitys/personel.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { ResponseLoginDto } from 'src/dto/ResponseLogin.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ErrorCode } from 'src/ErrorCode/ErrorCodeEnum';
import { Captcha } from 'src/entitys/Captcha';

@Injectable()
export class AuthService {

        constructor(
          private jwtService:JwtService,
          @InjectRepository(Doctor)
          private doctorRepository:Repository<Doctor>,
          @InjectRepository(Personel)
          private personelRepository:Repository<Personel>,
          @InjectRepository(Captcha)
          private captchaRepositore:Repository<Captcha>
        ){}

    async PasswordCompare(password:string,hash:string):Promise<boolean>{
        return await bcrypt.compare(password,hash);
    }
    

    async PersonelLogin(loginDto:InputLoginDto):Promise<ResponseLoginDto>{

     const loginDtoResponse = new ResponseLoginDto();   


     const captcha =await this.captchaRepositore.findOne({where:{session:loginDto.sessionId}})
     
     if(!captcha){
     throw new NotFoundException("Oturumun Süresi Doldu");
     }

     if(! await this.PasswordCompare(loginDto.captcha,captcha.answer)){
     throw new UnauthorizedException("İnsan Doğrulaması Başarısız");    
     }

     const doctor = await this.doctorRepository.findOne({where:{
         email:loginDto.email
     }})

     const personel = await this.personelRepository.findOne({where:{
        email:loginDto.email
     }})

     if(doctor) {
        if(!await this.PasswordCompare(loginDto.password,doctor.password)){
            throw new UnauthorizedException("Oturum Doğrulanamadı");
        }
        loginDtoResponse.doctor = doctor;
        loginDtoResponse.access_token = await this.jwtService.signAsync({doctor_id:doctor.id});
     }

     if(personel) {
        if(!await this.PasswordCompare(loginDto.password,personel.password)){
            throw new UnauthorizedException("Oturum Doğrulunamadı"); 
        }
        loginDtoResponse.personel = personel;
        loginDtoResponse.access_token = await this.jwtService.signAsync({personel_id:personel.id})
     }

     if(!doctor && !personel){
        throw new NotFoundException("Personel Bulunamadı");
     }

     return loginDtoResponse;
    }    

}
