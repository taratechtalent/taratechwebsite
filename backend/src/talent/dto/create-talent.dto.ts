import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateTalentDTO {
  @ApiProperty({
    type: 'string',
  })
  @IsString()
  name: string;

  @ApiProperty({
    type: 'string',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    type: 'string',
  })
  @IsString()
  @IsOptional()
  description: string;

  @ApiProperty({
    type: 'string',
  })
  @IsOptional()
  @IsString()
  linkedIn: string;

  @ApiProperty({
    type: 'string',
  })
  @IsOptional()
  @IsString()
  title: string;

  @ApiProperty({
    type: 'string',
  })
  @IsOptional()
  @IsString()
  skills: string;

  @ApiProperty({
    type: 'string',
  })
  @IsOptional()
  @IsString()
  phone: string;

  @ApiProperty({
    type: 'string',
  })
  @IsOptional()
  @IsString()
  jobInterest: string;

  @ApiProperty({
    type: 'string',
  })
  @IsOptional()
  @IsNumber()
  yearsOfExperience: number;
}
