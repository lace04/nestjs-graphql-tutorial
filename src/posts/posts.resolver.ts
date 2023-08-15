import {
  Mutation,
  Query,
  Resolver,
  Args,
  Int,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { PostsService } from './posts.service';
import { Post } from './post.entity';
import { createPostInput } from './dto/create-post.dto';
import { User } from 'src/users/entities/user.entity';

@Resolver((of) => Post)
export class PostsResolver {
  constructor(private _postsService: PostsService) {}

  @Query((returns) => [Post])
  posts() {
    return this._postsService.findAll();
  }

  @Query((returns) => Post)
  post(@Args('id', { type: () => Int }) id: number) {
    return this._postsService.findPostById(id);
  }
  @ResolveField((returns) => User)
  user(@Parent() post: Post): Promise<User> {
    return this._postsService.getUser(post.userId);
  }

  @Mutation((returns) => Post)
  createPost(@Args('postInput') postInput: createPostInput) {
    return this._postsService.createPost(postInput);
  }
}
