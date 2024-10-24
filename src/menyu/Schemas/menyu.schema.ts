import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';



export type MenyuDocument = HydratedDocument<Menyu>;

@Schema()
export class Menyu {
  @Prop()
  categoriyId: Number;

  @Prop()
  restoranId: Number;

  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  price: number;

  @Prop()
  image_url: string;

  @Prop()
  statusId: number;

  @Prop()
  language: number;

}

export const MenyuSchema = SchemaFactory.createForClass(Menyu);

