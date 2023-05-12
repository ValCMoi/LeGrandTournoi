import { Module } from '@nestjs/common';
import { DonService } from './don.service';
import { DonController } from './don.controller';
import { Don } from './entities/don.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[
    TypeOrmModule.forFeature([Don])
  ],
  controllers: [DonController],
  providers: [DonService]
})
export class DonModule {}
