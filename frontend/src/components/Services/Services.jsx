import { ServicesList } from "./components"

export const Services = () => {
  return (
    <section className="flex flex-col lg:flex-row justify-between mt-32 lg:mt-56">
      <article>
        <header className="flex flex-row items-center gap-1">
          <h1 className="text-4xl font-bold text-white font-lato">Mis Servicios</h1>
          <span className="text-5xl font-medium text-red-500 font-lato mb-1">.</span>
        </header>
        <section>
          <p className="mt-10 text-[14px] w-10/12 lg:w-72 text-gray-300 font-lato font-semibold'">
            Ofrezco servicios de diseño web, desarrollo web tanto en parte frontend como en parte backend de JavaScript, tambien abierto a nuevas posibilidades.
          </p>
        </section>
      </article>

      <ServicesList />
      
    </section>
  )
}
