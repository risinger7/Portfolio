"use client";
import "./project.css";
import { urbanist400, urbanist700 } from "../../styles/styles.fonts";
import { useRouter } from "next/navigation";
import { relative } from "path";
/* import { useEffect } from "react"; */
import "../../styles/imageSlider.css";
import { useState } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";

export default function ProjectClira() {
  const router = useRouter();

  const handleGoBack = () => {
    if (router) {
      router.back();
    }
  };

  return (
    <div className="overflow-hidden mb-12 relative">
      <div className="absolute flex justify-center">
        <button className={"grid-button"} onClick={() => handleGoBack()}>
          go back
        </button>
      </div>
      <div className="grid-container mt-12">
        <h1 className={`${urbanist700.className} grid-item grid-title`}>
          Clira
        </h1>
        <p className={`${urbanist400.className} grid-item grid-content`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          iaculis risus viverra, vestibulum magna vitae, commodo mauris.
          Phasellus congue purus in congue ultricies. Suspendisse rutrum
          elementum tellus ut ornare. In magna ante, mattis a nulla vel,
          hendrerit aliquet massa. Quisque lorem erat, commodo vitae suscipit
          et, convallis sit amet eros. Sed vitae pulvinar augue. Nam
          pellentesque magna quis tortor viverra, a rhoncus felis accumsan.
          Fusce ac elementum urna, nec ultricies massa. Praesent magna tortor,
          fermentum id dolor ac, efficitur tristique velit. Duis augue nunc,
          auctor eget suscipit vitae, finibus eget arcu. Etiam interdum quis
          tellus id rutrum. Suspendisse in dapibus nulla, non ornare ipsum.
        </p>
        <ImageSlider images={IMAGES} />
      </div>
    </div>
  );
}

const IMAGES = ["/clira/image61.png", "/clira/clira123.jpg"];

type ImageSliderProps = {
  images: string[];
};

function ImageSlider({ images }: ImageSliderProps) {
  const [imgIndex, setImgIndex] = useState(0);
  console.log("index: ", imgIndex);
  console.log("images", images);

  function showNextImage() {
    setImgIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }
  function showPrevImage() {
    setImgIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }

  return (
    <div className="image-container grid-item">
      <div
        className="image-slider"
        style={{ transform: `translateX(${-100 * imgIndex}%)` }}
      >
        {images.map((image) => {
          return <img key={image} src={image} className="image" />;
        })}
      </div>

      <div className="image-buttons">
        <button onClick={() => showPrevImage()} className="image-button left">
          <ChevronLeft className="image-animation" size={64} />
        </button>
        <button onClick={() => showNextImage()} className="image-button right">
          <ChevronRight className="image-animation" size={64} />
        </button>
      </div>
      <div>
        {images.map((button, index) => {
          return <button>index</button>;
        })}
      </div>
    </div>
  );
}
