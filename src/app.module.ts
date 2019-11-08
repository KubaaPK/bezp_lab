import { Module } from '@nestjs/common';
import { UserController } from './controllers/user.controller';
import { UserRepository } from './repositories/user.repository';
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
import { JwtService } from './services/jwt.service';
import { AuthController } from './controllers/auth.controller';
import { JwtStrategy } from './services/jwt.strategy';

@Module({
  imports: [],
  controllers: [UserController, AuthController],
  providers: [
    UserRepository,
    UserService,
    AuthService,
    JwtService,
    JwtStrategy,
  ],
})
export class AppModule {}
