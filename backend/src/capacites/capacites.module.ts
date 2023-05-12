import { Module } from '@nestjs/common';
import { CapacitesService } from './capacites.service';
import { CapacitesController } from './capacites.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Capacite } from './entities/capacite.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([Capacite])
  ],
  controllers: [CapacitesController],
  providers: [CapacitesService],
  exports:[CapacitesService]
})
export class CapacitesModule {}
