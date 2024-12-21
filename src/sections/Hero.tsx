import { useEffect, useState } from 'react';
import HeroBg from '/hero-bg.jpg';
import { motion } from 'motion/react';

const Hero = () => {
  const [dimensions, setDimensions] = useState({
    width: '90%',
    height: '112%',
  });

  // Update dimensions based on screen size
  useEffect(() => {
    const updateDimensions = () => {
      if (window.innerWidth > 1540) {
        setDimensions({ width: '65%', height: '88%' });
      } else if (window.innerWidth > 1024) {
        // Large screens (lg)
        setDimensions({ width: '55%', height: '88%' });
      } else if (window.innerWidth >= 768) {
        // Medium screens (md)
        setDimensions({ width: '75%', height: '80%' });
      } else {
        // Small screens (default)
        setDimensions({ width: '85%', height: '58%' });
      }
    };

    updateDimensions(); // Set initial dimensions
    window.addEventListener('resize', updateDimensions);

    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  return (
    <div className="mt-[3rem] h-[90vh] py-5">
      <div className="relative h-full w-full">
        <motion.div
          initial={{
            marginTop: '-8%',
            width: '90%',
            height: '112%',
            borderRadius: 0,
          }}
          animate={{
            marginTop: '0',
            width: dimensions.width,
            height: dimensions.height,
            borderRadius: '0.375rem',
          }}
          transition={{
            duration: 1.6,
            ease: [0.8, 0.3, 0.3, 1],
          }}
          className="mx-auto h-[88%] rounded-md md:w-[75%]"
        >
          <motion.img
            className="h-full w-full rounded-md object-cover"
            src={HeroBg}
            alt="hero-bg"
          />
        </motion.div>

        <div
          style={{
            height: dimensions.height,
            width: dimensions.width + '20%',
          }}
          className="absolute left-0 right-0 top-0 mx-auto font-name-text md:w-[80%] lg:w-[70%] 2xl:w-[80%]"
        >
          <h1 className="text-text-black font-bold md:text-[6.5rem] lg:text-[9.5rem] 2xl:text-[11rem]">
            HEY, I'M RAHUL
          </h1>
          <h1 className="text-text-black -mt-[4.5rem] font-bold md:text-[6.5rem] lg:text-[9.5rem] 2xl:text-[11rem]">
            HEY, I'M RAHUL
          </h1>
          <h1 className="text-text-black -mt-[4.5rem] font-bold md:text-[6.5rem] lg:text-[9.5rem] 2xl:text-[11rem]">
            HEY, I'M RAHUL
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
