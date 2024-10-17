import ContactWebPage from '@/components/web-dev/contact-page'
import ExperienceWebPage from '@/components/web-dev/experience-page'
import PresentationWebPage from '@/components/web-dev/presentation-page'
import SkillsWebPage from '@/components/web-dev/skills-page'

export default function WebDevPage() {
  return (
    <div className="grid min-w-full place-items-center gap-4 divide-y divide-slate-600">
      <section id="about" className="mt-4">
        <PresentationWebPage />
      </section>
      <section id="experience" className="pt-4 md:pt-6">
        <ExperienceWebPage />
      </section>
      <section id="skills" className="pt-4 md:pt-6">
        <SkillsWebPage />
      </section>
      <section id="contact" className="pt-4 md:pt-6">
        <ContactWebPage />
      </section>
    </div>
  )
}
