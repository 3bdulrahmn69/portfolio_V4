interface ProjectParams {
  params: {
    projectId: string;
  };
}

export default function Project({ params: { projectId } }: ProjectParams) {
  return (
    <div>
      <h1>Project Num {projectId}</h1>
    </div>
  );
}
