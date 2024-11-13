import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import "./imageSlider.css";

type ImageSliderProps = {
  images: string[];
};

export default function ImageSlider({ images }: ImageSliderProps) {
  const [imgIndex, setImgIndex] = useState(0);

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
