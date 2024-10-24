import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Reservations, ReservationsSchema } from './schemas/reservations.schema';
import { ReservationsService } from './reservations.service';
import { ReservationsController } from './reservations.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: Reservations.name, schema: ReservationsSchema }])],
  controllers: [ReservationsController],
  providers: [ReservationsService],
})
export class ReservationsModule {}
