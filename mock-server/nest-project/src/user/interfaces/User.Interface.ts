import { Document } from 'mongoose';

export interface User extends Document {
    // readonly _id:string;
    // readonly name:string;
    // readonly fullName:string;
    // readonly password:string;
    // readonly role:number;

    readonly _id:string;
    readonly username:string;
    readonly fullname:string;
    readonly pwd:string;
    readonly role:number;
}


