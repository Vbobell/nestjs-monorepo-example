import { Consumer } from '@libs/abstract-tools/domain/consumer/abstract.consumer';

import { MessageFixture, MakeConsumer } from './abstract.consumer.fixture';

describe('Consumer', () => {
  let consumer: Consumer<MessageFixture>;

  beforeEach(() => {
    consumer = new MakeConsumer();
  });

  describe('When implements consumer', () => {
    test('Then correct implementation', async () => {
      expect(consumer.consume).toBeDefined();
    });
  });
});
