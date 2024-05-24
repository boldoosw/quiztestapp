"use client";

import React from "react";
import { useRouter } from "next/navigation";
// Components
import QuestionCard from "@/components/QuestionCard/QuestionCard";
import Button from "@/components/Button/Button";
// Types
import { QuestionsState } from "@/types/quiz";
import { useSession } from "next-auth/react";
import ClimovChart from "@/components/Charts/ClimovChart";

type Props = {
  questions: QuestionsState;
  totalQuestions: number;
};

const Quiz = ({ questions, totalQuestions }: Props) => {
  const { data: session }: any = useSession();
  const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0);
  const [score, setScore] = React.useState(0);
  const [showResult, setShowResult] = React.useState(false);
  const [userAnswers, setUserAnswers] = React.useState<Record<number, string>>(
    {}
  );
  const [isQuestionAnswered, setIsQuestionAnswered] = React.useState(false);
  const [selectedAnswer, setSelectedAnswer] = React.useState<
    Record<number, string>
  >({});

  const router = useRouter();

  const handleOnAnswerClick = (
    answer: string,
    answer_val: string,
    currentQuestionIndex: number
  ) => {
    // If user has already answered, do nothing
    // if (isQuestionAnswered) return;
    // Check answer against correct answer
    // const isCorrect = questions[currentQuestionIndex].correct_answer === answer;
    const answer_value = questions[currentQuestionIndex].answer_val;
    // Add score if answer is correct
    // if (isCorrect) setScore((prev) => prev + 1);
    // Save the answer in the object for user answers
    setUserAnswers((prev) => ({ ...prev, [currentQuestionIndex]: answer }));
    setIsQuestionAnswered(true);

    userAnswers[currentQuestionIndex] = answer;
    selectedAnswer[currentQuestionIndex] = answer_val;

    // console.log(userAnswers);
  };

  const handleChangeQuestion = (step: number) => {
    const newQuestionIndex = currentQuestionIndex + step;

    // console.log("user email:", session?.user.id);

    if (newQuestionIndex < 0 || newQuestionIndex >= totalQuestions) return;
    setIsQuestionAnswered(false);
    setCurrentQuestionIndex(newQuestionIndex);
  };
  const getChartData = async () => {
    if (currentQuestionIndex === totalQuestions - 1) {
      let people_count: number = 0;
      let technical_count: number = 0;
      let culture_count: number = 0;
      let character_count: number = 0;
      let ecology_count: number = 0;

      const answerValues = Object.values(selectedAnswer);
      answerValues.map((x: any): void => {
        if (x === "Хүн") people_count++;
        if (x === "Байгаль") ecology_count++;
        if (x === "Тэмдэгт") character_count++;
        if (x === "Техник") technical_count++;
        if (x === "Урлаг") culture_count++;
      });

      const resultData = [
        { id: 0, name: "Хүн", score: people_count },
        { id: 1, name: "Байгаль", score: ecology_count },
        { id: 2, name: "Тэмдэгт", score: character_count },
        { id: 3, name: "Техник", score: technical_count },
        { id: 4, name: "Урлаг", score: culture_count },
      ];

      const top3 = resultData
        .slice()
        .sort(function (a, b) {
          return b.score - a.score;
        })
        .slice(0, 3);

      setShowResult(true);
      //baazad hiih
      let chartData: number[] = [];

      // labels={["Хүн", "Тэмдэгт","Техник",  "Урлаг","Байгаль"]}
      // ХҮН	ТЭМДЭГТ		ТЕХНИК	УРЛАГ	БАЙГАЛЬ

      chartData.push(people_count);
      chartData.push(ecology_count);
      chartData.push(character_count);
      chartData.push(technical_count);
      chartData.push(culture_count);

      let climovquiz_items =
        `${chartData[0]},${chartData[1]},${chartData[2]},${chartData[3]},${chartData[4]}`.toString();
      console.log("chart data", chartData);

      console.log(
        `${top3[0].name}:${top3[0].score},${top3[1].name}:${top3[1].score},${top3[2].name}:${top3[2].score}`
      );

      let top_items = `${top3[0].id},${top3[1].id},${top3[2].id}`.toString();

      console.log("top_items", top_items);

      console.log("climovquiz_items", climovquiz_items);

      let email = session?.user.email;
      try {
        const res = await fetch("/api/climov_test", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            climovquiz_items,
            top_items,
            uid: session?.user.id,
            email,
          }),
        });

        if (res.ok) {
          console.log("Mongodb -d amjilttai hadgallaa");
          router.refresh();
          router.push("/holland_test");
        } else {
          throw new Error("Failed to create a climov to mongodb");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return !showResult ? (
    <div className="text-black text-center mt-8">
      <p className="p-4 text-[14px] font-bold text-black dark:text-white">
        Question {currentQuestionIndex + 1} out of {totalQuestions}
      </p>
      <QuestionCard
        currentQuestionIndex={currentQuestionIndex}
        question={questions[currentQuestionIndex].question}
        answers={questions[currentQuestionIndex].answers}
        answer_val={questions[currentQuestionIndex].answer_val}
        answer_pic={questions[currentQuestionIndex].answer_pic}
        userAnswer={userAnswers[currentQuestionIndex]}
        // correctAnswer={questions[currentQuestionIndex].correct_answer}
        onClick={handleOnAnswerClick}
      />
      <div className="mt-4 flex justify-between ">
        <Button
          text="Өмнөх"
          btn_next={false}
          onClick={() => handleChangeQuestion(-1)}
        />

        <Button
          text={
            currentQuestionIndex === totalQuestions - 1 ? "Дуусгах" : "Дараах"
          }
          btn_next={
            selectedAnswer[currentQuestionIndex] === undefined ||
            selectedAnswer[currentQuestionIndex] === null
              ? true
              : false
          }
          onClick={
            currentQuestionIndex === totalQuestions - 1
              ? () => getChartData()
              : // () => router.push("/")
                () => handleChangeQuestion(1)
          }
        />
      </div>
    </div>
  ) : (
    <div className="mt-8 text-center text-black">
      {/* <VulnChart
       labels={["Хүн", "Тэмдэгт","Техник",  "Урлаг","Байгаль"]}
        // data={[5, 3, 5, 4, 3]}
        data={chartData}
      /> */}
      {<ClimovChart email={session?.user.email} />}
    </div>
  );
};

export default Quiz;
