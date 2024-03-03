import { Injectable } from '@nestjs/common';
import { CreateContactusDto } from './dto/create-contactus.dto';
import { UpdateContactusDto } from './dto/update-contactus.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ContactusEntity } from './entities/contactus.entity';
import { ILike, Repository } from 'typeorm';
import { FindallDTO } from './dto/findAll.dto';

@Injectable()
export class ContactusService {
  constructor(
    @InjectRepository(ContactusEntity)
    private readonly contactUsRepository: Repository<ContactusEntity>,
  ) {}
  async create(createContactusDto: CreateContactusDto) {
    const result = await this.contactUsRepository.insert({
      ...createContactusDto,
      status: 'new',
    });
    return result;
  }

  findAll(params: FindallDTO) {
    const where: any = {};
    if (params.name) where.name = ILike(`%${params.name}%`);
    if (params.email) where.email = ILike(`%${params.email}%`);
    if (params.description)
      where.description = ILike(`%${params.description}%`);
    if (params.status && params.status != 'all')
      where.status = ILike(`%${params.status}%`);

    return this.contactUsRepository.find({
      where,
      order: {
        created_at: 'desc',
      },
      skip: (params.page - 1) * 10,
      take: 10,
    });
  }

  async update(uuid: string, updateContactusDto: UpdateContactusDto) {
    const result = await this.contactUsRepository.update(
      uuid,
      updateContactusDto,
    );
    return result;
  }

  async remove(uuid: string) {
    const result = await this.contactUsRepository.delete(uuid);
    return result;
  }
}
