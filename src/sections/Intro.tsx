import { useTheme } from '../context/useTheme';
import { motion } from 'motion/react';

const Intro = () => {
  const { setIsDarkMode } = useTheme();
  return (
    <motion.div
      viewport={{
        once: false,
        amount: 0.7,
      }}
      onViewportEnter={() => setIsDarkMode(true)}
      onViewportLeave={() => setIsDarkMode(false)}
      className="flex h-[100vh] items-center"
    >
      <h1 className="text-intro-text w-[95%] px-8 text-4xl md:text-[5rem] md:leading-[5rem] lg:text-[6.5rem] lg:leading-[6rem]">
        I create elevating digital experiences that inspire and connect with
        people through development and design.
      </h1>
    </motion.div>
  );
};

export default Intro;
