import { Contact, Footer, Hero, Navbar, Projects, Services, Skills_experience } from '../index'

export const Layout = () => {
  return (
    <section className="relative">

      <section className="flex-1 h-full mx-auto w-10/12 xl:w-7/12 mt-5 justify-center">
        <Navbar />        
        <Hero />
        <Skills_experience />
        <Services />
        <Projects />
        <Contact />       
      </section>

      <Footer />
    </section>
  )
}
