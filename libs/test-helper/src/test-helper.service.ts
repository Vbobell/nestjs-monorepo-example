import { Injectable } from '@nestjs/common';
import { Observable, of } from 'rxjs';

@Injectable()
export class TestHelperService {
  helloWorld(): Observable<string> {
    return of('Hello world');
  }
}
