import { Sobre_mi } from "./components/Sobre_mi";
import { Tabs } from "./components/Tabs/Tabs";

export const Skills_experience = () => {

  return (
    <section className="flex flex-col md:flex-row w-full my-48 text-white">
      <section className="flex flex-row w-6/12 justify-start">
        <Sobre_mi />
      </section>
      <section className="flex flex-col w-6/12 justify-start mt-3">
        <Tabs />
      </section>
    </section>
  );
};
