import Image from "next/image";

import Experincia from "./Experiencia/Experincia";
import Projetos from "./Projetos/Projetos";
import SobreMim from "./SobreMim/SobreMim";


import image from "@/assets/image.png";
import Skils from "../Skils/Skils";

export default function MainContent() {
  return (
    <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
      <section id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="about">
      <SobreMim/>
      <Skils />
      </section>
      <section id="projetos" 
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="projeto">
      <Projetos />
      </section>
    </main>
  );
}
