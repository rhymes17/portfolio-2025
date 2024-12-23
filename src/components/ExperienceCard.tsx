type Props = {
  data: {
    duration: string;
    companyName: string;
    location: string;
    position: string;
    description: string;
  };
  hasBorderBottom?: boolean;
};

const ExperienceCard = ({ data, hasBorderBottom = true }: Props) => {
  const { duration, companyName, location, position, description } = data;

  return (
    <div
      style={{
        borderBottom: !hasBorderBottom
          ? 'none'
          : '1px solid  rgb(138 138 111 / 0.5)',
      }}
      className="flex h-[30vh] flex-col justify-center gap-[0.8rem] border-b-section-title/50 font-outfit transition-all duration-700 md:gap-3 lg:flex-row lg:justify-evenly"
    >
      <h1 className="text-sm md:text-xl lg:flex-1 lg:text-3xl">{duration}</h1>

      <div className="flex flex-col gap-[0.35rem] leading-none md:gap-2 md:leading-none lg:flex-1 lg:gap-3">
        <div className="flex items-center gap-3 lg:flex-col lg:items-start lg:gap-3">
          <h1 className="text-base md:text-3xl lg:text-4xl">{companyName}</h1>
          <div className="h-[6px] w-[6px] rounded-full bg-section-title/70 lg:hidden"></div>
          <h4 className="text-xs font-light text-white/60 md:text-base">
            {location}
          </h4>
        </div>
        <h4 className="text-sm font-semibold text-white/70 md:text-lg lg:text-lg lg:font-normal">
          {position}
        </h4>
      </div>

      <h3 className="text-[0.8rem] text-white/80 md:text-[1.2rem] lg:flex-1 lg:text-[1.2rem] xl:text-[1.4rem]">
        {description}
      </h3>
    </div>
  );
};

export default ExperienceCard;
