import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";


export type LanguageDocument = HydratedDocument<Language>;

@Schema()
export class Language {
  @Prop()
  code: Number;

  @Prop()
  name: Number;

}

export const LanguageSchema = SchemaFactory.createForClass(Language);

