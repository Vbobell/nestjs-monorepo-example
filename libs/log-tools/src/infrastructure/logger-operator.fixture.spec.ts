import { Logger } from '@nestjs/common';
import { Observable } from 'rxjs';

export const observableFixture = (text: string) => {
  return new Observable<string>((subscribe) => {
    if (!text.length) {
      subscribe.error('Text not defined');
    } else {
      subscribe.next(text);
    }

    subscribe.complete();
  });
};

export const loggerMock = {
  log: jest.fn(),
  error: jest.fn(),
} as unknown as Logger;
