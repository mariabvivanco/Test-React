import React, { DragEvent, useEffect, useState } from "react";
import {
  Box,
  Flex,
  Heading,
  Stack,
  Icon,
  Text,
  Center,
} from "@chakra-ui/react";
import { ReactElement } from "react";
import { useSelector } from "react-redux";
import { answers, setAnswer } from "../../store/exerciseSlicer";
import { FcAnswers } from "react-icons/fc";

import "./exercise.css";
import { useDispatch } from "react-redux";

interface CardProps {
  question: string;
  
}

const CardAnswer: React.FC<CardProps> = ({ question }) => {
  const dispatch = useDispatch();
  const onDropEntry = (event: DragEvent<HTMLDivElement>) => {
    const question = event.dataTransfer.getData("question");
    
    const answer = event.dataTransfer.getData("answer");
    dispatch(setAnswer({ question, answer }));
  };

  const allowDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const answersUser = useSelector(answers);
  const [title, setTitle] = useState("");

  useEffect(() => {
    const temp = answersUser.find((item) => item.question === question)?.answer;
    setTitle(temp ? temp : "");
  }, [question, answersUser]);

  return (
    <div onDrop={onDropEntry} onDragOver={allowDrop}>
      <Box
        w={{ base: "275px", md: "575px" }}
        h="150px"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        p={5}
        pt="50px"
      >
        <Center>
          <Stack align={"start"} direction="row" spacing={2}>
            <Flex
              w={10}
              h={10}
              align={"center"}
              justify={"center"}
              color={"white"}
              rounded={"full"}
              bg={"grey"}
            >
              <Icon as={FcAnswers} w={6} h={6} />
            </Flex>

            {title !== "" ? (
              <Heading size={{ base: "sm", md: "md" }}>{title}</Heading>
            ) : (
              <Text
                className="blinks"
                ml="30px"
                align={"center"}
                color="neutral"
              >
                Arrastre aquí su respuesta
              </Text>
            )}
          </Stack>
        </Center>
      </Box>
    </div>
  );
};

export default CardAnswer;
