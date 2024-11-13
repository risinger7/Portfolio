"use client";
import "./project.css";
import { urbanist400, urbanist700 } from "../../styles/styles.fonts";
import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import ImageSlider from "@/components/image-slider/ImageSlider";

type ProjectProps = {
  id: string;
  images: string[];
  title: string;
  content: string;
  githubLink: string | undefined;
};

export default function Project(props: ProjectProps) {
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
          {props.title}
        </h1>
        <p className={`${urbanist400.className} grid-item grid-content`}>
          {props.content}
        </p>
        <ImageSlider images={props.images} />
      </div>
    </div>
  );
}
