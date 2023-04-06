
import React, { useEffect } from 'react'
import { Box , Icon, Center} from '@chakra-ui/react'

import Question from '../components/Exercise/Question';

import {test} from '../json//test'
import CardAnswer from '../components/Exercise/CardAnswer';

const Exercises=()=> {


  

  return (
    <Box  h='100vh'>
      <Question question={test[0].question} choice={test[0].choice} answer={test[0].answer}/>
      <Center>
        <CardAnswer question={test[0].question}  icon={<Icon as={()=><></>} w={6} h={6} />}/>
      </Center>
    
      
  </Box>
  )
}

export default Exercises