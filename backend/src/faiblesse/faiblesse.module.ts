import { Module } from '@nestjs/common';
import { FaiblesseService } from './faiblesse.service';
import { FaiblesseController } from './faiblesse.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Faiblesse } from './entities/faiblesse.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([Faiblesse])
  ],
  controllers: [FaiblesseController],
  providers: [FaiblesseService]
})
export class FaiblesseModule {}
