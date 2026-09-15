import { Module } from '@nestjs/common';
import { OrderItemsService } from './order_items.service.js';
import { OrderItemsController } from './order_items.controller.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderItem } from './entities/order_item.entity.js';

@Module({
  imports: [TypeOrmModule.forFeature([OrderItem])],
  controllers: [OrderItemsController],
  providers: [OrderItemsService],
})
export class OrderItemsModule {}
