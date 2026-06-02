import { IsEmail, IsNotEmpty, IsString, IsUUID } from "class-validator";

export class CreateUserDto {

    @IsNotEmpty()
    @IsUUID()
    @IsString()
    cognitoId:string

    @IsNotEmpty()
    @IsEmail()
    @IsString()
    email:string

    

}