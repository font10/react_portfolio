import { ContactForm } from "./components/ContactForm"

export const Contact = () => {
  return (
    <section className="flex flex-col lg:flex-row justify-between mt-16 lg:mt-56 pb-24">
      <section 
        data-aos="fade-up" 
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
      >
        <header className="flex flex-row items-center gap-1">
          <h1 className="text-4xl font-bold font-lato text-white">Contáctame</h1>
          <span className="text-5xl font-medium text-red-500 font-lato mb-1">.</span>
        </header>
        <p className="mt-10 text-[14px] w-10/12 lg:w-72 text-gray-300 font-lato font-semibold'">
          Ofrezco servicios de diseño web, desarrollo web tanto en parte frontend como en parte backend de JavaScript, tambien abierto a nuevas posibilidades.
        </p>
      </section>

      <section className="flex flex-row w-full lg:w-7/12 justify-center lg:justify-start gap-3 text-white text-3xl font-semibold mt-20 lg:mt-0">
        <ContactForm />
      </section>
    </section>
  )
}
