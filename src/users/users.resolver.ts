import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GetUserByIdArgs } from './dto/args/users.args';
import { CreateUserInput, DeleteUserInput, UpdateUserInput } from './dto/input/users.input';
import { IUser } from './models/user.model';
import { UsersService } from './users.service';

@Resolver(() => IUser)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => IUser)
  getUserById(@Args() input: GetUserByIdArgs): IUser {
    return this.usersService.getUserById(input);
  }

  @Query(()=>[IUser])
  getUsers(): IUser[] {
    return this.usersService.getUsers();
  }

  @Mutation(() => IUser)
  // why args has property here?
  createUser(@Args('input') input: CreateUserInput): IUser {
    return this.usersService.createUser(input);
  }

  @Mutation(() => IUser)
  updateUser(@Args('input') input: UpdateUserInput): IUser {
    return this.usersService.updateUser(input);
  }

  @Mutation(() => IUser)
  deleteUser(input:DeleteUserInput):IUser{
    return this.usersService.deleteUser(input)
  }
}
