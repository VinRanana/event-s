import React, { useState, useEffect } from "react";
import EventList from "../../components/Event/EventList";
import SearchBar from "../SearchBar";
import SortBar from "../SortBar";
import Map from "../map/Map";
import Spinner from '../../components/Handling/Spinner';
import { Box, Flex, Text ,Stack, Heading } from "@chakra-ui/react";
import { motion } from 'framer-motion';
import { EventListInterface } from "../../interfaces/events.interfaces";

export default function Events({ events }: EventListInterface) {
  // events = events === undefined ? [] : events; // Need an alternative to display rather than the error
  // testing should catch this

  const [filteredEvents, setFilteredEvents] = useState([...events]);
  const [searchTerm, setSearchTerm] = useState('')
  const [checkBoxes, setCheckboxes] = useState<string[]>([])

  useEffect(() => {
    let filteredEvents = events;
    if (searchTerm) filteredEvents = events.filter(
      events => events.name.toLowerCase().includes(searchTerm) || events.description.toLowerCase().includes(searchTerm)
      )

    if (checkBoxes.length) filteredEvents = filteredEvents.filter(event => checkBoxes.includes(event.type))

    setFilteredEvents(filteredEvents);
  }, [events, searchTerm, checkBoxes])

  return (
    <Box bg={'custom.100'} h={'100vh'}
         bgImage="url('https://res.cloudinary.com/dujun1hoe/image/upload/v1615228154/event-s/gradient-background-26046-26731-hd-wallpapers.jpg_cenrqe.png')"  
         bgSize="cover" backgroundRepeat="no-repeat"
     >
      <Flex h={'50px'} align={'flex-end'} justify={'center'} >
        <motion.div initial="hidden" animate="visible"
                    variants={{ hidden: { scale: .8, opacity: 0 }, visible: { scale: 1, opacity: 1, transition: { delay: .4 }} }}
        >
          <Heading  color={'white'} align={'center'} justify={'center'} >Find an event</Heading>
        </motion.div>
      </Flex>
      <Stack minH={'100vh'}  direction={{ base: 'column', md: 'row' }} p={5} >
        {
          false ?
          (<Spinner />) :
          (<>
            <Flex flex={1} paddingTop={0} p={8} justify={'center'} >
              <Stack spacing={6} w={'full'} maxW={'lg'} >
                <SortBar checkBoxes={checkBoxes} setCheckboxes={setCheckboxes} />

                <Map filteredEvents={filteredEvents}/>

                <Text color={'black'} fontWeight="bold" align={'center'} >
                  {filteredEvents.length} matching events
                </Text>
              </Stack>
            </Flex>

            <Flex borderRadius="md" flex={2} p={8} flexDirection={'column'}
                  justifyContent={'end'} bg={'transparent'} h={'80vh'}
            >
              <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

              <Box w={'100%'} overflow={'scroll'} h={'100vh'} mt={10} >
                <EventList events={filteredEvents} />
              </Box>
            </Flex>
          </>)
        }
      </Stack>
     </Box>
  );
}

