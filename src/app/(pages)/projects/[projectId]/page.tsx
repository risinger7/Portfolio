import Project from "@/components/Projects/project/Project";
import { projectData } from "./projectData";

export async function generateStaticParams() {
  return Object.keys(projectData).map((projectId) => ({ projectId }));
}

type ProjectPageProps = {
  params: {
    projectId: string;
  };
};

export default function ProjectPage({ params }: ProjectPageProps) {
  const { projectId } = params;
  const project = projectData[projectId];
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
