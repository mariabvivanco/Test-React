import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import { resultData } from "../../json/result";

export const ResultTotal=()=> {
  

  return (
    <Box textAlign="center" py={10} px={6}>
      {resultData[2].value.icon}
      <Heading as="h2" size="xl" mt={6} mb={2}>
        {resultData[2].value.title}
      </Heading>
      <Text color={"neutral"}>{resultData[2].value.description}</Text>
    </Box>
  );
}
