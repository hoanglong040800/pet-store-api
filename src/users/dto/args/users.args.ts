import { ArgsType, Field } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@ArgsType()
export class GetUserByIdArgs {
  @Field()
  @IsNotEmpty()
  userId: string;
}