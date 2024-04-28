import React, { useEffect, useState } from "react";
import axios from "axios";
import VulnChart from "../VulnChart/VulnChart";
const climov_label = ["Хүн", "Байгаль", "Тэмдэгт", "Техник", "Урлаг"];
const climov_labels = [
  {
    name: "Хүн",
    content1:
      "Хүн - хүн төрлийн мэргэжлүүдийн төлөөлөгчдийн хөдөлмөрийн хэрэгслэл нь:• Хүн.",
    content2:
      "Энэ чиглэлээр мэргэшсэн мэргэжилтнүүд дараахь үйл ажиллагааг гүйцэтгэх ёстой.• хүмүүсийн сургах боловсрол олгох, сургалт (сурган хүмүүжүүлэгч, багш, спортын дасгалжуулагч);• эмнэлгийн тусламж үйлчилгээ (эмч, фельдшер, сувилагч, асрагч);• хэрэглээний үйлчилгээ (худалдагч, үсчин, зөөгч, манаач);• мэдээллийн үйлчилгээ (номын санч, аяллын хөтөч, багш);• нийгэм, төрийг хамгаалах (хуульч, цагдаа, байцаагч, цэргийн хүн). ",
    content3:
      "V. `Хүн - хүн` төрлийн мэргэжлүүдийн төлөөлөгчдийн хөдөлмөрийн хэрэгслэл нь:• Хүн.	Энэ чиглэлээр мэргэшсэн мэргэжилтнүүд дараахь үйл ажиллагааг гүйцэтгэх ёстой.• хүмүүсийн сургах боловсрол олгох, сургалт (сурган хүмүүжүүлэгч, багш, спортын дасгалжуулагч);• эмнэлгийн тусламж үйлчилгээ (эмч, фельдшер, сувилагч, асрагч);• хэрэглээний үйлчилгээ (худалдагч, үсчин, зөөгч, манаач);• мэдээллийн үйлчилгээ (номын санч, аяллын хөтөч, багш);• нийгэм, төрийг хамгаалах (хуульч, цагдаа, байцаагч, цэргийн хүн). 	“Хүн – хүн” мэргэжлүүдийн сэтгэл зүйн шаардлага:• харилцах хүсэл, танихгүй хүмүүстэй амархан холбоо тогтоох чадвар;• хүмүүстэй ажиллахдаа тогтвортой, сэтгэл хангалуун байдал;• найрсаг, эелдэг хариу үйлдэл үзүүлэх;• бэсдыг тэвчээртэй сонсох;• сэтгэл хөдлөлөө барих чадвар;• бусдын болон өөрийнхөө зан үйлд дүн шинжилгээ хийх, бусад хүмүүсийн хүсэл эрмэлзэл, сэтгэл санааг ойлгох чадвар, хүмүүсийн хоорондын харилцааг ойлгох чадвар, тэдний хоорондын санал зөрөлдөөнийг шийдвэрлэх, харилцааг зохион байгуулах чадвар;• өөрийгөө өөр хүний оронд тавих, сонсох чадвар, бусдын санаа бодлыг харгалзан үзэх чадвар;• яриа, нүүрний хувирал, дохио зангааг эзэмших чадвар;• ярианы хөгжил сайн, янз бүрийн хүмүүстэй хэл амаа олох чадвар;• хүмүүсийг итгүүлэх чадвар;• дэг журам сахих, цаг баримталдаг, биеэ барих чадвар;• хүний сэтгэл зүйн мэдлэг. эмоции; ",
  },
  {
    name: "Байгаль",
    content1:
      "Хэрэв та цэцэрлэг, ногооны талбайд ажиллах, ургамал, амьтдыг арчлах, биологийн хичээлд дуртай бол `хүн-байгаль`` мэргэжлийг үзээрэй. `Хүн-байгаль` мэргэжлийн хөдөлмөрийн хэрэгслэл нь: • амьтан, тэдгээрийн өсөлт, амьдрах нөхцөл; • ургамал, тэдгээрийн ургах нөхцөл. Ус, хөрс г.м",
    content2:
      "Энэ чиглэлээр мэргэшсэн мэргэжилтнүүд дараахь үйл ажиллагааг гүйцэтгэх ёстой. • ургамал, амьтны төлөв байдал, амьдрах нөхцөлийг судлах, судлах, шинжлэх (агрономич, микробиологич, мал аж ахуйн мэргэжилтэн, гидробиологич, агрохимич, фитопатологич); • ургамал тариалах, амьтдыг арчлах (ой модчин, тариаланч, цэцэгчин, ногоочин, шувууны аж ахуй эрхлэгч, мал аж ахуй эрхлэгч, цэцэрлэгч, зөгийчин); • ургамал, амьтны өвчлөлөөс урьдчилан сэргийлэх ажлыг гүйцэтгэх (мал, хорио цээрийн албаны эмч). Ус, хөрсийг судлах хамгаалах (ус, хөрс судлаач).",
    content3:
      "`Хүн-байгалийн` мэргэжлүүдийн сэтгэлзүйн шаардлага: • төсөөлөл, дүрслэлийн сэтгэлгээ сайн хөгжсөн байх, харааны ой санамж сайтай, ажиглалт, өөрчлөгдөж буй байгалийн хүчин зүйлийг урьдчилан харах, үнэлэх чадвар; • Ажлын үр дүн нэлээд удаан хугацааны дараа илэрдэг тул мэргэжилтэн нь тэсвэртэй, тэвчээртэй байх, багт бус ганцаар ажиллах, цаг агаарын хүнд нөхцөлд, шавар шавхайтай г.м нөхцөлд ажиллахад бэлэн байх ёстой.",
  },

  {
    name: "Тэмдэгт",
    content1:
      "Хэрэв та тооцоолол, зураг зурах, диаграмм хийх, карт хөтлөх, төрөл бүрийн мэдээллийг системчлэх, програмчлал, эдийн засаг, статистик гэх мэт зүйлийг хийх дуртай бол `хүн - тэмдэгт` мэргэжлүүдтэй танилцаарай. Энэ төрлийн ихэнх мэргэжлүүд мэдээлэл боловсруулахтай холбоотой байдаг.",
    content2:
      "`Хүний тэмдэгт` төрлийн мэргэжлүүдийн хөдөлмөрийн хэрэгслэл нь:• эх болон гадаад хэл дээрх текст (редактор, засварлагч, орчуулга, бичиг хэргийн ажилтан, телеграфчин, компьютерт текст шивэх, эх бэлтгэх);• тоо, томьёо, хүснэгт (програмист, машинист, эдийн засагч, нягтлан бодогч, статистикч);• зураг, схем, газрын зураг, график  (дизайнер, технологийн инженер, зураач, хуулбарлагч, навигатор, маркшейдер);• дуут дохио (радио оператор, стенограф, утасны оператор, дууны инженер).",
    content3:
      "`Хүн - тэмдэгт` мэргэжилд тавигдах сэтгэлзүйн шаардлага:• Ажлын санах ой болон богино хугацааны санах ой сайн байх;• удаан хугацаанд тэмдэгтийн (үсэг, тоо, томьёо) материалд анхаарлаа өвлөрүүлэх чадвар;• анхаарлыг сайн хуваарилах, солих;• ойлголтын нарийвчлал, тэмдгийн ард юу байгааг харах чадвар;• тэсвэр тэвчээр, тэвчээр;• логик сэтгэлгээ.",
  },
  {
    name: "Техник",
    content1:
      "Хэрэв та физик, хими, цахилгааны инженерчлэлийн лабораторийн ажилд дуртай, загвар хийдэг, гэр ахуйн цахилгаан хэрэгслийг ойлгодог, машин, механизм, төхөөрөмж, машин хэрэгсэл бүтээх, ажиллуулах, засварлахыг хүсч байвал `хүн-техникийн` мэргэжлийг сонирхож үзнэ үү. . `Техникийн` мэргэжлийн хөдөлмөрийн хэрэгслэл нь:• техникийн объект (машин, механизм);• материал, төрөл бүзрийн энерги.",
    content2:
      "Энэ чиглэлээр мэргэшсэн мэргэжилтнүүд дараахь үйл ажиллагааг гүйцэтгэх ёстой. Техник тоног төхөөрөмжийг бий болгох, суурилуулах, угсрах (мэргэжилтнүүд техникийн систем, төхөөрөмжийг зохион бүтээх, тооцоолол хийх, тэдгээрийг үйлдвэрлэх процессыг боловсруулах. Машин, механизм, төхөөрөмжийг бие даасан нэгж, хэсгүүдээс угсарч, тэдгээрийг зохицуулах, тохируулах); техникийн төхөөрөмжүүдийн ажиллагаа (мэргэжилтнүүд машин, тээврийн хэрэгсэл, автомат систем дээр ажилладаг)• техникийн төхөөрөмжийг засварлах (мэргэжилтнүүд техникийн систем, төхөөрөмж, механизмын эвдрэлийг олох, засварлах, тохируулах, тохируулах).",
    content3:
      "Психологические требования профессий «человек-техника»:  хорошая координация движений;  точное зрительное, слуховое, вибрационное и кинестетическое восприятие; развитое техническое и творческое мышление и воображение;  умение переключать и концентрировать внимание;  наблюдательность.`Хүн-техникийн` мэргэжлүүдэд тавигдах сэтгэлзүйн шаардлага:•Нүд - гарын хөдөлгөөний зохицуулалт сайн байх;• харааны, сонсголын, чичиргээ, хүрэлцэхүйн мэдээлэл хүлээн авах чадвар сайн байх;• техникийн болон бүтээлч сэтгэлгээ, төсөөлөл өндөр хөгжсөн;• анхаарлаа солих, төвлөрүүлэх чадвар;• ажиглалт.",
  },
  {
    name: "Урлаг",
    content1:
      "`Хүн - урлагын` төрлийн мэргэжлүүдийн хөдөлмөрийн хэрэгслэл нь:• уран сайхны дүр төрх, түүнийг бүтээх арга.",
    content2:
      "Энэ чиглэлээр мэргэшсэн мэргэжилтнүүд дараахь үйл ажиллагааг гүйцэтгэх ёстой.• урлагийн бүтээл (зохиолч, зураач, хөгжмийн зохиолч, загвар зохион бүтээгч, архитектор, уран барималч, сэтгүүлч, бүжиг дэглээч) бүтээх, дизайн хийх;• загварын дагуу төрөл бүрийн бүтээгдэхүүнийг хуулбарлах, үйлдвэрлэх (үнэт эдлэлчин, сэргээн засварлагч, сийлбэрчин, хөгжимчин, жүжигчин, кабинетчин);• урлагийн бүтээлийг олноор нь хуулбарлах (шаазан зураач, чулуу, болор өнгөлөгч, зураач, хэвлэгч).Специалистам в этой области приходится выполнять следующие виды деятельности:",
    content3:
      "`Хүн - Урлаг`-ын мэргэжлүүдэд тавигдах сэтгэлзүйн шаардлага:• уран сайхны чадвар; харааны ойлголтыг хөгжүүлэх;• ажиглалт, харааны санах ой; дүрслэлийн сэтгэлгээ; бүтээж туурвих сэтгэлгээ ба  төсөөлөл;• хүмүүсийн сэтгэл хөдлөлийн нөлөөллийн сэтгэл зүйн хуулиудын мэдлэг.",
  },
];
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
    <>
      <div className="col-span-12 text-center rounded-sm border border-stroke bg-white p-24 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-12">
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke px-7 py-4 dark:border-strokedark">
            <h3 className="font-medium text-black dark:text-white">
              Климовын тестийн үр дүн
            </h3>
          </div>
          <div className=" h-full">
            <div className="text-black text-center mt-8">
              <VulnChart labels={climov_label} data={climov_data} />
            </div>
            <div className="flex flex-col  text-sm">
              <div> {climov_labels[climov_top_ids[0]]?.name}</div>
              <div> {climov_labels[climov_top_ids[1]]?.name}</div>
              <div> {climov_labels[climov_top_ids[2]]?.name}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-12 rounded-sm border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-12">
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke  text-white bg-red-500  px-7 py-4 dark:border-strokedark">
            <h3 className="font-medium dark:text-white">
              {climov_labels[climov_top_ids[0]]?.name}
            </h3>
          </div>
          <div className=" h-full m-4">
            <div className="flex flex-col gap-5 ">
              <p className="text-sm leading-6 text-gray-400">
                {climov_labels[climov_top_ids[0]]?.content1}
              </p>
              <h1 className="text-sm font-semibold  text-gray-500">
                Гүйцэтгэх үйл ажиллагаа
              </h1>
              <p className="text-sm leading-6 text-gray-400">
                {climov_labels[climov_top_ids[0]]?.content2}
              </p>
              <h1 className="text-sm font-semibold  text-gray-500">
                Тавигдах сэтгэл зүйн шаардлага
              </h1>
              <p className="text-sm leading-6 text-gray-400">
                {climov_labels[climov_top_ids[0]]?.content3}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-12 rounded-sm border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-12">
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke  text-white bg-red-500 px-7 py-4 dark:border-strokedark">
            <h3 className="font-medium dark:text-white">
              {climov_labels[climov_top_ids[1]]?.name}
            </h3>
          </div>
          <div className=" h-full m-4">
            <div className="flex flex-col gap-5 ">
              <p className="text-sm leading-6 text-gray-400">
                {climov_labels[climov_top_ids[1]]?.content1}
              </p>
              <h1 className="text-sm font-semibold  text-gray-500">
                Гүйцэтгэх үйл ажиллагаа
              </h1>
              <p className="text-sm leading-6 text-gray-400">
                {climov_labels[climov_top_ids[1]]?.content2}
              </p>
              <h1 className="text-sm font-semibold  text-gray-500">
                Тавигдах сэтгэл зүйн шаардлага
              </h1>
              <p className="text-sm leading-6 text-gray-400">
                {climov_labels[climov_top_ids[1]]?.content3}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-12 rounded-sm border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-12">
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke  text-white bg-red-500 px-7 py-4 dark:border-strokedark">
            <h3 className="font-medium  dark:text-white">
              {climov_labels[climov_top_ids[2]]?.name}
            </h3>
          </div>
          <div className=" h-full m-4">
            <div className="flex flex-col gap-5 ">
              <p className="text-sm leading-6 text-gray-400">
                {climov_labels[climov_top_ids[2]]?.content1}
              </p>
              <h1 className="text-sm font-semibold  text-gray-500">
                Гүйцэтгэх үйл ажиллагаа
              </h1>
              <p className="text-sm leading-6 text-gray-400">
                {climov_labels[climov_top_ids[2]]?.content2}
              </p>
              <h1 className="text-sm font-semibold  text-gray-500">
                Тавигдах сэтгэл зүйн шаардлага
              </h1>
              <p className="text-sm leading-6 text-gray-400">
                {climov_labels[climov_top_ids[2]]?.content3}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ClimovChart;
