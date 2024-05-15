// Make sure the import paths are correct and components are properly exported
'use client'
import dynamic from 'next/dynamic';

const UserProjects = dynamic(() => import("@/components/userprojects"), { ssr: false });
const CreateProject = dynamic(() => import("@/components/createproject"), { ssr: false });

function ProjectsPage() {
  return (
    <>
      <UserProjects />
      <CreateProject />
    </>
  )
}

export default ProjectsPage;
