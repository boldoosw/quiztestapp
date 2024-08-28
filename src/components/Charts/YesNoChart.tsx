import React, { useEffect, useState } from "react";

import axios from "axios";

const cardData1 = [
  {
    id: 0,
    name: "Цалин өндөр",
    bg: "bg-green-300 mx-1 px-1 py-1 my-1 w-full",
    title: "Цалин мөнгө",
    content:
      "Өндөр цалин хөлс - хүнийг эдийн засгийн эрх чөлөөнд хүргэхэд чухал үүрэгтэй. Гэхдээ эдийн засгийн эрх чөлөөтэй болсоноор хүний сэтгэл ханамж хангагдахгүй. /Хүний хрэгцээний 5 түвшин. Маслоу - америкын сэтгэл зүйч докторын онол/     Хүн мөнгөтэй болоод:   2. Аюулгүй байдлын хэрэгцээ — энэ нь шууд утгаараа аюулгүй байдалд хамгаалалттай байх, хууль дүрэм, тогтвортой байдал, айдас түгшүүргүй ажиллаж амьдрах.(хамт олон) хэрэгцээ — физиологийн болоод аюулгүйн хэрэгцээ нь хангагдавал хүний дараагийн шатны хэрэгцээ нь нийгэмдээ хүлээн зөвшөөрөгдөх хэрэгцээ үүсдэг. Жишээлбэл:  нөхөрлөл, ойр дотно мэдрэмж, хүлээн зөвшөөрөгдөх, хайрлах, хайрлагдах. Ямар нэг бүлэг буюу найз нөхөд, гэр бүл, ажлын хамт олонд хамрагдах гэдэг нь энэ шатны хэрэгцээнд орно.   4. Бусдад хүлээн зөвшөөрөгдөх хэрэгцээ — энэ нь хоёр бүлэгт хуваагдана а) өөртөө итгэлтэй байж аливаа зүйлд амжилт олох  б) бусдаас хүндэтгэл хүлээх, хүлээн зөвшөөрөгдөх. Маслоу үзэхдээ хүүхдүүд болон өсвөр насны хүүхдүүдэд энэ хэрэгцээний хоёр дах ангилал болох нэр хүнд, бусдын хүндлэлийг олох нь хамгийн чухал хэрэгцээ бөгөөд энэ нь цаашид жинхэнэ өөртөө итгэх итгэл, нэр хүндэд хөтөлдөг гэсэн байдаг.  5. Өөрийгөө илэрхийлэх — хувь хүн өөрийнхөө чадвар, өөрөө өөртөө сэтгэл хангалуун байх, хувь хүний өөрийн хөгжил дэвшлийн төлөө хүсэж тэмүүлэх эрмэлзлэл. Энэ нь “хувь хүний хүрж болох бүх зүйлд хүрэх” гэсэн хүсэл юм (Maslow, 1987, p. 64).Тэгэхээр өндөр цалин харж сонгосон мэргэжил тань дараах 5 түвшинд хүргэж чадах эсэх талаар бодолцож үзэх хэрэгтэй байна",
  },
  {
    id: 1,
    name: "Ажлын байрны олдоц",
    bg: "bg-blue-300 mx-1 px-1 py-1 my-1 w-full",
    title: "Ажлын байрны олдоц",
    content:
      "Хөдөлмөрийн зах зээл дээр ажлын байр бэлэн байдаг мэргэжил нь Чамайг ажилд хурдан орж, цалин мөнгөтэй шууд залгахад хялбар байх том давуу тал мөн. Гэхдээ яг энэ мэргэжил чиний сонирхол ба чадварт тохирох эсэхийг мэдэх нь маш чухал. Хүн өөрийн хүсэл сонирхол ба чадварт тохирсон мэргэжил эзэмшиж энэ чиглэлээрээ ажиллавал хийж буй ажлаасаа үргэлж таашал авч, үр дүнтэй ажиллаж, амжилтад хүрэх үндсэн нөхцөл бүрдэнэ. Энэ бол мэргэжил сонголтын “Алтан дүрэм”",
  },
  {
    id: 2,
    name: "Миний сонирхолыг татдаг",
    bg: "bg-yellow-300 mx-1 px-1 py-1 my-1 w-full",
    title: "Миний сонирхолыг татдаг",
    content:
      "Хүний сонирхолыг “Субьектив буюу Хийсвэр” сонирхол, “Обьектив буюу бодит” сонирхол гэж ангилдаг. Хийсвэр сонирхол хурдан өөрчлөгдөж өөр өөр сонирхолоор амархан солигдоно, харин бодит сонирхол харьцангуй тогтвортой байна. Таны сонгосон мэргэжил чухам аль сонирхол болохыг мэдэх хэрэгтэй байна.Үүний тулд хамгийн багадаа доорхии 5 зүйлийг хийж үзнэ үү",
  },
  {
    id: 3,
    name: "Эцэг эх, бусдын зөвлөгөөг дагасан",
    bg: "bg-gray-400 mx-1 px-1 py-1 my-1 w-full",
    title: "Эцэг эх, бусдын зөвлөгөөг дагасан",
    content:
      "Аав ээж чинь чамтай харьцуулбал илүү олон “оймс” илээсэн, ажиллаж амьдрах хугацаандаа олон зүйлтэй тулгарч ялж, ялагдаж үзсэн – түүнээсээ ч амьдралын их туршлага хуримтлуулсан хүмүүс.  Тиймээс тэдний зөвлөгөөг хүлээн авч сонсож, ойлгож, ажил амьдралдаа алдахгүйн тулд, амжилтанд хүрэхийн тулд “Авах гээхийн ухаан”-аар хандах ёстой. Тэд үргэлж чиний төлөө л хэлэх, ярих болно. Гэхдээ “Чи бол” өөрийн хувь заяатай, өөрийн даалгавартай, өөрийн зорилгыг биелүүлэх ёстой, тусдаа “Хувь хүн- Бие хүн”, тусдаа ертөнц. ",
  },
  {
    id: 4,
    name: "Нэр хүндтэй мэргэжил",
    bg: "bg-orange-400 mx-1 px-1 py-1 my-1 w-full",
    title: "Нэр хүндтэй мэргэжил",
    content:
      "Өөрийгөө илэрхийлэх — хувь хүн өөрийнхөө чадвар, өөрөө өөртөө сэтгэл хангалуун байх, хувь хүнээс бие хүн болж хөгжиж дэвшихийн төлөө хүсэж тэмүүлдэг их том эрмэлзлэл. Энэ нь “хувь хүний дээд хэрэгцээ” юм (Maslow, 1987).Мэргэжил сонгохдоо энэ тухай бодож сонголт хийж байгаа бол Та өөртөө маш өндөр босго тавдаг юм байна.Гэхдээ чиний сонгосон “нэр хүндтэй” болох мэргэжил чиний нэрийг олонд хүтрээх “зөв” сонголт мөн эсэхийг яаж мэдэх вэ? ",
  },
];

const cardData2 = [
  {
    id: 0,
    name: "Ажлын нөхцөл ба ажилбарыг мэднэ",
    bg: "bg-green-300 mx-1 px-1 py-1 my-1 w-full",
    title: "Ажлын нөхцөл ба ажилбар",
    content:
      "ЗӨВЛӨМЖ. Мэргэжилтэй танилцах аялал гэж байдаг. Энэ аялал буюу ажил мэргэжилтэй ажлын байран дээр нь очиж танилцах, чиний энергийн онцлоготой тухайн ажлын байр тохирох эсэхийг биеээр мэдрэх шаардлагатай шүү !!!",
  },
  {
    id: 1,
    name: "Энэ мэргэжилд шаардлагатай чадвар надад бий",
    bg: "bg-blue-300 mx-1 px-1 py-1 my-1 w-full",
    title: "Чадварыг ерөнхий чадвар, мэргэжлийн тусгай чадвар ",
    content:
      "Мэргэжил эзэмших түүгээр ажиллахад ерөнхий чадвартай байхад ажиллаж болдог мэргэжил,  зайлшгүй тусгай чадвар шаардах мэргэжил гэж байна. Жишээлбэл: Мэс заслын эмч – Анагаах ухааны бакалаварт 6 жил суралцаж, 2-4 жил мэс заслаар мэргэшиж, цаашид олон жил ажиллах тусам мэс ажиллабараар онцгой туршлага хуримтлуулж байж мундаг мэс заслийн эмч болно.Програмчин – онлайн курс, дамжаанд хамрагдаж, богино хугацаанд, бага зардлаар програмист болж, өөрийн зүтгэлээр гэрээсээ - гадаадын захиалгаар өндөр цалин авах боломжтой.",
  },
  {
    id: 2,
    name: "Энэ мэргэжлээр хаана сурахаа мэднэ",
    bg: "bg-yellow-300 mx-1 px-1 py-1 my-1 w-full",
    title: "Mergejilsongolt.info Вебсайтаар ",
    content:
      "Mergejilsongolt.info Вебсайт -д мэргэжил эзэмших боломжийн талаар танилцуулсан байгаа. ЗӨВЛӨМЖ. 21 -р зуунд ажиллаж амьдрах “ цахим Z” үеийнхэний онцлогийн талаар “Үе үеийн онол”-ын талаар Генетик тест ба сурахад суралцах чадварууд гэдэг Фейсбукын пейж хуудсанд бичсэн нийтлэлийг уншаарай ! ",
  },
  {
    id: 3,
    name: "Энэ мэргэжил эрэлт ихтэй",
    bg: "bg-gray-400 mx-1 px-1 py-1 my-1 w-full",
    title: "Ажилд хялбар орж, цалин мөнгө шууд авах давуу талтай. ",
    content:
      "Хөдөлмөрийн зах зээл дээр ажлын байр бэлэн байдаг мэргэжил нь Чамайг ажилд хурдан орж, цалин мөнгөтэй шууд залгахад хялбар байх том давуу тал мөн. Гэхдээ яг энэ мэргэжил чиний сонирхол ба чадварт тохирох эсэхийг мэдэх нь маш чухал. Хүн өөрийн хүсэл сонирхол ба чадварт тохирсон мэргэжил эзэмшиж энэ чиглэлээрээ ажиллавал хийж буй ажлаасаа үргэлж таашал авч, үр дүнтэй ажиллаж, амжилтад хүрэх үндсэн нөхцөл бүрдэнэ. Энэ бол мэргэжил сонголтын “Алтан дүрэм”.  ЗӨВЛӨМЖ. Тэгэхээр ажлын байр харж сонгосон мэргэжил Танаас энэ мэргэжилд суралцахад  зарцуулсан цаг хугацаа /дээд болосрол 4-5 жил, Анагаах ухаанд бол 10 жил/болон хөрөнгө оруулалтийг үр дүнтэй болгож чадах эсэхийг сайтар бодолцох хэрэгтэй байна.",
  },
  {
    id: 4,
    name: "Энэ мэргэжлийн талаар сайн мэдэхгүй зүгээр л гоё санагддаг",
    bg: "bg-orange-400 mx-1 px-1 py-1 my-1 w-full",
    title:
      "Сонирхол-  “хийсвэр” ба “бодит” гэж байдаг.  Чинийх аль нь юм бол ???  ",
    content:
      "Хүний сонирхолыг “Субьектив буюу Хийсвэр” сонирхол, “Обьектив буюу бодит” сонирхол гэж ангилдаг. Хийсвэр сонирхол хурдан өөрчлөгдөж өөр өөр сонирхолоор амархан солигдоно, харин бодит сонирхол харьцангуй тогтвортой байна. Таны сонгосон мэргэжил чухам аль сонирхол болохыг мэдэх хэрэгтэй байна.Үүний тулд хамгийн багадаа доорхии 5 зүйлийг хийж үзнэ үү:6.	Эцэг эхийн тусламжтайгаар Таны сонирхолыг татаж буй мэргэжлийн хүнийг олох7.	Тэр хүний ажил дээр очиж ажлын байр, орчинтой нь танилцах 8.	Тэр хүний хажууд дор хаяж 8 цаг цуг байж ажлын нь горим ба процессыг ажиглах9.	Тэр мэргэжлийн хүний авдаг цалинг асуух, тэр цалин чиний хэрэгцээг хангах эсэхийг тодруулах /карьер өсөхөд цалингийн хэмжээ хэр нэмэгдэх эсэх г.м/10.	Энэ мэргэжлийн эрэлт хэрэгцээг мэдэх. ЗӨВЛӨМЖ. Ийм “танилцах аялал”-ыг сонирхож буй мэргэжил бүрээр хийж байж таны сонирхол хэр “бодитой” болохыг тодруулаарай.",
  },
  {
    id: 5,
    name: "Өмнөх бүх хэрэгцээг мэднэ",
    bg: "",
    title: "Мэдэх ба мэдрэх гэдэг өөр өөр утгатай шүү !!!",
    content:
      "ЗӨВЛӨМЖ. “1000 сонсож мэдэхээс 1 удаа биечилж очиж, харж  мэдрээрэй”Дээр нь бас “Чадах уу?” гэдэг бүр чухал байна. ",
  },
];

const cardData3 = [
  {
    id: 0,
    name: "Мэргэжилүүдийн талаар мэдэхгүй ",
    bg: "bg-green-300 mx-1 px-1 py-1 my-1 w-full",
    title: "megrejilsongolt.info сайтаар орж мэргэжилтэй танилцана уу !!!",
    content:
      "Энэ сайтад мэргэжлийг салбараар нь ангилж, давуу ба сул тал хэрхэн суралцах талаар тайлбарласан байгаа ",
  },
  {
    id: 1,
    name: "Юуг хийж чадахаа мэдэхгүй байна",
    bg: "bg-blue-300 mx-1 px-1 py-1 my-1 w-full",
    title: "Чадвар тодорхойлох тест-д орно уу",
    content:
      "Хүнд зөөлөн ба хатуу чадвар гэж бий. Нийгэмшихэд зөөлөн чадвар, ажил мэргэжилд хатуу чадвараа хөгжүүлэх + тусгай чадвар эзэмших хэрэгтэй болно. Эдгээр чадваруудын төрмөл өгөгдөл ба олдмол чадвар гэж бас байна. Чадварын төрмөл өгөгдлийг Тоон, Астро, Генетик тестээр, олдмол чадварыг Вибратестээр тодорхойлж тус тус болдог. Манай хаягаар хандаж чадвар тодорхойлох тестэд орно уу.",
  },
  {
    id: 2,
    name: "Олон мэргэжлээс сонголт хийж чадахгүй ",
    bg: "bg-yellow-300 mx-1 px-1 py-1 my-1 w-full",
    title: "Мэргэжил сонголтын  тест-д орно уу",
    content:
      "Тоон, Астро, Генетик тестээр төрмөл сонирхол ба чадварт тохирсон мэргэжлүүдийг, мөн Вибра ба Фото тестээр олдмол чадварт тохиромжтой мэргэжлүүдийг тус тус тодорхойлж болдог. ",
  },
  {
    id: 3,
    name: "Мэргэжилээ яаж сонгохоо мэдэхгүй ",
    bg: "bg-gray-400 mx-1 px-1 py-1 my-1 w-full",
    title: "Мэргэжил сонголтын  зөвлөгөө авна уу",
    content:
      "Тоон, Астро, Генетик тестээр төрмөл сонирхол ба чадварт тохирсон мэргэжлүүдийг, мөн Вибра ба Фото тестээр олдмол чадварт тохиромжтой мэргэжлүүдийг тус тус тодорхойлж болдог. Хүүхдийн нас, сурч байгаа ангиас хамаарч тестүүдийг давтамжтай хийж, мэргэжил сонголтод системтэй чиглүүлэх зөвлөмж аваарай.   ",
  },
  {
    id: 4,
    name: "Мэргэжил сонгох талаар бодоогүй  байна",
    bg: "bg-orange-400 mx-1 px-1 py-1 my-1 w-full",
    title:
      "Эцэг эхийн хайр халамж цаг хугацаа болоод тоо хэмжээний хувьд ч  хязгаартай шүү !!!",
    content:
      "Эцэг эх чинь чамайг хайрлаж, халамжилж, идэж уух, өмсөж зүүхээр хангаж өсгөх үүрэгтэй. Гэхдээ цаг хугацааны явцад чамд үзүүлэх хайр халамж хэвээр үлдэх боловч, харин чиний  эдийн засгийн өсөн нэмэгдэх хэрэгцээг хангах боломж хангалтгүй болж ирнэ. ",
  },
];

export default function YesNoChart({ email }: { email: String }) {
  const [a_items, setAItems] = useState([]);

  const [b_items, setBItems] = useState([]);

  const [c_items, setCItems] = useState([]);

  const [user_email, setEmail] = useState(email);

  async function fetchData() {
    // Fetch data from your API here.
    const { data } = await axios.get(`/api/yes_no`, {
      params: { user_email: user_email },
    });
    try {
      setAItems(data.existingYesNo.a_items.split(","));
      setBItems(data.existingYesNo.b_items.split(","));
      setCItems(data.existingYesNo.c_items.split(","));
    } catch (error) {
      throw new Error();
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (a_items.length > 0 && b_items.length > 0)
    return a_items.length > 2 ? (
      <>
        <div className="col-span-12 rounded-sm border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-12">
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div
              className={
                "border-b border-stroke  text-black   px-7 py-4 dark:border-strokedark bg-gray-300 "
              }
            >
              <h3 className="font-medium dark:text-white">
                1.ТҮРГЭН ТАНДАЛТЫН ТЕСТИЙН ҮР ДҮНГ ДООР ҮЗҮҮЛЭВ.
              </h3>
            </div>
          </div>
        </div>
        <div className="col-span-12 rounded-sm border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-3">
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke px-7 py-4 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                A. Чи мэргэжил сонгохдоо юу бодолцож сонголт хийсэн бэ? (
                {a_items.length > 2 ? "Тийм" : "Үгүй"})
              </h3>
            </div>

            <div className=" h-full flex flex-col">
              <div className="bg-green-500 mt-2 text-white p-2 text-center">
                {cardData1[a_items[0]]?.name}
                {/* {c_items[0]} */}
              </div>
              <div className="bg-yellow-500 text-white p-2 text-center mt-2">
                {cardData1[a_items[1]]?.name}
              </div>
              <div className="bg-red-500 text-white p-2 text-center mt-2 mb-2">
                {cardData1[a_items[2]]?.name}
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 rounded-sm border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-9">
          <div className=" h-full m-4">
            <h3 className="text-white bg-green-500 p-2">
              {cardData1[a_items[0]]?.name}
            </h3>
            <div className="text-sm leading-6 text-gray-400">
              {cardData1[a_items[0]]?.content}
            </div>
            <h3 className="text-white bg-yellow-500 p-2">
              {cardData1[a_items[1]]?.name}
            </h3>
            <div className="text-sm leading-6 text-gray-400">
              {cardData1[a_items[1]]?.content}
            </div>
            <h3 className="text-white bg-red-500 p-2">
              {cardData1[a_items[2]]?.name}
            </h3>
            <div className="text-sm leading-6 text-gray-400">
              {cardData1[a_items[2]]?.content}
            </div>
          </div>
        </div>
        <div className="col-span-12 rounded-sm border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-3">
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke px-7 py-4 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                B. Чи сонгосон мэргэжлийн талаар юу мэдэх вэ ? (
                {a_items.length > 2 ? "Тийм" : "Үгүй"})
              </h3>
            </div>

            <div className=" h-full flex flex-col">
              <div className="bg-green-500 mt-2 text-white p-2 text-center">
                {cardData2[b_items[0]]?.name}
                {/* {c_items[0]} */}
              </div>
              <div className="bg-yellow-500 text-white p-2 text-center mt-2">
                {cardData2[b_items[1]]?.name}
              </div>
              <div className="bg-red-500 text-white p-2 text-center mt-2 mb-2">
                {cardData2[b_items[2]]?.name}
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 rounded-sm border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-9">
          <div className=" h-full m-4">
            <h3 className="text-white bg-green-500 p-2">
              {cardData2[b_items[0]]?.name}
            </h3>
            <div className="text-sm leading-6 text-gray-400">
              {cardData2[b_items[0]]?.content}
            </div>
            <h3 className="text-white bg-yellow-500 p-2">
              {cardData2[b_items[1]]?.name}
            </h3>
            <div className="text-sm leading-6 text-gray-400">
              {cardData2[b_items[1]]?.content}
            </div>
            <h3 className="text-white bg-red-500 p-2">
              {cardData2[b_items[2]]?.name}
            </h3>
            <div className="text-sm leading-6 text-gray-400">
              {cardData2[b_items[2]]?.content}
            </div>
          </div>
        </div>
      </>
    ) : (
      <>
        <div className="col-span-12 rounded-sm border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-12">
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div
              className={
                "border-b border-stroke  text-black   px-7 py-4 dark:border-strokedark bg-gray-300 "
              }
            >
              <h3 className="font-medium dark:text-white">
                1.ТҮРГЭН ТАНДАЛТЫН ТЕСТИЙН ҮР ДҮНГ ДООР ҮЗҮҮЛЭВ.
              </h3>
            </div>
          </div>
        </div>
        <div className="col-span-12 rounded-sm border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-3">
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke px-7 py-4 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                C. Та мэргэжилээ сонгосон уу (
                {a_items.length > 2 ? "Тийм" : "Үгүй"})
              </h3>
            </div>

            <div className=" h-full flex flex-col">
              <div className="bg-green-500 mt-2 text-black text-center">
                {cardData3[c_items[0]]?.name}
                {/* {c_items[0]} */}
              </div>
              <div className="bg-yellow-500 text-black text-center mt-2">
                {cardData3[c_items[1]]?.name}
              </div>
              <div className="bg-red-500 text-black text-center mt-2 mb-2">
                {cardData3[c_items[2]]?.name}
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 rounded-sm border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-9">
          <div className=" h-full m-4">
            <h3 className="bg-green-500">{cardData3[c_items[0]]?.name}</h3>
            <div className="text-sm leading-6 text-gray-400">
              {cardData3[c_items[0]]?.content}
            </div>
            <h3 className="bg-yellow-500">{cardData3[c_items[1]]?.name}</h3>
            <div className="text-sm leading-6 text-gray-400">
              {cardData3[c_items[1]]?.content}
            </div>
            <h3 className="text-red-500">{cardData3[c_items[2]]?.name}</h3>
            <div className="text-sm leading-6 text-gray-400">
              {cardData3[c_items[2]]?.content}
            </div>
          </div>
        </div>
      </>
    );
}
