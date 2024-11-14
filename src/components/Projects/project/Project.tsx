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
  color: string | undefined;
  icons: string[] | undefined;
  link: string | undefined;
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
    <div
      className={`overflow-hidden pb-32 relative ${
        props.color ? props.color : ""
      }`}
    >
      <div className="absolute flex justify-center m-12">
        <button className={"grid-button"} onClick={() => handleGoBack()}>
          <ChevronLeft size={38} />
        </button>
      </div>
      <div className={`grid-container mt-12 ${props.color ? props.color : ""}`}>
        <h1 className={`${urbanist700.className} grid-item grid-title`}>
          {props.title}
        </h1>
        <p className={`${urbanist400.className} grid-item grid-content`}>
          {props.content}
        </p>
        <ImageSlider images={props.images} />
        <div className="grid-icons grid-item">
          {props.githubLink ? (
            <a
              target="_blank"
              rel="noopener noreferrer"
              className={`${urbanist400.className} grid-icon grid-link`}
              href={props.githubLink}
            >
              Github
            </a>
          ) : props.link ? (
            <a
              target="_blank"
              rel="noopener noreferrer"
              className={`${urbanist400.className} grid-icon grid-link`}
              href={props.link}
            >
              Link
            </a>
          ) : null}
          {props.icons?.map((icon: any) => {
            return (
              <div className={`${urbanist400.className} grid-icon`}>{icon}</div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
