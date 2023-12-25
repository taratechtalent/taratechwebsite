import { Module } from '@nestjs/common';
import { TalentService } from './talent.service';
import { TalentController } from './talent.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TalentEntity } from './entity/talent.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TalentEntity])],
  controllers: [TalentController],
  providers: [TalentService],
})
export class TalentModule {}
