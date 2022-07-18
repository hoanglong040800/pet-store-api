import { Request } from 'express';
import { User } from 'src/users';

export interface IContext {
  req: IRequestContext;
}

export interface IRequestContext extends Request {
  user: User;
}
