import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private _userRepository: Repository<User>,
  ) {}

  async create(createUserInput: CreateUserInput): Promise<User> {
    const User = this._userRepository.create(createUserInput);
    return this._userRepository.save(User);
  }

  async findAll(): Promise<User[]> {
    return this._userRepository.find({ relations: ['posts'] });
  }

  async findOne(id: number): Promise<User> {
    return this._userRepository.findOne({
      where: {
        id,
      },
      relations: ['posts'],
    });
  }

  async updateUser(user: UpdateUserInput): Promise<User> {
    const { id, ...updateData } = user;
    await this._userRepository.update(id, updateData);
    return this.findOne(id);
  }

  async deleteUser(id: number): Promise<void> {
    await this._userRepository.delete(id);
  }
}
