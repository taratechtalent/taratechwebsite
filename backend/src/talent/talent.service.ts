import { Injectable } from '@nestjs/common';
import { ILike, Repository } from 'typeorm';
import { TalentEntity } from './entity/talent.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTalentDTO } from './dto/create-talent.dto';
import { UpdateTalentDTO } from './dto/update-talent.dto';
import { FilterTalentDTO } from './dto/filter-talent.dto';
import * as moment from 'moment';

@Injectable()
export class TalentService {
  constructor(
    @InjectRepository(TalentEntity)
    private readonly talenReposity: Repository<TalentEntity>,
  ) {}
  find(body: FilterTalentDTO) {
    const filter: any = {};
    if (body.name) filter.name = ILike('%' + body.name + '%');
    if (body.linkedIn) filter.linkedIn = ILike('%' + body.linkedIn + '%');
    if (body.phone) filter.phone = ILike('%' + body.phone + '%');
    if (body.email) filter.email = ILike('%' + body.email + '%');
    if (body.status) filter.status = body.status;
    return this.talenReposity.find({
      where: filter,
      take: 10,
      skip: (body.page - 1) * 10,
    });
  }

  create(talent: CreateTalentDTO) {
    return this.talenReposity.insert({ ...talent, status: 'new' });
  }

  update(talentId: string, updateTalentObject: UpdateTalentDTO) {
    if (
      !moment(
        updateTalentObject.english_video_request_date,
        'MM/DD/YYYY',
        true,
      ).isValid()
    )
      delete updateTalentObject.english_video_request_date;

    if (
      !moment(
        updateTalentObject.english_video_request_deadline,
        'MM/DD/YYYY',
        true,
      ).isValid()
    )
      delete updateTalentObject.english_video_request_deadline;
    if (
      !moment(
        updateTalentObject.english_video_email,
        'MM/DD/YYYY',
        true,
      ).isValid()
    )
      delete updateTalentObject.english_video_email;

    return this.talenReposity.update(talentId, updateTalentObject);
  }
}
