import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema({ collection: 'user' })
export class User extends Document {
  @Prop()
  study: boolean;

  @Prop()
  type: string;

  @Prop()
  username: string;

  @Prop()
  password: string;

  @Prop()
  email: string;

  @Prop()
  passsalt: string;

  @Prop()
  role: string;

  @Prop()
  add_time: number;

  @Prop()
  up_time: number;
}

export const UserSchema = SchemaFactory.createForClass(User);
