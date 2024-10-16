import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateMenuDto {
    @IsNotEmpty()
    @IsNumber()
    id:number;
    @IsNotEmpty()
    @IsString()
    name:string;

    @IsNotEmpty()
    @IsString()
    cuisine:string;

    @IsNotEmpty()
    @IsNumber()
    price:number;

    @IsNotEmpty()
    @IsString()
    desc:string;
}
