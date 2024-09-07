import React from "react";
import Image from "next/image";
import contactus from "@/assets/images/contactus.png";

function ContactPage() {
  return (
    <div className="flex flex-col  bg-white justify-center py-6 px-10 items-center rounded-tr-[35px] rounded-bl-[35px] shadow-2xl md:min-h-[340px] w-full card-item-div  min-h-[260px]">
      <Image className="h-[80px] sm:h-full " src={contactus} alt="logo" />
      <div className="mt-4"></div>
    </div>
  );
}

export default ContactPage;
