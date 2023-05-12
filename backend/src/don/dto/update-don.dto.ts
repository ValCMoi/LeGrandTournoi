import { PartialType } from '@nestjs/swagger';
import { CreateDonDto } from './create-don.dto';

export class UpdateDonDto extends PartialType(CreateDonDto) {}
