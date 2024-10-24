import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Waiter, WaiterDocument } from './schemas/waiter.schema';
import { CreateWaiterDto } from './dto/create-waiter.dto';
import { UpdateWaiterDto } from './dto/update-waiter.dto';

@Injectable()
export class WaiterService {
  constructor(@InjectModel(Waiter.name) private waiterModel: Model<WaiterDocument>) {}

  async create(createWaiterDto: CreateWaiterDto): Promise<Waiter> {
    const newWaiter = new this.waiterModel(createWaiterDto);
    return newWaiter.save();
  }

  async findAll(): Promise<Waiter[]> {
    return this.waiterModel.find().exec();
  }

  async findOne(id: string): Promise<Waiter> {
    const waiter = await this.waiterModel.findById(id).exec();
    if (!waiter) {
      throw new NotFoundException(`Waiter with id ${id} not found`);
    }
    return waiter;
  }

  async update(id: string, updateWaiterDto: UpdateWaiterDto): Promise<Waiter> {
    const updatedWaiter = await this.waiterModel.findByIdAndUpdate(id, updateWaiterDto, {
      new: true,
    }).exec();
    if (!updatedWaiter) {
      throw new NotFoundException(`Waiter with id ${id} not found`);
    }
    return updatedWaiter;
  }

  async remove(id: string): Promise<void> {
    const result = await this.waiterModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException(`Waiter with id ${id} not found`);
    }
  }
}
