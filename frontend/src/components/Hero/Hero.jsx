import font from '../../assets/images/font.png'
import Typewriter from 'typewriter-effect';
import { github, linkedin } from '../../assets/icons/index'
import { FaDownload } from '../../utils/icons'

export const Hero = () => {
  return (
    <section className='flex flex-col lg:flex-row items-center gap-3 justify-around mt-10 lg:mt-44'>
      <section className="flex flex-col items-center lg:items-start w-full text-white">
        <p className='font-lato font-extrabold text-6xl bg-gradient-to-r from-pink-600 via-red-500 to-red-400 inline-block text-transparent bg-clip-text'>Hola, soy</p>
        <span className='font-lato font-extrabold text-3xl md:text-4xl lg:text-6xl mt-6'>
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
          <img src={github} width={30} alt="github" className='cursor-pointer' />
        </figure>
        
        <button className='flex flex-row items-center font-medium gap-2 px-6 py-2.5 mt-10 rounded-md bg-gradient-to-r from-pink-600 via-red-500 to-red-400'>
          <FaDownload />Download CV
        </button>
        
      </section>
      <section className='flex flex-row justify-center w-96  lg:w-[700px] mt-14 xl:mt-0'>
        <img src={font} alt='image' />
      </section>

    </section>
  )
}
