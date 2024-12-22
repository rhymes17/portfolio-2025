import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { useRef, useState } from 'react';

type SectionProps = {
  children: React.ReactNode;
  setSlidingBackgroundPosition: React.Dispatch<
    React.SetStateAction<{
      left: number;
      width: number;
      height: number;
      opacity: number;
    }>
  >;
};

const containerVariants = {
  hidden: {
    opacity: 0,
    y: -70,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.7,
      duration: 0.6,
      staggerChildren: 0.2, // Stagger effect for child elements
    },
  },
  hiddenOnScroll: {
    opacity: 1,
    y: -70,
  },
  visibleTwice: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
    },
  },
};

const childVariants = {
  hidden: {
    opacity: 0,
    y: -20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5, // Duration for each child animation
    },
  },
};

const Header = () => {
  const [slidingBackgroundPosition, setSlidingBackgroundPosition] = useState({
    left: 0,
    width: 0,
    height: 37,
    opacity: 0,
  });

  const sections = [
    { title: 'about' },
    { title: 'experience' },
    { title: 'skills' },
    { title: 'projects' },
  ];

  const { scrollYProgress } = useScroll();
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [headerVariant, setHeaderVariant] = useState<
    'visible' | 'visibleTwice' | 'hiddenOnScroll'
  >('visible');
  const [lastScrollYProgress, setLastScrollYProgress] = useState(0);

  useMotionValueEvent(scrollYProgress, 'change', (currentYProgress) => {
    if (currentYProgress > lastScrollYProgress && isHeaderVisible) {
      setIsHeaderVisible(false);
      setHeaderVariant('hiddenOnScroll'); // Use hidden variant when scrolling down
    } else if (currentYProgress < lastScrollYProgress && !isHeaderVisible) {
      setIsHeaderVisible(true);
      setHeaderVariant('visibleTwice'); // Visible without stagger
    }

    setLastScrollYProgress(currentYProgress);
  });

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate={headerVariant}
      className="bg-black/70 fixed left-0 right-0 top-2 z-50 mx-auto w-[80%] rounded-lg bg-opacity-10 px-3 py-2 backdrop-blur-lg md:w-[60%] lg:w-[30%]"
    >
      <motion.div
        variants={headerVariant === 'visible' ? containerVariants : {}}
        initial="hidden"
        animate="visible"
        className="relative flex w-[100%] justify-around"
      >
        {sections.map((section, index) => (
          <Section
            key={`${index}-${section.title}`}
            setSlidingBackgroundPosition={setSlidingBackgroundPosition}
          >
            {section.title}
          </Section>
        ))}

        <SlidingBackground
          slidingBackgroundPosition={slidingBackgroundPosition}
        />
      </motion.div>
    </motion.div>
  );
};

export default Header;

const Section = ({ children, setSlidingBackgroundPosition }: SectionProps) => {
  const ref = useRef<HTMLLIElement>(null);

  const handleMouseEnter = () => {
    if (!ref.current) return;

    const { width, height } = ref.current.getBoundingClientRect();

    setSlidingBackgroundPosition({
      left: ref.current.offsetLeft,
      width,
      height,
      opacity: 1,
    });
  };

  const handleMouseLeave = () => {
    setSlidingBackgroundPosition((prev) => ({
      ...prev,
      opacity: 0,
    }));
  };

  return (
    <motion.li
      variants={childVariants}
      ref={ref}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="z-10 block cursor-pointer rounded-lg px-2 py-2 text-sm font-light text-white mix-blend-difference md:px-3 md:text-base"
    >
      {children}
    </motion.li>
  );
};

const SlidingBackground = ({
  slidingBackgroundPosition,
}: {
  slidingBackgroundPosition: {
    left: number;
    width: number;
    height: number;
    opacity: number;
  };
}) => {
  return (
    <motion.div
      animate={slidingBackgroundPosition}
      className="bg-black absolute top-0 rounded-lg"
    />
  );
};
