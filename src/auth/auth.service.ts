import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/resource/user/entities/user.entity';
import { UserService } from 'src/resource/user/user.service';
import { comparePassword } from '../app.util';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(login: string, pass: string): Promise<any> {
    const user = await this.userService.findOneByLogin(login);
    if (user && (await comparePassword(pass, user.password))) {
      return { ...user };
    }
    return null;
  }

  async login(user: User) {
    const payload = {
      login: user.login,
      email: user.email,
      authorities: user.authorities,
      sub: user.id,
    };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
