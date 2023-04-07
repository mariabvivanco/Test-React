//Box where the chosen answer is dropped

import React, { DragEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Text, Center } from "@chakra-ui/react";

import { answers, setAnswer } from "../../store/exerciseSlicer";
import "./exercise.css";
import { CardQuestion } from "./CardQuestion";
import useIconOk from "../../hooks/useIconOk";
import {
  TbSquareNumber1,
  TbSquareNumber2,
  TbSquareNumber3,
  TbSquareNumber4,
} from "react-icons/tb";
import { endDrag } from "../../store/dragSlicer";

interface CardProps {
  question: string;
}

export const CardAnswer: React.FC<CardProps> = ({ question }) => {
  const dispatch = useDispatch();
  const onDropEntry = (event: DragEvent<HTMLDivElement>) => {
    const question = event.dataTransfer.getData("question");
    const answer = event.dataTransfer.getData("answer");
    dispatch(setAnswer({ question, answer }));
    dispatch(endDrag());
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
        pt="20px"
      >
        <Center>
          {title !== "" ? (
            <CardQuestion
              question={question}
              answer={title}
              icon={
                useIconOk(question, title) === 0 ? (
                  <TbSquareNumber1 />
                ) : useIconOk(question, title) === 1 ? (
                  <TbSquareNumber2 />
                ) : useIconOk(question, title) === 2 ? (
                  <TbSquareNumber3 />
                ) : (
                  <TbSquareNumber4 />
                )
              }
            />
          ) : (
            <Text className="blinks" color="neutral" mt="40px">
              Arrastre aquí su respuesta
            </Text>
          )}
        </Center>
      </Box>
    </div>
  );
};
