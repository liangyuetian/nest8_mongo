import { Module } from '@nestjs/common';
import { MongodbService } from './mongodb.service';
import { MongodbController } from './mongodb.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Cat, CatSchema } from './schema/cat.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://yapi:123456@127.0.0.1:27017/yapi', {
      connectionName: 'yapi',
    }),
    MongooseModule.forRoot('mongodb://yapi:123456@127.0.0.1:27017/yapi', {
      connectionName: 'yapi2',
    }),
    MongooseModule.forFeature([
      {
        name: Cat.name,
        schema: CatSchema,
      },
    ]),
  ],
  providers: [MongodbService],
  controllers: [MongodbController],
})
export class MongodbModule {}
