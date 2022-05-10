import {
     Get, JsonController, OnUndefined, Param, Req
} from 'routing-controllers';
import { OpenAPI, ResponseSchema } from 'routing-controllers-openapi';

import { UserNotFoundError } from '../core/errors/UserNotFoundError';
import { IUser } from '../models';
import { UserService } from '../services/UserService';
import { UserResponse } from './responses/user.response';





@JsonController('/users')
@OpenAPI({ security: [{ basicAuth: [] }] })
export class UserController {

    constructor(
        private userService: UserService
    ) { }

    @Get()
    @ResponseSchema(UserResponse, { isArray: true })
    public find(): Promise<IUser[]> {
        return this.userService.find();
    }

    @Get('/me')
    @ResponseSchema(UserResponse, { isArray: true })
    public findMe(@Req() req: any): Promise<IUser[]> {
        return req.user;
    }

    @Get('/:id')
    @OnUndefined(UserNotFoundError)
    @ResponseSchema(UserResponse)
    public one(@Param('id') id: string): Promise<IUser | undefined> {
        return this.userService.findOne(id);
    }

    
}
