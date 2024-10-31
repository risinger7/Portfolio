"use client";
import Project from "@/components/Projects/project/Project";
import { useParams } from "next/navigation";

export default function ProjectPage() {
  const pararms = useParams();
  console.log("params", pararms);

  if (pararms.projectId) {
    return (
      <Project
        title="Clira"
        imageSrc="./space/space3.jpg"
        imageAlt="picture of space"
      />
    );
  }
}
