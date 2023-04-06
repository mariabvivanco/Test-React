import React, { useState } from "react";
import { Box, Icon, Center, Button, Progress } from "@chakra-ui/react";

import Question from "../components/Exercise/Question";

import { test } from "../json//test";
import CardAnswer from "../components/Exercise/CardAnswer";
import { useDispatch } from "react-redux";

import { answers, finishExercise } from "../store/exerciseSlicer";
import { useSelector } from "react-redux";


const Exercises = () => {
  const dispatch = useDispatch();
  const answersUser = useSelector(answers);
  const [step, setStep] = useState(0);
  const [progress, setProgress] = useState(10);


  return (
  <Box h="100vh">
      <Question
        question={test[step].question}
        choice={test[step].choice}
        answer={test[step].answer}
      />
      <Center>
        <CardAnswer
          question={test[step].question}
          icon={<Icon as={() => <></>} w={6} h={6} />}
        />
      </Center>
      <Center>
        <Button
          isDisabled={answersUser.find(item=>item.question===test[step].question)?false:true}
          w="17rem"
          onClick={() => {
            setStep(step + 1);
            if (step === 9) {
              setProgress(100);
              dispatch(finishExercise());
            } else {
              setProgress(progress + 10);
            }
          }}
          colorScheme="orange"
          mt="50px"
          variant="outline"
        >
          {step === 9 ? "Guardar" : "Próxima Pregunta"}
        </Button>
      </Center>

      <Progress
        hasStripe
        colorScheme="orange"
        value={progress}
        mb="5%"
        mx="5%"
        mt="50px"
        isAnimated
      ></Progress>
    </Box>)
  
};

export default Exercises;
