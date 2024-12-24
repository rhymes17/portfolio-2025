import { motion } from 'motion/react';

type Props = {
  setLeftSideTop: React.Dispatch<React.SetStateAction<number>>;
  project: {
    id: number;
    title: string;
    description: string;
    bgImg: string;
    url: string;
    img: string;
  };
};

const ProjectCard = ({ setLeftSideTop, project }: Props) => {
  const { id, url, title, bgImg, img, description } = project;
  return (
    <motion.a
      target={url.length > 0 ? '_blank' : ''}
      href={url.length > 0 ? url : undefined}
      onViewportEnter={() => {
        setLeftSideTop(-100 * id);
      }}
      viewport={{
        amount: 0.5,
      }}
      className="font-space-grotesk flex flex-col gap-5"
    >
      <div className="relative flex aspect-square items-center justify-center overflow-clip rounded-md">
        <img
          alt="background"
          loading="lazy"
          width="1309"
          height="982"
          decoding="async"
          data-nimg="1"
          className="absolute h-full w-full object-cover"
          src={bgImg}
        />

        <div className="z-20 mx-auto w-[90%] rounded-xl">
          <img
            className="aspect-[4/3] overflow-clip rounded-xl object-cover"
            src={img}
          />
        </div>
      </div>

      <div className="flex flex-col gap-3 leading-none">
        <h1 className="text-project/80 text-lg font-light">{description}</h1>
        <h1 className="text-project text-4xl">{title}</h1>
      </div>
    </motion.a>
  );
};

export default ProjectCard;
