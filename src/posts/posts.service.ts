import { Injectable } from '@nestjs/common';
import { Post } from './post.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { createPostInput } from './dto/create-post.dto';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import { UpdatePostInput } from './dto/update-post.dto';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private postsRepository: Repository<Post>,
    private usersRepository: UsersService,
  ) {}

  async findAll(): Promise<Post[]> {
    return await this.postsRepository.find();
  }

  async findPostById(id: number): Promise<Post> {
    return this.postsRepository.findOne({
      where: { id },
    });
  }

  async createPost(post: createPostInput): Promise<Post> {
    const newPost = this.postsRepository.create(post);
    return await this.postsRepository.save(newPost);
  }

  async getUser(userId: number): Promise<User> {
    return this.usersRepository.findOne(userId);
  }

  async updatePost(post: UpdatePostInput): Promise<Post> {
    const { id, ...updateData } = post;
    await this.postsRepository.update(id, updateData);
    return this.findPostById(id);
  }

  async deletePost(id: number): Promise<void> {
    await this.postsRepository.delete(id);
  }

  async deleteUserPosts(userId: number): Promise<void> {
    await this.postsRepository.delete({ userId });
  }
}
