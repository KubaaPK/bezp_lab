import { Controller, Post, Body, Get, UseGuards } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { AuthenticatableUserDto } from '../dto/authenticatable-user.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  public post(@Body() authenticatableUser: AuthenticatableUserDto): any {
    try {
      return this.authService.login(
        authenticatableUser.username,
        authenticatableUser.password,
      );
    } catch (e) {
      throw e;
    }
  }

  @UseGuards(AuthGuard('bearer'))
  @Get()
  public get(): string {
    return 'Protected route.';
  }
}
