import { useState } from "react"
import { projects } from "../../../utils/constants"
import { eye, pagination_page_off, pagination_page_on } from "../../../assets/icons"
import { github } from "../../../assets/icons"
export const Todos = () => {
  const [min, setMin] = useState(0)
  const [max, setMax] = useState(4)

  const handleMixMaxForPage = (min, max) => {
    setMin(Number(min))
    setMax(Number(max))
  }

  console.log(projects)

  return (
    <section>
      <section className="inline-grid grid-cols-2 gap-4">
        {
          projects
            .slice(min, max).map(project => (
            <article key={project.id} className="group py-4">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-72 h-48 rounded-md group" 
              />
              <div className="absolute flex flex-row gap-3 justify-center items-center group-hover:bg-gray-400 w-[270px] h-48 -mt-48 rounded-md opacity-50 transition-opacity duration-700 group-hover:opacity-70">
                <a href={project.github}>
                  <img 
                    src={github} 
                    alt="" width={30} 
                    className="hidden group-hover:block group-hover:bg-opacity-100 cursor-pointer bg-black rounded-full border-2 border-gray-300 p-4 h-16 w-16"
                  />
                </a>
                <a href={project.web}>
                  <img 
                    src={eye} alt
                    ="" width={30} 
                    className="hidden group-hover:block group-hover:bg-opacity-100 cursor-pointer bg-black rounded-full border-2 border-gray-300 p-4 h-16 w-16"
                  />
                </a>
              </div>

              <section className="mt-3">
                <h3 className="text-xl font-lato">{project.name}</h3>
                <figure className="flex flex-wrap gap-1 mt-2">
                  {
                    project.tech.map(tech => (
                      <img key={tech} src={tech} alt={tech} className="w-5 h-5 mr-1" />
                    ))
                  }
                </figure>
              </section>
      
            </article>
          ))
        }
      </section>
      <section className="flex flex-row gap-1.5 justify-center mt-10">
        <button className="text-red-500 font-lato font-semibold" onClick={() => handleMixMaxForPage(0, 4)}>
          <img src={`${ min === 0 ? pagination_page_on : pagination_page_off}`} alt="page" width={12} />
        </button>
        <button className="text-red-500 font-lato font-semibold" onClick={() => handleMixMaxForPage(4, 7)}>
          <img src={`${ min === 4 ? pagination_page_on : pagination_page_off}`} alt="page" width={12} />
        </button>
      </section>
    </section>
  )
}


/*
<div 
  src={project.image} 
  alt={project.title} 
  className="w-64 h-48 bg-blue-400 relative -top-48 bg-opacity-70 rounded-md"
/>
*/