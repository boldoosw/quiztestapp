import React, { useEffect, useState } from "react";
import axios from "axios";
import VulnChart from "../VulnChart/VulnChart";
const holland_labels = [
  "Бодит үйл ажиллагааг дэмжигч",
  "Шинжээч судлаач",
  "Урлагын",
  "Нийгмийн",
  "Удирдан зохион байгуулах",
  "Стандартыг баримтлагч",
];
function HollandChart() {
  const [holland_data, setData] = useState([]);
  const [holland_top_ids, setIds] = useState([]);

  async function fetchHollandData() {
    // Fetch data from your API here.
    const { data } = await axios.get(`/api/holland_test`);

    // let mydata = data.data.existingCustomQuiz.customquiz_items.split(",");
    setData(data.existingHollandQuiz.hollandquiz_items.split(","));
    setIds(data.existingHollandQuiz.top_items.split(","));
    // console.log(data.existingHollandQuiz.hollandquiz_items.split(","));
  }
  useEffect(() => {
    fetchHollandData();
  }, []);

  //   console.log(lesson_points);

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-6">
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="border-b border-stroke px-7 py-4 dark:border-strokedark">
          <h3 className="font-medium text-black dark:text-white">
            Холландын тестийн үр дүн
          </h3>
        </div>
        <div className=" h-full">
          <div className="text-black text-center mt-8">
            <VulnChart labels={holland_labels} data={holland_data} />
          </div>
          <div className="flex flex-col  text-sm">
            <div>{holland_labels[holland_top_ids[0]]}</div>
            <div> {holland_labels[holland_top_ids[1]]}</div>
            <div> {holland_labels[holland_top_ids[2]]}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HollandChart;
