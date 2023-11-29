import { design_icon } from '../../assets/icons/index'
import { services } from '../../utils/constants'

export const Services = () => {
  return (
    <section className="flex flex-col lg:flex-row justify-between mt-32 lg:mt-56">
      <article>
        <header className="flex flex-row items-center gap-1">
          <h1 className="text-4xl font-bold text-white font-lato">Mis Servicios</h1>
          <span className="text-5xl font-medium text-red-500 font-lato mb-1">.</span>
        </header>
        <section>
          <p className="mt-10 text-[14px] w-full lg:w-72 text-gray-300 font-lato font-semibold'">
            Ofrezco servicios de diseño web, desarrollo web tanto en parte frontend como en parte backend de JavaScript, tambien abierto a nuevas posibilidades.
          </p>
        </section>
      </article>

      <section className="flex flex-row justify-center lg:justify-start gap-3 text-white text-3xl font-semibold mt-20 lg:mt-0">
        {
          services.map(service => (
            <div key={service.id} className="bg-[#0A215A] bg-opacity-40 w-72 h-72 rounded-md py-6 px-8">
              <header>
                <img src={design_icon} alt="icon" width={40} />
                <h1 className="font-lato text-lg my-8">{service.name}</h1>
                <p className='font-lato text-sm font-semibold text-[#B9B9B9] leading-7 mt-8'>{service.description}</p>
              </header>
            </div>
          ))
        }
      </section>
    </section>
  )
}
