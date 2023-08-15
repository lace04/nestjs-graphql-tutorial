import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class createPostInput {
  @Field()
  title: string;
  @Field()
  content: string;
}
