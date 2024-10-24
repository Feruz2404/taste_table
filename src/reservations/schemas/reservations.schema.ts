import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ReservationsDocument = Reservations & Document;

@Schema()
export class Reservations {
  @Prop({ type: Number, required: true })
  client_id: bigint;

  @Prop({ type: Number, required: true })
  restoran_id: bigint;

  @Prop({ type: Number, required: true })
  table_id: bigint;

  @Prop({ type: String, required: true })
  reservation_time: string;

  @Prop({ type: Number, required: true })
  number_of_guests: bigint;

  @Prop({ type: Number, required: true })
  status_id: bigint;
}

export const ReservationsSchema = SchemaFactory.createForClass(Reservations);
