import React, { useEffect, useState } from "react";
import CustomVulnChart from "../VulnChart/CustomVulnChart";
import axios from "axios";
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
function CustomChart({ email }: { email: String }) {
  const [lesson_points, setData] = useState([]);
  const [user_email, setEmail] = useState(email);

  async function fetchPointsData() {
    // Fetch data from your API here.
    const { data } = await axios.get(`/api/custom_quiz`, {
      params: { user_email: user_email },
    });
    // let mydata = data.data.existingCustomQuiz.customquiz_items.split(",");
    setData(data.existingCustomQuiz.customquiz_items.split(","));
    console.log(data.existingCustomQuiz.customquiz_items.split(","));
  }
  useEffect(() => {
    fetchPointsData();
  }, []);

  //   console.log(lesson_points);

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-12">
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="border-b border-stroke px-7 py-4 dark:border-strokedark">
          <h3 className="font-medium text-black dark:text-white">
            2. Хичээл сонголтын үр дүн
          </h3>
        </div>
        <div className=" h-full">
          <div className="text-black text-center mt-8">
            <CustomVulnChart labels={labels} data={lesson_points} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomChart;
