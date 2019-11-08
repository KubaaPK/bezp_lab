import * as jwt from 'jsonwebtoken';
import { Injectable } from '@nestjs/common';

@Injectable()
export class JwtService {
  public sign(payload: any): string {
    return jwt.sign(payload, 'qweqweqwe');
  }

  public verify(token: string): any {
    return jwt.verify(token, 'qweqweqwe');
  }
}
