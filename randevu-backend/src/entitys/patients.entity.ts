import { Column, Entity, OneToOne } from "typeorm";
import { BaseUser } from "./BaseUser.entity";
import { LabTest } from "./LabTest.entity";

@Entity()
export class Patient extends BaseUser {

    @OneToOne(()=>LabTest)
    analysis:LabTest

}
