import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { TalentEntity } from './entity/talent.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TalentService {
  constructor(
    @InjectRepository(TalentEntity)
    private readonly talenReposity: Repository<TalentEntity>,
  ) {}
  find() {
    return this.talenReposity.find();
  }
}
