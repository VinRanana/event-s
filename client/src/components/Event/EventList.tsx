import React from 'react';
import EventCard from './EventCard';
import { Wrap } from "@chakra-ui/react"

interface EventListInterface {
  value: [{
    _id: string;
    name: string;
    photo: string;
    location: string;
    date: string;
  }]
}

export default function EventList ({value}: EventListInterface) {
  return (
    <Wrap w={'100%'} marginTop={5} align="start">
      {
        value.filter(event => event.date > new Date().toISOString())
        .map(event => <EventCard value={event} key={event._id}/>)
      }
    </Wrap>
  )
}


