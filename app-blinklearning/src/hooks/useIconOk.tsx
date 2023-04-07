//Custom hook to get the result of a response
import React from "react";

import { test } from "../json/test";

const useIconOk = (question: string, answer: string) => {
  const questionTest = test.find((item) => item.question === question);
  const indAnswer = questionTest?.choice.findIndex((item) => item === answer);
  return indAnswer;
};

export default useIconOk;
