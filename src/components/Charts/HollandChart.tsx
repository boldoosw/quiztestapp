import React, { useEffect, useState } from "react";
import axios from "axios";
import HollandVulnChart from "../VulnChart/HollandVulnChart";
const holland_label = [
  "Бодит үйл ажиллагааг дэмжигч",
  "Шинжээч судлаач",
  "Урлагын",
  "Нийгмийн",
  "Удирдан зохион байгуулах",
  "Стандартыг баримтлагч",
];
const holland_labels = [
  {
    name: "Бодит үйл ажиллагааг дэмжигч",
    bg: "bg-[#B71C1C]",
    text_color: "text-[#B71C1C]",
    content1:
      "Идэвх санаачлагатай, шийдвэртэй, ажил хэрэгч, тэсвэр тэвчээртэй, оновчтой байдал, практик сэтгэлгээтэй, хөдөлгөөний эвсэлтэй, орон зайн төсөөлөл сайн, техникийн чадвартай.",
    content2:
      "Одоо цагт, бодитой үр дүнд чиглэсэн ажил хийх сонирхолтой. Аливаа практик хэрэглээ, бие бялдрын хөгжил ба хөдөлгөөний эвсэл  шаардсан ажилд дуртай, харин хүмүүстэй харилцах ажилд тийм ч дуртай биш.",
    content3:
      "Техник, хөдөө аж ахуй, цэрэгжилтийн салбарт хөдөлгөөнтэй, хөдөлгөөний эвслийн ур чадвар, бие бялдрын хүч чадал шаарддаг, тодорхой асуудлуудыг шийдвэрлэх.                            Харин нийгэмд чиглэсэн ур чадвар бага шаардах бөгөөд мэдээллийг хязгаарлагдмал хүрээнд хүлээн авах, дамжуулахтай холбоотой орчин нөхцөлд ажиллах сонирхолтой.",
  },
  {
    name: "Шинжээч судлаач",
    bg: "bg-[#F5E83B]",
    text_color: "text-[#F5E83B]",
    content1:
      "Аналитик сэтгэлгээ, хараат бус байдал, өвөрмөц сэтгэлгээ, хэлний ба математикийн чадварыг хослуулж хөгжүүлсэн, аливаад шүүмжтэй хандах, сониуч зантай, уран зөгнөлч сэтгэлгээтэй, дотогш чиглэсэн зан чанартай, биеийн хөдөлгөөн багатай.",
    content2:
      "Шинэлэг санаа оноо гаргах, суурь, онолын түвшинд ажиллах сонирхолтой. Оюуны ухаан, хийсвэр төсөөлөл шаардах бүтээлч сэтгэлгээгээр асуудлуудыг шийдвэрлэх дуртай.Харин харилцаанд чиглэсэн бус шинж чанартай.",
    content3:
      "Шинжлэх ухааны салбар. Хийсвэр сэтгэлгээ шаарддаг, асуудлыг бүтээлч байдлаар шийдвэрлэдэг. Хүн хоорондын харилцааг бага сонирходог боловч харин өөрийн боловсруулсан нарийн төвөгтэй зарчим, идей -санааг итгүүлэх, ойлгуулах чадвартай.                  ",
  },
  {
    name: "Урлагын",
    bg: "bg-[#F06292]",
    text_color: "text-[#F06292]",
    content1:
      "Хийсвэр төсөөлөл, зөн совин, дотоод мэдрэмж, амьдралын олон нарийн төвөгтэй байдлын мэдрэмж, бие даасан, сэтгэлгээний уян хатан байдал, өвөрмөц сэтгэлгээ, хөдөлгөөний эвсэл, мэдээллийг хүлээн авах мэдрэхүйн чадвар.",
    content2:
      "Сэтгэл хөдлөлийн мэдрэмжтэй, өөрийгөө сайн илэрхийлдэг, үргэлж уран бүтээлийн эрэл хайгуул хийж байдаг, өөрийн зоргоор ажлын цагаа зохицуулдаг, гоо зүй, ёс уламжлалыг баримтладаг. Харин биеийн хүчний ажиллагаанаас зайлсхийдэг.",
    content3:
      "Дүрслэх урлаг, хөгжим, уртга зохиол. Уран сайхны мэдрэмж ба хийсвэр төсөөлөл шаарддаг асуудлыг шийдвэрлэх",
  },
  {
    name: "Нийгмийн",
    bg: "bg-[#78787D]",
    text_color: "text-[#78787D]",
    content1:
      "Харилцааны чадвар, хүмүүнлэг, өрөвдөх сэтгэл, идэвхтэй, бусдын ба нийтийн санаа бодлыг харгалзан үзэх, нийгэмд дасан зохицох, сэтгэл санаа болон  мэдрэмж дээр тулгуурлан асуудлыг шийдвэрлэх, хэл ярианы чадвар өндөр байх.",
    content2:
      "Нийгмийн хандлагатай, хүмүүстэй харилцах холбогдох сонирхолтой. Хүнд заах ба сургах, туслах, халамжлах, анагаах хүсэл эрмэлзлэлтэй.Харин онолын сэтгэлгээ шаардсан оюуны хөдөлмөрийн хүн биш.",
    content3:
      "Боловсрол, эрүүл мэнд, нийгмийн хамгаалал, үйлчилгээ, спорт г.м салбар. Бусдын санаа бодол, хүсэл сонирхолыг ойлгож, хүмүүс хоорондын асуудлыг шийдвэрлэх,  харилцаа холбоо тогтоох, ятгах ойлгуулах чадвартай.",
  },
  {
    name: "Удирдан зохион байгуулах",
    bg: "bg-[#9BD99A]",
    text_color: "text-[#9BD99A]",
    content1:
      "Энергитэй, эрс тэс байдал, урам зоригтой, ажил хэрэгч, эрс шийдэмгий ба тууштай зан, эрсдэл даах, өөдрөг үзэл, өөртөө итгэлтэй, хэл ярианы өндөр чадвартай, зохион байгуулалтын ур чадвар хөгшжсөн",
    content2:
      "Удирадах, манлайлах, бусдад хүлээн зөвшөөрөгдөх, эрх мэдэлд дуртай, хувийн сахилга бат сайтай. Эдийн засаг, улс төрийн чиглэлд сонирхолтой. Харин анхаарал их төвлөрүүлж, олон цагаар суудаг ажил, биеийн хүчээр гүйцэтгэх ажилд дургүй. ",
    content3:
      "Тодорхой бус асуудлыг шийдвэрлэж чаддаг, олон хүнээс гаргадаг өөр өөр зан байдал, яриаг ойлгож, ямарч нөхцөл байдалд, хүмүүсийг зөв таньж харилцах.",
  },
  {
    name: "Стандартыг баримтлагч",
    bg: "bg-[#462CF2]",
    text_color: "text-[#462CF2]",
    content1:
      "Тоон ба үсгэн мэдээллийг боловсруулах чадвар, асуудалд хэвшмэл, консерватив байдлаар ханддаг, захирагдах ба стандарт, хууль дүрэм, дэг журам баримталдаг,  ёс заншлыг дагаж мөрдөж, бусадтай нийцтэй, сайн гүйцэтгэгч, математикийн чадвар давамгайлсан.",
    content2:
      "Эмх цэгцтэй, тодорхой хуваарьтай үйл ажиллагаа, стандарт, заавар, өгөгдсөн алгоритмын дагуу ажиллах  дуртай. Удирдлагын тушаал шийдвэрийг дуртай хүлээн зөвшөөрдөг. Харин тодорхойгүй нөхцөл байдалд дургүй, нийгмийн идэвх санаачлага бага, бие махбодийн ачаалаас зайлсхийдэг. ",
    content3:
      "Санхүү - эдийн засаг, тоон мэдээлэл, сошил харилцаа, тооцоо, нягтлан бодох бүртгэл, офисын ажиллабарт дуртай. Байнга мэдээллээр хангагдах, тоон өгөгдлийг боловсруулах үйл ажиллагаа.",
  },
];
function HollandChart({ email }: { email: String | undefined }) {
  const [holland_data, setData] = useState([]);
  const [holland_top_ids, setIds] = useState([]);

  const [user_email, setEmail] = useState(email);

  async function fetchHollandData() {
    // Fetch data from your API here.
    const { data } = await axios.get(`/api/holland_test`, {
      params: { user_email: user_email },
    });

    setData(data.existingHollandQuiz.hollandquiz_items.split(","));
    setIds(data.existingHollandQuiz.top_items.split(","));
  }
  useEffect(() => {
    fetchHollandData();
  }, []);

  return (
    <>
      <div className="col-span-12 rounded-sm border border-stroke bg-white  shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-12">
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke px-7 py-4 dark:border-strokedark">
            <h3 className="font-medium text-black dark:text-white">
              3. Холландын тестийн үр дүн
            </h3>
          </div>
          <div className=" h-full ">
            <div className="text-black text-center mt-8">
              <HollandVulnChart labels={holland_label} data={holland_data} />
            </div>
            <div className="flex flex-col  text-sm m-4">
              <div className="flex flex-row content-center">
                <div
                  className={
                    "h-4 w-16 mr-4 " + holland_labels[holland_top_ids[0]]?.bg
                  }
                ></div>
                <div
                  className={
                    "text-sm font-semibold " +
                    holland_labels[holland_top_ids[0]]?.text_color
                  }
                >
                  {holland_label[holland_top_ids[0]]}
                </div>
              </div>
              <div className="flex flex-row content-center">
                <div
                  className={
                    "h-4 w-16 mr-4 " + holland_labels[holland_top_ids[1]]?.bg
                  }
                ></div>
                <div
                  className={
                    "text-sm font-semibold " +
                    holland_labels[holland_top_ids[1]]?.text_color
                  }
                >
                  {" "}
                  {holland_label[holland_top_ids[1]]}
                </div>
              </div>
              <div className="flex flex-row content-center">
                <div
                  className={
                    "h-4 w-16 mr-4 " + holland_labels[holland_top_ids[2]]?.bg
                  }
                ></div>
                <div
                  className={
                    "text-sm font-semibold " +
                    holland_labels[holland_top_ids[2]]?.text_color
                  }
                >
                  {" "}
                  {holland_label[holland_top_ids[2]]}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-12 rounded-sm border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-12">
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div
            className={
              "border-b border-stroke  text-white   px-7 py-4 dark:border-strokedark " +
              holland_labels[holland_top_ids[0]]?.bg
            }
          >
            <h3 className="font-medium dark:text-white">
              {holland_labels[holland_top_ids[0]]?.name}
            </h3>
          </div>
          <div className=" h-full m-4">
            <div className="flex flex-col gap-5 ">
              <p className="text-sm leading-6 text-gray-400">
                {holland_labels[holland_top_ids[0]]?.content1}
              </p>
              <h1
                className={
                  "text-sm font-semibold " +
                  holland_labels[holland_top_ids[0]]?.text_color
                }
              >
                Хандлага, чиглэл, сонголт
              </h1>
              <p className="text-sm leading-6 text-gray-400">
                {holland_labels[holland_top_ids[0]]?.content2}
              </p>
              <h1
                className={
                  "text-sm font-semibold " +
                  holland_labels[holland_top_ids[0]]?.text_color
                }
              >
                Мэргэжлийн орчин, нөхцөл
              </h1>
              <p className="text-sm leading-6 text-gray-400">
                {holland_labels[holland_top_ids[0]]?.content3}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-12 rounded-sm border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-12">
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div
            className={
              "border-b border-stroke  text-white   px-7 py-4 dark:border-strokedark " +
              holland_labels[holland_top_ids[1]]?.bg
            }
          >
            {" "}
            <h3 className="font-medium dark:text-white">
              {holland_labels[holland_top_ids[1]]?.name}
            </h3>
          </div>
          <div className=" h-full m-4">
            <div className="flex flex-col gap-5 ">
              <p className="text-sm leading-6 text-gray-400">
                {holland_labels[holland_top_ids[1]]?.content1}
              </p>
              <h1
                className={
                  "text-sm font-semibold  " +
                  holland_labels[holland_top_ids[1]]?.text_color
                }
              >
                Хандлага, чиглэл, сонголт
              </h1>
              <p className="text-sm leading-6 text-gray-400">
                {holland_labels[holland_top_ids[1]]?.content2}
              </p>
              <h1
                className={
                  "text-sm font-semibold " +
                  holland_labels[holland_top_ids[1]]?.text_color
                }
              >
                Мэргэжлийн орчин, нөхцөл
              </h1>
              <p className="text-sm leading-6 text-gray-400">
                {holland_labels[holland_top_ids[1]]?.content3}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-12 rounded-sm border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-12">
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div
            className={
              "border-b border-stroke  text-white   px-7 py-4 dark:border-strokedark " +
              holland_labels[holland_top_ids[2]]?.bg
            }
          >
            {" "}
            <h3 className="font-medium  dark:text-white">
              {holland_labels[holland_top_ids[2]]?.name}
            </h3>
          </div>
          <div className=" h-full m-4">
            <div className="flex flex-col gap-5 ">
              <p className="text-sm leading-6 text-gray-400">
                {holland_labels[holland_top_ids[2]]?.content1}
              </p>
              <h1
                className={
                  "text-sm font-semibold " +
                  holland_labels[holland_top_ids[2]]?.text_color
                }
              >
                Хандлага, чиглэл, сонголт
              </h1>
              <p className="text-sm leading-6 text-gray-400">
                {holland_labels[holland_top_ids[2]]?.content2}
              </p>
              <h1
                className={
                  "text-sm font-semibold " +
                  holland_labels[holland_top_ids[2]]?.text_color
                }
              >
                Мэргэжлийн орчин, нөхцөл
              </h1>
              <p className="text-sm leading-6 text-gray-400">
                {holland_labels[holland_top_ids[2]]?.content3}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HollandChart;
