import type { Metadata } from 'next';

interface ProjectParams {
  params: {
    projectId: string;
  };
}

export const generateMetadata = async ({
  params,
}: ProjectParams): Promise<Metadata> => {
  const { projectId } = await params;
  return {
    title: `${projectId} Project`,
  };
};

export default async function ProjectDetails({ params }: ProjectParams) {
  const { projectId } = await params;

  return (
    <div>
      <h1>Project Num {projectId}</h1>
    </div>
  );
}
