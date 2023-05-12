import { Injectable } from '@nestjs/common';
import { CreateFaiblesseDto } from './dto/create-faiblesse.dto';
import { UpdateFaiblesseDto } from './dto/update-faiblesse.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Faiblesse } from './entities/faiblesse.entity';
import { Repository } from 'typeorm';
import { from } from 'rxjs';

@Injectable()
export class FaiblesseService {
  constructor(
    @InjectRepository(Faiblesse)
    private readonly repoFaiblesse : Repository<Faiblesse>
  ){}
  create(createFaiblesseDto: CreateFaiblesseDto) {
    return from(this.repoFaiblesse.save(createFaiblesseDto));
  }

  findAll() {
    return this.repoFaiblesse.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} faiblesse`;
  }

  update(id: number, updateFaiblesseDto: UpdateFaiblesseDto) {
    return `This action updates a #${id} faiblesse`;
  }

  remove(id: number) {
    return `This action removes a #${id} faiblesse`;
  }
}
