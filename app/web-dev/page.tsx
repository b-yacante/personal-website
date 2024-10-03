import ExperienceWebPage from '@/components/web-dev/experience-page'
import PresentationWebPage from '@/components/web-dev/presentation-page'
import SkillsWebPage from '@/components/web-dev/skills-page'

export default function WebDevPage() {
  return (
    <div className="grid place-items-center">
      <section id="about">
        <PresentationWebPage />
      </section>
      <section id="experience">
        <ExperienceWebPage />
      </section>
      <section id="skills">
        <SkillsWebPage />
      </section>
    </div>
  )
}
