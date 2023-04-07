import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Box, Center, Button, Progress } from "@chakra-ui/react";

import { Question } from "../components/Exercise/Question";
import { CardAnswer } from "../components/Exercise/CardAnswer";
import { Header } from "../components/Header/Header";
import { test } from "../json//test";

import { answers, finishExercise } from "../store/exerciseSlicer";

import "../components/Exercise/exercise.css";

const Exercises = () => {
  const dispatch = useDispatch();
  const answersUser = useSelector(answers);
  const [step, setStep] = useState(0);
  const [progress, setProgress] = useState(10);

  return (
    <Box h="100vh" textAlign={"center"}>
      <Header title="Test de Cultura General"></Header>
      <Box h="100px"></Box>
      <Center h="40vh">
        <Question
          question={test[step].question}
          choice={test[step].choice}
          answer={test[step].answer}
        />
      </Center>
      <Center h="20vh">
        <CardAnswer question={test[step].question} />
      </Center>
      <Center>
        <Button
          isDisabled={
            answersUser.find((item) => item.question === test[step].question)
              ? false
              : true
          }
          _hover={{ bg: "hover_active" }}
          onClick={() => {
            setStep(step + 1);
            if (step === 9) dispatch(finishExercise());
            else {
              setProgress(progress + 10);
            }
          }}
          colorScheme="primary"
          bg="primary"
          mt="50px"
        >
          {step === 9 ? "Guardar" : "Próxima Pregunta"}
        </Button>
      </Center>
      <Box style={{ width: "full", alignItems: "center", height: "20vh" }}>
        <Progress
          className="progress"
          hasStripe
          colorScheme="orange"
          value={progress}
          isAnimated
        ></Progress>
      </Box>
    </Box>
  );
};

export default Exercises;
