import { PartialType } from '@nestjs/swagger';
import { CreateCapaciteDto } from './create-capacite.dto';

export class UpdateCapaciteDto extends PartialType(CreateCapaciteDto) {}
