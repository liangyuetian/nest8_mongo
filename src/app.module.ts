import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongodbModule } from './mongodb/mongodb.module';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [MongodbModule, CatsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
