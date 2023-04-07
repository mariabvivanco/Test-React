//import { test } from "../../json/test";
import React from "react";
import { useSelector } from "react-redux";
import { answers } from "../store/exerciseSlicer";
import { test } from "../json/test";

const testEval = () => {
  let ok = 0;
  const answersUser = useSelector(answers);
  answersUser.forEach((element) => {
    const answ = test.find(
      (item: { question: string }) => element.question === item.question
    );
    if (answ?.answer === element.answer) {
      ok++;
    }
  });
  if (ok === 10) return 0;
  else if (ok > 6) return 1;
  else return 2;
};

export default testEval;
