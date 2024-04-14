import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ClientService } from './client.service';
import {
  ClientRequestDTO,
  UpdateClientRequestDTO,
} from './dto/client.request.dto';
import { ClientNewDTO } from './dto/client.dto';
import { ClientRequestStatus } from './enum/client.enum';

@Controller('client')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}
  //ddd123132
  @Get()
  async getAll(
    @Query('name') name: string,
    @Query('email') email: string,
    @Query('company') company: string,
  ) {
    return this.clientService.getAll({ name, email, company });
  }

  @Post('request')
  async newRequest(@Body() clientRequest: ClientRequestDTO) {
    return this.clientService.newClientRequest(clientRequest);
  }

  @Patch('request/:requestId')
  async updateRequest(
    @Body() clientRequest: UpdateClientRequestDTO,
    @Param('requestId') requestId: string,
  ) {
    return this.clientService.updateClientRequest(requestId, clientRequest);
  }

  @Get('request')
  async getAllClientRequest(
    @Query('email') email: string,
    @Query('status') status: ClientRequestStatus,
    @Query('talents') talents: string,
    @Query('request') request: string,
  ) {
    return this.clientService.getAllClientRequest({
      email,
      status,
      talents,
      request,
    });
  }

  @Post('')
  async newCient(@Body() clientNewDTO: ClientNewDTO) {
    return this.clientService.newClient(clientNewDTO);
  }
}
