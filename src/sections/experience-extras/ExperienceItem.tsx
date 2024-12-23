type Props = {
  top: string;
  marginBottom: string;
  data: {
    companyName: string;
    duration: string;
    position: string;
    description: string[];
  };
};

const ExperienceItem = ({ top, marginBottom, data }: Props) => {
  const { companyName, duration, position, description } = data;
  return (
    <div
      style={{
        top,
        marginBottom,
      }}
      className="bg-black border-t-section-title/50 sticky flex min-h-[60vh] flex-col gap-8 border-t-[1px] py-1 md:gap-10"
    >
      <div className="flex gap-10">
        <h1 className="flex-1 whitespace-nowrap text-lg md:text-4xl">
          {companyName}
        </h1>
        <h1 className="flex-1 whitespace-nowrap text-lg md:text-4xl">
          {position}
        </h1>
      </div>
      <div className="flex gap-10">
        <h5 className="hidden text-lg md:block md:flex-1">{duration}</h5>
        <div className="flex-1 text-sm md:text-lg">
          {description.map((bulletPoint, index) => (
            <h6 className="leading-[1.6rem] text-white/60" key={index}>
              {bulletPoint}
            </h6>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceItem;
