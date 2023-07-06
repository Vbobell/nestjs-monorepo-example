import { DTO } from '@libs/abstract-tools/domain/dto/abstract.dto';

import { Domain, MakeDTO } from './abstract.dto.fixture';

describe('DTO', () => {
  let dto: DTO<Domain>;

  beforeEach(() => {
    dto = new MakeDTO({
      dtoStr: 'test',
      dtoNumber: 1,
      dtoBoolean: true,
    });
  });

  describe('When implements DTO', () => {
    describe('And execute mapDTOToDomain', () => {
      test('Then execute with success', () => {
        const result = dto.mapDTOToDomain();

        expect(result).toEqual({
          domainStr: 'test',
          domainBoolean: true,
          domainNumber: 1,
        });
      });
    });
  });
});
