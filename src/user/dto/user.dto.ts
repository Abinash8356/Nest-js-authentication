import { IsNotEmpty, IsEmail, MinLength, IsEnum } from 'class-validator';
import { Role } from 'src/utills/constant';

export class CreateUserDto {
  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  lastName: string;

  @IsEmail()
  email: string;

  @MinLength(8)
  password: string;
}