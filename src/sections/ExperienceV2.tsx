import ExperienceCard from '../components/ExperienceCard';
import SectionTitle from '../components/SectionTitle';
import { experience } from '../data/experience';

const ExperienceV2 = () => {
  return (
    <section
      id="experience"
      className="mx-auto mt-section-title min-h-[100vh] w-[100%] px-12 py-[5rem] text-white lg:w-[95%] xl:w-[90%] 2xl:w-[80%]"
    >
      <SectionTitle title="Experience" />

      <div className="mt-[3rem] flex h-full flex-col md:mt-section-title lg:gap-8">
        <ExperienceCard data={experience[0]} />
        <ExperienceCard data={experience[1]} />
        <ExperienceCard data={experience[2]} hasBorderBottom={false} />
      </div>
    </section>
  );
};

export default ExperienceV2;
