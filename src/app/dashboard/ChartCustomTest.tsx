import CustomVulnChart from "@/components/VulnChart/CustomVulnChart";
import axios from "axios";
import React from "react";

const labels = [
  "Физик  ба математик",
  "Хими ба Биолог",
  "Радиотехник ба электроник",
  "Механик ба конструкц",
  "Газар зүй ба геолог",
  "Уран зохион ба урлаг",
  "Түүх ба улс төр",
  "Боловсрол ба Эрүүл мэнд",
  "Хөдөлмөр ба гар урлал",
  "Спорт ба цэрэгжилт",
];

async function getDataCustomId() {
  // Fetch data from your API here.
  const res = await axios.get("https://quiztestapp.vercel.app/api/custom_quiz");
  return res.data;
}

async function ChartCustomTest() {
  const data = await getDataCustomId();

  let datas = data.existingCustomQuiz.customquiz_items.split(",");
  console.log(datas);

  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="border-b border-stroke px-7 py-4 dark:border-strokedark">
        <h3 className="font-medium text-black dark:text-white">
          Хичээл сонголтын үр дүн
        </h3>
      </div>
      <div className=" h-full">
        <div className="text-black text-center mt-8">
          <CustomVulnChart labels={labels} data={datas} />
        </div>
      </div>
    </div>
  );
}

export default ChartCustomTest;
