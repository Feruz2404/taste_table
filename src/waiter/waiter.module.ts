import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Waiter, WaiterSchema } from './schemas/waiter.schema';
import { WaiterService } from './waiter.service';
import { WaiterController } from './waiter.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: Waiter.name, schema: WaiterSchema }])],
  controllers: [WaiterController],
  providers: [WaiterService],
})
export class WaiterModule {}
