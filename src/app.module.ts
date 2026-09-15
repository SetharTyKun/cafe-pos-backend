import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module.js';
import { ProductsModule } from './products/products.module.js';
import { CategoriesModule } from './categories/categories.module.js';
import { OrdersModule } from './orders/orders.module.js';
import { OrderItemsModule } from './order_items/order_items.module.js';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'sethar',
      password: '12345678',
      database: 'cafe_pos',
      autoLoadEntities: true,
      synchronize: true,
    }),
    UsersModule,
    ProductsModule,
    CategoriesModule,
    OrdersModule,
    OrderItemsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
