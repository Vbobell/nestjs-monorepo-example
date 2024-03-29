export default {
  moduleFileExtensions: ['js', 'json', 'ts'],
  rootDir: '.',
  testRegex: '.*\\unit.spec\\.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  collectCoverageFrom: ['**/*.(t|j)s'],
  coverageDirectory: './coverage',
  testEnvironment: 'node',
  roots: ['<rootDir>/apps/', '<rootDir>/libs/'],
  moduleNameMapper: {
    '^@apps/postgres-and-api-example/(.*)$':
      '<rootDir>/apps/postgres-and-api-example/src/$1',
    '^@apps/gateway/(.*)$': '<rootDir>/apps/gateway/src/$1',
    '^@libs/test-tools': '<rootDir>/libs/test-tools/src/index.ts',
    '^@libs/test-tools/(.*)$': '<rootDir>/libs/test-tools/src/$1',
    '^@libs/health-check': '<rootDir>/libs/health-check/src/index.ts',
    '^@libs/health-check/(.*)$': '<rootDir>/libs/health-check/src/$1',
    '^@libs/abstract-tools': '<rootDir>/libs/abstract-tools/src/index.ts',
    '^@libs/abstract-tools/(.*)$': '<rootDir>/libs/abstract-tools/src/$1',
    '^@libs/log-tools': '<rootDir>/libs/log-tools/src/index.ts',
    '^@libs/log-tools/(.*)$': '<rootDir>/libs/log-tools/src/$1',
    '^@libs/database-tools': '<rootDir>/libs/database-tools/src/index.ts',
    '^@libs/database-tools/(.*)$': '<rootDir>/libs/database-tools/src/$1',
  },
};
