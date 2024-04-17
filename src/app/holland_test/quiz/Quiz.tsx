"use client";

import React from "react";
import { useRouter } from "next/navigation";
// Components
import Button from "@/components/Button/Button";
// Types
import { QuestionsState } from "@/types/quiz";
import VulnChart from "@/components/VulnChart/HollandVulnChart";
import HollandQuestionCard from "@/components/QuestionCard/HollandQuestionCard";
import async from "../../layout";

type Props = {
  questions: QuestionsState;
  totalQuestions: number;
};
const Quiz = ({ questions, totalQuestions }: Props) => {
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
    const answer_value = questions[currentQuestionIndex].answer_val;

    setUserAnswers((prev) => ({ ...prev, [currentQuestionIndex]: answer }));
    setIsQuestionAnswered(true);

    userAnswers[currentQuestionIndex] = answer;
    selectedAnswer[currentQuestionIndex] = answer_val;
  };

  const handleChangeQuestion = (step: number) => {
    const newQuestionIndex = currentQuestionIndex + step;
    if (newQuestionIndex < 0 || newQuestionIndex >= totalQuestions) return;
    setIsQuestionAnswered(false);
    setCurrentQuestionIndex(newQuestionIndex);
  };
  const getChartData = async () => {
    if (currentQuestionIndex === totalQuestions - 1) {
      let bodit_ua_count: number = 0;
      let shinjeech_count: number = 0;
      let urlag_count: number = 0;
      let niigem_count: number = 0;
      let udirdah_count: number = 0;
      let standart_count: number = 0;

      const answerValues = Object.values(selectedAnswer);
      answerValues.map((x: any): void => {
        if (x === "1") bodit_ua_count++;
        if (x === "2") shinjeech_count++;
        if (x === "3") urlag_count++;
        if (x === "4") niigem_count++;
        if (x === "5") udirdah_count++;
        if (x === "6") standart_count++;
      });

      const resultData = [
        { id: 0, name: "Бодит үйл ажиллагааг дэмжигч", score: bodit_ua_count },
        { id: 1, name: "Шинжээч судлаач", score: shinjeech_count },
        { id: 2, name: "Урлагын", score: urlag_count },
        { id: 3, name: "Нийгмийн", score: niigem_count },
        { id: 4, name: "Удирдан зохион байгуулах", score: udirdah_count },
        { id: 5, name: "Стандартыг баримтлагч", score: standart_count },
      ];

      const top3 = resultData
        .slice()
        .sort(function (a, b) {
          return b.score - a.score;
        })
        .slice(0, 3);

      setShowResult(true);

      let chartData: number[] = [];

      chartData.push(bodit_ua_count);
      chartData.push(shinjeech_count);
      chartData.push(urlag_count);
      chartData.push(niigem_count);
      chartData.push(udirdah_count);
      chartData.push(standart_count);
      //baazad hiih

      let hollandquiz_items =
        `${chartData[0]},${chartData[1]},${chartData[2]},${chartData[3]},${chartData[4]}`.toString();

      console.log("chart data", chartData);

      console.log(
        `${top3[0].name}:${top3[0].score},${top3[1].name}:${top3[1].score},${top3[2].name}:${top3[2].score}`
      );

      let top_items = `${top3[0].id},${top3[1].id},${top3[2].id}`.toString();

      console.log("top_items", top_items);

      console.log("hollandquiz_items", hollandquiz_items);

      let email = "boldoosw@gmail.com";
      try {
        const res = await fetch("/api/holland_test", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            hollandquiz_items,
            top_items,
            email,
          }),
        });

        if (res.ok) {
          console.log("Mongodb -d amjilttai hadgallaa");
          router.refresh();
          router.push("/dashboard_two");
        } else {
          throw new Error("Failed to create a holland to mongodb");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  return !showResult ? (
    <div className="text-black text-center mt-8">
      <div className="bg-[#7030a0] text-white text-center  p-4 text-[14px] mt-8 w-full">
        Хамгийн их сонирхдог мэргэжлээ сонго. Таны сонгосон мэргэжил өөрийн тань
        мэргэжлийн хэв шинжид нийцэж байгаа эсэхээс тухайн мэргэжилдээ гаргах
        амжилт ихээхэн шалтгаална. Энэхүү тест нь таны мэргэжлийн тэр төрлийг
        тодорхойлоход тусална. 42 хос мэргэжлээс өөрт тань таалагдах нэгийг
        сонгоно уу.
      </div>
      <p className="mt-4 pb-2 text-[14px] font-bold text-black dark:text-white">
        Асуулт {currentQuestionIndex + 1} / {totalQuestions}
      </p>
      <HollandQuestionCard
        currentQuestionIndex={currentQuestionIndex}
        question={questions[currentQuestionIndex].question}
        answers={questions[currentQuestionIndex].answers}
        answer_val={questions[currentQuestionIndex].answer_val}
        // answer_pic={questions[currentQuestionIndex].answer_pic}
        userAnswer={userAnswers[currentQuestionIndex]}
        // correctAnswer={questions[currentQuestionIndex].correct_answer}
        onClick={handleOnAnswerClick}
      />
      <div className="mt-16 flex justify-between ">
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
      <VulnChart
        labels={[
          "Бодит үйл ажиллагааг дэмжигч",
          "Шинжээч судлаач",
          "Урлагын",
          "Нийгмийн",
          "Удирдан зохион байгуулах",
          "Стандартыг баримтлагч",
        ]}
        // data={chartData}
      />
    </div>
  );
};

export default Quiz;
