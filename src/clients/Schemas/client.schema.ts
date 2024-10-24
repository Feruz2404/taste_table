import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ClientDocument = HydratedDocument<Client>;

@Schema()
export class Client {
  @Prop()
  full_name: string;

  @Prop()
  phone_number: string;

  @Prop()
  email: string

  @Prop()
  password: string

}

export const ClientSchema = SchemaFactory.createForClass(Client);

