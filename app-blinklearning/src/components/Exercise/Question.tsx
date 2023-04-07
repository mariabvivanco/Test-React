//Component where the boxes of the possible answers and the box with the chosen answer are inserted
import React from "react";
import { Box, Container, Flex, Heading, Icon, Stack } from "@chakra-ui/react";
import {
  TbSquareNumber1,
  TbSquareNumber2,
  TbSquareNumber3,
  TbSquareNumber4,
} from "react-icons/tb";
import { CardQuestion } from "./CardQuestion";
import useAnswerOk from "../../hooks/useAnswerOk";

interface Props {
  question: string;
  choice: string[];
  answer: string;
}

export const Question: React.FC<Props> = ({ choice, question }) => {
  return (
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading fontSize={{ base: "2xl", sm: "4xl" }} fontWeight={"bold"}>
          {question}
        </Heading>
      </Stack>

      <Container maxW={"5xl"} mt={12}>
        <Flex flexWrap="wrap" gridGap={6} justify="center">
          {!useAnswerOk(question, choice[0]) && (
            <CardQuestion
              question={question}
              answer={choice[0]}
              icon={<Icon as={TbSquareNumber1} w={6} h={6} />}
            />
          )}
          {!useAnswerOk(question, choice[1]) && (
            <CardQuestion
              question={question}
              answer={choice[1]}
              icon={<Icon as={TbSquareNumber2} w={6} h={6} />}
            />
          )}
          {!useAnswerOk(question, choice[2]) && (
            <CardQuestion
              question={question}
              answer={choice[2]}
              icon={<Icon as={TbSquareNumber3} w={6} h={6} />}
            />
          )}
          {!useAnswerOk(question, choice[3]) && (
            <CardQuestion
              question={question}
              answer={choice[3]}
              icon={<Icon as={TbSquareNumber4} w={6} h={6} />}
            />
          )}
        </Flex>
      </Container>
    </Box>
  );
};
