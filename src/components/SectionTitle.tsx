type Props = {
  title: string;
};

const SectionTitle = ({ title }: Props) => {
  return (
    <div className="flex items-center justify-center gap-3 md:gap-4">
      <div className="h-[12px] w-[12px] rounded-full bg-section-title md:h-[20px] md:w-[20px]" />

      <h1 className="text-3xl font-semibold uppercase text-section-title md:text-5xl">
        {title}
      </h1>

      <div className="h-[12px] w-[12px] rounded-full bg-section-title md:h-[20px] md:w-[20px]" />
    </div>
  );
};

export default SectionTitle;
