import { Repository } from '@libs/abstract-tools/domain/repository/abstract.repository';

import { Domain, Entity, MakeRepository } from './abstract.repository.fixture';

describe('Repository', () => {
  let repository: Repository<Entity, Domain>;

  beforeEach(() => {
    repository = new MakeRepository();
  });

  describe('When implements repository', () => {
    describe('And execute mapEntityToDomain', () => {
      test('Then execute with success', () => {
        const result = repository.mapEntityToDomain({
          entityStr: 'test',
          entityBoolean: true,
          entityNumber: 1,
        });

        expect(result).toEqual({
          domainStr: 'test',
          domainBoolean: true,
          domainNumber: 1,
        });
      });
    });

    describe('And execute mapEntitiesToDomain', () => {
      test('Then execute with success', () => {
        const result = repository.mapEntitiesToDomain([
          {
            entityStr: 'test 1',
            entityBoolean: true,
            entityNumber: 1,
          },
          {
            entityStr: 'test 2',
            entityBoolean: false,
            entityNumber: 2,
          },
        ]);

        expect(result).toEqual([
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
      });
    });

    describe('And execute customMapEntityToDomain', () => {
      test('Then execute with success', () => {
        const result = repository.customMapEntityToDomain({
          customStr: 'test',
          customBoolean: true,
          customNumber: 1,
        });

        expect(result).toEqual({
          domainStr: 'test',
          domainBoolean: true,
          domainNumber: 1,
        });
      });
    });

    describe('And execute customMapEntitiesToDomain', () => {
      test('Then execute with success', () => {
        const result = repository.customMapEntitiesToDomain([
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
      });
    });
  });
});
