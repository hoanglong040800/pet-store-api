import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { IUser, UsersService } from 'src/users';
import { JWT_SCERET_TOKEN } from 'src/auth';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly usersService: UsersService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: JWT_SCERET_TOKEN,
    });
  }

  async validate(validationPayload: { email: string; sub: string }): Promise<IUser | null> {
    const user = await this.usersService.getUserByEmail(validationPayload.email);
    return user
  }
}
