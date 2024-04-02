"use client";
import React, { useEffect, useState } from "react";
import Image, { ImageProps } from "next/image";
import ModalComponent from "@/components/ModalComponent";
import biology from "@/assets/images/profession_images/biology.png";
import biology_detail from "@/assets/images/profession_images/biology-detail.png";
import chemic from "@/assets/images/profession_images/chemic.png";
import chemic_detail from "@/assets/images/profession_images/chemic-detail.png";
import culture from "@/assets/images/profession_images/culture.png";
import culture_detail from "@/assets/images/profession_images/culture-detail.png";
import economy from "@/assets/images/profession_images/economy.png";
import economy_detail from "@/assets/images/profession_images/economy-detail.png";
import english from "@/assets/images/profession_images/english.png";
import english_detail from "@/assets/images/profession_images/english-detail.png";
import geography from "@/assets/images/profession_images/geography.png";
import geography_detail from "@/assets/images/profession_images/geography-detail.png";
import history from "@/assets/images/profession_images/history.png";
import history_detail from "@/assets/images/profession_images/history-detail.png";
import it from "@/assets/images/profession_images/it.png";
import it_detail from "@/assets/images/profession_images/it-detail.png";
import literature from "@/assets/images/profession_images/literature.png";
import literature_detail from "@/assets/images/profession_images/literature-detail.png";
import math from "@/assets/images/profession_images/math.png";
import math_detail from "@/assets/images/profession_images/math-detail.png";
import physics from "@/assets/images/profession_images/physics.png";
import physics_detail from "@/assets/images/profession_images/physics-detail.png";
import sport from "@/assets/images/profession_images/sport.png";
import sport_detail from "@/assets/images/profession_images/sport-detail.png";

export default function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [images, setImages] = useState<ImageProps[]>([]);

  useEffect(() => {
    // Initialize image data
    setImages([
      { src: biology, alt: "Image 1" },
      { src: math, alt: "Image 2" },
      { src: physics, alt: "Image 3" },
      // Add other images here...
    ]);
  }, []);

  const handleNext = () => {
    const nextIndex =
      selectedIndex === images.length - 1 ? 0 : selectedIndex + 1;
    setSelectedImage(images[nextIndex].src as string);
    setSelectedIndex(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex =
      selectedIndex === 0 ? images.length - 1 : selectedIndex - 1;
    setSelectedImage(images[prevIndex].src as string);
    setSelectedIndex(prevIndex);
  };

  function handleOnClicked(arg0: string, index: number): void {
    throw new Error("Function not implemented.");
  }

  function handleCloseModal(): void {
    setSelectedImage(null);
    throw new Error("Function not implemented.");
  }

  return (
    <div className="flex flex-wrap justify-center w-3/5 mx-auto">
      {images.map((image, index) => (
        <div key={index} className="w-1/3 p-2 " style={{ maxWidth: "320px" }}>
          <Image
            {...image}
            width={320}
            height={200}
            alt=""
            priority
            className=" border-4 border-solid border-purple-800 hover:border-purple-500"
            onClick={() => setSelectedImage(image.src as string)}
          />
        </div>
      ))}

      {selectedImage && (
        <ModalComponent
          images={images}
          selectedImage={selectedImage}
          onClose={handleCloseModal}
          onNext={handleNext}
          onPrev={handlePrev}
          selectedIndex={selectedIndex}
        />
      )}
    </div>
  );
}
