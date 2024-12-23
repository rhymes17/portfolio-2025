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
      className="flex h-[30vh] flex-col justify-center gap-[0.7rem] border-b-section-title/50 font-outfit md:gap-3 lg:flex-row lg:justify-evenly"
    >
      <h1 className="text-sm md:text-xl lg:flex-1 lg:text-3xl">{duration}</h1>

      <div className="flex flex-col gap-[0.2rem] leading-[1rem] md:gap-2 md:leading-none lg:flex-1 lg:gap-3">
        <h1 className="text-base md:text-3xl lg:text-4xl">{companyName}</h1>
        <h4 className="text-xs font-light text-white/60 md:text-base">
          {location}
        </h4>
        <h4 className="text-xs text-white/60 md:text-lg lg:text-base">
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
