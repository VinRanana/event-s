import React, { SetStateAction } from "react";

export interface UserInterface {
  email: string,
  password: string,
  firstName: string,
  lastName: string,
  photo: string,
  host: string,
  eventList: {
    _id: string;
    name: string;
  }[]
}

export interface ProfileInterface {
  user: UserInterface,
  setUser: Function //change type like line 23
}

export interface AuthInterface {
  history: string[],
  setIsAuthenticated: React.Dispatch<SetStateAction<boolean>>
}
