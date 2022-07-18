import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import {
  JWT_SCERET_TOKEN,
  AuthService,
  JwtStrategy,
  LocalStrategy,
} from 'src/auth';
import { UsersModule } from 'src/users';
import { AuthController } from './auth.controller';

@Module({
  imports: [
    JwtModule.register({
      secret: JWT_SCERET_TOKEN,
      signOptions: {
        expiresIn: 1 * 60,
      },
    }),

    UsersModule,
  ],
  providers: [AuthService, JwtStrategy, LocalStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
