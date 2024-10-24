import { Module } from '@nestjs/common';
import { MenyuService } from './menyu.service';
import { MenyuController } from './menyu.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Menyu, MenyuSchema } from './Schemas/menyu.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Menyu.name,
        schema: MenyuSchema,
      }
    ])
  ],
  controllers: [MenyuController],
  providers: [MenyuService],
})
export class MenyuModule {}
