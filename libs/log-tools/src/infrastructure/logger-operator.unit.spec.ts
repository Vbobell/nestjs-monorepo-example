import { loggerOperator } from './logger-operator';
import { observableFixture, loggerMock } from './logger-operator.fixture.spec';

describe('loggerOperator', () => {
  describe('When execute logger operator', () => {
    it('Then execute successfully', (done) => {
      observableFixture('Hello world')
        .pipe(
          loggerOperator(loggerMock, 'observableFixture', {
            initLog: {
              message: 'execution started',
            },
            endLog: {
              message: 'finished execution',
            },
            errorLog: {
              message: 'execution with error',
            },
          }),
        )
        .subscribe(() => {
          expect(loggerMock.log).toBeCalledWith(
            'observableFixture | execution started',
          );
          expect(loggerMock.log).toBeCalledWith(
            'observableFixture | finished execution',
          );
          expect(loggerMock.error).not.toBeCalled();
          done();
        });
    });

    it('Then execute with error', (done) => {
      observableFixture('')
        .pipe(
          loggerOperator(loggerMock, 'observableFixture', {
            initLog: {
              message: 'execution started',
            },
            endLog: {
              message: 'finished execution',
            },
            errorLog: {
              message: 'execution with error',
            },
          }),
        )
        .subscribe({
          error: () => {
            expect(loggerMock.log).toBeCalledWith(
              'observableFixture | execution started',
            );
            expect(loggerMock.log).toBeCalledWith(
              'observableFixture | finished execution',
            );
            expect(loggerMock.error).toBeCalledWith(
              'observableFixture | execution with error',
            );

            done();
          },
        });
    });
  });
});
