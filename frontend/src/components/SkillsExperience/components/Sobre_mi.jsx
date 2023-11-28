
export const Sobre_mi = () => {
  return (
    <article>
      <header className="flex flex-row items-center gap-1">
        <h1 className="text-4xl font-bold font-lato">Sobre <span className="text-red-500">mi</span></h1>
        <span className="text-5xl font-medium text-red-500 font-lato mb-1">.</span>
      </header>
      <section>
        <p className="text-[17.5px] mt-2 leading-6 w-72 font-semibold font-lato">
          Desarrollador dedicado cerca de Gerona, Cataluña
        </p>
        <p className="mt-10 text-[14px] w-96 text-gray-300 font-lato font-semibold'">
          Como desarrollador junior, poseo habilidades tanto frontend como backend en JavaScript. 
          Me destaco más en frontend, en el diseño y mantenimiento de sitios web responsivos que ofrecen una experiencia 
          de usuario fluida. Mi experiencia radica en la creación de interfaces dinámicas y atractivas
          mediante la escritura de código limpio y optimizado. También trabajo en equipo y me encanta 
          colaborar con equipos multifuncionales para producir aplicaciones web excepcionales.
        </p>
        <section className="mt-8 flex flex-row">
          <article className="flex flex-col justify-center w-6/12">
            <span className="text-5xl text-red-500 font-extrabold font-lato">1</span>
            <span className="text-[11px] font-semibold font-lato w-20">AÑOS DE EXPERIENCIA</span>
          </article>
          <article className="flex flex-col justify-center w-6/12">
            <span className="text-5xl text-red-500 font-extrabold font-lato">6</span>
            <span className="text-[11px] font-semibold font-lato w-20">PROYECTOS FINALIZADOS</span>
          </article>
        </section>
      </section>
    </article>
  )
}
