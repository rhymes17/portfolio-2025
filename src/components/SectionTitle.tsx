type Props = {
  title: string;
};

const SectionTitle = ({ title }: Props) => {
  return (
    <div className="flex items-center justify-center gap-3 md:gap-4">
      <div className="bg-section-title h-[12px] w-[12px] rounded-full md:h-[20px] md:w-[20px]" />

      <h1 className="text-section-title text-3xl font-semibold uppercase md:text-5xl">
        {title}
      </h1>

      <div className="bg-section-title h-[12px] w-[12px] rounded-full md:h-[20px] md:w-[20px]" />
    </div>
  );
};

export default SectionTitle;
