import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service.js';
import { access } from 'fs';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService,
    ) {}

    async login(username: string, pass: string){
        const user = await this.usersService.findOneByUsername(username);
        if (!user || user.password != pass){
            throw new UnauthorizedException('Invalid username or password!');
        }
        const payload = { sub: user.user_id, username: user.username, role: user.role};
        return {
            access_token: await this.jwtService.signAsync(payload),
        }
    }
    
}
