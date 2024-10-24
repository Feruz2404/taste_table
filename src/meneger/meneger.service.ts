import { Injectable } from '@nestjs/common';
import { CreateMenegerDto } from './dto/create-meneger.dto';
import { UpdateMenegerDto } from './dto/update-meneger.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Meneger, MenegerDocument } from './Schemas/meneger.schema';

@Injectable()
export class MenegerService {
  constructor(
    @InjectModel(Meneger.name) private menegerModel: Model<MenegerDocument>,
  ){}
  create(createMenegerDto: CreateMenegerDto) {
    return this.menegerModel.create(createMenegerDto)
  }

  findAll() {
    return this.menegerModel.find()
  }

  findOne(id: string) {
    return this.menegerModel.findById(id)
  }

  update(id: string, updateMenegerDto: UpdateMenegerDto) {
    return this.menegerModel.findByIdAndUpdate(id,updateMenegerDto)
  }

  remove(id: string) {
    return this.menegerModel.findByIdAndDelete(id)
  }
}
