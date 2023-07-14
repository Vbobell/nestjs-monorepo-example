import {
  DomainParam,
  DomainReturn,
  MakeUseCase,
} from './abstract.use-case.fixture';

describe('MakeUseCase', () => {
  let domainParam: DomainParam;
  let domainReturn: DomainReturn;
  let makeUseCase: MakeUseCase;

  beforeEach(() => {
    domainParam = {
      domainParamStr: 'fake-str',
      domainParamBoolean: true,
      domainParamNumber: 1,
    };

    domainReturn = {
      domainReturnStr: 'fake-str',
      domainReturnBoolean: true,
      domainReturnNumber: 1,
    };

    makeUseCase = new MakeUseCase();
  });

  describe('When implements UseCase', () => {
    test('Then execute with success', () => {
      const result = makeUseCase.execute(domainParam);

      expect(result).toEqual(domainReturn);
    });
  });
});
