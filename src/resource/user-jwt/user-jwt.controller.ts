import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { UserJwtService } from './user-jwt.service';
import { Public } from 'src/auth/auth-constants';
import { LocalAuthGuard } from 'src/auth/local-auth.guard';
import { AuthService } from 'src/auth/auth.service';

@Controller()
export class UserJwtController {
  constructor(
    private readonly userJwtService: UserJwtService,
    private readonly authService: AuthService,
  ) {}

  @Public()
  @UseGuards(LocalAuthGuard)
  @Post('authenticate')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
}
