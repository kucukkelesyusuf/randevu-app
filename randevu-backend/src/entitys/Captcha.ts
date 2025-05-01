import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Captcha {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  imageBinary:string

  @Column()
  answer:string

  @Column()
  session:string;

  @Column({default:new Date(Date.now())})
  time: Date

}
