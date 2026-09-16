import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto.js';
import { UpdateOrderDto } from './dto/update-order.dto.js';
import { Repository } from 'typeorm';
import { Order } from './entities/order.entity.js';
import { InjectRepository } from '@nestjs/typeorm';


@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private orderRepository: Repository<Order>,
  ){}
  async create (createOrderDto: CreateOrderDto){
    const newOrder = this.orderRepository.create({
      user: { user_id: createOrderDto.user_id} as any,
      total_amount: createOrderDto.total_amount,
      order_items: createOrderDto.items,
    }as any);
    return await this.orderRepository.save(newOrder);
  }
  async findAll() {
    return await this.orderRepository.find({
      relations: {
        order_items: true,
      }
    })
  }

  findOne(id: number) {
    return `This action returns a #${id} order`;
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return `This action updates a #${id} order`;
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}
