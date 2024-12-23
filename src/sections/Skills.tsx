import SectionTitle from '../components/SectionTitle';
import SkillCard from '../components/SkillCard';
import { skillsData } from '../data/skills';

export default function Skills() {
  return (
    <section
      id="skills"
      className="mx-auto mt-section-title min-h-[100vh] w-[90%] lg:w-[80%] xl:w-[75%]"
    >
      <SectionTitle title="skills" />

      <div className="font-space-grotesk mt-section-title grid gap-3 md:grid-cols-2">
        {skillsData.map((skill) => (
          <SkillCard key={skill.id} skill={skill} />
        ))}
      </div>
    </section>
  );
}
