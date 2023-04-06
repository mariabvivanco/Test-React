import React, { DragEvent } from "react";
import { Box, Flex, Heading, Stack } from "@chakra-ui/react";
import { ReactElement } from "react";
import { useDispatch } from "react-redux";
import { endDrag, isDragging, startDrag } from "../../store/dragSlicer";
import { useSelector } from "react-redux";

import './exercise.css'

interface CardProps {
  question: string;
  icon: ReactElement;
  answer: string;
}

const CardQuestion = ({ answer, icon, question }: CardProps) => {
  const dispatch = useDispatch();
  const isDrag = useSelector(isDragging)
  const onDragStart = (event: DragEvent) => {
    event.dataTransfer.setData("answer", answer);
    event.dataTransfer.setData("question", question);
    dispatch(startDrag());
  };

  const onDragEnd = () => {
    dispatch(endDrag());
  };
  return (
    <Box
      maxW={{ base: "120px", md: "175px" }}
      w={"full"}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}
      className={isDrag?'is-drag':''}
      draggable
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
    >
      <Stack align={"center"} spacing={2}>
        <Flex
          w={10}
          h={10}
          align={"center"}
          justify={"center"}
          color={"white"}
          rounded={"full"}
          bg={"primary"}
        >
          {icon}
        </Flex>
        <Box mt={2}>
          <Heading size={{ base: "sm", md: "md" }}>{answer}</Heading>
        </Box>
      </Stack>
    </Box>
  );
};

export default CardQuestion;
