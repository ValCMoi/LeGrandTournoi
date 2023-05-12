import { Injectable } from '@nestjs/common';
import { CreateElementDto } from './dto/create-element.dto';
import { UpdateElementDto } from './dto/update-element.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { from } from 'rxjs';
import { Element } from './entities/element.entity';

@Injectable()
export class ElementService {
  constructor(
    @InjectRepository(Element)
    private readonly repoElement : Repository<Element>){}

  create(createElementDto: CreateElementDto) {
    return from(this.repoElement.save(createElementDto));
  }

  findAll() {
    return from(this.repoElement.find());
  }

  findOne(id: number) {
    return `This action returns a #${id} element`;
  }

  update(id: number, updateElementDto: UpdateElementDto) {
    return `This action updates a #${id} element`;
  }

  remove(id: number) {
    return `This action removes a #${id} element`;
  }
}
