interface ProjectProps {
  title: string;
  content: string;
  color: string;
  background: string;
}

const Project = (props: ProjectProps) => {
  const { title } = props;

  return (
    <div>
      <h1>{title}</h1>
      <div>project content</div>>
    </div>
  );
};

export default Project;
