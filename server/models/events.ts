import { Schema, model, Date, Document } from 'mongoose';

interface IEvent {
  name: string,
  date?: Date,
  location: string,
  geolocation?: string,
  limit?: number,
  duration?: number,
  attendees?: number,
  photo?: string,
  type: string,
  description?: string,
  owner: string,
  list?: object[]
}

interface IEventDoc extends IEvent, Document {}

const EventSchemaFields: Record<keyof IEvent, any> = {
  name: {
    type: String, required: true,
  },
  date: {
    type: Date, default: Date.now,
  },
  location: {
    type: String, required: true,
  },
  geolocation: {
    type: String,
  },
  limit: {
    type: Number, default: 0,
  },
  duration: {
    type: Number, default: 1,
  },
  attendees: {
    type: Number, default: 0,
  },
  photo: {
    type: String,
  },
  type: {
    type: String, required: true
  },
  description: {
    type: String,
  },
  owner: {
    type: String, required: true,
  },
  list: [{
    type: Schema.Types.ObjectId, ref: 'Users',
  }],
}

const EventSchema = new Schema(EventSchemaFields);

export const Events = model<IEventDoc>('Events', EventSchema);
