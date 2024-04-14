import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';
import { ClientRequestStatus } from '../enum/client.enum';

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

export class UpdateClientRequestDTO {
  @ApiProperty({
    type: 'string',
  })
  @IsString()
  @IsOptional()
  talents: string;

  @ApiProperty({
    type: 'string',
  })
  @IsOptional()
  @IsString()
  meeting_description_second: string;

  @ApiProperty({
    type: 'string',
  })
  @IsOptional()
  @IsString()
  meeting_date_second: string;

  @ApiProperty({
    type: 'string',
  })
  @IsOptional()
  @IsString()
  meeting_description: string;

  @ApiProperty({
    type: 'string',
  })
  @IsOptional()
  @IsString()
  meeting_date: string;

  @ApiProperty({
    type: 'string',
  })
  @IsString()
  @IsOptional()
  finish_date: string;

  @ApiProperty({
    type: 'string',
  })
  @IsString()
  @IsOptional()
  result: string;

  @ApiProperty({
    type: 'string',
  })
  @IsString()
  @IsOptional()
  status: ClientRequestStatus;

  @ApiProperty({
    type: 'string',
  })
  @IsString()
  @IsOptional()
  request: string;
}
