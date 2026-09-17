import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto.js';
import { UpdateUserDto } from './dto/update-user.dto.js';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity.js';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ){}
  async create(createUserDto: CreateUserDto){
    const saltRounds = 10;
    const hasdedPassword = await bcrypt.hash(createUserDto.password, saltRounds)
    const newUser = this.userRepository.create({
      ...createUserDto,
      password: hasdedPassword,
    }as any);
    return await this.userRepository.save(newUser);
  }
  async findAll() {
    return await this.userRepository.find();
  }

  async findOne(id: number) {
    return await this.userRepository.findOne({
      where: {user_id: id}
    });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    await this.userRepository.update(id, updateUserDto as any);
    return this.findOne(id);
  }

  async remove(id: number) {
    const userToRemove = await this.findOne(id);
    await this.userRepository.delete(id);
    return { message: `User #${id} has been deleted successfully.`, deleteUser: userToRemove};
  }

  async findOneByUsername(username: string){
    return await this.userRepository.findOne({
      where: { username: username }
    });
  }
}
