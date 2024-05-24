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
    route: 'aws-sqs-and-api-example',
    port: 3002,
  },
];
