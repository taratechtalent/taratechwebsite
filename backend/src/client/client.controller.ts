import { Body, Controller, Get, Post } from '@nestjs/common';
import { ClientService } from './client.service';
import { ClientRequestDTO } from './dto/client.request.dto';

@Controller('client')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}
  //ddd
  @Get()
  async getAll() {
    return this.clientService.getAll();
  }

  @Post('request')
  async newRequest(@Body() clientRequest: ClientRequestDTO) {
    return this.clientService.newClientRequest(clientRequest);
  }
}
