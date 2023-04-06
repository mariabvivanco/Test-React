import React from "react";
import { Box, Container, Flex, Heading, Icon, Stack } from "@chakra-ui/react";
import CardQuestion from "./CardQuestion";

import {
  TbSquareNumber1,
  TbSquareNumber2,
  TbSquareNumber3,
  TbSquareNumber4,
} from "react-icons/tb";

interface Props {
  question: string;
  choice: string[];
  answer: string;
}

const Question: React.FC<Props> = ({ choice, question }) => {
  return (
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading fontSize={{ base: "2xl", sm: "4xl" }} fontWeight={"bold"}>
          {question}
        </Heading>
      </Stack>

      <Container maxW={"5xl"} mt={12}>
        <Flex flexWrap="wrap" gridGap={6} justify="center">
          <CardQuestion
            question={question}
            answer={choice[0]}
            icon={<Icon as={TbSquareNumber1} w={6} h={6} />}
          />
          <CardQuestion
            question={question}
            answer={choice[1]}
            icon={<Icon as={TbSquareNumber2} w={6} h={6} />}
          />
          <CardQuestion
            question={question}
            answer={choice[2]}
            icon={<Icon as={TbSquareNumber3} w={6} h={6} />}
          />
          <CardQuestion
            question={question}
            answer={choice[3]}
            icon={<Icon as={TbSquareNumber4} w={6} h={6} />}
          />
        </Flex>
      </Container>
    </Box>
  );
};

export default Question;
