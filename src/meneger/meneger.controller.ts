import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MenegerService } from './meneger.service';
import { CreateMenegerDto } from './dto/create-meneger.dto';
import { UpdateMenegerDto } from './dto/update-meneger.dto';

@Controller('meneger')
export class MenegerController {
  constructor(private readonly menegerService: MenegerService) {}

  @Post()
  create(@Body() createMenegerDto: CreateMenegerDto) {
    return this.menegerService.create(createMenegerDto);
  }

  @Get('all')
  findAll() {
    return this.menegerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.menegerService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMenegerDto: UpdateMenegerDto) {
    return this.menegerService.update(id, updateMenegerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.menegerService.remove(id);
  }
}
