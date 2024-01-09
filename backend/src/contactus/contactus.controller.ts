import { Body, Controller, Get, Post } from '@nestjs/common';
import { ContactusService } from './contactus.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateContactusDto } from './dto/create-contactus.dto';

@ApiTags('Contact US')
@Controller('contactus')
export class ContactusController {
  constructor(private readonly contactusService: ContactusService) {}

  @Get()
  findAll() {
    return this.contactusService.findAll();
  }

  @ApiOperation({ summary: 'Create new contact' })
  @ApiResponse({
    status: 200,
    description: '',
  })
  @Post()
  create(@Body() createContactusDto: CreateContactusDto) {
    return this.contactusService.create(createContactusDto);
  }
}
