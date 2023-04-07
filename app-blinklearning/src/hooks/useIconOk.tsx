//Custom hook to get the result of a response
import React from "react";

import {
  TbSquareNumber1,
  TbSquareNumber2,
  TbSquareNumber3,
  TbSquareNumber4,
} from "react-icons/tb";
import { test } from "../json/test";

const useIconOk = (question: string, answer: string) => {
  const questionTest = test.find((item) => item.question === question);
  const indAnswer = questionTest?.choice.findIndex((item) => item === answer);
  return indAnswer
  }


export default useIconOk;
