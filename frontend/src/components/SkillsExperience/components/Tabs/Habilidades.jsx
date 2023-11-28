import { habs } from "../../../../utils/constants"

export const Habilidades = () => {
  return (
    <section>
      { habs.map(hab => (
        <article key={hab.id} className="flex flex-row gap-2 font-lado mt-5">
          {hab.name}
          {
            hab.tech.map(tech => (
              <img key={tech.id} src={tech.img} alt={tech.id} width={25} />
            ))
          }
        </article>
        ))
      }
    </section>
  )
}


/*
<article className="flex flex-row gap-2 font-lado mt-5">
  Desarrollo web -
  <figure className="flex flex-row gap-2">
    {
      habsWeb.map(hab => ( 
        <img key={hab.id} src={hab.img} alt={hab.id} width={25} />
      ))
    }
  </figure>
</article>
  
<article className="flex flex-row gap-2 font-lado mt-5">
  UI/UX design -
  <figure className="flex flex-row gap-2">
    {
      habsDesign.map(hab => ( 
        <img key={hab.id} src={hab.img} alt={hab.id} width={25} />
      ))
    }
  </figure>
</article>
*/