import { Controller, Get } from '@nestjs/common';
import { ContactusService } from './contactus.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Contact US')
@Controller('contactus')
export class ContactusController {
  constructor(private readonly contactusService: ContactusService) {}

  @Get()
  findAll() {
    return this.contactusService.findAll();
  }
}
