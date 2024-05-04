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
      // src={`/images/climov_images/${answer_pic[i]}`}
      img: card1,
      title: "1.Түргэн тандалт",
      description:
        "Мэргэжил сонголтын түргэн тандалт буюу өөрийгөө үнэлэх анкет",
      link: "/job",
    },
    {
      img: card2,
      title: "2.Хүсэл сонирхол",
      description: "Хувь хүний сонирхол ба чадварын сорил ",
      link: "/custom_test",
    },
    ,
    {
      img: card3,
      title: "3.Анализ шинжилгээ",
      description: "Оношилгоо сорилын цахим анализ шинжилгээ ",
      link: "/lessons",
    },
    {
      img: card4,
      title: "4.Тайлан дүгнэлт",
      description: "ТАЙЛАН ДҮГНЭЛТ ЗӨВЛӨМЖ",
      link: "#",
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
                  {card.description}
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
