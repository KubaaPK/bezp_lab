import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class ListableUserDto {
  @Expose()
  id: string;

  @Expose()
  username: string;
}
