export abstract class Repository<Entity, Domain> {
  abstract mapEntityToDomain?(entity: Entity): Domain;
  abstract mapEntitiesToDomain?(entities: Entity[]): Domain[];
  abstract customMapEntityToDomain?(entity: unknown): Domain;
  abstract customMapEntitiesToDomain?(entities: unknown): Domain[];
}
