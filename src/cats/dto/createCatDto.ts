// import { ApiProperty } from '@nestjs/swagger'
import { IsString, IsNumber } from 'class-validator';

export class CreateCatDto {
  @IsString()
  name: string;

  @IsString()
  age: number;

  @IsString()
  breed: string;
}
