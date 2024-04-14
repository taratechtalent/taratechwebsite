import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class ClientRequestDTO {
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

  @ApiProperty({
    type: 'string',
  })
  @IsString()
  request: string;
}
