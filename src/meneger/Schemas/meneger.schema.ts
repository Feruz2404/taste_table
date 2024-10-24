import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';



export type MenegerDocument = HydratedDocument<Meneger>;

@Schema()
export class Meneger {
  @Prop()
  first_name: String;

  @Prop()
  last_name: String;

  @Prop()
  restaurantId: number;

  @Prop()
  email: string

  @Prop()
  password: string

  @Prop()
  description: String;

}

export const MenegerSchema = SchemaFactory.createForClass(Meneger);

