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
    return this._userRepository.find();
  }

  async findOne(id: number): Promise<User> {
    return this._userRepository.findOne({
      where: {
        id,
      },
    });
  }

  async update(id: number, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`;
  }

  async remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
