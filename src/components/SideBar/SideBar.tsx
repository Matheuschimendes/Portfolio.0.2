import MidiaSocial from "../MidiaSocial/MidiaSocial";
import NavBar from "@/components/NavBar/NavBar";
import Skils from "../Skils/Skils";

export default function SideBar() {
  return (
    <>
      <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
        <div>
          <h1 className="animate-fade-in-right text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
            <a href="/">Matheus Chimendes</a>
          </h1>
          <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
            Frontend
          </h2>
          <p className="mt-4 max-w-xs leading-normal">
            Construo experiências digitais perfeitas, envolventes e acessíveis.
          </p>
          <NavBar />
        </div>
        <MidiaSocial />
      </header>
    </>
  );
}
