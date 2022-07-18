import { UseGuards } from '@nestjs/common';
import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { IContext } from 'src/auth';
import { GqlAuthGuard } from 'src/auth/guards';
import {
  User,
  UsersService,
  GetUserByIdArgs,
  CreateUserInput,
  UpdateUserInput,
  DeleteUserInput,
} from 'src/users';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => User)
  getUserById(@Args() input: GetUserByIdArgs): User {
    return this.usersService.getUserById(input.userId);
  }

  @Query(() => [User])
  @UseGuards(GqlAuthGuard)
  getUsers(@Context() context: IContext): User[] {
    console.log(context.req.user);
    return this.usersService.getUsers();
  }

  @Mutation(() => User)
  createUser(@Args('input') input: CreateUserInput): User {
    return this.usersService.createUser(input);
  }

  @Mutation(() => User)
  updateUser(@Args('input') input: UpdateUserInput): User {
    return this.usersService.updateUser(input);
  }

  @Mutation(() => User)
  deleteUser(input: DeleteUserInput): User {
    return this.usersService.deleteUser(input);
  }
}
