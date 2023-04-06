import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import { resultData } from "../../json/result";
import testEval  from "../../hooks/testEval";

export const ResultTotal=()=> {
 const ind=testEval()

  return (
    <Box textAlign="center" py={10} px={6}>
      {resultData[ind]?.value.icon}
      <Heading as="h2" size="xl" mt={6} mb={2}>
        {resultData[ind]?.value.title}
      </Heading>
      <Text color={"neutral"}>{resultData[ind]?.value.description}</Text>
    </Box>
  );
}
