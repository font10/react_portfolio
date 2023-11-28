import font from '../../assets/images/font.png'
import Typewriter from 'typewriter-effect';
import instagram from '../../assets/icons/instagram.png'
import linkedin from '../../assets/icons/linkedin.png'
import github from '../../assets/icons/github.png'
import { FaDownload } from '../../utils/icons'

export const Hero = () => {
  return (
    <section className='flex flex-col lg:flex-row items-center gap-3 justify-around mt-32'>
      <section className="flex flex-col items-center lg:items-start w-full text-white">
        <p className='font-lato font-extrabold text-6xl bg-gradient-to-r from-pink-600 via-red-500 to-red-400 inline-block text-transparent bg-clip-text'>Hola, soy</p>
        <span className='font-lato font-extrabold text-6xl mt-6'>
          <Typewriter
            options={{
              strings: ['David Font', 'Frontend Dev', 'MERN Stack Dev'],
              autoStart: true,
              loop: true,
            }}
          />
        </span>

        <figure className='flex flex-row gap-6 text-white mt-20'>
          <img src={linkedin} width={30} alt="linkedin" className='cursor-pointer' />
          <img src={instagram} width={30} alt="instagram" className='cursor-pointer' />
          <img src={github} width={30} alt="github" className='cursor-pointer' />
        </figure>
        
        <button className='flex flex-row items-center font-medium gap-2 px-6 py-2.5 mt-10 rounded-md bg-gradient-to-r from-pink-600 via-red-500 to-red-400'>
          <FaDownload />Download CV
        </button>
        
      </section>
      <section className='flex flex-row justify-center mt-14 xl:mt-0'>
        <img src={font} width={700} alt='image' />
      </section>

    </section>
  )
}

/*
<p className='mt-14 text-[13px] w-96 text-gray-400 font-lato font-semibold'>
  Apasionado de las tecnologias y el desarrollo, con ganas de aprender y mejorar en un equipo dinámico 
  y activo donde colaborar con nuevos retos. Ubicado cerca de Gerona
</p>
*/