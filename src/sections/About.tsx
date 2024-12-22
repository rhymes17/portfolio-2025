import { motion, useMotionValueEvent, useScroll } from 'motion/react';
import SectionTitle from '../components/SectionTitle';
import Rahul from '/rahul.jpg';
import { useState } from 'react';
const About = () => {
  const { scrollYProgress } = useScroll();
  const [top, setTop] = useState('3.2rem');
  const [lastScrollYProgress, setLastScrollYProgress] = useState(0);

  useMotionValueEvent(scrollYProgress, 'change', (currentYProgress) => {
    if (currentYProgress > lastScrollYProgress && top === '3.2rem') {
      setTop('0rem');
    } else if (currentYProgress < lastScrollYProgress && top === '0rem') {
      setTop('3.2rem');
    }

    setLastScrollYProgress(currentYProgress);
  });

  const textVariants = {
    hidden: {
      y: 30,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.8,
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div className="px-5">
      <SectionTitle title="about me" />

      <div className="mt-[5rem] flex flex-wrap gap-5">
        <div className="w-full md:flex-1">
          <motion.img
            initial={{
              scale: 1.1,
              borderRadius: 0,
            }}
            whileInView={{
              scale: 1,
              borderRadius: '1rem',
            }}
            transition={{
              duration: 1.6,
              ease: [0.8, 0.3, 0.3, 1],
            }}
            className="h-[300px] w-full rounded-xl object-cover object-center md:h-[65vh] lg:h-[65vh] xl:h-[90vh]"
            src={Rahul}
            alt="rahul's img"
          />
        </div>

        <div className="flex-1">
          <motion.div
            animate={{
              top,
            }}
            transition={{
              duration: 0.3,
            }}
            className="sticky flex flex-col gap-5 px-5"
          >
            <motion.h1
              initial={textVariants.hidden}
              whileInView={textVariants.visible}
              className="font-outfit text-[2.1rem] font-semibold md:text-[2.5rem] lg:text-[3rem]"
            >
              A brief intro, who am I?
            </motion.h1>

            <motion.h3
              initial={textVariants.hidden}
              whileInView={textVariants.visible}
              className="text-[1.2rem] font-light md:text-[1.7rem] lg:text-[2rem]"
            >
              I am a self-taught creative frontend developer, web designer, and
              UI/UX designer based in India. I am passionate in catering my
              works for emerging start ups and small businesses that make an
              impact, inspire and connect with people 😎.
            </motion.h3>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
