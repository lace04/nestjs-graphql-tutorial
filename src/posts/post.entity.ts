import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Post {
  @Field((type) => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Field()
  title: string;

  @Column({ nullable: true, type: 'text' })
  @Field({ nullable: true })
  content?: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  @Field({ nullable: true })
  createdAt: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  @Field({ nullable: true })
  updatedAt: Date;
}
