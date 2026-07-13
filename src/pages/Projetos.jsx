import Background from "../components/Background";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProjectGridCard from "../components/ProjectGridCard";
import { projects } from "../data/projects";

const clientProjects = projects.filter((p) => p.category === "cliente");
const personalProjects = projects.filter((p) => p.category === "pessoal");

function Projetos() {
  return (
    <div className="relative min-h-screen bg-[#0a0a0a] text-white antialiased selection:bg-[#00d9a3] selection:text-black">
      <Background />

      <div className="relative z-10">
        <Header />
        <main className="pt-24">
          {/* Intro da página */}
          <section className="px-6 pb-9 lg:pb-20 pt-6 text-center max-w-3xl mx-auto">
            <span className="text-[#00d9a3] font-mono text-sm tracking-widest mb-4 block">
              PROJETOS
            </span>
            <h1 className="text-4xl md:text-5xl pt-8 font-semibold tracking-tight text-white">
              Trabalhos entregues e projetos de prática.
            </h1>
          </section>

          {/* Projetos para Clientes */}
          <section className="py-24 px-6 border-t border-white/[0.08]">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-semibold tracking-tight mb-3 flex items-center gap-3">
                <span className="text-[#00d9a3] text-xl">01.</span> Projetos para Clientes
              </h2>
              <p className="text-[#a1a1aa] text-sm max-w-xl mb-12">
                Sites e sistemas desenvolvidos sob demanda para negócios e
                profissionais reais.
              </p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {clientProjects.map((project, index) => (
                  <ProjectGridCard key={index} project={project} />
                ))}
              </div>
            </div>
          </section>

          {/* Projetos Técnicos & Pessoais */}
          <section className="py-24 px-6 border-t border-white/[0.08] bg-[#1a1a1a]/30">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-semibold tracking-tight mb-3 flex items-center gap-3">
                <span className="text-[#00d9a3] text-xl">02.</span> Projetos Técnicos & Pessoais
              </h2>
              <p className="text-[#a1a1aa] text-sm max-w-xl mb-12">
                Projetos construídos para explorar novas tecnologias e
                praticar arquitetura e boas práticas.
              </p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {personalProjects.map((project, index) => (
                  <ProjectGridCard key={index} project={project} />
                ))}
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default Projetos;
