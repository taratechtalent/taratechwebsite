import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { TalentService } from './talent.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateTalentDTO } from './dto/create-talent.dto';
import { UpdateTalentDTO } from './dto/update-talent.dto';
import { TalentStatusEnum } from 'src/util/enum/enum';

@ApiTags('Talent')
@Controller('v1/talent')
export class TalentController {
  constructor(private readonly talentService: TalentService) {}

  @ApiOperation({ summary: 'List of talent' })
  @ApiResponse({
    status: 200,
    description: 'Returns list of talents',
  })
  @Get('')
  find(
    @Query('name') name: string,
    @Query('email') email: string,
    @Query('phone') phone: string,
    @Query('linkedIn') linkedIn: string,
    @Query('status') status: TalentStatusEnum,
  ) {
    return this.talentService.find({ name, email, phone, linkedIn, status });
  }

  @ApiOperation({ summary: 'Create new talent' })
  @ApiResponse({
    status: 200,
    description: '',
  })
  @Post()
  create(@Body() createTalentDTO: CreateTalentDTO) {
    return this.talentService.create(createTalentDTO);
  }

  @ApiOperation({ summary: 'Update  talent' })
  @ApiResponse({
    status: 200,
    description: '',
  })
  @Patch(':talentId')
  update(
    @Param('talentId') talentId: string,
    @Body() updateTalentDTO: UpdateTalentDTO,
  ) {
    return this.talentService.update(talentId, updateTalentDTO);
  }
}
