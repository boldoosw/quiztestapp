"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/Button/Button";
// Types
import { QuestionsState } from "@/types/quiz";
import CustomCard from "@/components/QuestionCard/CustomCard";
import { Question } from "../../../types/quiz";
import { Varela } from "next/font/google";
import CustomVulnChart from "@/components/VulnChart/CustomVulnChart";
import { useSession } from "next-auth/react";

type Props = {
  questions: QuestionsState;
};
let chartData: number[] = [];
const Quiz = ({ questions }: Props) => {
  const { data: session }: any = useSession();
  const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0);
  const [userAnswers, setUserAnswers] = React.useState<Record<number, string>>(
    {}
  );
  const [showResult, setShowResult] = React.useState(false);
  const physic_math = "Физик  ба математик";
  var physic_math_count = 0;
  const chemic_biology = "Хими ба Биолог";
  var chemic_biology_count = 0;
  const radio_electronic = "Радиотехник ба электроник";
  var radio_electronic_count = 0;
  const mechanic_const = "Механик ба конструкц";
  var mechanic_const_count = 0;
  const geography_geology = "Газар зүй ба геолог";
  var geography_geology_count = 0;
  const literature_culture = "Уран зохион ба урлаг";
  var literature_culture_count = 0;
  const history_politic = "Түүх ба улс төр";
  var history_politic_count = 0;
  const educaton_health = "Боловсрол ба Эрүүл мэнд";
  var educaton_health_count = 0;
  const labour_handcraft = "Хөдөлмөр ба гар урлал";
  var labour_handcraft_count = 0;
  const sport_military = "Спорт ба цэрэгжилт";
  var sport_military_count = 0;

  const router = useRouter();

  const handleOnAnswerClick = (
    answer: string,
    answer_val: string,
    answerType: string,
    currentQuestionIndex: number,
    div_id: string
  ) => {
    setUserAnswers((prev) => ({ ...prev, [currentQuestionIndex]: answer }));

    userAnswers[currentQuestionIndex] = answer;

    const propertyNames = Object.keys(userAnswers);

    if (propertyNames.length === questions.length)
      setCurrentQuestionIndex(questions.length - 1);
    // console.log(userAnswers);

    let div_containing_box = document.getElementById(
      questions[currentQuestionIndex].question
    );
    if (div_containing_box != null)
      div_containing_box.style.background = "#29B6F6";

    const answer_index = div_id.charAt(div_id.length - 1);

    if (answer_index === "0") {
      var div_id2 = div_id.slice(0, -1) + "1";
      //  / console.log(div_id2);
      let box = document.getElementById(div_id);
      if (box != null) box.style.background = "green";

      let box2 = document.getElementById(div_id2);
      if (box2 != null) box2.style.background = "white";
    }

    if (answer_index === "1") {
      var div_id2 = div_id.slice(0, -1) + "0";

      // console.log(div_id2);
      let box = document.getElementById(div_id);
      if (box != null) box.style.background = "red";

      let box2 = document.getElementById(div_id2);
      if (box2 != null) box2.style.background = "white";
    }
  };

  const handleResultQuestion = async () => {
    questions.map((question, i) => {
      if (question.question_type === physic_math && userAnswers[i] === "Тийм")
        physic_math_count++;
      if (
        question.question_type === chemic_biology &&
        userAnswers[i] === "Тийм"
      )
        chemic_biology_count++;
      if (
        question.question_type === radio_electronic &&
        userAnswers[i] === "Тийм"
      )
        radio_electronic_count++;
      if (
        question.question_type === mechanic_const &&
        userAnswers[i] === "Тийм"
      )
        mechanic_const_count++;
      if (
        question.question_type === geography_geology &&
        userAnswers[i] === "Тийм"
      )
        geography_geology_count++;
      if (
        question.question_type === literature_culture &&
        userAnswers[i] === "Тийм"
      )
        literature_culture_count++;
      if (
        question.question_type === history_politic &&
        userAnswers[i] === "Тийм"
      )
        history_politic_count++;
      if (
        question.question_type === educaton_health &&
        userAnswers[i] === "Тийм"
      )
        educaton_health_count++;
      if (
        question.question_type === labour_handcraft &&
        userAnswers[i] === "Тийм"
      )
        labour_handcraft_count++;
      if (
        question.question_type === sport_military &&
        userAnswers[i] === "Тийм"
      )
        sport_military_count++;
    });
    console.log(userAnswers);
    chartData.push(physic_math_count);
    chartData.push(chemic_biology_count);
    chartData.push(radio_electronic_count);
    chartData.push(mechanic_const_count);
    chartData.push(geography_geology_count);
    chartData.push(literature_culture_count);
    chartData.push(history_politic_count);
    chartData.push(educaton_health_count);
    chartData.push(labour_handcraft_count);
    chartData.push(sport_military_count);
    setShowResult(true);

    //baazad hiih
    console.log("quiz chart data:", chartData);

    let customquiz_items = chartData.toString();

    let email = session?.user.email;
    try {
      const res = await fetch("/api/custom_quiz", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          customquiz_items,
          uid: session?.user.id,
          email,
        }),
      });

      if (res.ok) {
        console.log("amjilttai hadgallaa");
        router.refresh();
        router.push("/lessons");
      } else {
        throw new Error("Failed to create a mbti");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return !showResult ? (
    <>
      <div className="bg-red-400 m-4 p-4 rounded-xl ">
        Та доорх асуулгыг бүрэн бөглөсөн тохиолдолд Дуусгах товч гарч ирэх
        бөгөөд түүнийг дарснаар тестийг бөглөсөнд тооцохыг анхаарна уу.
      </div>
      <div className="md:grid grid-cols-2 gap-1">
        {/* { for(let i = 0; i < questions.length; i++) { }}  */}
        {questions.map(function (question, i) {
          return (
            <CustomCard
              key={question.question + question.answers[i] + i}
              question={question}
              answerType={question.question_type}
              currentQuestionIndex={i}
              userAnswer={userAnswers[currentQuestionIndex]}
              onClick={handleOnAnswerClick}
            />
          );
        })}
      </div>
      {currentQuestionIndex === questions.length - 1 ? (
        <div className=" mt-8 ">
          <Button
            text="Дуусгах"
            onClick={handleResultQuestion}
            btn_next={false}
          />
        </div>
      ) : (
        ""
      )}
    </>
  ) : (
    <div className="text-black text-center mt-8">
      <CustomVulnChart
        labels={[
          physic_math,
          chemic_biology,
          radio_electronic,
          mechanic_const,
          geography_geology,
          literature_culture,
          history_politic,
          educaton_health,
          labour_handcraft,
          sport_military,
        ]}
        data={chartData}
      />
    </div>
  );
};

export default Quiz;
