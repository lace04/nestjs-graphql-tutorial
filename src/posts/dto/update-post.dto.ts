import { Field, InputType, Int } from '@nestjs/graphql';
import {
  IsInt,
  IsNotEmpty,
  IsOptional,
  MaxLength,
  MinLength,
} from 'class-validator';

@InputType()
export class UpdatePostInput {
  @IsInt()
  @Field(() => Int)
  id: number;

  @IsOptional()
  @IsNotEmpty({ message: 'Title is required' })
  @MaxLength(30, { message: 'Title is too long' })
  @MinLength(3, { message: 'Title is too short' })
  @Field({ nullable: true })
  title?: string;

  @IsOptional()
  @MaxLength(400, { message: 'Content is too long' })
  @Field({ nullable: true })
  content?: string;
}
