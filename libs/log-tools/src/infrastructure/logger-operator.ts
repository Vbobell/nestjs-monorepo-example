import { Logger } from '@nestjs/common';
import { MonoTypeOperatorFunction } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

export interface LoggerProps {
  message: string;
  params?: Record<string, unknown>;
}

export interface LoggerMessages {
  initLog: LoggerProps;
  endLog: LoggerProps;
  errorLog: LoggerProps;
}

export function formatLog(logName: string, loggerTypeProps: LoggerProps) {
  const logParams = loggerTypeProps.params
    ? ' | ' + JSON.stringify(loggerTypeProps.params)
    : '';

  return `${logName} | ${loggerTypeProps.message}${logParams}`;
}

export function loggerOperator<T>(
  logger: Logger,
  logName: string,
  loggerMessages: LoggerMessages,
): MonoTypeOperatorFunction<T> {
  return (stream) => {
    logger.log(formatLog(logName, loggerMessages.initLog));

    return stream.pipe(
      tap(() => {
        logger.log(formatLog(logName, loggerMessages.endLog));
      }),
      catchError((error: unknown) => {
        logger.error(formatLog(logName, loggerMessages.errorLog));

        throw error;
      }),
    );
  };
}
