import { DTO } from '@libs/abstract-tools/domain/dto/abstract.dto';

export type Domain = {
  domainStr: string;
  domainNumber: number;
  domainBoolean: boolean;
};

export class MakeDTO implements DTO<Domain> {
  dtoStr: string;
  dtoNumber: number;
  dtoBoolean: boolean;

  constructor(params: Partial<MakeDTO>) {
    this.dtoStr = params.dtoStr;
    this.dtoNumber = params.dtoNumber;
    this.dtoBoolean = params.dtoBoolean;
  }

  mapDTOToDomain(): Domain {
    return {
      domainStr: this.dtoStr,
      domainNumber: this.dtoNumber,
      domainBoolean: this.dtoBoolean,
    };
  }
}
