import { ProjectList } from "./components"

export const Projects = () => {
  return (
    <section className="flex flex-col lg:flex-row justify-between mt-32 lg:mt-56">
      <article>
        <header className="flex flex-row items-center gap-1">
          <h1 className="text-4xl font-bold text-white font-lato">Mis Proyectos</h1>
          <span className="text-5xl font-medium text-red-500 font-lato mb-1">.</span>
        </header>
        <section>
          <p className="mt-10 text-[14px] w-10/12 lg:w-72 text-gray-300 font-lato font-semibold'">
            Aquí se encuentran todos mis proyectos realizados, tanto frontend como Mern Stack y sus respectivas tecnologias usadas
          </p>
        </section>
      </article>

      <section className="flex flex-row justify-center w-full lg:w-7/12 lg:justify-start gap-3 text-white text-3xl font-semibold mt-20 lg:mt-0">
        <ProjectList />
      </section>
    </section>
  )
}
