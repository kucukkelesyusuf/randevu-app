import { Column, Entity, PrimaryColumn } from "typeorm";


@Entity()
export class LabTest {

    @PrimaryColumn("uuid")
    id:string;

    @Column()
    name : string;

    @Column({default:new Date(Date.now())})
    createdDate:Date

}
