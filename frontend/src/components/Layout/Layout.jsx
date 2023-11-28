import { Hero } from "../Hero/Hero"
import { Navbar } from "../Navbar/Navbar"
import { Skills_experience } from "../SkillsExperience/Skills_experience"

export const Layout = () => {
  return (
    <section className="relative flex flex-col h-screen w-10/12 xl:w-7/12 mx-auto z-20">
      <Navbar />
      <Hero />
      <Skills_experience />
    </section>
  )
}
