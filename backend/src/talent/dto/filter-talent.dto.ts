import { TalentStatusEnum } from 'src/util/enum/enum';

export class FilterTalentDTO {
  name: string;
  email: string;
  phone: string;
  linkedIn: string;
  status: TalentStatusEnum;
  page: number;
}
