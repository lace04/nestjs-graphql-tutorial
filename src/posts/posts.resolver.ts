import { Mutation, Query, Resolver, Args } from '@nestjs/graphql';
import { PostsService } from './posts.service';
import { Post } from './post.entity';
import { createPostInput } from './dto/create-post.dto';

@Resolver()
export class PostsResolver {
  constructor(private _postsService: PostsService) {}

  @Query((returns) => [Post])
  posts() {
    return this._postsService.findAll();
  }

  @Mutation((returns) => Post)
  createPost(@Args('postInput') postInput: createPostInput) {
    return this._postsService.createPost(postInput);
  }
}
