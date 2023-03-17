import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateWaitlistDto {
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;
}
