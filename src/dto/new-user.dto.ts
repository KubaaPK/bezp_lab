import { Allow } from 'class-validator';

export class NewUserDto {
  @Allow()
  username: string;
  @Allow()
  password: string;
}
