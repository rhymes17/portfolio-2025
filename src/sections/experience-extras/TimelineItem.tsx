import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from 'motion/react';
import { useEffect, useRef, useState } from 'react';

const TimelineItem = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  const [contentHeight, setContentHeight] = useState(0);
  const [lineHeight, setLineHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.offsetHeight);
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: contentRef,
    offset: ['start center', 'end center'], // Triggers when the card enters and leaves the viewport
  });

  const greenLineHeight = useTransform(
    scrollYProgress,
    [0, 1],
    [0, contentHeight],
  );

  useMotionValueEvent(greenLineHeight, 'change', (currentLineHeight) => {
    setLineHeight(currentLineHeight);
  });

  return (
    <div
      ref={contentRef}
      className="mx-auto mb-[2rem] flex w-full gap-1 md:w-[90vw] lg:w-[70vw]"
    >
      <div className="relative flex flex-col">
        <div className="flex h-[12px] w-[12px] flex-col items-center gap-3 rounded-full bg-black text-xl md:text-4xl"></div>
        <div
          style={{
            height: contentHeight,
          }}
          className="absolute left-1/2 top-3 w-[1.5px] -translate-x-1/2 bg-section-title md:top-3 md:w-[2px]"
        >
          <motion.div
            animate={{
              height: lineHeight,
            }}
            transition={{
              duration: 0.6,
            }}
            className="absolute left-1/2 top-0 w-[2px] -translate-x-1/2 bg-background-secondary"
          ></motion.div>
        </div>
      </div>

      <motion.div className="relative flex flex-1 justify-end">
        <div className="w-[95%] rounded-xl bg-background-secondary px-5 py-5 text-white transition-all duration-1000 lg:w-[90%]">
          <div className="flex flex-col gap-2">
            <h1 className="text-lg md:text-xl">Solutions Engineer I</h1>
          </div>

          <div className="mt-3 text-sm lg:text-base">
            <li>
              I am a self-taught creative frontend developer, web designer, and
              UI/UX designer based in India.
            </li>
            <li> I am passionate in catering my works for</li>
            <li>
              emerging start ups and small businesses that make an impact,
              inspire and connect with people 😎.
            </li>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default TimelineItem;
