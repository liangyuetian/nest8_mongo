import { Body, Controller, Post, Req, Res, UseGuards } from '@nestjs/common';
import { Request, Response } from 'express';
import { AuthService } from './auth.service';
import { AuthLoginDto } from './dto/authLoginDto';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('create')
  async create(@Body() data: AuthLoginDto) {
    this.authService.create(data);
    return {
      status: 0,
      data: {},
      message: '注册成功',
    };
  }
  @Post('login')
  async login(
    @Body() data: AuthLoginDto,
    @Res({ passthrough: true }) response: Response,
  ) {
    const { access_token } = this.authService.login(data);
    response.cookie('access_token', access_token);
    return {
      status: 0,
      data: {
        access_token,
      },
      message: '登录成功',
    };
  }
  @Post('status')
  // @UseGuards(AuthGuard('jwt'))
  async status(
    @Body() data: AuthLoginDto,
    @Req() request: Request,
    @Res({ passthrough: true }) response: Response,
  ) {
    return {
      status: 0,
      data: {
        verify: this.authService.verify(request.cookies['access_token']),
      },
      message: '登录成功',
    };
  }
}
