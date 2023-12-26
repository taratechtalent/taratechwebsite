import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

export class CreateContactusDto {
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
  description: string;
}
