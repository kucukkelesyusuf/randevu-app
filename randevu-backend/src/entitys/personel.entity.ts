import { Entity, OneToOne } from 'typeorm';
import { BaseUser } from './BaseUser.entity';
import { Department } from './department.entity';

@Entity()
export class Personel extends BaseUser {

  @OneToOne(()=>Department)
  department:Department

}
