import { HttpException } from "@nestjs/common";

export class BaseResponse<T> {

    constructor(data:T,path:string){

        this.data = data;
        this.path = path;
        this.timestap = new Date(Date.now());

    }

    data : T;
    path:string;
    timestap:Date;
}