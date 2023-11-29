import { studies } from '../../../../../utils/constants'

export const Studies = () => {
  return (
    <section>
      {
        studies.map(study => (
          <article key={ study.id } className='flex flex-row justify-between items-center py-1'>
            <span className='font-lato text-[15px] font-semibold text-gray-400'>
              { study.titulo }
              <span className="text-3xl font-medium text-red-500 font-lato">.</span>
            </span> 
            <span className='font-lato text-[16px] font-semibold text-gray-100'>{ study.date }</span>
          </article>
        ))
      }
    </section>
  )
}
