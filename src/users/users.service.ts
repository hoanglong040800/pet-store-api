import { Injectable } from '@nestjs/common';
import { IUser } from './models/user.model';
import { v4 as uuidv4 } from 'uuid';
import {
  CreateUserInput,
  DeleteUserInput,
  UpdateUserInput,
} from './dto/input/users.input';

@Injectable()
export class UsersService {
  // testing purpose
  private users: IUser[] = [
    {
      email: 'user1@gmail.com',
      password: '1',
      userId: 'c6519e2c-68b1-4abe-93e8-e83dcb35d447',
    },
  ];

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

  public getUserById(userId: string): IUser {
    return this.users.find((u) => u.userId === userId);
  }

  public getUsers(): IUser[] {
    return this.users;
  }

  public getUserByEmail(email: string): IUser | undefined {
    return this.users.find((u) => u.email === email);
  }

  public deleteUser(input: DeleteUserInput): IUser {
    const willBeDeletedUserIndex = this.users.findIndex(
      (u) => u.userId === input.userId,
    );

    this.users.splice(willBeDeletedUserIndex);

    return this.users[willBeDeletedUserIndex];
  }
}
