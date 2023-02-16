import { Injectable } from '@nestjs/common';

@Injectable()
export class SwapiService {
  getHello(): string {
    return 'Hello World!';
  }
}
