import { UseGuards } from '@nestjs/common';
import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { IContext } from 'src/auth';
import { GqlAuthGuard } from 'src/auth/guards';
import {
  IUser,
  UsersService,
  GetUserByIdArgs,
  CreateUserInput,
  UpdateUserInput,
  DeleteUserInput,
} from 'src/users';

@Resolver(() => IUser)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => IUser)
  getUserById(@Args() input: GetUserByIdArgs): IUser {
    return this.usersService.getUserById(input.userId);
  }

  @Query(() => [IUser])
  @UseGuards(GqlAuthGuard)
  getUsers(@Context() context: IContext): IUser[] {
    console.log(context.req.user);
    return this.usersService.getUsers();
  }

  @Mutation(() => IUser)
  createUser(@Args('input') input: CreateUserInput): IUser {
    return this.usersService.createUser(input);
  }

  @Mutation(() => IUser)
  updateUser(@Args('input') input: UpdateUserInput): IUser {
    return this.usersService.updateUser(input);
  }

  @Mutation(() => IUser)
  deleteUser(input: DeleteUserInput): IUser {
    return this.usersService.deleteUser(input);
  }
}
