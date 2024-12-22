import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

const TimelineItem = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [isDetailsVisible, setIsDetailsVisible] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    // Measure the height of the content dynamically
    if (contentRef.current) {
      setContentHeight(contentRef.current.offsetHeight);
    }
  }, [isDetailsVisible]);

  return (
    <div className="mx-auto mb-[3rem] flex w-full gap-1 md:w-[90vw] lg:w-[70vw]">
      <div className="relative flex flex-col">
        <h1 className="text-xl md:text-4xl">2024</h1>
        <div
          style={{
            height: contentHeight,
          }}
          className="absolute left-1/2 top-8 w-[1.5px] -translate-x-1/2 bg-[red] md:top-12 md:w-[2px]"
        >
          <div className="absolute left-1/2 top-0 h-[40%] w-[2px] -translate-x-1/2 bg-[green]"></div>
        </div>
      </div>

      <motion.div className="relative top-8 flex flex-1 justify-end">
        <div
          ref={contentRef}
          className="w-[90%] rounded-xl bg-[red]/20 px-5 py-5 transition-all duration-1000 lg:w-[90%]"
        >
          <div className="flex flex-col gap-2">
            <div className="">
              {/* logo */}
              <h1 className="text-lg md:text-xl">The Tides Network</h1>
            </div>
            {/* Duration */}
            <h3 className="text-sm md:text-base">November 2023 - Current</h3>

            <h6
              className="text-section-title cursor-pointer text-sm underline md:text-base"
              onClick={() => setIsDetailsVisible((prev) => !prev)}
            >
              View Details
            </h6>
          </div>

          {isDetailsVisible && (
            <div className="mt-3">
              <li>
                I am a self-taught creative frontend developer, web designer,
                and UI/UX designer based in India.
              </li>
              <li> I am passionate in catering my works for</li>
              <li>
                {' '}
                emerging start ups and small businesses that make an impact,
                inspire and connect with people 😎.
              </li>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default TimelineItem;
