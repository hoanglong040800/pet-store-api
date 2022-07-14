import { Injectable } from '@nestjs/common';
import { IUser } from './models/user.model';
import { v4 as uuidv4 } from 'uuid';
import { CreateUserInput, DeleteUserInput, UpdateUserInput } from './dto/input/users.input';
import { GetUserByIdArgs } from './dto/args/users.args';

@Injectable()
export class UsersService {
  // testing purpose
  private users: IUser[] = [];

  public createUser(input: CreateUserInput): IUser {
    const user: IUser = {
      userId: uuidv4(),
      ...input,
    };

    this.users.push(user);

    return user;
  }

  public updateUser(input: UpdateUserInput): IUser {
    const user = this.users.find((u) => u.userId === input.userId);

    Object.assign(user, input);

    return user;
  }

  public getUserById(input: GetUserByIdArgs): IUser {
    return this.users.find((u) => u.userId === input.userId);
  }

  public getUsers(): IUser[] {
    return this.users;
  }

  public deleteUser(input:DeleteUserInput): IUser {
    const willBeDeletedUserIndex = this.users.findIndex((u) => u.userId === input.userId)

    this.users.splice(willBeDeletedUserIndex)

    return  this.users[willBeDeletedUserIndex]
  }
}
