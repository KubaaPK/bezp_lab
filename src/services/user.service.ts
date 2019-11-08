import { UserRepository } from '../repositories/user.repository';
import { User } from '../entities/user';
import { Injectable } from '@nestjs/common';
import { ListableUserDto } from '../dto/listable-user.dto';
import { plainToClass } from 'class-transformer';
import { NewUserDto } from '../dto/new-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  public getAllUsers(): User[] {
    return this.userRepository.findAll();
  }

  public getAllUsersDto(): ListableUserDto[] {
    return this.userRepository
      .findAll()
      .map((user: User) => plainToClass(ListableUserDto, user));
  }

  public saveUser(newUser: NewUserDto): User {
    return this.userRepository.save(newUser);
  }

  public saveUserHash(newUser: NewUserDto): User {
    newUser.password = bcrypt.hashSync(newUser.password, 1);
    return this.userRepository.save(newUser);
  }

  public getByUserName(username: string): User {
    return this.userRepository.find(username);
  }
}
