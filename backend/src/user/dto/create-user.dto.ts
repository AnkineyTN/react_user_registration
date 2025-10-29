/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'user@example.com', description: 'User email' })
  @IsEmail({}, { message: 'Email not valid' })
  @IsNotEmpty({ message: 'Email must not be empty' })
  email: string;

  @ApiProperty({ example: 'strongPassword123', description: 'User password', minLength: 8 })
  @IsNotEmpty({ message: 'Password must not be empty' })
  @MinLength(8, { message: 'Password must be at least 8 characters long' })
  password: string;
}