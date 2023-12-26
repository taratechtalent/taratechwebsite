import { Injectable } from '@nestjs/common';
import { CreateContactusDto } from './dto/create-contactus.dto';
import { UpdateContactusDto } from './dto/update-contactus.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ContactusEntity } from './entities/contactus.entity';
import { Repository } from 'typeorm';

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

  findAll() {
    return this.contactUsRepository.find();
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
