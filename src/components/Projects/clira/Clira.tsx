"use client";
import "./project.css";
import { urbanist400, urbanist700 } from "../../styles/styles.fonts";
import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import ImageSlider from "@/components/image-slider/ImageSlider";

const IMAGES = ["/clira/image61.png", "/clira/clira123.jpg"];

export default function ProjectClira() {
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
