import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto.js';
import { UpdateProductDto } from './dto/update-product.dto.js';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity.js';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  async create(createProductDto: CreateProductDto) {
    const newProduct = this.productRepository.create({
      product_name: createProductDto.product_name,
      price: createProductDto.price,
      is_available: createProductDto.is_available,
      category: { category_id: createProductDto.category_id }, 
    } as any);
    return await this.productRepository.save(newProduct);
  }
  async findAll(){
    return await this.productRepository.find({
      relations: {
        category:true,
      }
    });
  }
  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
