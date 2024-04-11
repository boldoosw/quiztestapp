import Image from "next/image";
import axios from "axios";
const lesson_data = [
  {
    name: "Монгол хэл, Уран зохиол",
    price: 1.2,
    img: "literature",
    img_detail: "literature-detail",
    checked: false,
  },
  {
    name: "Математик",
    price: 2.0,
    img: "math",
    img_detail: "math-detail",
    checked: false,
  },
  {
    name: "Мэдээлэл технологи",
    price: 2.5,
    img: "it",
    img_detail: "it-detail",
    checked: false,
  },
  {
    name: "Физик",
    price: 3.0,
    img: "physics",
    img_detail: "physics-detail",
    checked: false,
  },
  {
    name: "Түүх",
    price: 3.5,
    img: "history",
    img_detail: "history-detail",
    checked: false,
  },
  {
    name: "Англи хэл",
    price: 3.0,
    img: "english",
    img_detail: "english-detail",
    checked: false,
  },
  {
    name: "Хөгжим бүжиг",
    price: 2.0,
    img: "culture",
    img_detail: "culture-detail",
    checked: false,
  },
  {
    name: "Биологи",
    price: 2.0,
    img: "biology",
    img_detail: "biology-detail",
    checked: false,
  },
  {
    name: "Нийгэм",
    price: 2.0,
    img: "economy",
    img_detail: "economy-detail",
    checked: false,
  },
  {
    name: "Хими",
    price: 2.0,
    img: "chemic",
    img_detail: "chemic-detail",
    checked: false,
  },
  {
    name: "Газар зүй",
    price: 2.0,
    img: "geography",
    img_detail: "geography-detail",
    checked: false,
  },
  {
    name: "Биеийн тамир,спорт",
    price: 2.0,
    img: "sport",
    img_detail: "sport-detail",
    checked: false,
  },
];

const basePath = "/assets/images/profession_images";

async function getDataMbtiId() {
  // Fetch data from your API here.
  const res = await axios.get("http://localhost:3000/api/lesson_test");
  return res.data;
}

async function LessonCards() {
  const data = await getDataMbtiId();

  let arr_index = data.existingLesson.checkbox_items.split(",");

  return (
    <div className="flex flex-col gap-5  md:flex-row md:justify-between m-4 ">
      <div
        key={arr_index[0]}
        className="flex flex-col cursor-pointer bg-white justify-center items-center  rounded-full shadow-2xl w-full card-item-div max-w-screen-md border-e-black p-8"
      >
        <Image
          src={`/assets/images/profession_images/${
            lesson_data[arr_index[0]].img_detail
          }.png`}
          alt="box_img"
          className="w-[500px] "
          width={500}
          height={500}
        />
        <p className="text-[14px] semi-bold uppercase ">
          {lesson_data[arr_index[0]].name}
        </p>
      </div>
      <div
        key={arr_index[1]}
        className="flex flex-col cursor-pointer bg-white justify-center items-center  rounded-full shadow-2xl w-full card-item-div max-w-screen-md border-e-black p-8"
      >
        <Image
          src={`/assets/images/profession_images/${
            lesson_data[arr_index[1]].img_detail
          }.png`}
          alt="box_img"
          className="w-[500px] "
          width={500}
          height={500}
        />
        <p className="text-[14px] semi-bold uppercase ">
          {lesson_data[arr_index[1]].name}
        </p>
      </div>
      <div
        key={arr_index[2]}
        className="flex flex-col cursor-pointer bg-white justify-center items-center  rounded-full shadow-2xl w-full card-item-div max-w-screen-md border-e-black p-8"
      >
        <Image
          src={`/assets/images/profession_images/${
            lesson_data[arr_index[2]].img_detail
          }.png`}
          alt="box_img"
          className="w-[500px] "
          width={500}
          height={500}
        />
        <p className="text-[14px] semi-bold uppercase ">
          {lesson_data[arr_index[2]].name}
        </p>
      </div>
    </div>
  );
}
export default LessonCards;
