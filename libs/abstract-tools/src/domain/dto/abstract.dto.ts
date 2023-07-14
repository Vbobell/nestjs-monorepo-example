export abstract class DTO<Domain> {
  abstract mapDTOToDomain?(): Domain;
}
