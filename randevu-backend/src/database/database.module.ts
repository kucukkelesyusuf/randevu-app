import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BaseUser } from 'src/entitys/BaseUser.entity';
import { Branch } from 'src/entitys/branch.entity';
import { Captcha } from 'src/entitys/Captcha';
import { Department } from 'src/entitys/department.entity';
import { Doctor } from 'src/entitys/doctor.entity';
import { LabTest } from 'src/entitys/LabTest.entity';
import { Nurse } from 'src/entitys/nurse.entity';
import { Patient } from 'src/entitys/patients.entity';
import { Personel } from 'src/entitys/personel.entity';
import { SubBranch } from 'src/entitys/SubBranch.entity';

@Module({
    imports: [
        TypeOrmModule.forRoot({
          type: 'postgres',
          host: 'localhost',
          port: 5432,
          username: 'postgres',
          password: '1',
          database: 'postgres',
          entities: [Branch,Department,Doctor,LabTest,Nurse,Patient,Personel,SubBranch,Captcha],
          synchronize: true,
        }),
      ],
    providers:[],
    exports:[]
})
export class DatabaseModule {}
