"use client";
import ProjectClira from "@/components/Projects/clira/Clira";
import { useParams } from "next/navigation";

export default function ProjectPage() {
  const pararms = useParams();
  console.log("params", pararms);

  if (pararms.projectId) {
    return <ProjectClira />;
  }
}
