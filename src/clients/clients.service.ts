import { Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Client, ClientDocument } from './Schemas/client.schema';
import { Model } from 'mongoose';

@Injectable()
export class ClientsService {
  constructor(
    @InjectModel(Client.name) private clientModel: Model<ClientDocument>,
  ){}
  create(createClientDto: CreateClientDto) {
    return this.clientModel.create(createClientDto)
  }

  findAll() {
    return this.clientModel.find()
  }

  findUserByEmail(email:string){
    return this.clientModel.findById({where:{email}, include:{all:true,attributes:["value"],through:{attributes:[]}}})
  }

  findOne(id: string) {
    return this.clientModel.findById(id)
  }

  update(id: string, updateClientDto: UpdateClientDto) {
    return this.clientModel.findByIdAndUpdate(id)
  }

  remove(id: string) {
    return this.clientModel.findByIdAndDelete(id)
  }
}
