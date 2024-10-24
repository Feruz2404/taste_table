import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type WaiterDocument = Waiter & Document;

@Schema()
export class Waiter {
  @Prop({ type: String, required: true })
  full_name: string;

  @Prop({ type: Number, required: true, unique: true })
  phone: number;

  @Prop({ type: Boolean, default: true })
  is_active: boolean;

  @Prop({ type: Date, required: true })
  hire_date: Date;

  @Prop({ type: Number, required: true })
  table_id: number;
}

export const WaiterSchema = SchemaFactory.createForClass(Waiter);
