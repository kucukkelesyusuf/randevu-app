import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Branch {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({ length: 500 })
  name: string;

}
