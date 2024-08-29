import { Consumer } from '@libs/abstract-tools/domain/consumer/abstract.consumer';

export type MessageFixture = {
  messageStr: string;
  messageNumber: number;
  messageBoolean: boolean;
};

export class MakeConsumer implements Consumer<MessageFixture> {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  consume(_message: MessageFixture): Promise<void> {
    return Promise.resolve();
  }
}
