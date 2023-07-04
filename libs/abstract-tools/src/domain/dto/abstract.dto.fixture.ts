import { DTO } from '@libs/abstract-tools/domain/dto/abstract.dto';

export type Domain = {
  domainStr: string;
  domainNumber: number;
  domainBoolean: boolean;
};

type CustomDomain = {
  customStr: string;
  customNumber: number;
  customBoolean: boolean;
};

export class MakeDTO implements DTO<Domain> {
  dtoStr: string;
  dtoNumber: number;
  dtoBoolean: boolean;

  mapDomainToDTO(domain: Domain): Partial<MakeDTO> {
    return {
      dtoStr: domain.domainStr,
      dtoNumber: domain.domainNumber,
      dtoBoolean: domain.domainBoolean,
    };
  }

  mapDomainsToDTO(domains: Domain[]): Partial<MakeDTO>[] {
    return domains.map((domain: Domain) => {
      return {
        dtoStr: domain.domainStr,
        dtoNumber: domain.domainNumber,
        dtoBoolean: domain.domainBoolean,
      };
    });
  }

  customMapDomainToDTO(customDomain: CustomDomain): Partial<MakeDTO> {
    return {
      dtoStr: customDomain.customStr,
      dtoNumber: customDomain.customNumber,
      dtoBoolean: customDomain.customBoolean,
    };
  }

  customMapDomainsToDTO(customDomains: CustomDomain[]): Partial<MakeDTO>[] {
    return customDomains.map((customEntity: CustomDomain) => {
      return {
        dtoStr: customEntity.customStr,
        dtoNumber: customEntity.customNumber,
        dtoBoolean: customEntity.customBoolean,
      };
    });
  }
}
