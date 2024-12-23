import ExperienceCard from '../components/ExperienceCard';
import SectionTitle from '../components/SectionTitle';

const data = [
  {
    duration: 'Aug 2024 - Now',
    companyName: 'Tides Network',
    location: 'Remote',
    position: 'Solutions Engineer I',
    description:
      'At Pugpig, a leading digital publishing platform, I lead product design, crafting user-centric solutions for how users consume content onmobile apps, websites, and digital archives.',
  },
  {
    duration: 'Nov 2023 - Aug 2024',
    companyName: 'Fetch AI',
    location: 'Remote',
    position: 'Full Stack Web Developer',
    description:
      'At Pugpig, a leading digital publishing platform, I lead product design, crafting user-centric solutions for how users consume content onmobile apps, websites, and digital archives.',
  },
  {
    duration: 'June 2023 - Nov 2023',
    companyName: 'Quantek Solutions',
    location: 'Remote',
    position: 'Web Developer Intern',
    description:
      'At Pugpig, a leading digital publishing platform, I lead product design, crafting user-centric solutions for how users consume content onmobile apps, websites, and digital archives.',
  },
];

const ExperienceV2 = () => {
  return (
    <section
      id="experience"
      className="mx-auto mt-section-title min-h-[100vh] w-[100%] px-12 py-[5rem] text-white lg:w-[80%]"
    >
      <SectionTitle title="Experience" />

      <div className="mt-[3rem] flex h-full flex-col md:mt-section-title lg:gap-8">
        <ExperienceCard data={data[0]} />
        <ExperienceCard data={data[1]} />
        <ExperienceCard data={data[2]} hasBorderBottom={false} />
      </div>
    </section>
  );
};

export default ExperienceV2;
