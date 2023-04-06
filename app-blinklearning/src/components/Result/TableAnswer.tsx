import React from 'react'
import { Flex, Box, Text } from "@chakra-ui/react";
import { test } from "../../json/test";
import { CheckIcon, CloseIcon } from "@chakra-ui/icons";
import { useSelector } from 'react-redux';
import { answers } from '../../store/exerciseSlicer';
import useEval from '../../hooks/useEval';
const TablaAnswer =()=> {

const answerUser = useSelector(answers)
 
    return (
        <Flex justifyContent="center">
          <Box width="860px" borderRadius="lg" overflow="hidden">
            <Flex borderBottomWidth="1px" bg="gray.100" padding="5px">
              <Text flex="2" fontSize="lg" fontWeight="bold" color="gray.800">Pregunta</Text>
              <Text flex="1" fontSize="lg" fontWeight="bold" color="gray.800">Respuesta correcta</Text>
              <Text flex="0 0 40px" fontSize="lg" fontWeight="bold" color="gray.800"></Text>
            </Flex>
            {test.map((item) => (
              <Flex borderBottomWidth="1px" padding="5px" key={item.question}>
                <Text flex="2" color="gray.800">{item.question}</Text>
                <Text flex="1" color="gray.800">{item.answer}</Text>
                <Box flex="0 0 40px" color="gray.800" textAlign="center">
                  
                  {useEval(item.question)? <CheckIcon color="green.500" /> : <CloseIcon color="red.500" />}
                </Box>
              </Flex>
            ))}
          </Box>
        </Flex>
      );
   
}

export default TablaAnswer