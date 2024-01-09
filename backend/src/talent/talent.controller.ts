import { Body, Controller, Get, Post } from '@nestjs/common';
import { TalentService } from './talent.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateTalentDTO } from './dto/create-talent.dto';

@ApiTags('Talent')
@Controller('talent')
export class TalentController {
  constructor(private readonly talentService: TalentService) {}

  @ApiOperation({ summary: 'Say hello to world' })
  @ApiResponse({
    status: 200,
    description: 'Returns list of IDS ',
  })
  @Get('')
  find() {
    return this.talentService.find();
  }

  @ApiOperation({ summary: 'Create new contact' })
  @ApiResponse({
    status: 200,
    description: '',
  })
  @Post()
  create(@Body() createTalentDTO: CreateTalentDTO) {
    return this.talentService.create(createTalentDTO);
  }
}
