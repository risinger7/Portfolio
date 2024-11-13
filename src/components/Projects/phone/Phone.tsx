"use client";
import "./project.css";
import { urbanist400, urbanist700 } from "../../styles/styles.fonts";
import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import ImageSlider from "@/components/image-slider/ImageSlider";

const IMAGES = [
  "/phone/phone-side.jpg",
  "/phone/phone-persp.jpg",
  "/phone/phone-front.jpg",
  "/phone/phone-back.jpeg",
  "/phone/phone-back2.jpg",
];

export default function ProjectPhone() {
  const router = useRouter();

  const handleGoBack = () => {
    if (router) {
      router.back();
    }
  };

  return (
    <div className="overflow-hidden mb-12 relative">
      <div className="absolute flex justify-center m-12">
        <button className={"grid-button"} onClick={() => handleGoBack()}>
          <ChevronLeft size={38} />
        </button>
      </div>
      <div className="grid-container mt-12">
        <h1 className={`${urbanist700.className} grid-item grid-title`}>
          Phone
        </h1>
        <p className={`${urbanist400.className} grid-item grid-content`}>
          Phone text here
        </p>
        <ImageSlider images={IMAGES} />
      </div>
    </div>
  );
}
