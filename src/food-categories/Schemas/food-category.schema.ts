import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';



export type FoodCategoryDocument = HydratedDocument<FoodCategory>;

@Schema()
export class FoodCategory {
  @Prop()
  name: String;

  @Prop()
  description: String;

}

export const FoodCategorySchema = SchemaFactory.createForClass(FoodCategory);

