import Image from "next/image";

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
];

const basePath = "/assets/images/profession_images";
function LessonCards() {
  return (
    <div className="flex flex-col gap-5  md:flex-row md:justify-between m-4 ">
      {lesson_data.map((lesson, id) =>
        lesson !== undefined ? (
          <div
            key={id}
            className="flex flex-col cursor-pointer bg-white justify-center items-center  rounded-full shadow-2xl w-full card-item-div max-w-screen-md border-e-black p-8"
          >
            <Image
              src={`/assets/images/profession_images/${lesson.img_detail}.png`}
              alt="box_img"
              className="w-[500px] "
              width={500}
              height={500}
            />
            <p className="text-[14px] semi-bold uppercase ">{lesson.name}</p>
          </div>
        ) : (
          ""
        )
      )}
    </div>
  );
}
export default LessonCards;
