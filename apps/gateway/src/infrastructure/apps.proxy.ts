export interface AppProxy {
  route: string;
  port: number;
}

export const appsToProxy: AppProxy[] = [
  {
    route: 'postgres-and-api-example',
    port: 3001,
  },
  {
    route: 'sqs-consumer-example',
    port: 3002,
  },
];
