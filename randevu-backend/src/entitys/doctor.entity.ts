
import { Entity, Column, OneToMany, ManyToOne, ManyToMany } from 'typeorm';
import { BaseUser } from './BaseUser.entity';
import { Branch } from './branch.entity';
import { SubBranch } from './SubBranch.entity';
import { Patient } from './patients.entity';

@Entity()
export class Doctor extends BaseUser {
 
    @Column()
    title:string;

    @ManyToOne(()=>Branch)
    branch:Branch;

    @ManyToOne(()=>SubBranch)
    subbranch:SubBranch;

    @ManyToMany(()=>Patient)
    patients:Patient[]

}
