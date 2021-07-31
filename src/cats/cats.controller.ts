import {
  Controller,
  Get,
  ParseIntPipe,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateCatDto } from './dto/createCatDto';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}
  @Get('')
  name() {
    return 'cats';
  }

  @Get('create')
  // @UsePipes(new ParseIntPipe()) // 使用管道验证
  @UsePipes(new ValidationPipe()) // 使用管道验证
  create(@Query() query: CreateCatDto) {
    console.log(query);
    return this.catsService.create(query);
  }

  @Get('findAll')
  findAll() {
    return this.catsService.findAll();
  }
}
