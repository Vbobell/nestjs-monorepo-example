export abstract class Consumer<Message> {
  abstract consume(message: Message): Promise<void>;
}
