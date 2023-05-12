import { Injectable } from '@nestjs/common';
import { CreateCapaciteDto } from './dto/create-capacite.dto';
import { UpdateCapaciteDto } from './dto/update-capacite.dto';
import { Repository } from 'typeorm';
import { Capacite } from './entities/capacite.entity';
import { from } from 'rxjs';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CapacitesService {

  constructor(
    @InjectRepository(Capacite)
    private readonly repoCapacite:Repository<Capacite> ){}

  create(createCapaciteDto: CreateCapaciteDto) {
    return from(this.repoCapacite.save(createCapaciteDto));
  }

  findAll() {
    return from(this.repoCapacite.find());
  }

  findOne(id: number) {
    return `This action returns a #${id} capacite`;
  }

  update(id: number, updateCapaciteDto: UpdateCapaciteDto) {
    return `This action updates a #${id} capacite`;
  }

  remove(id: number) {
    return `This action removes a #${id} capacite`;
  }
}
