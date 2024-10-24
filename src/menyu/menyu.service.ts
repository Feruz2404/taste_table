import { Injectable } from '@nestjs/common';
import { CreateMenyuDto } from './dto/create-menyu.dto';
import { UpdateMenyuDto } from './dto/update-menyu.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Menyu, MenyuDocument } from './Schemas/menyu.schema';
import { Model } from 'mongoose';

@Injectable()
export class MenyuService {
  constructor(
    @InjectModel(Menyu.name) private menyuModel: Model<MenyuDocument>,
  ){}
  create(createMenyuDto: CreateMenyuDto) {
    return this.menyuModel.create(createMenyuDto)
  }

  findAll() {
    return this.menyuModel.find()
  }

  findOne(id:string) {
    return this.menyuModel.findById(id)
  }

  update(id: string, updateMenyuDto: UpdateMenyuDto) {
    return this.menyuModel.findByIdAndUpdate(id)
  }

  remove(id: string) {
    return this.menyuModel.findByIdAndDelete(id)
  }
}
