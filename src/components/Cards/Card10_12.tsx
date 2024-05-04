//Card.js file
import React from "react";
import Image from "next/image";
import card1 from "@/assets/images/card_images/card1.png";
import card2 from "@/assets/images/card_images/card2.png";
import card3 from "@/assets/images/card_images/card3.png";
import card4 from "@/assets/images/card_images/card4.png";
import Link from "next/link";
function AboutCards() {
  const cardList = [
    {
      img: card1,
      title: "1.Өөрийгөө үнэлэх анкет",
      description:
        "Мэргэжил сонголтын түргэн тандалт буюу өөрийгөө үнэлэх анкет",
      link: "/job",
    },
    {
      img: card2,
      title: "2.Климовын тест ",
      description: "Климовын тест ",
      link: "/climov_test",
    },
    ,
    {
      img: card3,
      title: "3.Холландын тест",
      description: "Холландын тест",
      link: "/holland_test",
    },
    {
      img: card4,
      title: "4.Мэргэжил сонголтын матриц",
      description: "Мэргэжил сонголтын матриц",
      link: "/matrix_test",
    },
  ];
  return (
    <>
      {cardList.map((card, id) =>
        card !== undefined ? (
          <>
            <div
              key={id}
              className="flex flex-col cursor-pointer bg-white justify-center py-6 px-10 text-center items-center mt-12 rounded-tl-[35px] rounded-br-[35px] shadow-2xl md:min-h-[340px] w-full card-item-div max-w-screen-md min-h-[260px]"
            >
              {" "}
              <Link href={card.link}>
                <Image src={card.img} alt="box_img" className="w-[75px] mb-4" />
                <p className="text-[16px] font-bold uppercase mb-7">
                  {card.title}
                </p>
                <p className="text-[15px] font-medium leading-2 w-full">
                  {/* {card.description} */}
                </p>
              </Link>
            </div>
          </>
        ) : (
          ""
        )
      )}
    </>
  );
}
export default AboutCards;
