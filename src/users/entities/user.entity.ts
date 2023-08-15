import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Post } from 'src/posts/post.entity';

@Entity()
@ObjectType()
export class User {
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  id: number;

  @Column({ unique: true, nullable: false })
  @Field()
  name: string;

  //delete user's posts when user is deleted
  @OneToMany(() => Post, (post) => post.user, { onDelete: 'CASCADE' })
  @Field((type) => [Post], { nullable: true })
  posts: Post[];
  
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  @Field({ nullable: true })
  createdAt: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  @Field({ nullable: true })
  updatedAt: Date;
}
