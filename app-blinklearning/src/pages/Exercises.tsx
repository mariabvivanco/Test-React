import { Box } from '@chakra-ui/react'
import React from 'react'
import DragAndDrop from '../components/Exercise/DragAndDrop'
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const Exercises=()=> {
  return (
    <Box bg='bg' h='100vh'>
      <DndProvider backend={HTML5Backend}>
    <DragAndDrop></DragAndDrop>
    </DndProvider>
  </Box>
  )
}

export default Exercises