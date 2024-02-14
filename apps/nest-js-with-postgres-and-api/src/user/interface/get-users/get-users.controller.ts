import { Controller, Get, HttpCode, Param } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Observable } from 'rxjs';

import { GetUsersUseCase } from '@apps/nest-js-with-postgres-and-api/user/application/get-users/get-users.use-case';
import { User } from '@apps/nest-js-with-postgres-and-api/user/domain/user';
import { UserResponseDTO } from '@apps/nest-js-with-postgres-and-api/user/interface/dto/user-response.dto';

@Controller('user')
export class GetUsersController {
  constructor(private readonly getUsersUseCase: GetUsersUseCase) {}

  @Get('/list')
  @ApiTags('user')
  @ApiOkResponse({ description: 'users list', type: [UserResponseDTO] })
  @HttpCode(200)
  handle(@Param() users: Pick<User, 'id'>[]): Observable<User[]> {
    return this.getUsersUseCase.execute(users);
  }
}
