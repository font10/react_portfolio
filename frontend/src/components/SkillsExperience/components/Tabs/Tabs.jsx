import { useState } from "react";
import { Studies, Skills, Experience } from "../index";

export const Tabs = () => {
  const [tab, setTabs] = useState(0);

  return (
    <section>
      <nav role="flex flex-row gap-3">
        <section className="flex flex-row">
          <tab
            className={`${ tab === 0 ? "text-red-500" : "text-white" } 
            flex flex-col pr-3 w-32 cursor-pointer font-semibold hover:text-red-400 ease-in-out transition duration-500`}
            onClick={() => setTabs(0)}
          >
            Habilidades
            <hr className={`w-10 mt-1 ${ tab === 0 ? "border-2 border-red-500" : "border-1 border-white" } ease-in-out transition duration-500 `} />
          </tab>
          <tab
            className={`${ tab === 1 ? "text-red-500" : "text-white" } 
            flex flex-col pr-3 w-32 cursor-pointer hover:text-red-400 ease-in-out transition duration-500`}
            onClick={() => setTabs(1)}
          >
            Experiencia                       
            <hr className={`w-10 mt-1 ${ tab === 1 ? "border-2 border-red-500" : "border-1 border-white" } ease-in-out transition duration-500 `} />
          </tab>
          <tab
            className={`${ tab === 2 ? "text-red-500" : "text-white" } 
            flex flex-col pr-3 w-32 cursor-pointer hover:text-red-400 ease-in-out transition duration-500`}
            onClick={() => setTabs(2)}
          >
            Estudios
            <hr className={`w-10 mt-1 ${ tab === 2 ? "border-2 border-red-500" : "border-1 border-white" } ease-in-out transition duration-500 `} />
          </tab>
        </section>        
      </nav>

      <section id="content" className="mt-4" >
        <article className={`${tab === 0 ? "block" : "hidden"}`}>
          <Skills />
        </article>
        <article className={`${tab === 1 ? "block" : "hidden"}`}>
          <Experience />
        </article>
        <article className={`${tab === 2 ? "block" : "hidden"}`}>
          <Studies />
        </article>
      </section>
    </section>
  )
}
