import { IsEmail, IsNotEmpty, IsNumber, IsNumberString } from "class-validator";

export class InputLoginDto {

    @IsEmail()
    email:string;

    @IsNotEmpty()
    password:string;

    @IsNotEmpty()
    captcha:string;

    @IsNotEmpty()
    sessionId:string;

}