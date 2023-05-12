import { Injectable } from '@nestjs/common';
import { CreateDonDto } from './dto/create-don.dto';
import { UpdateDonDto } from './dto/update-don.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Don } from './entities/don.entity';
import { Repository } from 'typeorm';
import { from } from 'rxjs';

@Injectable()
export class DonService {
  constructor(
    @InjectRepository(Don)
    private readonly repoDon : Repository<Don>
  ){}
  create(createDonDto: CreateDonDto) {
    return from(this.repoDon.save(createDonDto));
  }

  findAll() {
    return this.repoDon.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} don`;
  }

  update(id: number, updateDonDto: UpdateDonDto) {
    return `This action updates a #${id} don`;
  }

  remove(id: number) {
    return `This action removes a #${id} don`;
  }
}
