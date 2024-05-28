"use client";
import React, { useState } from "react";
import Image from "next/image";
import prof_header from "@/assets/images/choose-lesson.png";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import { useRouter } from "next/navigation";

import { Quicksand } from "next/font/google";

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
});

const basePath = "/assets/images/profession_images";
const professions_data = [
  {
    name: "Ирээдүйтэй мэргэжлүүд",
    img: "future_professions",
    img_detail: "future_professions_detail",
    content:
      "Хөгжүүлэх, дизайн хийх, дүн шинжилгээ хийх - эдгээр нь бүх цаг үеийн мэргэжлийн ур чадвар юм. Тэд таныг ирээдүйн мэргэжлээр тохь тухтай байхад тань туслах болно. 5, 10, 20 жилийн дараа ямар мэргэжлүүд хамааралтай болох вэ - бид үүнийг мэргэжилтнүүдтэй хамт шийддэг.Мэргэжлийн загварын гол чиг хандлага бол дэвшил юм. Нэгэн цагт тэрээр барж тээвэрлэгч, утасны оператор, ус зөөгч нарын хөдөлмөрийг шаардлагагүй болгосон. Тэрээр одоо эрэлт хэрэгцээтэй цоо шинэ мэргэжлүүд - ирээдүйн мэргэжлийг бий болгож байна.Өнөөдөр технологи дэлхийг захирч байна. Үүний дагуу өндөр технологийн чиглэлээр мэргэшсэн ажилтнууд онцгой үнэлэгдэх болно. 3D болон биотехнологийг чадварлаг удирддаг, робот техник, интернетийн зүйлийг ойлгодог, дизайн хийх, загвар гаргах, дасан зохицох арга барилыг мэддэг хүмүүс. Энэ бүх ур чадвар нь ирээдүй юм. Тэгээд үсрэнгүй ойртож байна.",
    details: [
      {
        content_title: "Биотехнологич",
        content_detail: "",
        content_image: "biology",
      },
      {
        content_title: "Хөгжүүлэгч",
        content_detail: "",
        content_image: "programmer",
      },
      {
        content_title: "Тоглоомын дизайнер",
        content_detail: "",
        content_image: "designer",
      },
      {
        content_title: "Кибер аюулгүй байдлын мэргэжилтэн",
        content_detail: "",
        content_image: "cyber",
      },
      {
        content_title: "Машин сургалтын мэргэжилтэн",
        content_detail: "",
        content_image: "machine_learning",
      },
      {
        content_title: "Хотын тариачин",
        content_detail: "",
        content_image: "farmer",
      },
      {
        content_title: "Стример",
        content_detail: "",
        content_image: "hutlugch",
      },
      {
        content_title: "Кибер тоглогч",
        content_detail: "",
        content_image: "cyber_gamer",
      },
      {
        content_title: "Тестер",
        content_detail: "",
        content_image: "tester",
      },
      {
        content_title: "Тархвар судлаач",
        content_detail: "",
        content_image: "tarhvar_sudlaach",
      },
    ],
  },
  {
    name: "Анагаах ухааны мэргэжлүүд",
    img: "hospital_professions",
    img_detail: "hospital_professions",
    content: "",
    details: [
      {
        content_title: "Түргэн тусламжийн эмч",
        content_detail: "",
        content_image: "tt_doctor",
      },
      {
        content_title: "Мэс заслын эмч",
        content_detail: "",
        content_image: "mz_doctor",
      },
      {
        content_title: "Эмч",
        content_detail: "",
        content_image: "doctor",
      },
      {
        content_title: "Шүдний эмч",
        content_detail: "",
        content_image: "dental_doctor",
      },
      {
        content_title: "Анагаахын сувилагч",
        content_detail: "",
        content_image: "anagaah_suvilagch",
      },
      {
        content_title: "Эм зүйч",
        content_detail: "",
        content_image: "em_zuich",
      },
    ],
  },
  {
    name: "Боловсрол дахь мэргэжлүүд",
    img: "education_professions",
    img_detail: "education_professions",
    content: "",
    details: [
      {
        content_title: "СӨБ -ийн багш",
        content_detail: "",
        content_image: "sub_teacher",
      },
      {
        content_title: "ЕБС-ийн багш",
        content_detail: "",
        content_image: "ybs_teacher",
      },
      {
        content_title: "Бага ангийн багш мэргэжил",
        content_detail: "",
        content_image: "baga_angi_teacher",
      },
    ],
  },
  {
    name: "Эдийн засгийн мэргэжлүүд",
    img: "economy_professions",
    img_detail: "economy_professions",
    content: "",
    details: [
      {
        content_title: "Биотехнологич",
        content_detail: "",
        content_image: "biology",
      },
      {
        content_title: "Хөгжүүлэгч",
        content_detail: "",
        content_image: "programmer",
      },
      {
        content_title: "Тоглоомын дизайнер",
        content_detail: "",
        content_image: "designer",
      },
      {
        content_title: "Кибер аюулгүй байдлын мэргэжилтэн",
        content_detail: "",
        content_image: "cyber",
      },
      {
        content_title: "Машин сургалтын мэргэжилтэн",
        content_detail: "",
        content_image: "machine_learning",
      },
      {
        content_title: "Хотын тариачин",
        content_detail: "",
        content_image: "farmer",
      },
      {
        content_title: "Стример",
        content_detail: "",
        content_image: "hutlugch",
      },
      {
        content_title: "Кибер тоглогч",
        content_detail: "",
        content_image: "cyber_gamer",
      },
      {
        content_title: "Тестер",
        content_detail: "",
        content_image: "tester",
      },
      {
        content_title: "Тархвар судлаач",
        content_detail: "",
        content_image: "tarhvar_sudlaach",
      },
    ],
  },
  {
    name: "Хуулийн мэргэжлүүд",
    img: "layeour_professions",
    img_detail: "layeour_professions",
    content: "",
    details: [
      {
        content_title: "Биотехнологич",
        content_detail: "",
        content_image: "biology",
      },
      {
        content_title: "Хөгжүүлэгч",
        content_detail: "",
        content_image: "programmer",
      },
      {
        content_title: "Тоглоомын дизайнер",
        content_detail: "",
        content_image: "designer",
      },
      {
        content_title: "Кибер аюулгүй байдлын мэргэжилтэн",
        content_detail: "",
        content_image: "cyber",
      },
      {
        content_title: "Машин сургалтын мэргэжилтэн",
        content_detail: "",
        content_image: "machine_learning",
      },
      {
        content_title: "Хотын тариачин",
        content_detail: "",
        content_image: "farmer",
      },
      {
        content_title: "Стример",
        content_detail: "",
        content_image: "hutlugch",
      },
      {
        content_title: "Кибер тоглогч",
        content_detail: "",
        content_image: "cyber_gamer",
      },
      {
        content_title: "Тестер",
        content_detail: "",
        content_image: "tester",
      },
      {
        content_title: "Тархвар судлаач",
        content_detail: "",
        content_image: "tarhvar_sudlaach",
      },
    ],
  },
  {
    name: "Шинжлэх ухааны мэргэжлүүд",
    img: "shu_professions",
    img_detail: "shu_professions",
    content: "",
    details: [
      {
        content_title: "Биотехнологич",
        content_detail: "",
        content_image: "biology",
      },
      {
        content_title: "Хөгжүүлэгч",
        content_detail: "",
        content_image: "programmer",
      },
      {
        content_title: "Тоглоомын дизайнер",
        content_detail: "",
        content_image: "designer",
      },
      {
        content_title: "Кибер аюулгүй байдлын мэргэжилтэн",
        content_detail: "",
        content_image: "cyber",
      },
      {
        content_title: "Машин сургалтын мэргэжилтэн",
        content_detail: "",
        content_image: "machine_learning",
      },
      {
        content_title: "Хотын тариачин",
        content_detail: "",
        content_image: "farmer",
      },
      {
        content_title: "Стример",
        content_detail: "",
        content_image: "hutlugch",
      },
      {
        content_title: "Кибер тоглогч",
        content_detail: "",
        content_image: "cyber_gamer",
      },
      {
        content_title: "Тестер",
        content_detail: "",
        content_image: "tester",
      },
      {
        content_title: "Тархвар судлаач",
        content_detail: "",
        content_image: "tarhvar_sudlaach",
      },
    ],
  },
  {
    name: "Хөдөө аж ахуйн мэргэжлүүд",
    img: "huaa_professions",
    img_detail: "huaa_professions",
    content: "",
    details: [
      {
        content_title: "Биотехнологич",
        content_detail: "",
        content_image: "biology",
      },
      {
        content_title: "Хөгжүүлэгч",
        content_detail: "",
        content_image: "programmer",
      },
      {
        content_title: "Тоглоомын дизайнер",
        content_detail: "",
        content_image: "designer",
      },
      {
        content_title: "Кибер аюулгүй байдлын мэргэжилтэн",
        content_detail: "",
        content_image: "cyber",
      },
      {
        content_title: "Машин сургалтын мэргэжилтэн",
        content_detail: "",
        content_image: "machine_learning",
      },
      {
        content_title: "Хотын тариачин",
        content_detail: "",
        content_image: "farmer",
      },
      {
        content_title: "Стример",
        content_detail: "",
        content_image: "hutlugch",
      },
      {
        content_title: "Кибер тоглогч",
        content_detail: "",
        content_image: "cyber_gamer",
      },
      {
        content_title: "Тестер",
        content_detail: "",
        content_image: "tester",
      },
      {
        content_title: "Тархвар судлаач",
        content_detail: "",
        content_image: "tarhvar_sudlaach",
      },
    ],
  },
  {
    name: "Дижитал мэргэжлүүд",
    img: "digital_professions",
    img_detail: "digital_professions",
    content: "",
    details: [
      {
        content_title: "Биотехнологич",
        content_detail: "",
        content_image: "biology",
      },
      {
        content_title: "Хөгжүүлэгч",
        content_detail: "",
        content_image: "programmer",
      },
      {
        content_title: "Тоглоомын дизайнер",
        content_detail: "",
        content_image: "designer",
      },
      {
        content_title: "Кибер аюулгүй байдлын мэргэжилтэн",
        content_detail: "",
        content_image: "cyber",
      },
      {
        content_title: "Машин сургалтын мэргэжилтэн",
        content_detail: "",
        content_image: "machine_learning",
      },
      {
        content_title: "Хотын тариачин",
        content_detail: "",
        content_image: "farmer",
      },
      {
        content_title: "Стример",
        content_detail: "",
        content_image: "hutlugch",
      },
      {
        content_title: "Кибер тоглогч",
        content_detail: "",
        content_image: "cyber_gamer",
      },
      {
        content_title: "Тестер",
        content_detail: "",
        content_image: "tester",
      },
      {
        content_title: "Тархвар судлаач",
        content_detail: "",
        content_image: "tarhvar_sudlaach",
      },
    ],
  },
  {
    name: "Ажиллах мэргэжлүүд",
    img: "working_professions",
    img_detail: "working_professions",
    content: "",
    details: [
      {
        content_title: "Биотехнологич",
        content_detail: "",
        content_image: "biology",
      },
      {
        content_title: "Хөгжүүлэгч",
        content_detail: "",
        content_image: "programmer",
      },
      {
        content_title: "Тоглоомын дизайнер",
        content_detail: "",
        content_image: "designer",
      },
      {
        content_title: "Кибер аюулгүй байдлын мэргэжилтэн",
        content_detail: "",
        content_image: "cyber",
      },
      {
        content_title: "Машин сургалтын мэргэжилтэн",
        content_detail: "",
        content_image: "machine_learning",
      },
      {
        content_title: "Хотын тариачин",
        content_detail: "",
        content_image: "farmer",
      },
      {
        content_title: "Стример",
        content_detail: "",
        content_image: "hutlugch",
      },
      {
        content_title: "Кибер тоглогч",
        content_detail: "",
        content_image: "cyber_gamer",
      },
      {
        content_title: "Тестер",
        content_detail: "",
        content_image: "tester",
      },
      {
        content_title: "Тархвар судлаач",
        content_detail: "",
        content_image: "tarhvar_sudlaach",
      },
    ],
  },
  {
    name: "Техникийн мэргэжлүүд",
    img: "technical_professions",
    img_detail: "technical_professions",
    content: "",
    details: [
      {
        content_title: "Биотехнологич",
        content_detail: "",
        content_image: "biology",
      },
      {
        content_title: "Хөгжүүлэгч",
        content_detail: "",
        content_image: "programmer",
      },
      {
        content_title: "Тоглоомын дизайнер",
        content_detail: "",
        content_image: "designer",
      },
      {
        content_title: "Кибер аюулгүй байдлын мэргэжилтэн",
        content_detail: "",
        content_image: "cyber",
      },
      {
        content_title: "Машин сургалтын мэргэжилтэн",
        content_detail: "",
        content_image: "machine_learning",
      },
      {
        content_title: "Хотын тариачин",
        content_detail: "",
        content_image: "farmer",
      },
      {
        content_title: "Стример",
        content_detail: "",
        content_image: "hutlugch",
      },
      {
        content_title: "Кибер тоглогч",
        content_detail: "",
        content_image: "cyber_gamer",
      },
      {
        content_title: "Тестер",
        content_detail: "",
        content_image: "tester",
      },
      {
        content_title: "Тархвар судлаач",
        content_detail: "",
        content_image: "tarhvar_sudlaach",
      },
    ],
  },
  {
    name: "Цэргийн мэргэжлүүд",
    img: "military_professions",
    img_detail: "military_professions",
    content: "",
    details: [
      {
        content_title: "Биотехнологич",
        content_detail: "",
        content_image: "biology",
      },
      {
        content_title: "Хөгжүүлэгч",
        content_detail: "",
        content_image: "programmer",
      },
      {
        content_title: "Тоглоомын дизайнер",
        content_detail: "",
        content_image: "designer",
      },
      {
        content_title: "Кибер аюулгүй байдлын мэргэжилтэн",
        content_detail: "",
        content_image: "cyber",
      },
      {
        content_title: "Машин сургалтын мэргэжилтэн",
        content_detail: "",
        content_image: "machine_learning",
      },
      {
        content_title: "Хотын тариачин",
        content_detail: "",
        content_image: "farmer",
      },
      {
        content_title: "Стример",
        content_detail: "",
        content_image: "hutlugch",
      },
      {
        content_title: "Кибер тоглогч",
        content_detail: "",
        content_image: "cyber_gamer",
      },
      {
        content_title: "Тестер",
        content_detail: "",
        content_image: "tester",
      },
      {
        content_title: "Тархвар судлаач",
        content_detail: "",
        content_image: "tarhvar_sudlaach",
      },
    ],
  },
  {
    name: "Соёл урлагийн мэргэжлүүд",
    img: "culture_professions",
    img_detail: "sport-culture_professions",
    content: "",
    details: [
      {
        content_title: "Биотехнологич",
        content_detail: "",
        content_image: "biology",
      },
      {
        content_title: "Хөгжүүлэгч",
        content_detail: "",
        content_image: "programmer",
      },
      {
        content_title: "Тоглоомын дизайнер",
        content_detail: "",
        content_image: "designer",
      },
      {
        content_title: "Кибер аюулгүй байдлын мэргэжилтэн",
        content_detail: "",
        content_image: "cyber",
      },
      {
        content_title: "Машин сургалтын мэргэжилтэн",
        content_detail: "",
        content_image: "machine_learning",
      },
      {
        content_title: "Хотын тариачин",
        content_detail: "",
        content_image: "farmer",
      },
      {
        content_title: "Стример",
        content_detail: "",
        content_image: "hutlugch",
      },
      {
        content_title: "Кибер тоглогч",
        content_detail: "",
        content_image: "cyber_gamer",
      },
      {
        content_title: "Тестер",
        content_detail: "",
        content_image: "tester",
      },
      {
        content_title: "Тархвар судлаач",
        content_detail: "",
        content_image: "tarhvar_sudlaach",
      },
    ],
  },
];

function ProfessionsPage() {
  const router = useRouter();

  const [checkedCount, setCheckedCount] = useState(0);
  const [error, setError] = useState("");
  const [openModal0, setOpenModal0] = useState(false);
  const [openModal1, setOpenModal1] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
  const [openModal3, setOpenModal3] = useState(false);
  const [openModal4, setOpenModal4] = useState(false);
  const [openModal5, setOpenModal5] = useState(false);
  const [openModal6, setOpenModal6] = useState(false);
  const [openModal7, setOpenModal7] = useState(false);
  const [openModal8, setOpenModal8] = useState(false);
  const [openModal9, setOpenModal9] = useState(false);
  const [openModal10, setOpenModal10] = useState(false);
  const [openModal11, setOpenModal11] = useState(false);

  const onClickButton0 = () => {
    setOpenModal0(true);
  };
  const onClickButton1 = () => {
    setOpenModal1(true);
  };
  const onClickButton2 = () => {
    setOpenModal2(true);
  };
  const onClickButton3 = () => {
    setOpenModal3(true);
  };
  const onClickButton4 = () => {
    setOpenModal4(true);
  };
  const onClickButton5 = () => {
    setOpenModal5(true);
  };
  const onClickButton6 = () => {
    setOpenModal6(true);
  };
  const onClickButton7 = () => {
    setOpenModal7(true);
  };
  const onClickButton8 = () => {
    setOpenModal8(true);
  };
  const onClickButton9 = () => {
    setOpenModal9(true);
  };
  const onClickButton10 = () => {
    setOpenModal10(true);
  };
  const onClickButton11 = () => {
    setOpenModal11(true);
  };

  const onCloseModal = () => {
    setOpenModal0(false);
    setOpenModal1(false);
    setOpenModal2(false);
    setOpenModal3(false);
    setOpenModal4(false);
    setOpenModal5(false);
    setOpenModal6(false);
    setOpenModal7(false);
    setOpenModal8(false);
    setOpenModal9(false);
    setOpenModal11(false);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    let checkArray = [];
    for (let i = 0; i < 12; i++) {
      if (e.target[i].checked === true) {
        checkArray.push(i);
      }
    }
    let checkbox_items = checkArray.toString();

    let email = "boldoosw@gmail.com";
    try {
      const res = await fetch(`/api/lesson_test`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ checkbox_items, email }),
      });

      if (res.ok) {
        console.log("amjilttai hadgallaa");
        router.refresh();
        router.push("/report");
      } else {
        throw new Error("Failed to create a mbti");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = (e) => {
    // Destructuring
    const { checked } = e.target;

    // Case 1 : The user checks the box
    if (checked) setCheckedCount(checkedCount + 1);
    // Case 2 : The user unchecks the box
    else if (checkedCount >= 1) setCheckedCount(checkedCount - 1);

    console.log("checked count:", checkedCount);
    const disabled = checkedCount > 2;
  };

  return (
    <main
      className={`${quicksand.variable}  font-quicksand max-w-[900px] w-full flex flex-col items-center`}
    >
      {/* <Image className="sm:w-full" src={prof_header} alt="prof-logo" /> */}
      <h3>Мэргэжлийн каталог - салбараар</h3>
      <form onSubmit={handleSubmit}>
        <div
          key="main"
          className="w-full grid justify-center md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-7 my-10"
        >
          {professions_data.map((profession, index) => (
            <>
              <div
                key={profession.name + index}
                className="flex flex-row bg-white p-2 rounded border shadow shadow-slate-500 max-w-xs md:max-w-none overflow-hidden cursor-hand items-center"
              >
                <Image
                  width={160}
                  height={200}
                  className=" object-cover"
                  src={`${basePath}/${profession.img}.png`}
                  alt=""
                  onClick={eval(`onClickButton${index}`)}
                />

                <Modal
                  key={index}
                  open={eval(`openModal${index}`)}
                  onClose={eval(`onCloseModal`)}
                >
                  <h1>{eval(`onCloseModal`)}</h1>
                  <Image
                    width={900}
                    height={400}
                    className=" w-full h-96"
                    src={`${basePath}/${profession.img_detail}.png`}
                    alt=""
                  />

                  {/* <Image className="sm:w-full" src={prof_header} alt="prof-logo" /> */}
                  <h3>{profession.name}</h3>
                  <form onSubmit={handleSubmit}>
                    <div
                      key="main"
                      className="w-full grid justify-center md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-7 my-10"
                    >
                      {profession.details.map((detail, index) => (
                        <>
                          <div className="flex flex-col">
                            <div
                              key={detail.content_title + index}
                              className="flex flex-row bg-white p-2 rounded border shadow shadow-slate-500 max-w-xs md:max-w-none overflow-hidden cursor-hand items-center"
                            >
                              <Image
                                width={160}
                                height={200}
                                className=" object-cover"
                                src={`${basePath}/detail_images/${detail.content_image}.png`}
                                alt=""
                                onClick={eval(`onClickButton${index}`)}
                              />
                            </div>
                            <p className="text-sm">{detail.content_title}</p>
                          </div>
                        </>
                      ))}
                      <p className="text-red-600 mb-4 text-[16px]">
                        {error && error}
                      </p>
                    </div>
                  </form>
                </Modal>
              </div>
            </>
          ))}

          <p className="text-red-600 mb-4 text-[16px]">{error && error}</p>
        </div>
      </form>
    </main>
  );
}

export default ProfessionsPage;
