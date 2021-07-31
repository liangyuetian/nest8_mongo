import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MongodbController } from './mongodb.controller';
import { MongodbService } from './mongodb.service';
import { Cat, CatSchema } from './schema/cat.schema';
import { User, UserSchema } from './schema/user.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://yapi:123456@127.0.0.1:27017/yapi'),
    MongooseModule.forFeature([
      {
        name: Cat.name,
        schema: CatSchema,
      },
      {
        name: User.name,
        schema: UserSchema,
      },
    ]),
  ],
  providers: [MongodbService],
  controllers: [MongodbController],
})
export class MongodbModule {}
