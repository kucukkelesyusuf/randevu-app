import { Module } from '@nestjs/common';
import { CaptchaController } from './captcha.controller';
import { CaptchaService } from './captcha.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Captcha } from 'src/entitys/Captcha';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
    imports:[TypeOrmModule.forFeature([Captcha]),
    ScheduleModule.forRoot()
  ],
  controllers: [CaptchaController],
  providers: [CaptchaService]
})
export class CaptchaModule {}
