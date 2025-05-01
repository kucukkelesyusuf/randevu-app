import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Doctor } from 'src/entitys/doctor.entity';
import { Personel } from 'src/entitys/personel.entity';
import { Nurse } from 'src/entitys/nurse.entity';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { Captcha } from 'src/entitys/Captcha';

@Module({
  imports:[TypeOrmModule.forFeature([Doctor,Personel,Nurse,Captcha]),JwtModule.register({
    secret:"kedi",
    signOptions:{expiresIn:"1d"}
  })],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
