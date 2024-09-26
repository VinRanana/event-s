import React from 'react';
import EventCard from './EventCard';
import { Wrap } from "@chakra-ui/react"
import { EventListInterface } from '../../interfaces/events.interfaces';

export default function EventList ({events}: EventListInterface) {
  return (
    <Wrap w={'100%'} marginTop={5} align="start" data-testid="event-list" >
      {
        events.filter(event => event.date > new Date().toISOString())
        .map(event => <EventCard event={event} key={event._id}/>)
      }
    </Wrap>
  )
}


