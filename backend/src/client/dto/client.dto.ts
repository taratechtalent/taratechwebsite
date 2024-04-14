import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class ClientNewDTO {
  @ApiProperty({
    type: 'string',
  })
  @IsString()
  name: string;

  @ApiProperty({
    type: 'string',
  })
  @IsString()
  position: string;

  @ApiProperty({
    type: 'string',
  })
  @IsString()
  company: string;

  @ApiProperty({
    type: 'string',
  })
  @IsString()
  email: string;
}
