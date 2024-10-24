import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AdminModule } from './admin/admin.module';
import { RestoranModule } from './restoran/restoran.module';
import { TablesModule } from './tables/tables.module';
import { MenyuModule } from './menyu/menyu.module';
import { FoodCategoriesModule } from './food-categories/food-categories.module';
import { LanguagesModule } from './languages/languages.module';
import { ClientsModule } from './clients/clients.module';
import { MenegerModule } from './meneger/meneger.module';
import { AuthModule } from './auth/auth.module';
import { MenuCategoryModule } from './menu_category/menu_category.module';
import { WaiterModule } from './waiter/waiter.module';
import { ReservationsModule } from './reservations/reservations.module';
import { PaymentsModule } from './payments/payments.module';

@Module({
  imports: [ConfigModule.forRoot({envFilePath: '.env', isGlobal:true}),
    MongooseModule.forRoot(process.env.MONGO_URI),
    AdminModule,
    RestoranModule,
    TablesModule,
    MenyuModule,
    FoodCategoriesModule,
    LanguagesModule,
    ClientsModule,
    MenegerModule,
    AuthModule,
    MenuCategoryModule,
    WaiterModule,
    ReservationsModule,
    PaymentsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
