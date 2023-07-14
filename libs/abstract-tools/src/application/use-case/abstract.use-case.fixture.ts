import { UseCase } from '@libs/abstract-tools/application/use-case/abstract.use-case';

export interface DomainParam {
  domainParamStr: string;
  domainParamNumber: number;
  domainParamBoolean: boolean;
}

export interface DomainReturn {
  domainReturnStr: string;
  domainReturnNumber: number;
  domainReturnBoolean: boolean;
}

export class MakeUseCase implements UseCase<DomainParam, DomainReturn> {
  execute(params: DomainParam): DomainReturn {
    return {
      domainReturnStr: params.domainParamStr,
      domainReturnNumber: params.domainParamNumber,
      domainReturnBoolean: params.domainParamBoolean,
    };
  }
}
