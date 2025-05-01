import { Column, Entity} from "typeorm";
import { BaseUser } from "./BaseUser.entity";

@Entity()
export class Nurse extends BaseUser {

}
