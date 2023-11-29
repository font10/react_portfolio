import { habs } from "../../../../../utils/constants"

export const Skills = () => {
  return (
    <section>
      { habs.map(hab => (
        <article key={hab.id} className="flex flex-col md:flex-row gap-2 font-lado mt-5">
          {hab.name}          
          <section className="flex flex-wrap gap-2">
            {
            hab.tech.map(tech => (
              <img key={tech.id} src={tech.img} alt={tech.id} className="w-6 h-6" />
            ))
          }
          </section>          
        </article>
        ))
      }
    </section>
  )
}
