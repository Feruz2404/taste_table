import { PartialType } from '@nestjs/swagger';
import { CreateMenyuDto } from './create-menyu.dto';

export class UpdateMenyuDto extends PartialType(CreateMenyuDto) {}
