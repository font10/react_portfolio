import { design_icon, development_icon } from '../../assets/icons/index'

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

      <div className='flex w-full mt-8 flex-row gap-3 lg:w-7/12'>
        <article className='bg-[#0A215A] bg-opacity-40 px-5 py-8 rounded-md'>
          <img src={design_icon} alt="icon" width={40} />
          <h1 className='text-lg text-white font-lato my-4'>Diseño web</h1>
          <p className='text-[14px] text-white'>Aliquam nec sem sit amet placerat auctor et ac mi.</p>
        </article>
        <article className='bg-[#0A215A] bg-opacity-40 p-5 rounded-md'>
          <img src={development_icon} alt="icon" width={40} />
          <h1 className='text-lg text-white font-lato my-4'>Diseño web</h1>
          <p className='text-[14px] text-white'>Aliquam nec sem sit amet placerat auctor et ac mi</p>
        </article>
      </div>
    </section>
  )
}


/*
 <section className="flex w- sm:flex-row w-full lg:w-7/12 justify-center lg:justify-end gap-3 text-white text-3xl font-semibold mt-20 lg:mt-0">
        <div className="bg-[#0A215A] bg-opacity-40 rounded-md py-6 px-8">
          <img src={design_icon} alt="icon" width={40} />
          <h1 className="font-lato text-lg my-8">Diseño Web</h1>
          <p className='font-lato text-sm font-semibold text-[#B9B9B9] leading-7 mt-8'>Diseño de sitios web y aplicaciones web</p>
        </div>
         <div className="bg-[#0A215A] bg-opacity-40 rounded-md py-6 px-8">
          <img src={design_icon} alt="icon" width={40} />
          <h1 className="font-lato text-lg my-8">Diseño Web</h1>
          <p className='font-lato text-sm font-semibold text-[#B9B9B9] leading-7 mt-8'>Diseño de sitios web y aplicaciones web</p>
        </div>
      </section>
*/