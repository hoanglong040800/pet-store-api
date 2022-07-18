import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User, UsersService } from 'src/users';
import { JWT_SCERET_TOKEN } from 'src/auth';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  public async validateCredentials(email: string, password: string): Promise<User> | null {
    const user = this.usersService.getUserByEmail(email);

    if (!user) {
      return null;
    }

    if (password !== user.password) {
      return null;
    }

    return user;
  }

  public async generateJwtToken(user: User): Promise<{ access_token: string }> {
    const payload = {
      email: user.email,
      sub: user.userId,
    };

    return {
      access_token: this.jwtService.sign(payload, {
        secret: JWT_SCERET_TOKEN,
      }),
    };
  }

  public async verifyJwtToken(token: string): Promise<User> {
    const decoded = this.jwtService.verify(token, {
      secret: JWT_SCERET_TOKEN,
    });

    const user = this.usersService.getUserByEmail(decoded.email)

    return user
  }
}
