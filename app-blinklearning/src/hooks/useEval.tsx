import React from "react";
import { useSelector } from "react-redux";
import { test } from "../json/test";
import { answers } from "../store/exerciseSlicer";

const useEval = (question:string) => {
  
  const answersUser = useSelector(answers);
  const answerQuestion =answersUser.find(item=>item.question===question)
  
  const answerOk =test.find(item=>item.question===question)
  if (answerOk?.answer===answerQuestion?.answer)
    return true
  else
    return false
      

};

export default useEval;
