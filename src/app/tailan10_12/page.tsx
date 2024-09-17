import React from "react";
import Image from "next/image";
import Link from "next/link";
import card1 from "@/assets/images/tailan_zurag/jishee_tailan/1012/1.png";
import card2 from "@/assets/images/tailan_zurag/jishee_tailan/1012/2.png";
import card3 from "@/assets/images/tailan_zurag/jishee_tailan/1012/3.png";
import card4 from "@/assets/images/tailan_zurag/jishee_tailan/1012/4.png";
import card5 from "@/assets/images/tailan_zurag/jishee_tailan/1012/5.png";
import card6 from "@/assets/images/tailan_zurag/jishee_tailan/1012/6.png";
import card7 from "@/assets/images/tailan_zurag/jishee_tailan/1012/7.png";
import card8 from "@/assets/images/tailan_zurag/jishee_tailan/1012/8.png";
import card9 from "@/assets/images/tailan_zurag/jishee_tailan/1012/9.png";
import card10 from "@/assets/images/tailan_zurag/jishee_tailan/1012/10.png";
import card11 from "@/assets/images/tailan_zurag/jishee_tailan/1012/11.png";
import card12 from "@/assets/images/tailan_zurag/jishee_tailan/1012/12.png";
import card13 from "@/assets/images/tailan_zurag/jishee_tailan/1012/12.png";

const cardList = [
  {
    img: card1,
  },
  {
    img: card2,
  },
  {
    img: card3,
  },
  {
    img: card4,
  },
  {
    img: card5,
  },
  {
    img: card6,
  },
  {
    img: card7,
  },
  {
    img: card8,
  },
  {
    img: card9,
  },
  {
    img: card10,
  },
  {
    img: card11,
  },
  {
    img: card12,
  },
  {
    img: card13,
  },
];

function TailanPage() {
  const array = [...Array(12)];
  const basePath = "/assets/images/tailan_zurag/jishee_tailan/1012";

  return (
    <>
      {cardList.map((card, id) =>
        card !== undefined ? (
          <>
            <Link href="#">
              <div className="flex flex-row  bg-white justify-center py-6 px-10 items-center rounded-tr-[35px] rounded-tl-[35px] rounded-bl-[35px] rounded-br-[35px] shadow-2xl md:min-h-[160px] w-full card-item-div  min-h-[160px] m-4">
                <Image
                  src={card.img}
                  className="h-[80px] sm:h-full "
                  alt="logo"
                  width={1024}
                  height={1024}
                />
              </div>
            </Link>
          </>
        ) : (
          ""
        )
      )}
    </>
  );
  // return array?.length > 0 ? (
  //   array.map((key) => (
  //     <>
  //       <div className="flex flex-col  bg-white justify-center py-6 px-10 items-center rounded-tr-[35px] rounded-tl-[35px] rounded-bl-[35px] rounded-br-[35px] shadow-2xl md:min-h-[160px] w-full card-item-div  min-h-[160px] m-4">
  //         <Image
  //           className="h-[80px] sm:h-full "
  //           src={`${card1}`}
  //           // src={`${basePath}/${key}?.jpg`}
  //           alt="logo"
  //           width={1024}
  //           height={1024}
  //         />
  //       </div>
  //     </>
  //   ))
  // ) : (
  //   <div>
  //     <p className="loading">Loading... </p>
  //   </div>
  // );
}

export default TailanPage;
