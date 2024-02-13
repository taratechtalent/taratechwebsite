import { Injectable } from '@nestjs/common';
import { ILike, Repository } from 'typeorm';
import { TalentEntity } from './entity/talent.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTalentDTO } from './dto/create-talent.dto';
import { UpdateTalentDTO } from './dto/update-talent.dto';

@Injectable()
export class TalentService {
  constructor(
    @InjectRepository(TalentEntity)
    private readonly talenReposity: Repository<TalentEntity>,
  ) {}
  find(body: any) {
    const filter: any = {};
    if (body.name) filter.name = ILike('%' + body.name + '%');
    if (body.linkedIn) filter.linkedIn = ILike('%' + body.linkedIn + '%');
    if (body.phone) filter.phone = ILike('%' + body.phone + '%');
    if (body.email) filter.email = ILike('%' + body.email + '%');
    if (body.status) filter.status = body.status;
    return this.talenReposity.find({ where: filter });
  }

  create(talent: CreateTalentDTO) {
    return this.talenReposity.insert({ ...talent, status: 'new' });
  }

  update(talentId: string, talent: UpdateTalentDTO) {
    return this.talenReposity.update(talentId, talent);
  }
}
