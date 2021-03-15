export interface EventInterface {
  _id?: string,
  name: string,
  limit: number,
  location: string,
  type: string,
  description: string,
  date: string,
  duration: number,
  photo: string,
  attendees?:[string];
  user?: {}
}

export interface EventDetailsInterface {
  events: EventInterface[];
  signUpDown: Function;
  user: {
    host: string;
    eventList: {
      _id: string;
    }[];
  };
}

export interface EventListInterface {
  events: EventInterface[]
}