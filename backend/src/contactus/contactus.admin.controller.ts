import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ContactusService } from './contactus.service';
import { CreateContactusDto } from './dto/create-contactus.dto';
import { UpdateContactusDto } from './dto/update-contactus.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Admin - Contact US')
@Controller('admin/contactus')
export class ContactusAdminController {
  constructor(private readonly contactusService: ContactusService) {}

  @ApiOperation({ summary: 'Create new contact' })
  @ApiResponse({
    status: 200,
    description: '',
  })
  @Post()
  create(@Body() createContactusDto: CreateContactusDto) {
    return this.contactusService.create(createContactusDto);
  }

  @Get()
  findAll() {
    return this.contactusService.findAll();
  }

  @Patch(':uuid')
  update(
    @Param('uuid') uuid: string,
    @Body() updateContactusDto: UpdateContactusDto,
  ) {
    return this.contactusService.update(uuid, updateContactusDto);
  }

  @Delete(':uuid')
  remove(@Param('uuid') uuid: string) {
    return this.contactusService.remove(uuid);
  }
}
