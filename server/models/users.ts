import { Schema, model, Document } from 'mongoose';

interface IUser {
  email: string,
  password: string,
  firstName?: string,
  lastName?: string,
  host: boolean,
  photo?: string,
  about?: string,
  location?: string,
  eventList?: object[] | []
}

interface IUserDoc extends IUser, Document {}

const UserSchemaFields: Record<keyof IUser, any> = {
  email: {
    type: String, required: true,
  },
  password: {
    type: String, required: true,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  host: {
    type: Boolean, required: true,
  },
  photo: {
    type: String,
  },
  about: {
    type: String,
  },
  location: {
    type: String,
  },
  eventList: [],
};

const UserSchema = new Schema(UserSchemaFields);

export const User = model<IUserDoc>('User', UserSchema);
