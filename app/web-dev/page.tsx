import ContactWebPage from '@/components/web-dev/contact-page'
import ExperienceWebPage from '@/components/web-dev/experience-page'
import PresentationWebPage from '@/components/web-dev/presentation-page'
import SkillsWebPage from '@/components/web-dev/skills-page'

export default function WebDevPage() {
  return (
    <div className="grid min-w-full place-items-center gap-4 divide-y divide-slate-600">
      <section id="about">
        <PresentationWebPage />
      </section>
      <section id="experience">
        <ExperienceWebPage />
      </section>
      <section id="skills">
        <SkillsWebPage />
      </section>
      <section id="contact">
        <ContactWebPage />
      </section>
    </div>
  )
}
