import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}
  // 生成 access_token
  sign({ username, password }) {
    return this.jwtService.sign({ username, password });
  }
  verify(token) {
    return this.jwtService.verify(token);
  }
  findUser() {}

  create({ username, password }) {
    console.log(username, password);
  }
  login({ username, password }) {
    return {
      access_token: this.sign({ username, password }),
    };
  }
  status() {}
}
