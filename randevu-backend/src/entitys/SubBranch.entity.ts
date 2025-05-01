import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class SubBranch {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({ length: 500 })
  name: string;

}
