export default function SobreMim() {
  return (
    <section className=" animate-fade-in-right" style={{ animationDelay: '0s' }}>
      <div
        className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/15 
        px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative 
        lg:top-auto lg:max-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0"
      >
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Sobre mim
        </h2>
      </div>
      <div>
        <p className="mb-4">
          <a
            className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
            href=""
            target="_blank"
            rel=""
            aria-label=""
          >
            👋 Oi! Me chamo Matheus Chimendes.{" "}
          </a>
          <br />
          👨🏻‍💻 Sou um profissional dedicado, com forte espírito de equipe, sempre em busca de soluções ágeis e novas oportunidades para contribuir com o crescimento da empresa. 
          Tenho uma abordagem proativa e estou constantemente aprimorando minhas habilidades para me manter atualizado com as melhores práticas do mercado. 
          
        </p>
      </div>
    </section>
  );
}
