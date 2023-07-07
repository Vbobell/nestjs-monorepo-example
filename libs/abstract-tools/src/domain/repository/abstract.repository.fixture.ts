import { Repository } from '@libs/abstract-tools/domain/repository/abstract.repository';

export type Entity = {
  entityStr: string;
  entityNumber: number;
  entityBoolean: boolean;
};

export type Domain = {
  domainStr: string;
  domainNumber: number;
  domainBoolean: boolean;
};

type CustomEntity = {
  customStr: string;
  customNumber: number;
  customBoolean: boolean;
};

export class MakeRepository implements Repository<Entity, Domain> {
  mapEntityToDomain(entity: Entity): Domain {
    return {
      domainStr: entity.entityStr,
      domainNumber: entity.entityNumber,
      domainBoolean: entity.entityBoolean,
    };
  }

  mapEntitiesToDomain(entities: Entity[]): Domain[] {
    return entities.map((entity: Entity) => {
      return {
        domainStr: entity.entityStr,
        domainNumber: entity.entityNumber,
        domainBoolean: entity.entityBoolean,
      };
    });
  }

  customMapEntityToDomain(customEntity: CustomEntity): Domain {
    return {
      domainStr: customEntity.customStr,
      domainNumber: customEntity.customNumber,
      domainBoolean: customEntity.customBoolean,
    };
  }

  customMapEntitiesToDomain(customEntities: CustomEntity[]): Domain[] {
    return customEntities.map((customEntity: CustomEntity) => {
      return {
        domainStr: customEntity.customStr,
        domainNumber: customEntity.customNumber,
        domainBoolean: customEntity.customBoolean,
      };
    });
  }
}
