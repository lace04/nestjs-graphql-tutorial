import { Field, InputType, Int } from '@nestjs/graphql';
import { IsInt, IsNotEmpty, IsOptional } from 'class-validator';

@InputType()
export class UpdateUserInput {
  @IsInt()
  @Field(() => Int)
  id: number;

  @IsOptional()
  @IsNotEmpty({ message: 'name is required' })
  @Field({ nullable: true })
  name?: string;
}
