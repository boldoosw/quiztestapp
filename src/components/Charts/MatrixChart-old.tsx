import React, { useEffect, useState } from "react";
import axios from "axios";
import VulnChart from "../VulnChart/VulnChart";
const climov_labels = ["Хүн", "Байгаль", "Тэмдэгт", "Техник", "Урлаг"];
const holland_labels = [
  "Бодит үйл ажиллагааг дэмжигч",
  "Шинжээч судлаач",
  "Урлагын",
  "Нийгмийн",
  "Удирдан зохион байгуулах",
  "Стандартыг баримтлагч",
];

const rowData = [
  {
    id: 0,
    name: "Хүн",
    type: "Удирдан зохион байгуулах",
    organization: "Баг, хамт олон, байгууллагыг удирадах, зохион байгуулах",
  },
  {
    id: 1,
    name: "Хяналт",
    type: "Удирдан зохион байгуулах",
    organization:
      "Хүн, байгаль орчин, амьтан ургамалын эрүүл ахуйн ба байгалийн гамшиг, ",
  },
  {
    id: 2,
    name: "Нийгмийн үйлчилгээ ба хамгаалал",
    type: "Нийгмийн",
    organization:
      "Хүн, байгаль орчин, амьтан ургамалын эрүүл ахуйн ба байгалийн гамшиг, ",
  },
  {
    id: 3,
    name: "Боловсрол",
    type: "Нийгмийн",
    organization: "Хүмүүжил, сургалт, боловсрол",
  },
  {
    id: 4,
    name: "Бүтээх туурвих",
    type: "Урлагын",
    organization: "Урлаг, уран сайханы бүтээл, туурвил",
  },
  {
    id: 5,
    name: "Стандартыг баримтлах",
    type: "Стандартыг баримтлагч",
    organization:
      "Стандарт, норм, дүрэм, журам боловсруулах, түүний дагуу ажил гүйцэтгэх",
  },
  {
    id: 6,
    name: "Зохион бүтээх",
    type: "Шинжээч судлаач",
    organization:
      "Жижиг деталиас эхлээд, бүтэл бүтэн машины зураг боловсруулах",
  },
  {
    id: 7,
    name: "Шинжлэх судлах",
    type: "Шинжээч судлаач",
    organization: "Техник, хүмүүнлэг, хавсрага ШУ-ны салбарт",
  },
  {
    id: 8,
    name: "Бодит ажлыг гүйцэтгэх",
    type: "Бодит үйл ажиллагааг дэмжигч",
    organization: "Тодорхой бодит зүйлийг хийж бүтээх",
  },
];
const colData = [
  {
    id: 0,
    name: "Хүн",
    type: "Хүн",
    organization:
      "Хүүхэд - насанд хүрэгчид, сурагчид – оюутан, харилцагч -эмчлүүлэгч, худалдан авагч – зорчигчид, үзэгч – уншигч, баг -хамт олон г.м",
  },
  {
    id: 1,
    name: "Мэдээлэл",
    type: "Тэмдэгт",
    organization:
      "Үсэг - үг,томьёо - томьёлол, монгол - гадаад хэл /хэл бичиг/, програмчлалын хэл г.м",
  },
  {
    id: 2,
    name: "Мөнгө - санхүү",
    type: "Тэмдэгт",
    organization: "Мөнгө - хөрөнгө, акц – бонд,зээл – хурмтлал, даатгал г.м",
  },
  {
    id: 3,
    name: "Техник",
    type: "Техник",
    organization:
      "Машин -механизм, тоног – төхөөмж, барилга – байгууламж, багаж – зэвсэг г.м",
  },
  {
    id: 4,
    name: "Урлаг",
    type: "Урлаг",
    organization:
      "Утга зохиол, урлаг, дуу-хөгжим, бүжиг, жүжиг, кино, дүрслэх урлаг г.м",
  },
  {
    id: 5,
    name: "Амьтан",
    type: "Байгаль",
    organization: "Мал, гэрийн тэжээмэл ба зэрлэг амьтан г.м",
  },
  {
    id: 6,
    name: "Ургамал",
    type: "Байгаль",
    organization: "Таримал ба байгалийн  ургамал, гоёл чимэглэлийн ургамал г.м",
  },
  {
    id: 7,
    name: "Байгалийн баялаг",
    type: "Байгаль",
    organization:
      "Хөрс, шороо, ойн ба усны сан,бүх төрлийн ашигт малтмал, эрдэс бодис г.м",
  },
];
function MatrixChart() {
  const [climov_data, setClimovData] = useState([]);
  const [climov_top_ids, setClimovIds] = useState([]);
  const [holland_data, setHollandData] = useState([]);
  const [holland_top_ids, setHollandIds] = useState([]);

  async function fetchHollandData() {
    // Fetch data from your API here.
    const { data } = await axios.get(`/api/holland_test`);

    // let mydata = data.data.existingCustomQuiz.customquiz_items.split(",");
    setHollandData(data.existingHollandQuiz.hollandquiz_items.split(","));
    setHollandIds(data.existingHollandQuiz.top_items.split(","));
    // console.log(data.existingHollandQuiz.hollandquiz_items.split(","));
  }
  async function fetchClimovData() {
    // Fetch data from your API here.
    const { data } = await axios.get(`/api/climov_test`);
    // let mydata = data.data.existingCustomQuiz.customquiz_items.split(",");
    setClimovData(data.existingClimovQuiz.climovquiz_items.split(","));
    setClimovIds(data.existingClimovQuiz.top_items.split(","));
    // console.log(data.existingClimovQuiz.climovquiz_items.split(","));
  }
  useEffect(() => {
    fetchClimovData();
    fetchHollandData();
  }, []);

    //   console.log(lesson_points);
   

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-6">
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="border-b border-stroke px-7 py-4 dark:border-strokedark">
          <h3 className="font-medium text-black dark:text-white">
            Холланд болон Климовын тест дээр суурилсан Матрикс өгөгдөл
          </h3>
        </div>
        <div className=" h-full">
          <div className="flex flex-col  text-sm">
            <div>
                {
                 climov_top_ids.map((index) =>{
                                  
                   return (
                            <div>
                            <span className="text-bold text-red-600"> {climov_labels[index]}</span>
                                  { colData.map((element) => {
                            if (element.type === climov_labels[index])
                                      return (<div>
                                              </div>
                                      );
                                  }
                                )}
                          </div>)
                          }
                )
              }
             </div>
          </div>
        </div>
        <div className=" h-full">
          <div className="flex flex-col  text-sm">
            <div>
              {holland_top_ids}

              {holland_top_ids.map((index) =>
                rowData.map((element) => {
                  if (element.type === holland_labels[index])
                    return (
                      <div>
                        {holland_labels[index]} --> {element.name}--{element.id}
                      </div>
                    );
                })
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MatrixChart;
