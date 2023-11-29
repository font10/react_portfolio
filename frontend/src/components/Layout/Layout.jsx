import { Hero, Navbar, Projects, Services, Skills_experience } from '../index'

export const Layout = () => {
  return (
    <section className="relative flex flex-col h-screen w-10/12 xl:w-7/12 mx-auto z-20">
      <Navbar />
      <Hero />
      <Skills_experience />
      <Services />
      <Projects />
    </section>
  )
}
