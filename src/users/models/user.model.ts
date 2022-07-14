import { Field, ObjectType } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional } from 'class-validator';

@ObjectType()
export class IUser {
  @Field()
  @IsNotEmpty()
  userId: string;

  @Field()
  @IsOptional()
  email?: string;

  @Field({ nullable: true })
  @IsNotEmpty()
  age: number;

  @Field({ nullable: true })
  @IsOptional()
  isSubscribed?: boolean;
}
