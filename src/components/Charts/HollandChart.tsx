import React, { useEffect, useState } from "react";
import axios from "axios";
import VulnChart from "../VulnChart/VulnChart";

function HollandChart() {
  const [holland_data, setData] = useState([]);

  async function fetchHollandData() {
    // Fetch data from your API here.
    const { data } = await axios.get(`/api/holland_test`);
    // let mydata = data.data.existingCustomQuiz.customquiz_items.split(",");
    setData(data.existingHollandQuiz.hollandquiz_items.split(","));
    console.log(data.existingHollandQuiz.hollandquiz_items.split(","));
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
            <VulnChart
              labels={[
                "Бодит үйл ажиллагааг дэмжигч",
                "Шинжээч судлаач",
                "Урлагын",
                "Нийгмийн",
                "Удирдан зохион байгуулах",
                "Стандартыг баримтлагч",
              ]}
              data={holland_data}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HollandChart;
