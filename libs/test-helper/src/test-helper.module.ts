import { ModuleMetadata } from '@nestjs/common';
import { Test } from '@nestjs/testing';

export class TestHelper {
  createTestingModule(metadata: ModuleMetadata) {
    const moduleRef = Test.createTestingModule(metadata);

    moduleRef.setLogger({
      debug: jest.fn(),
      error: jest.fn(),
      log: jest.fn(),
      verbose: jest.fn(),
      warn: jest.fn(),
    });

    return moduleRef;
  }
}
