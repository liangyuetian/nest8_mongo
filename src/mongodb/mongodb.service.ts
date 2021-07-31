import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './schema/user.schema';

@Injectable()
export class MongodbService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}
  async query(): Promise<User[]> {
    console.log(1);
    return this.userModel
      .find({}, { username: 1, email: 1 })
      .limit(10)
      .sort({ add_time: -1 })
      .exec();
  }
}
