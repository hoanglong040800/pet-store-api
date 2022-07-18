import { IBaseEntity } from './base.entity';
import { Entity, Column } from 'typeorm';
import { Exclude } from 'class-transformer';

export interface IUser extends IBaseEntity {
  userId: string;
  email?: string;
  age?: number;
  isSubscribed?: boolean;
  password?: string;
}

@Entity()
export class UserEntity implements IUser {
  @Column({
    name: 'user_id',
    type: 'character varying',
    length: 100,
    nullable: false,
  })
  public userId: string;

  @Column({
    name: 'email',
    type: 'character varying',
    length: 100,
    nullable: false,
  })
  public email: string;

  @Column({
    name: 'email',
    type: 'character varying',
    length: 100,
    nullable: true,
  })
  public age: number;

  @Column({
    name: 'is_subscribed',
    type: 'boolean',
    length: 100,
    nullable: false,
  })
  public isSubscribed: boolean;

  @Column({
    name: 'password',
    type: 'character varying',
    length: 100,
    nullable: false,
  })
  @Exclude()
  public password: string;
}
