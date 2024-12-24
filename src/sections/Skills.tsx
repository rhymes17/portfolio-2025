import SectionTitle from '../components/SectionTitle';
import SkillCard from '../components/SkillCard';
import { skillsData } from '../data/skills';

export default function Skills() {
  return (
    <section
      id="skills"
      className="pt-section-title mx-auto min-h-[100vh] w-[90%] lg:w-[80%] xl:w-[75%]"
    >
      <SectionTitle title="skills" />

      <div className="font-space-grotesk mt-section-title grid grid-cols-5 gap-3 md:grid-cols-2 xl:grid-cols-3">
        {skillsData.map((skill) => (
          <SkillCard key={skill.id} skill={skill} />
        ))}
      </div>
    </section>
  );
}
