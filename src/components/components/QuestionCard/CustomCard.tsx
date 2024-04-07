import React from "react";

import { Question } from "@/types/quiz";
import { getBGColor, getBGColor1 } from "./helpers";
const { useEffect, useState } = React;
type Props = {
  question: Question;
  currentQuestionIndex: number;
  answerType: string;
  userAnswer: string | undefined;

  onClick: (
    answer: string,
    answer_val: string,
    question_type: string,
    currentQuestionIndex: number,
    div_id: string,
  ) => void;
};

const CustomCard: React.FC<Props> = ({
  question,
  currentQuestionIndex,
  answerType,
  userAnswer,
  onClick,
}) => {
  return (
    <div key={question.question} className="gap-2 md:w-full md:grid-cols-2 ">
      <div
        id={question.question}
        className="bg-gray-100 border-gray-400 dark:border-gray-200 flex
        w-full max-w-[400] cursor-pointer select-none 
            flex-row  items-center justify-between  rounded-[5px]
              border text-black shadow dark:bg-white dark:text-black  "
      >
        <div className="m-1 w-full">{question.question}</div>
        <div
          key={
            question.question +
            question.answers[currentQuestionIndex] +
            currentQuestionIndex
          }
          id={
            question.question +
            question.answers[currentQuestionIndex] +
            currentQuestionIndex
          }
        >
          {question.answers.map((answer, i = 0) => (
            <div
              id={question.question + i}
              key={question.question + i}
              onClick={() =>
                onClick(
                  question.answers[i],
                  question.question,
                  question.question_type,
                  currentQuestionIndex,
                  question.question + i,
                )
              }
              className={`mr-1 flex items-center rounded `}
            >
              <h5 className=" text-md text-gray:900 dark:text-gray-900  m-1 tracking-tight ">
                {answer}
              </h5>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomCard;
