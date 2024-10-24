import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MenyuService } from './menyu.service';
import { CreateMenyuDto } from './dto/create-menyu.dto';
import { UpdateMenyuDto } from './dto/update-menyu.dto';

@Controller('menyu')
export class MenyuController {
  constructor(private readonly menyuService: MenyuService) {}

  @Post()
  create(@Body() createMenyuDto: CreateMenyuDto) {
    return this.menyuService.create(createMenyuDto);
  }

  @Get('all')
  findAll() {
    return this.menyuService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.menyuService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMenyuDto: UpdateMenyuDto) {
    return this.menyuService.update(id, updateMenyuDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.menyuService.remove(id);
  }
}
