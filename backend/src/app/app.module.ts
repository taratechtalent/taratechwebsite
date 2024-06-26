import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TalentModule } from '../talent/talent.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { datasourceConfig } from '../typeorm.config';
import { ContactusModule } from 'src/contactus/contactus.module';
import { ClientModule } from 'src/client/client.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        ...datasourceConfig,
        autoLoadEntities: true,
      }),
    }),
    TalentModule,
    ContactusModule,
    ClientModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
