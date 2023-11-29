import { Sobre_mi } from "./components/Sobre_mi";
import { Tabs } from "./components/Tabs/Tabs";

export const Skills_experience = () => {

  return (
    <section className="flex flex-col lg:flex-row w-full mt-20 lg:mt-52 text-white">
      <section className="flex flex-row justify-start lg:justify-start w-full lg:w-6/12 justify-start">
        <Sobre_mi />
      </section>
      <section className="flex flex-col w-full lg:w-6/12 justify-start mt-14 lg:mt-3">
        <Tabs />
      </section>
    </section>
  );
};
