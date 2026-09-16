import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto.js';
import { UpdateCategoryDto } from './dto/update-category.dto.js';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './entities/category.entity.js';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}
  async create(createCategoryDto: CreateCategoryDto){
    const newCategory = this.categoryRepository.create(createCategoryDto);
    return await this.categoryRepository.save(newCategory);
  }
  async findAll(){
    return await this.categoryRepository.find();
  }
  findOne(id:number){
    return `This action returns a #${id} category`;
  }
  update(id:number, updateCategoryDto: UpdateCategoryDto){
    return `This action updates a #${id} category`;
  }
  async remove(id: number){
    await this.categoryRepository.delete(id);
    return {message: `Category #${id} has beeen deleted.`}
  }
}
