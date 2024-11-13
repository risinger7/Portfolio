"use client";
import ProjectClira from "@/components/Projects/clira/Clira";
import ProjectPhone from "@/components/Projects/phone/Phone";
import Project from "@/components/Projects/project/Project";
import ProjectRemote from "@/components/Projects/remote/Remote";
import { useParams, usePathname } from "next/navigation";

import { projectData } from "./projectData";

type ProjectPageProps = {
  params: {
    projectId: string;
  };
};

export default function ProjectPage({ params }: ProjectPageProps) {
  const { projectId } = params;
  const project: any = projectData[projectId];
  return (
    <Project
      id={projectId}
      images={project.images}
      title={project.title}
      content={project.content}
      githubLink={project.githubLink}
    />
  );
}
