import { Controller, Get, Post, Body, Req, UsePipes } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { User } from '../entities/user';
import { ListableUserDto } from '../dto/listable-user.dto';
import { NewUserDto } from '../dto/new-user.dto';
import { ValidationPipe } from '../pipes/validation.pipe';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  public get(): User[] {
    return this.userService.getAllUsers();
  }

  @Get('/dto')
  public getDtos(): ListableUserDto[] {
    return this.userService.getAllUsersDto();
  }

  @Post()
  @UsePipes(new ValidationPipe())
  public post(@Body() newUser: NewUserDto) {
    return this.userService.saveUser(newUser);
  }

  @Post('/hash')
  @UsePipes(new ValidationPipe())
  public postHash(@Body() newUser: NewUserDto) {
    return this.userService.saveUserHash(newUser);
  }
}
