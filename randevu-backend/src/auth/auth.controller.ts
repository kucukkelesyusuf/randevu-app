import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { InputLoginDto } from 'src/dto/InputLogin.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

    constructor(
        private authService : AuthService
    ){}

    @Post('personel/login')
    @UsePipes(new ValidationPipe({transform:true}))
    async PersonelLogin( @Body()loginDto:InputLoginDto ){

      return  await this.authService.PersonelLogin(loginDto);

    }

}
