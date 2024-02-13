import { ApiProperty } from '@nestjs/swagger';
import {
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
    type: 'integer',
  })
  @IsOptional()
  @IsNumber()
  yearsOfExperience: number;

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
  englishSkillResult: string;

  @ApiProperty({
    type: 'integer',
  })
  @IsOptional()
  @IsNumber()
  englishSkillGrade: number;

  @ApiProperty({
    type: 'string',
  })
  @IsOptional()
  @IsString()
  englishSkillDate: Date;

  @ApiProperty({
    type: 'string',
  })
  @IsOptional()
  @IsString()
  englishSkillBy: string;

  @ApiProperty({
    type: 'string',
  })
  @IsOptional()
  @IsString()
  technicalTheoricalSkillResult: string;

  @ApiProperty({
    type: 'integer',
  })
  @IsOptional()
  @IsNumber()
  technicalTheoricalSkillGrade: number;

  @ApiProperty({
    type: 'string',
  })
  @IsOptional()
  @IsString()
  technicalTheoricalSkillDate: Date;

  @ApiProperty({
    type: 'string',
  })
  @IsOptional()
  @IsString()
  technicalTheoricalSkillBy: string;

  @ApiProperty({
    type: 'string',
  })
  @IsOptional()
  @IsString()
  technicalPracticalSkillResult: string;

  @ApiProperty({
    type: 'integer',
  })
  @IsOptional()
  @IsNumber()
  technicalPracticalSkillGrade: number;

  @ApiProperty({
    type: 'string',
  })
  @IsOptional()
  @IsString()
  technicalPracticalSkillDate: Date;

  @ApiProperty({
    type: 'string',
  })
  @IsOptional()
  @IsString()
  technicalPracticalSkillBy: string;
}
