import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from './jwt.service';
import { UserService } from './user.service';
import { User } from '../entities/user';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
  ) {}

  public validateUser(username: string, password: string): any {
    const user: User = this.userService.getByUserName(username);

    if (user && bcrypt.compareSync(password, user.password)) {
      return user;
    }
    return null;
  }

  public login(username: string, password: string): any {
    const user = this.validateUser(username, password);
    if (user) {
      const tokenPayload = {
        username: user.username,
        password: user.password,
      };

      return this.jwtService.sign(tokenPayload);
    }
    throw new UnauthorizedException();
  }

  public validate(token: string): any {
    return this.jwtService.verify(token);
  }
}
