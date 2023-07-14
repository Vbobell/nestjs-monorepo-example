export abstract class UseCase<Params, Return> {
  abstract execute(params?: Params): Return;
}
