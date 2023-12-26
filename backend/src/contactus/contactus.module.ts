import { Module } from '@nestjs/common';
import { ContactusService } from './contactus.service';
import { ContactusController } from './contactus.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactusEntity } from './entities/contactus.entity';
import { ContactusAdminController } from './contactus.admin.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ContactusEntity])],
  controllers: [ContactusController, ContactusAdminController],
  providers: [ContactusService],
})
export class ContactusModule {}
