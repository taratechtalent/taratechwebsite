import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsDate,
  IsEmail,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { TalentStatusEnum } from 'src/util/enum/enum';

export class UpdateTalentDTO {
  @ApiProperty({
    type: 'string',
  })
  @IsString()
  @IsOptional()
  name: string;

  @ApiProperty({
    type: 'string',
  })
  @IsEmail()
  @IsOptional()
  email: string;

  @ApiProperty({
    type: 'string',
  })
  @IsString()
  @IsOptional()
  service: string;

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
  linked_in: string;

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
  primary_job_interest: string;

  @ApiProperty({
    type: 'string',
  })
  @IsOptional()
  @IsString()
  level: string;

  @ApiProperty({
    type: 'integer',
  })
  @IsOptional()
  @IsNumber()
  years_of_experience: number;

  @ApiProperty({
    type: 'bool',
  })
  @IsOptional()
  @IsBoolean()
  remote_experience: boolean;

  @ApiProperty({
    type: 'string',
  })
  @IsOptional()
  @IsEnum(TalentStatusEnum)
  status: TalentStatusEnum;

  @ApiProperty({
    type: 'string',
  })
  @IsOptional()
  @IsString()
  english_video_request_date: string;

  @ApiProperty({
    type: 'string',
  })
  @IsOptional()
  @IsString()
  english_video_request_deadline: string;

  @ApiProperty({
    type: 'string',
  })
  @IsOptional()
  @IsString()
  english_video_email: string;

  @ApiProperty({
    type: 'string',
  })
  @IsOptional()
  @IsString()
  english_video_by: string;

  @ApiProperty({
    type: 'string',
  })
  @IsOptional()
  @IsString()
  english_video_link: string;

  @ApiProperty({
    type: 'string',
  })
  @IsOptional()
  @IsString()
  english_video_result: string;
}
