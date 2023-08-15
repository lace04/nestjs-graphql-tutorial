import { Field, InputType } from '@nestjs/graphql';
import {
  IsInt,
  IsNotEmpty,
  IsOptional,
  MaxLength,
  MinLength,
} from 'class-validator';

@InputType()
export class createPostInput {
  @IsNotEmpty({ message: 'title is required' })
  @MaxLength(30, { message: 'title is too long' })
  @MinLength(1, { message: 'title is too short' })
  @Field()
  title: string;

  @IsOptional({ message: 'content is optional' })
  @MaxLength(400, { message: 'content is too long' })
  @Field({ nullable: true })
  content?: string;

  @IsInt()
  @Field()
  userId: number;
}
