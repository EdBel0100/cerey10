import { IsString, IsNotEmpty } from "class-validator"; 

export class PostOpenAiDto {

    @IsNotEmpty()
    @IsString()
    description:string
}
