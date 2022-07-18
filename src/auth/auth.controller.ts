import { Controller, Post, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { AuthService, LocalAuthGuard } from 'src/auth';
import { User } from 'src/users';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Req() req: Request): Promise<{ access_token: string }> {
    const resData = await this.authService.generateJwtToken(req.user as User);
    return resData
  }
}
