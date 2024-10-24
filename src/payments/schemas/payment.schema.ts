import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PaymentDocument = Payment & Document;

@Schema({ timestamps: true })
export class Payment {
  @Prop({ type: 'bigint', required: true })
  reservation_id: bigint;

  @Prop({ type: 'decimal', required: true })
  amount: number;

  @Prop({ type: String, required: true })
  payment_method: string;

  @Prop({ type: String, required: true })
  payment_status: string;

  @Prop({ type: String, required: true })
  transaction_id: string;

  @Prop({ type: String, required: true })
  currency: string;
}

export const PaymentSchema = SchemaFactory.createForClass(Payment);
