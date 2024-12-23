import { motion } from 'motion/react';

type Props = {
  skill: {
    id: number;
    title: string;
    subtitle: string;
    icon: React.ReactNode;
  };
};

const SkillCard = ({ skill }: Props) => {
  const { id, title, subtitle, icon } = skill;
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: id % 2 === 0 ? 20 : -20,
      }}
      whileInView={{
        x: 0,
        opacity: 1,
      }}
      viewport={{
        amount: 0.5,
        once: true,
      }}
      transition={{
        duration: 1,
      }}
      className="flex items-center justify-between rounded-xl bg-[rgb(16,16,18)] px-3 py-4 text-white md:px-3 md:py-4"
    >
      <div className="flex items-center gap-5">
        <div className="rounded-md border-[1px] border-[rgb(20,20,21)] bg-[rgb(29,29,30)] px-2 py-2">
          {icon}
        </div>
        <div className="flex flex-col gap-1 leading-none md:gap-2">
          <h1 className="text-lg text-white md:text-xl">{title}</h1>
          <h3 className="text-sm text-white/80 md:text-sm">{subtitle}</h3>
        </div>
      </div>
    </motion.div>
  );
};

export default SkillCard;
