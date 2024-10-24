import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Reservations, ReservationsDocument } from './schemas/reservations.schema';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';

@Injectable()
export class ReservationsService {
  constructor(@InjectModel(Reservations.name) private reservationsModel: Model<ReservationsDocument>) {}

  async create(createReservationsDto: CreateReservationDto): Promise<Reservations> {
    const newReservation = new this.reservationsModel(createReservationsDto);
    return newReservation.save();
  }

  async findAll(): Promise<Reservations[]> {
    return this.reservationsModel.find().exec();
  }

  async findOne(id: string): Promise<Reservations> {
    const reservation = await this.reservationsModel.findById(id).exec();
    if (!reservation) {
      throw new NotFoundException(`Reservation with id ${id} not found`);
    }
    return reservation;
  }

  async update(id: string, updateReservationsDto: UpdateReservationDto): Promise<Reservations> {
    const updatedReservation = await this.reservationsModel.findByIdAndUpdate(id, updateReservationsDto, {
      new: true,
    }).exec();
    if (!updatedReservation) {
      throw new NotFoundException(`Reservation with id ${id} not found`);
    }
    return updatedReservation;
  }

  async remove(id: string): Promise<void> {
    const result = await this.reservationsModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException(`Reservation with id ${id} not found`);
    }
  }
}
