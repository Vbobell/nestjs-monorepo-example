export abstract class DTO<Domain> {
  abstract mapDomainToDTO?(domain: Domain): Partial<DTO<Domain>>;
  abstract mapDomainsToDTO?(domains: Domain[]): Partial<DTO<Domain>>[];
  abstract customMapDomainToDTO?(domain: unknown): Partial<DTO<Domain>>;
  abstract customMapDomainsToDTO?(domains: unknown): Partial<DTO<Domain>>[];
}
