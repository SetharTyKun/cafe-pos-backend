import { Controller,Post,Body } from '@nestjs/common';
import { AuthService } from './auth.service.js';

@Controller('auth')
export class AuthController {
    constructor( private readonly authServer: AuthService){}
    @Post('login')
    async login(@Body() body: Record<string, any>){
        return this.authServer.login(body.username, body.password);
    }
}
