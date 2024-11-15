"use client";
import Project from "@/components/Projects/project/Project";
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
      color={project.color}
      link={project.link}
      githubLink={project.githubLink}
      icons={project.icons}
    />
  );
}
