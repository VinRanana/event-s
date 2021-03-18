import React, { MouseEventHandler } from 'react'
import {
  Button, Popover, PopoverTrigger, Portal, PopoverContent,
  PopoverArrow, PopoverHeader, PopoverCloseButton, PopoverBody, ButtonGroup,
} from '@chakra-ui/react';

interface HandleSubmitInterface {
  unattend: MouseEventHandler
}

export default function Unattend ({unattend}: HandleSubmitInterface) {

  return (
    <Popover>

      <PopoverTrigger>
        <Button w={'40%'} data-testid="unattend1">Unattend</Button>
      </PopoverTrigger>
      
      <Portal>
        <PopoverContent>
          <PopoverArrow />
          <PopoverHeader>Please confirm!</PopoverHeader>
          <PopoverCloseButton />
          
          <PopoverBody>
            <ButtonGroup size="sm">
                <Button variant="outline">Cancel</Button>
                <Button onClick={unattend} colorScheme="gray" data-testid="unattend2">Unattend</Button>
              </ButtonGroup>
          </PopoverBody>
          
        </PopoverContent>
      </Portal>

    </Popover>
  )
}