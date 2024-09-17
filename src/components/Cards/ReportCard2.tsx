//Card.js file
import React from "react";
import Image from "next/image";
import card1 from "@/assets/images/choose-yes.png";
import card2 from "@/assets/images/choose-no.png";
import Link from "next/link";
function ReportCard2() {
  const cardList = [
    {
      img: card1,
      title: "ЖИШЭЭ ТАЙЛАН ХАРАХ",
      link: "/tailan10_12",
    },
    {
      img: card2,
      title: "ТӨЛБӨР ТӨЛЖ ТАЙЛАНГАА АВАХ",
      link: "/report",
    },
  ];
  return (
    <>
      {cardList.map((card, id) =>
        card !== undefined ? (
          id % 2 == 0 ? (
            <>
              <Link href={card.link}>
                <div
                  key={id}
                  className="flex flex-col cursor-pointer bg-green-800 justify-center py-2 px-10 text-center items-center mt-12 rounded-tl-[35px] rounded-br-[35px] shadow-2xl md:min-h-[140px] w-full card-item-div max-w-screen-md min-h-[100px] hover:bg-blue-800"
                >
                  {/* <Image
                  src={card.img}
                  alt="box_img"
                  className="w-[300px] mb-4"
                /> */}
                  <p className="text-[24px] font-bold uppercase mb-7">
                    {card.title}
                  </p>
                </div>
              </Link>
            </>
          ) : (
            <>
              <Link href={card.link}>
                <div
                  key={id}
                  className="bg-black flex flex-col cursor-pointer justify-center py-2 px-10 text-center items-center mt-12 rounded-tl-[35px] rounded-br-[35px] shadow-2xl md:min-h-[140px] w-full card-item-div max-w-screen-md min-h-[100px] hover:bg-blue-800"
                >
                  {/* <Image
                  src={card.img}
                  alt="box_img"
                  className="w-[300px] mb-4"
                /> */}
                  <p className="text-[24px] font-bold uppercase mb-7 text-white">
                    {card.title}
                  </p>
                </div>
              </Link>
            </>
          )
        ) : (
          ""
        )
      )}
    </>
  );
}
export default ReportCard2;
