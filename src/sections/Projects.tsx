import { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import { projects } from '../data/projects';
import { motion } from 'motion/react';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const [leftSideTop, setLeftSideTop] = useState(0);

  return (
    <section className="py-section-title text-project relative min-h-[100vh] bg-black px-5 lg:px-10">
      <SectionTitle title="Projects" />

      <div className="font-space-grotesk mt-section-title grid h-full w-full grid-cols-12">
        <div className="font-rubik sticky top-12 col-span-5 hidden h-fit w-full overflow-hidden text-[22vw] font-normal md:flex">
          <span className="relative">0</span>
          <div className="relative">
            <motion.div
              style={{
                translateY: `${leftSideTop}%`,
              }}
              className="absolute flex h-full w-fit flex-col transition-all duration-1000"
            >
              {projects.map((project) => (
                <span key={project.id + 1} className="inline-block">
                  {project.id + 1}.
                </span>
              ))}
            </motion.div>
          </div>
        </div>
        <div className="gap-y-space-xl relative col-span-12 flex min-h-[100vh] flex-col gap-[4rem] md:col-span-7">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              setLeftSideTop={setLeftSideTop}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
