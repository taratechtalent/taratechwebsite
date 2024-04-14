import { Injectable } from '@nestjs/common';
import { ClientEntity } from './entity/client.entity';
import { ClientRequestDTO } from './dto/client.request.dto';

@Injectable()
export class ClientService {
  async getAll() {
    return ClientEntity.find();
  }

  async newClientRequest(clientRequest: ClientRequestDTO) {
    const clientInfo = await ClientEntity.findOne({
      where: {
        email: clientRequest.email,
      },
    });
    if (!clientInfo) {
      await ClientEntity.save({
        email: clientRequest.email,
        name: clientRequest.name,
        company: clientRequest.company,
        position: clientRequest.position,
      });
    }
    return {
      message: 'Client request saved successfully',
    };
  }
}
