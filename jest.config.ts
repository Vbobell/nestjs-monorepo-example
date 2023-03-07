export default {
  moduleFileExtensions: ['js', 'json', 'ts'],
  rootDir: '.',
  testRegex: '.*\\.spec\\.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  collectCoverageFrom: ['**/*.(t|j)s'],
  coverageDirectory: './coverage',
  testEnvironment: 'node',
  roots: ['<rootDir>/apps/', '<rootDir>/libs/'],
  moduleNameMapper: {
    '^@apps/sw/(.*)$': '<rootDir>/apps/sw/src/$1',
    '^@libs/test-helper': '<rootDir>/libs/test-helper/src/index.ts',
    '^@libs/test-helper/(.*)$': '<rootDir>/libs/test-helper/src/$1',
  },
};
