import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

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
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    color: "green",
    textAlign: "center",
  },
  radioButton: {
    padding: "8px 16px",
    borderRadius: "8px",
    margin: "8px",
    border: "2px solid #007BFF",
    background: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "280px",
    cursor: "pointer",
    transition: "background-color 0.3s, color 0.3s",
  },
  selected: {
    background: "#007BFF",
    color: "#fff",
    borderColor: "#007BFF",
  },
  list: {
    listStyleType: "none",
    padding: 0,
    textAlign: "center",
  },
};

const CustomRadioButton = ({ label, selected, onSelect }) => (
  <li>
    <button
      style={{
        ...styles.radioButton,
        ...(selected ? styles.selected : {}),
      }}
      onClick={onSelect}
    >
      {label}
    </button>
  </li>
);

export function MatrixChart({ email }) {
  const [error, setError] = useState("");
  const router = useRouter();
  const [selectedClimov_0, setClimovValue_0] = useState(null);
  const [selectedClimov_1, setClimovValue_1] = useState(null);
  const [selectedClimov_2, setClimovValue_2] = useState(null);

  const [selectedHolland_0, setHollandValue_0] = useState(null);
  const [selectedHolland_1, setHollandValue_1] = useState(null);
  const [selectedHolland_2, setHollandValue_2] = useState(null);

  const [climov_data, setClimovData] = useState([]);
  const [climov_top_ids, setClimovIds] = useState([]);
  const [holland_data, setHollandData] = useState([]);
  const [holland_top_ids, setHollandIds] = useState([]);

  const [mt_labels, setMtLabels] = useState([]);
  const [mt_data, setMtData] = useState([]);

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
  const handleSubmit = async (e) => {
    e.preventDefault();
    const climovArray = [];
    const hollandArray = [];
    const climov_item0 = selectedClimov_0;
    const climov_item1 = selectedClimov_1;
    const climov_item2 = selectedClimov_2;

    const holland_item0 = selectedHolland_0;
    const holland_item1 = selectedHolland_1;
    const holland_item2 = selectedHolland_2;

    if (climov_item0 === "" || climov_item1 === "" || climov_item2 === "") {
      setError("Сонголтуудаа шалгана уу!!!!");
      return;
    }
    if (holland_item0 === "" || holland_item1 === "" || holland_item2 === "") {
      setError("Сонголтуудаа шалгана уу!!!!");
      return;
    }
    climovArray.push(climov_item0);
    climovArray.push(climov_item1);
    climovArray.push(climov_item2);

    hollandArray.push(holland_item0);
    hollandArray.push(holland_item1);
    hollandArray.push(holland_item2);

    let climov_items = climovArray.toString();
    console.log("climov_items:", climov_items);
    let holland_items = hollandArray.toString();
    console.log("holland items:", holland_items);
    let email = "nominjin@gmail.com";

    try {
      const res = await fetch("/api/matrix_test", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          climov_items,
          holland_items,
          email,
        }),
      });

      router.push("/dashboard_two");
      // if (res.status === 400) {
      //   setError("Имайл хаягаар өмнө нь бүртгүүлсэн байна!");
      // }
      // if (res.status === 200) {
      //   setError("");
      //   router.push("/dashboar_two");
      // }
    } catch (error) {
      setError("Алдаа гарлаа, дахин оролдоно уу!");
      console.log(error);
    }
  };

  return (
    <>
      <div className="w-full grid justify-center md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7 my-10">
        {climov_top_ids.map((id, index) => {
          return (
            <div key={`climov${index}`}>
              <h1 style={styles.heading}>{climov_labels[id]}</h1>
              <div style={styles.container}>
                <ul style={styles.list}>
                  {colData.map((element, i) => {
                    if (element.type === Number(id))
                      return (
                        <CustomRadioButton
                          key={`climov_${index}_${i}`}
                          label={element.name}
                          selected={
                            eval(`selectedClimov_${index}`)?.toString() ===
                            `${i?.toString()}`
                          }
                          onSelect={() => {
                            eval(`setClimovValue_${index}(${i})`);
                          }}
                        />
                      );
                  })}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
      <div className="w-full grid justify-center md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7 my-10">
        {holland_top_ids.map((id, index) => {
          return (
            <div key={`holland${index}`}>
              <h1 style={styles.heading}>{holland_labels[id]}</h1>
              <div style={styles.container}>
                <ul style={styles.list}>
                  {rowData.map((element, i) => {
                    if (element.type === Number(id))
                      return (
                        <CustomRadioButton
                          key={`holland_${index}_${i}`}
                          label={element.name}
                          selected={
                            eval(`selectedHolland_${index}`)?.toString() ===
                            `${i?.toString()}`
                          }
                          onSelect={() => {
                            eval(`setHollandValue_${index}(${i})`);
                          }}
                        />
                      );
                  })}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
      <div className="w-full grid justify-center md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7 my-10">
        <button
          onClick={handleSubmit}
          className="flex items-center justify-center gap-1 px-5 py-4 font-semibold text-blue-500 transition-colors rounded-md outline duration-600 hover:bg-blue-600 hover:text-white"
        >
          {/* <TbArrowBigRightFilled className="text-lg" /> */}
          Хадгалах
        </button>
        <p className="text-red-600 mb-4 text-[16px]">{error && error}</p>
      </div>
    </>
  );
}

// export default MatrixChart;
