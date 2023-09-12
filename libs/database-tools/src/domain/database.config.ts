export interface DatabaseConfig<T> {
  synchronize: boolean;
  type: T;
  url: string;
  host: string;
}
