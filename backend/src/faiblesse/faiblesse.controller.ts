import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FaiblesseService } from './faiblesse.service';
import { CreateFaiblesseDto } from './dto/create-faiblesse.dto';
import { UpdateFaiblesseDto } from './dto/update-faiblesse.dto';

@Controller('faiblesse')
export class FaiblesseController {
  constructor(private readonly faiblesseService: FaiblesseService) {}

  @Post()
  create(@Body() createFaiblesseDto: CreateFaiblesseDto) {
    return this.faiblesseService.create(createFaiblesseDto);
  }

  @Get()
  findAll() {
    return this.faiblesseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.faiblesseService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFaiblesseDto: UpdateFaiblesseDto) {
    return this.faiblesseService.update(+id, updateFaiblesseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.faiblesseService.remove(+id);
  }
}
