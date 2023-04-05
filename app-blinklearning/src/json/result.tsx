import React from 'react'

import { Box,  Flex  } from '@chakra-ui/react';
import {  WarningTwoIcon, CloseIcon, CheckCircleIcon  } from '@chakra-ui/icons';


interface IResult {
  name:string,
  value: {
  icon: JSX.Element,
  title:string,
  description:string
}}

function ok() 
   {return(
        <CheckCircleIcon boxSize={'50px'} color={'green.500'} />
    )}

function warning() 
   {return(
        <WarningTwoIcon boxSize={'50px'} color={'orange.300'} />
    )}

function bad() 
   {return(
    <Box display="inline-block">
    <Flex
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      bg={'red.500'}
      rounded={'50px'}
      w={'55px'}
      h={'55px'}
      textAlign="center">
      <CloseIcon boxSize={'20px'} color={'white'} />
    </Flex>
  </Box>
    )}

export const resultData:IResult[] = [
    {name:'success',
    value:
        {icon:ok(),
        title:"Felicidades",
        description:"Ha acertado el total de la respuestas, es evidente que tiene una excelente cultura general"

    }},
    {name:'warning',
    value:
        {icon:warning(),
        title:"Aprobado",
        description:"Aunque ha fallado en algunas reguntas la mayoría de las mismas ha sido respondida correctamente "

    }},
    {name:'bad',
    value:
        {icon:bad(),
        title:"Lo sentimos",
        description:"Esta vez no ha podido ser pero no te desanimes, pronto alcanzaras los resultados esperados"

    }}
]