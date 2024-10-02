import ExperienceWebPage from '@/components/web-dev/experience-page'
import PresentationWebPage from '@/components/web-dev/presentation-page'
import SkillsWebPage from '@/components/web-dev/skills-page'

export default function WebDevPage() {
  return (
    <div className="grid place-items-center">
      <div id="about">
        <PresentationWebPage />
      </div>
      <div id="experience">
        <ExperienceWebPage />
      </div>
      <div id="skills">
        <SkillsWebPage />
      </div>
    </div>
  )
}
