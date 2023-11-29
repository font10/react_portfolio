import { useState } from "react"
import { experience } from "../../../../../utils/constants"
import { pagination_page_off, pagination_page_on } from "../../../../../assets/icons"

export const Experience = () => {
  const [min, setMin] = useState(0)
  const [max, setMax] = useState(5)

  const handleMixMaxForPage = (min, max) => {
    setMin(Number(min))
    setMax(Number(max))
  }

  return (
    <section>
      {
        experience.slice(min,max).map(exp => (
          <article key={ exp.id } className='flex flex-row justify-between items-start py-1.5'>
            <div>
              <section className="flex flex-col justify-center gap-1 font-lato font-semibold">
                <p className="text-gray-300">{ exp.position }</p>
                <p className="text-[12px] py-0 text-gray-400 flex flex-row">{ exp.company }</p>
              </section>
            </div> 
            <span className='font-lato text-[16px] font-semibold flex flex-row items-start justify-start text-gray-100'>
              <span>{ exp.date }
              <span className="text-5xl font-medium text-red-500 font-lato">.</span>
              </span>
            </span>
          </article>
        ))
      }
      <section className="flex flex-row gap-1.5 justify-center mt-5">
        <button className="text-red-500 font-lato font-semibold" onClick={() => handleMixMaxForPage(0, 5)}>
          <img src={`${ min === 0 ? pagination_page_on : pagination_page_off}`} alt="page" width={12} />
        </button>
        <button className="text-red-500 font-lato font-semibold" onClick={() => handleMixMaxForPage(6, 11)}>
          <img src={`${ min === 6 ? pagination_page_on : pagination_page_off}`} alt="page" width={12} />
        </button>
        <button className="text-red-500 font-lato font-semibold" onClick={() => handleMixMaxForPage(11, experience.length)}>
          <img src={`${ min === 11 ? pagination_page_on : pagination_page_off}`} alt="page" width={12} />
        </button>
      </section>
    </section>
  )
}
