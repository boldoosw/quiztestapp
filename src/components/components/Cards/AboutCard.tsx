//Card.js file
import React from "react";
import Image from "next/image";
import card1 from "@/assets/images/card_images/card1.png";
import card2 from "@/assets/images/card_images/card2.png";
import card3 from "@/assets/images/card_images/card3.png";
import card4 from "@/assets/images/card_images/card4.png";
function AboutCards() {
  // Card data
  // const cardList = [
  //   {
  //     img: "https://i.imgur.com/w5HYiQZ.png",
  //     title: "Growth",
  //     description:
  //       "Our group of specialists will collaborate with you to develop a personalized strategy aimed at guiding you toward success through incremental progress.",
  //   },
  //   {
  //     img: "https://i.imgur.com/4wouHGC.png",
  //     title: "Fitness",
  //     description:
  //       "Offering a diverse range of exercises for your selection, you'll have all the resources necessary to attain the peak of your physical fitness.",
  //   },
  //   {
  //     img: "https://i.imgur.com/UdPvj8T.png",
  //     title: "Diet",
  //     description:
  //       "Our team will collaborate with you to craft a tailor-made meal plan designed to assist you in achieving your distinct health objectives.",
  //   },
  //   {
  //     img: "https://i.imgur.com/UdPvj8T.png",
  //     title: "Diet",
  //     description:
  //       "Our team will collaborate with you to craft a tailor-made meal plan designed to assist you in achieving your distinct health objectives.",
  //   },
  // ];
  const cardList = [
    {
      // src={`/images/climov_images/${answer_pic[i]}`}
      img: card1,
      title: "Түргэн тандалт",
      description:
        "1.Мэргэжил сонголтын түргэн тандалт буюу өөрийгөө үнэлэх анкет",
    },
    {
      img: card2,
      title: "Хүсэл сонирхол",
      description: "2.Хувь хүний сонирхол ба чадварын сорил ",
    },
    ,
    {
      img: card3,
      title: "Анализ шинжилгээ",
      description: "3.Оношилгоо сорилын цахим анализ шинжилгээ ",
    },
    {
      img: card4,
      title: "Тайлан дүгнэлт",
      description: "4.ТАЙЛАН ДҮГНЭЛТ ЗӨВЛӨМЖ",
    },
  ];
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
      {cardList.map((card, id) =>
        card !== undefined ? (
          <div
            key={id}
            className="card-item-div mt-12 flex min-h-[260px] w-full max-w-screen-md cursor-pointer flex-col items-center justify-center rounded-br-[35px] rounded-tl-[35px] bg-white px-10 py-6 text-center shadow-2xl md:min-h-[340px]"
          >
            <Image src={card.img} alt="box_img" className="mb-4 w-[75px]" />
            <p className="mb-7 text-[16px] font-bold uppercase">{card.title}</p>
            <p className="leading-2 w-full text-[15px] font-medium">
              {card.description}
            </p>
          </div>
        ) : (
          ""
        ),
      )}
    </div>
  );
}
export default AboutCards;
