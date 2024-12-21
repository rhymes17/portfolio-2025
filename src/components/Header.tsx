import { motion } from 'motion/react';
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

  return (
    <div className="bg-glass-morph-bg sticky left-0 right-0 top-2 mx-auto w-[80%] rounded-lg bg-opacity-10 px-3 py-2 backdrop-blur-lg md:w-[40%]">
      <div className="relative flex w-[100%] justify-around">
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
      </div>
    </div>
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
      ref={ref}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="z-10 block cursor-pointer rounded-lg px-2 py-2 text-sm font-light text-white md:px-3 md:text-base"
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
