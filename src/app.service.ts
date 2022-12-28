import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  list(): string {
    return 'Hello World!';
  }
}
