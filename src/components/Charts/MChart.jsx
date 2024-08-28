import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import MatrixVulnChart from "../VulnChart/MatrixVulnChart";
import axios from "axios";
import { matrix } from "@/utils/matrix";

const climov_labels = ["Хүн", "Байгаль", "Тэмдэгт", "Техник", "Урлаг"];
const holland_labels = [
  "Бодит үйл ажиллагааг дэмжигч",
  "Шинжээч судлаач",
  "Урлаг",
  "Нийгэм",
  "Удирдан зохион байгуулах",
  "Стандартыг баримтлагч",
];

const rowData = [
  {
    id: 0,
    name: "Хүн",
    type: 4,
    organization: "Баг, хамт олон, байгууллагыг удирадах, зохион байгуулах",
  },
  {
    id: 1,
    name: "Хяналт",
    type: 4,
    organization:
      "Хүн, байгаль орчин, амьтан ургамалын эрүүл ахуйн ба байгалийн гамшиг, ",
  },
  {
    id: 2,
    name: "Нийгмийн үйлчилгээ ба хамгаалал",
    type: 3,
    organization:
      "Хүн, байгаль орчин, амьтан ургамалын эрүүл ахуйн ба байгалийн гамшиг, ",
  },
  {
    id: 3,
    name: "Боловсрол",
    type: 3,
    organization: "Хүмүүжил, сургалт, боловсрол",
  },
  {
    id: 4,
    name: "Бүтээх туурвих",
    type: 2,
    organization: "Урлаг, уран сайханы бүтээл, туурвил",
  },
  {
    id: 5,
    name: "Стандартыг баримтлах",
    type: 5,
    organization:
      "Стандарт, норм, дүрэм, журам боловсруулах, түүний дагуу ажил гүйцэтгэх",
  },
  {
    id: 6,
    name: "Зохион бүтээх",
    type: 1,
    organization:
      "Жижиг деталиас эхлээд, бүтэл бүтэн машины зураг боловсруулах",
  },
  {
    id: 7,
    name: "Шинжлэх судлах",
    type: 1,
    organization: "Техник, хүмүүнлэг, хавсрага ШУ-ны салбарт",
  },
  {
    id: 8,
    name: "Бодит ажлыг гүйцэтгэх",
    type: 0,
    organization: "Тодорхой бодит зүйлийг хийж бүтээх",
  },
];
const colData = [
  {
    id: 0,
    name: "Хүн",
    type: 0,
    organization:
      "Хүүхэд - насанд хүрэгчид, сурагчид – оюутан, харилцагч -эмчлүүлэгч, худалдан авагч – зорчигчид, үзэгч – уншигч, баг -хамт олон г.м",
  },
  {
    id: 1,
    name: "Мэдээлэл",
    type: 2,
    organization:
      "Үсэг - үг,томьёо - томьёлол, монгол - гадаад хэл /хэл бичиг/, програмчлалын хэл г.м",
  },
  {
    id: 2,
    name: "Мөнгө - санхүү",
    type: 2,
    organization: "Мөнгө - хөрөнгө, акц – бонд,зээл – хурмтлал, даатгал г.м",
  },
  {
    id: 3,
    name: "Техник",
    type: 3,
    organization:
      "Машин -механизм, тоног – төхөөмж, барилга – байгууламж, багаж – зэвсэг г.м",
  },
  {
    id: 4,
    name: "Урлаг",
    type: 4,
    organization:
      "Утга зохиол, урлаг, дуу-хөгжим, бүжиг, жүжиг, кино, дүрслэх урлаг г.м",
  },
  {
    id: 5,
    name: "Амьтан",
    type: 1,
    organization: "Мал, гэрийн тэжээмэл ба зэрлэг амьтан г.м",
  },
  {
    id: 6,
    name: "Ургамал",
    type: 1,
    organization: "Таримал ба байгалийн  ургамал, гоёл чимэглэлийн ургамал г.м",
  },
  {
    id: 7,
    name: "Байгалийн баялаг",
    type: 1,
    organization:
      "Хөрс, шороо, ойн ба усны сан,бүх төрлийн ашигт малтмал, эрдэс бодис г.м",
  },
];

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  indexAxis: "y",
  scales: {
    y: {
      ticks: {
        format: {
          style: "percent",
        },
      },
    },
  },
  elements: {
    bar: {
      borderWidth: 1,
    },
  },

  responsive: true,
  plugins: {
    legend: {
      position: "right",
    },
    title: {
      display: true,
      text: "Мэргэжил сонголтын матриц үр дүнг графикаар үзүүлэв",
    },
  },
};

export function MChart({ email }) {
  const [climov_items, setClimovItems] = useState([]);

  const [holland_items, setHollandItems] = useState([]);

  const [climov_data, setClimovData] = useState([]);
  const [climov_top_ids, setClimovIds] = useState([]);
  const [holland_data, setHollandData] = useState([]);
  const [holland_top_ids, setHollandIds] = useState([]);
  const [user_email, setEmail] = useState(email);
  console.log("mchart email:", email);

  async function fetchData() {
    // Fetch data from your API here.
    const { data } = await axios.get(`/api/matrix_test`, {
      params: { user_email: user_email },
    });
    try {
      console.log(data.existingClimovQuiz);
      setClimovItems(data.existingMatrixQuiz.climov_items.split(","));
      setHollandItems(data.existingMatrixQuiz.holland_items.split(","));
    } catch (error) {
      throw new Error();
    }
  }

  async function fetchClimovData() {
    // Fetch data from your API here.
    const { data } = await axios.get(`/api/climov_test`, {
      params: { user_email: email },
    });
    setClimovData(data.existingClimovQuiz.climovquiz_items.split(","));
    setClimovIds(data.existingClimovQuiz.top_items.split(","));
  }
  async function fetchHollandData() {
    // Fetch data from your API here.
    const { data } = await axios.get(`/api/holland_test`, {
      params: { user_email: email },
    });
    setHollandData(data.existingHollandQuiz.hollandquiz_items.split(","));
    setHollandIds(data.existingHollandQuiz.top_items.split(","));
  }

  useEffect(() => {
    // fetchClimovData();
    // fetchHollandData();
    fetchData();
  }, []);

  let labels = null;

  console.log(climov_items);

  if (climov_items.length > 0 && holland_items.length > 0)
    labels = [
      matrix[Number(climov_items[0])][Number(holland_items[0])].split(","),
      matrix[Number(climov_items[1])][Number(holland_items[1])].split(","),
      matrix[Number(climov_items[2])][Number(holland_items[2])].split(","),
      // matrix[climov_items[0]][holland_items[0]].split(","),
      // matrix[climov_items[1]][holland_items[1]].split(","),
      // matrix[climov_items[2]][holland_items[2]].split(","),
    ];

  let chartdata1 =
    climov_data[climov_top_ids[0]] * 5 +
    (holland_data[holland_top_ids[0]] / 42) * 100;
  let chartdata2 =
    climov_data[climov_top_ids[1]] * 5 +
    (holland_data[holland_top_ids[1]] / 42) * 100;
  let chartdata3 =
    climov_data[climov_top_ids[2]] * 5 +
    (holland_data[holland_top_ids[2]] / 42) * 100;

  const data = [
    chartdata1.toFixed(),
    chartdata2.toFixed(),
    chartdata3.toFixed(),
  ];

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-12">
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="border-b border-stroke px-7 py-4 dark:border-strokedark">
          <h3 className="font-medium text-black dark:text-white">
            МЭРГЭЖИЛ СОНГОЛТЫН МАТРИЦААР ТОДОРХОЙЛСОН ТАНД ТОХИРОМЖТОЙ
            МЭРГЭЖЛҮҮД
          </h3>
        </div>
        <div className=" h-full">
          <div className="text-black text-center mt-8"></div>
          <MatrixVulnChart labels={labels} data={data} />
        </div>
      </div>
    </div>
  );
}
