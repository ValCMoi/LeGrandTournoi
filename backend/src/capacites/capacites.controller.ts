import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CapacitesService } from './capacites.service';
import { CreateCapaciteDto } from './dto/create-capacite.dto';
import { UpdateCapaciteDto } from './dto/update-capacite.dto';

@Controller('capacites')
export class CapacitesController {
  constructor(private readonly capacitesService: CapacitesService) {}

  @Post()
  create(@Body() createCapaciteDto: CreateCapaciteDto) {
    return this.capacitesService.create(createCapaciteDto);
  }

  @Get()
  findAll() {
    return this.capacitesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.capacitesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCapaciteDto: UpdateCapaciteDto) {
    return this.capacitesService.update(+id, updateCapaciteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.capacitesService.remove(+id);
  }
}
