import { HttpException, Injectable } from '@nestjs/common';
import { ClientEntity } from './entity/client.entity';
import {
  ClientRequestDTO,
  UpdateClientRequestDTO,
} from './dto/client.request.dto';
import { ClientNewDTO } from './dto/client.dto';
import { ClientRequestEntity } from './entity/client.request.entity';
import { ILike } from 'typeorm';

@Injectable()
export class ClientService {
  async getAll(filter: any) {
    const where: any = {};
    if (filter?.name) where.name = filter.name;
    if (filter?.email) where.email = filter.email;
    if (filter?.company) where.company = filter.company;
    return ClientEntity.find({ where });
  }

  async newClient(clientNewDTO: ClientNewDTO) {
    const clientInfo = await ClientEntity.findOne({
      where: {
        email: clientNewDTO.email,
      },
    });
    if (clientInfo) {
      throw new HttpException('Email is used, please choose new one', 400);
    }
    if (!clientInfo) {
      await ClientEntity.save(clientNewDTO);
    }
    return {
      message: 'Client information saved successfully',
    };
  }

  async newClientRequest(clientRequest: ClientRequestDTO) {
    let clientInfo = await ClientEntity.findOne({
      where: {
        email: clientRequest.email,
      },
    });
    if (!clientInfo) {
      clientInfo = await ClientEntity.save({
        email: clientRequest.email,
        name: clientRequest.name,
        company: clientRequest.company,
        position: clientRequest.position,
      });
    }

    await ClientRequestEntity.save({
      client: clientInfo,
      request: clientRequest.request,
    });

    return {
      message: 'Client request saved successfully',
    };
  }
  async updateClientRequest(
    uuid: string,
    clientRequest: UpdateClientRequestDTO,
  ) {
    await ClientRequestEntity.update(uuid, clientRequest);

    return {
      message: 'Client request saved successfully',
    };
  }

  async getAllClientRequest(filter: any) {
    let where: any = {};
    if (filter.status) where.status = filter.statuus;
    if (filter.request) where.request = ILike(filter.statuus);
    if (filter.talents) where.request = ILike(filter.talents);
    if (filter.email) {
      where = {
        ...where,
        client: {
          email: filter.email,
        },
      };
    }
    return ClientRequestEntity.find(where);
  }
}
