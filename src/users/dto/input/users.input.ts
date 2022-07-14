import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsOptional, IsUUID } from 'class-validator';

@InputType()
export class CreateUserInput {
  @Field()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @Field()
  @IsNotEmpty()
  age: number;
}

@InputType()
export class UpdateUserInput {
  @Field()
  @IsNotEmpty()
  @IsUUID()
  userId: string;

  @Field()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @Field()
  @IsOptional()
  @IsNotEmpty()
  age?: number;

  @Field()
  @IsOptional()
  isSubscribed?: boolean;
}

@InputType()
export class DeleteUserInput {
  @Field()
  @IsNotEmpty()
  @IsUUID()
  userId: string;
}