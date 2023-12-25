import { Controller, Get } from '@nestjs/common';
import { TalentService } from './talent.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

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
}
