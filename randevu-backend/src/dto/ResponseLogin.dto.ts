import { Doctor } from "src/entitys/doctor.entity";
import { Personel } from "src/entitys/personel.entity";

export class ResponseLoginDto {
    access_token:string;
    personel?:Personel
    doctor?:Doctor
}