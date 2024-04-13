import React, { useEffect, useState } from "react";
import axios from "axios";
import VulnChart from "../VulnChart/VulnChart";

function ClimovChart() {
  const [climov_data, setData] = useState([]);

  async function fetchClimovData() {
    // Fetch data from your API here.
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_APP_API_ENDPOINT}/api/climov_test`
    );
    // let mydata = data.data.existingCustomQuiz.customquiz_items.split(",");
    setData(data.existingClimovQuiz.climovquiz_items.split(","));
    console.log(data.existingClimovQuiz.climovquiz_items.split(","));
  }
  useEffect(() => {
    fetchClimovData();
  }, []);

  //   console.log(lesson_points);

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-6">
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="border-b border-stroke px-7 py-4 dark:border-strokedark">
          <h3 className="font-medium text-black dark:text-white">
            Климовын тестийн үр дүн
          </h3>
        </div>
        <div className=" h-full">
          <div className="text-black text-center mt-8">
            <VulnChart
              labels={["Хүн", "Урлаг", "Техник", "Байгаль", "Тэмдэгт"]}
              // data={[5, 3, 5, 4, 3]}
              data={climov_data}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClimovChart;
