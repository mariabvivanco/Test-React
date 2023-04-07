//Custom hook to get the result of a response
import React from "react";
import { useSelector } from "react-redux";
import { answers } from "../store/exerciseSlicer";

const useAnswerOk = (question: string, answer: string) => {
  const answersUser = useSelector(answers);
  const answerQuestion = answersUser.find((item) => item.question === question);
  if (!answerQuestion) return false;

  if (answerQuestion.answer === answer) return true;
  else return false;
};

export default useAnswerOk;
