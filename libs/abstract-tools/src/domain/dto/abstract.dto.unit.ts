import { DTO } from '@libs/abstract-tools/domain/dto/abstract.dto';

import { Domain, MakeDTO } from './abstract.dto.fixture';

describe('DTO', () => {
  let dto: DTO<Domain>;

  beforeEach(() => {
    dto = new MakeDTO();
  });

  describe('When implements DTO', () => {
    describe('And execute mapDomainToDTO', () => {
      test('Then execute with success', () => {
        const result = dto.mapDomainToDTO({
          domainStr: 'test',
          domainBoolean: true,
          domainNumber: 1,
        });

        expect(result).toEqual({
          dtoStr: 'test',
          dtoBoolean: true,
          dtoNumber: 1,
        });
      });
    });

    describe('And execute mapDomainsToDTO', () => {
      test('Then execute with success', () => {
        const result = dto.mapDomainsToDTO([
          {
            domainStr: 'test 1',
            domainBoolean: true,
            domainNumber: 1,
          },
          {
            domainStr: 'test 2',
            domainBoolean: false,
            domainNumber: 2,
          },
        ]);

        expect(result).toEqual([
          {
            dtoStr: 'test 1',
            dtoBoolean: true,
            dtoNumber: 1,
          },
          {
            dtoStr: 'test 2',
            dtoBoolean: false,
            dtoNumber: 2,
          },
        ]);
      });
    });

    describe('And execute customMapDomainToDTO', () => {
      test('Then execute with success', () => {
        const result = dto.customMapDomainToDTO({
          customStr: 'test',
          customBoolean: true,
          customNumber: 1,
        });

        expect(result).toEqual({
          dtoStr: 'test',
          dtoBoolean: true,
          dtoNumber: 1,
        });
      });
    });

    describe('And execute customMapDomainsToDTO', () => {
      test('Then execute with success', () => {
        const result = dto.customMapDomainsToDTO([
          {
            customStr: 'test 1',
            customBoolean: true,
            customNumber: 1,
          },
          {
            customStr: 'test 2',
            customBoolean: false,
            customNumber: 2,
          },
        ]);

        expect(result).toEqual([
          {
            dtoStr: 'test 1',
            dtoBoolean: true,
            dtoNumber: 1,
          },
          {
            dtoStr: 'test 2',
            dtoBoolean: false,
            dtoNumber: 2,
          },
        ]);
      });
    });
  });
});
