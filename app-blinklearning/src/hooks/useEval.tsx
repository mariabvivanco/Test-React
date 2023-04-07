//Custom hook to get the result of a response
import React from "react";
import { useSelector } from "react-redux";
import { answers } from "../store/exerciseSlicer";
import { test } from "../json/test";

const useEval = (question: string) => {
  const answersUser = useSelector(answers);
  const answerQuestion = answersUser.find((item) => item.question === question);

  const answerOk = test.find((item) => item.question === question);
  if (answerOk?.answer === answerQuestion?.answer) return true;
  else return false;
};

export default useEval;
