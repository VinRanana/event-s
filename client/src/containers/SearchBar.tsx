import React, { ChangeEventHandler } from 'react';
import {
  Flex,
  Box,
  FormControl,
  Input
} from '@chakra-ui/react';

interface SearchInterface {
  searchTerm: string,
  setSearchTerm: Function
}

export default function SearchBar({ searchTerm, setSearchTerm }: SearchInterface) {
  const handleChange: ChangeEventHandler<HTMLInputElement> = e => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  return (
    <Box  >
      <FormControl>
        <Flex>
          <FormControl minWidth={'30vh'} w={'60vh'} id="search_bar" marginRight={4} >
            <Input id="search"  placeholder="Search for events" value={searchTerm} name="search" onChange={handleChange} bg={'white'} w={'100%'} />
          </FormControl>
        </Flex>
      </FormControl>
    </Box>
  )
}
