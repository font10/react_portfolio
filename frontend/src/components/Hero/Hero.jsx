import { font } from "../../assets/images/index";
import Typewriter from "typewriter-effect";
import { github, linkedin } from "../../assets/icons/index";
import { FaFilePdf } from "../../utils/icons";

export const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center gap-3 justify-around mt-10 lg:mt-44">
      <section className="flex flex-col items-center lg:items-start w-full text-white">
        <p className="font-lato font-extrabold text-6xl bg-gradient-to-r from-pink-600 via-red-500 to-red-400 inline-block text-transparent bg-clip-text">
          Hola, soy
        </p>
        <span className="font-lato font-extrabold text-3xl md:text-4xl lg:text-6xl mt-6">
          <Typewriter
            options={{
              strings: ["David Font", "Frontend Dev", "MERN Stack Dev"],
              autoStart: true,
              loop: true,
            }}
          />
        </span>

        <figure className="flex flex-row gap-6 text-white mt-20">
          <a
            href="https://www.linkedin.com/in/david-font-484b8196?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={linkedin}
              width={30}
              alt="linkedin"
              className="cursor-pointer"
            />
          </a>
          <a
            href="https://github.com/font10?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={github}
              width={30}
              alt="github"
              className="cursor-pointer"
            />
          </a>
        </figure>

        <a
          href="https://drive.google.com/file/d/1q3_4rGSmxqcNjsZAhtW91fS5rpTdeVLU/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          download={true}
          className="flex flex-row items-center font-medium gap-2 px-6 py-2.5 mt-10 rounded-md bg-gradient-to-r from-pink-600 via-red-500 to-red-400"
        >
          <FaFilePdf />
          Ver currículum
        </a>
      </section>
      <section className="flex flex-row justify-center w-64 lg:w-[700px] mt-14 xl:mt-0">
        <img src={font} alt="image" />
      </section>
    </section>
  );
};
