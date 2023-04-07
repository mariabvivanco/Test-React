//Evaluation header obtained in the test
import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import { InfoIcon } from '@chakra-ui/icons';

export const ResultDet=()=> {  

  return (
    <Box textAlign="center" py={10} px={6}>
    <InfoIcon boxSize={'50px'} color={'blue.500'} />
    <Heading as="h2" size="xl" mt={6} mb={2}>
      Estos son sus resultados
    </Heading>
    <Text color={'gray.500'}>
      Gracias por hacer nuestro test
    </Text>
  </Box>
  );
}
