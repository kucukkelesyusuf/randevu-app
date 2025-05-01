
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class BaseUser {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({ length: 500 })
  name: string;

  @Column({})
  email:string;

  @Column()
  phone:string;

  @Column()
  password:string;

  @Column()
  profile:string;

}
