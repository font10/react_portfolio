import { services } from "../../../utils/constants"

export const ServicesList = () => {
  return (
    <section className='flex w-full mt-8 flex-row gap-3 lg:w-7/12' 
      data-aos="zoom-in" 
      data-aos-duration="500"
      data-aos-easing="ease-in-out"
    >
      {
        services.map(service => (
          <article key={service.id} className='bg-[#0A215A] bg-opacity-40 px-5 py-8 rounded-md'>
            <img src={service.icon} alt="icon" width={40} />
            <h1 className='text-lg text-white font-lato my-4'>{service.name}</h1>
            <p className='text-[14px] text-white'>{service.description}</p>
          </article>
        ))
      }
    </section>
  )
}
