import { IsString, IsOptional, IsEmail } from "class-validator";



export class UserGetRequest{
    @IsString()
    name: string;

    @IsEmail()
    email: string;

    @IsString()
    password: string;

    @IsString()
    @IsOptional()
    avatar: string;
}