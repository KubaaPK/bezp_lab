import { User } from '../entities/user';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserRepository {
  private users: User[] = [
    new User('user1', 'user1'),
    new User('user2', 'user2'),
    new User('user3', 'user3'),
  ];

  public find(username: string): User | undefined {
    return this.users.find(el => el.username === username);
  }

  public findAll(): User[] {
    return this.users;
  }

  public save(user: any): User {
    this.users.push(user);
    return user;
  }
}
