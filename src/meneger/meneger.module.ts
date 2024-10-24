import { Module } from '@nestjs/common';
import { MenegerService } from './meneger.service';
import { MenegerController } from './meneger.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Meneger, MenegerSchema } from './Schemas/meneger.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Meneger.name,
        schema: MenegerSchema,
      }
    ])
  ],
  controllers: [MenegerController],
  providers: [MenegerService],
})
export class MenegerModule {}
