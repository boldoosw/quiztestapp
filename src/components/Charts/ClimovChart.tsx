import React, { useEffect, useState } from "react";
import axios from "axios";
import VulnChart from "../VulnChart/VulnChart";
const climov_labels = ["Хүн", "Байгаль", "Тэмдэгт", "Техник", "Урлаг"];
function ClimovChart() {
  const [climov_data, setData] = useState([]);
  const [climov_top_ids, setIds] = useState([]);

  async function fetchClimovData() {
    // Fetch data from your API here.
    const { data } = await axios.get(`/api/climov_test`);
    // let mydata = data.data.existingCustomQuiz.customquiz_items.split(",");
    setData(data.existingClimovQuiz.climovquiz_items.split(","));
    setIds(data.existingClimovQuiz.top_items.split(","));
    // console.log(data.existingClimovQuiz.climovquiz_items.split(","));
  }
  useEffect(() => {
    fetchClimovData();
  }, []);

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
            <VulnChart labels={climov_labels} data={climov_data} />
          </div>
          <div className="flex flex-col  text-sm">
            <div> {climov_labels[climov_top_ids[0]]}</div>
            <div> {climov_labels[climov_top_ids[1]]}</div>
            <div> {climov_labels[climov_top_ids[2]]}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClimovChart;
