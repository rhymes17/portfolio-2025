import { useEffect, useState } from 'react';
import HeroBg from '/hero-bg.jpg';
import { motion } from 'motion/react';

const Hero = () => {
  const [dimensions, setDimensions] = useState({
    width: '90%',
    height: '112%',
  });

  const textStrokeStyle = {
    WebkitTextStroke:
      dimensions.height === '48%' ? '2px #262626' : '3px #262626',
    color: 'transparent',
  };

  const [fontSize, setFontSize] = useState(10); // Initial font size as a percentage

  // Update dimensions based on screen size
  useEffect(() => {
    const updateDimensions = () => {
      if (window.innerWidth > 1024) {
        // Large screens (lg)
        setDimensions({ width: '55%', height: '88%' });
        setFontSize(8); // Font size in vw
      } else if (window.innerWidth >= 768) {
        // Medium screens (md)
        setDimensions({ width: '65%', height: '75%' });
        setFontSize(9); // Font size in vw
      } else {
        // Small screens (default)
        setDimensions({ width: '65%', height: '48%' });
        setFontSize(4); // Font size in vw
      }
    };

    updateDimensions(); // Set initial dimensions
    window.addEventListener('resize', updateDimensions);

    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  return (
    <div className="relative flex h-[100vh] items-center justify-center">
      <div className="relative flex h-[90%] w-full items-center justify-center">
        <motion.div
          initial={{
            width: '90%',
            height: '100%',
            borderRadius: 0,
          }}
          animate={{
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
            initial={{
              scale: 1.05,
              borderRadius: 0,
            }}
            animate={{
              scale: 1,
              borderRadius: '0.375rem',
            }}
            transition={{
              duration: 1.6,
              ease: [0.8, 0.3, 0.3, 1],
            }}
            className="h-full w-full rounded-md object-cover"
            src={HeroBg}
            alt="hero-bg"
          />
        </motion.div>

        <div
          style={{
            height: dimensions.height,
            width: `${Math.min(95, parseInt(dimensions.width.split('%')[0]) + 25)}%`,
          }}
          className="absolute left-0 right-0 top-1/2 mx-auto flex -translate-y-1/2 flex-col items-center justify-evenly font-name-text"
        >
          <motion.h1
            className="text-text-black font-bold leading-[0] md:text-[6.5rem] lg:text-[8.5rem] 2xl:text-[11rem]"
            style={{
              fontSize: `calc(${fontSize}vw + 2rem)`, // Adjust font size dynamically based on viewport width
              whiteSpace: 'nowrap',
              textAlign: 'center',
            }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.6,
              ease: [0.8, 0.3, 0.3, 1],
            }}
          >
            HEY, I'M RAHUL
          </motion.h1>
          <motion.h1
            className="text-text-black font-bold leading-[0] md:text-[6.5rem] lg:text-[8.5rem] 2xl:text-[11rem]"
            style={{
              fontSize: `calc(${fontSize}vw + 2rem)`, // Adjust font size dynamically based on viewport width
              whiteSpace: 'nowrap',
              textAlign: 'center',
              ...textStrokeStyle,
            }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.6,
              ease: [0.8, 0.3, 0.3, 1],
            }}
          >
            HEY, I'M RAHUL
          </motion.h1>
          <motion.h1
            className="text-text-black font-bold leading-[0] md:text-[6.5rem] lg:text-[8.5rem] 2xl:text-[11rem]"
            style={{
              fontSize: `calc(${fontSize}vw + 2rem)`, // Adjust font size dynamically based on viewport width
              whiteSpace: 'nowrap',
              textAlign: 'center',
            }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.6,
              ease: [0.8, 0.3, 0.3, 1],
            }}
          >
            HEY, I'M RAHUL
          </motion.h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
