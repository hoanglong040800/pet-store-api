import { Request } from 'express';
import { IUser } from 'src/users';

export interface IContext {
  req: IRequestContext;
}

export interface IRequestContext extends Request {
  user: IUser;
}
