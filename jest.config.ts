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
    '^@apps/sw/(.*)$': '<rootDir>/apps/sw/src/$1',
    '^@apps/gateway/(.*)$': '<rootDir>/apps/gateway/src/$1',
    '^@libs/test-helper': '<rootDir>/libs/test-helper/src/index.ts',
    '^@libs/test-helper/(.*)$': '<rootDir>/libs/test-helper/src/$1',
    '^@libs/health-check': '<rootDir>/libs/health-check/src/index.ts',
    '^@libs/health-check/(.*)$': '<rootDir>/libs/health-check/src/$1',
    '^@libs/abstract-tools': '<rootDir>/libs/abstract-tools/src/index.ts',
    '^@libs/abstract-tools/(.*)$': '<rootDir>/libs/abstract-tools/src/$1',
  },
};
