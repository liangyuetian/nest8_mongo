import { Controller, Get } from '@nestjs/common';
import { MongodbService } from './mongodb.service';

@Controller('mongodb')
export class MongodbController {
  constructor(private mongodbService: MongodbService) {}
  @Get('query')
  query() {
    return this.mongodbService.query();
  }
}
