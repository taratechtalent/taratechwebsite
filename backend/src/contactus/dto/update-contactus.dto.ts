import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class UpdateContactusDto {
  @ApiProperty({
    type: 'string',
  })
  @IsString()
  status: string;
}
