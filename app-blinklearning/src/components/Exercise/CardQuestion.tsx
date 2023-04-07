//Boxes for possible answers that allow dragging
import React, { DragEvent, ReactElement } from "react";
import { useDispatch, useSelector } from "react-redux";
import { endDrag, isDragging, startDrag } from "../../store/dragSlicer";
import { Box, Flex, Heading, Stack } from "@chakra-ui/react";

import './exercise.css'
import { IconType } from "react-icons/lib";

interface CardProps {
  question: string;
  icon: any;
  answer: string;
  ind:string;
}

export const CardQuestion = ({ answer, icon, question, ind }: CardProps) => {
  const dispatch = useDispatch();
  const isDrag = useSelector(isDragging)
  const onDragStart = (event: DragEvent) => {
    console.log('si empece')
    event.dataTransfer.setData("answer", answer);
    event.dataTransfer.setData("question", question);
    event.dataTransfer.setData("ind", ind);
    dispatch(startDrag());
  };

  const onDragEnd = () => {
    console.log('si termine')
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


