import { PartialType } from '@nestjs/swagger';
import { CreateFaiblesseDto } from './create-faiblesse.dto';

export class UpdateFaiblesseDto extends PartialType(CreateFaiblesseDto) {}
