//Detail with the questions, correct answers and correct answer
import React from "react";
import { Flex, Box, Text, useColorMode } from "@chakra-ui/react";
import { CheckIcon, CloseIcon } from "@chakra-ui/icons";
import useEval from "../../hooks/useEval";
import { test } from "../../json/test";

export const TablaAnswer = () => {
  const { colorMode } = useColorMode();

  return (
    <Flex justifyContent="center">
      <Box width="860px" borderRadius="lg" overflow="hidden">
        <Flex
          borderBottomWidth="1px"
          bg={colorMode === "light" ? "gray.100" : "gray.700"}
          padding="5px"
        >
          <Text
            flex="2"
            fontSize="lg"
            fontWeight="bold"
            color={colorMode === "light" ? "gray.800" : "gray.500"}
          >
            Pregunta
          </Text>
          <Text
            flex="1"
            fontSize="lg"
            fontWeight="bold"
            color={colorMode === "light" ? "gray.800" : "gray.500"}
          >
            Respuesta correcta
          </Text>
          <Text flex="0 0 40px" fontSize="lg" fontWeight="bold"></Text>
        </Flex>
        {test.map((item) => (
          <Flex borderBottomWidth="1px" padding="5px" key={item.question}>
            <Text
              flex="2"
              color={colorMode === "light" ? "gray.800" : "gray.500"}
            >
              {item.question}
            </Text>
            <Text flex="1" color="gray.800">
              {item.answer}
            </Text>
            <Box flex="0 0 40px" color="gray.800" textAlign="center">
              {useEval(item.question) ? (
                <CheckIcon color="green.500" />
              ) : (
                <CloseIcon color="red.500" />
              )}
            </Box>
          </Flex>
        ))}
      </Box>
    </Flex>
  );
};
