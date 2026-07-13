import { useParams, Link } from "react-router-dom";
import { MessageCircle, ArrowLeft } from "lucide-react";
import Background from "../components/Background";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { projects } from "../data/projects";
import { getWhatsAppLink } from "../config/whatsapp";

function CaseStudy() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  // Projeto não encontrado ou sem case study cadastrado
  if (!project || !project.caseStudy) {
    return (
      <div className="relative min-h-screen bg-[#0a0a0a] text-white antialiased">
        <Background />
        <div className="relative z-10">
          <Header />
          <main className="pt-40 px-6 text-center pb-24">
            <h1 className="text-2xl font-semibold mb-4">
              Case study não encontrado
            </h1>
            <p className="text-[#a1a1aa] mb-8">
              Esse projeto ainda não tem um case study detalhado.
            </p>
            <Link
              to="/projetos"
              className="inline-flex items-center gap-2 text-sm text-[#00d9a3] hover:text-[#00b386] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar aos projetos
            </Link>
          </main>
          <Footer />
        </div>
      </div>
    );
  }

  const { challenge, solution, result } = project.caseStudy;

  return (
    <div className="relative min-h-screen bg-[#0a0a0a] text-white antialiased selection:bg-[#00d9a3] selection:text-black">
      <Background />

      <div className="relative z-10">
        <Header />
        <main className="pt-24">
          {/* Header do case study */}
          <section className="px-6 pb-8 max-w-3xl mx-auto text-center">
            <Link
              to="/projetos"
              className="inline-flex items-center gap-2 text-xs text-[#a1a1aa] hover:text-white transition-colors mb-8"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Voltar aos projetos
            </Link>

            <span className="text-[#00d9a3] font-mono text-xs tracking-widest mb-4 block uppercase">
              projeto
            </span>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6">
              {project.title}
            </h1>

            <div className="flex flex-wrap justify-center gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="text-[10px] font-mono px-2 py-1 rounded text-[#a1a1aa] bg-white/5"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* Imagem de destaque */}
          {project.image && (
            <section className="px-6 max-w-4xl mx-auto mb-16">
              <div className="rounded-xl overflow-hidden border border-white/[0.08]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto object-cover"
                />
              </div>
            </section>
          )}

          {/* Desafio / Solução / Resultado */}
          <section className="px-6 max-w-3xl mx-auto space-y-10 pb-16">
            <div>
              <h2 className="text-xl font-semibold tracking-tight mb-3 flex items-center gap-3">
                <span className="text-[#00d9a3] text-lg">01.</span> O Desafio
              </h2>
              <p className="text-[#a1a1aa] text-sm leading-7">{challenge}</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold tracking-tight mb-3 flex items-center gap-3">
                <span className="text-[#00d9a3] text-lg">02.</span> A Solução
              </h2>
              <p className="text-[#a1a1aa] text-sm leading-7">{solution}</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold tracking-tight mb-3 flex items-center gap-3">
                <span className="text-[#00d9a3] text-lg">03.</span> Resultado
              </h2>
              <p className="text-[#a1a1aa] text-sm leading-7">{result}</p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4 border-t border-white/[0.08]">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-[#00d9a3] text-black text-sm font-semibold rounded-full hover:bg-[#00b386] transition-all"
                >
                  Visitar Site
                </a>
              )}
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white/5 border border-white/10 text-white text-sm font-medium rounded-full hover:bg-white/10 transition-all"
              >
                Ver Código
              </a>
            </div>
          </section>

          {/* CTA final */}
          <section className="py-24 px-6 border-t border-white/[0.08] relative overflow-hidden">
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#00d9a3]/5 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="max-w-2xl mx-auto text-center relative">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-4">
                Quer um projeto assim para o seu negócio?
              </h2>
              <p className="text-[#a1a1aa] mb-8 max-w-md mx-auto">
                Resposta rápida e orçamento sem compromisso pelo WhatsApp.
              </p>
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#00d9a3] text-black font-semibold rounded-full hover:scale-105 transition-transform duration-300 shadow-lg shadow-[#00d9a3]/20"
              >
                <MessageCircle className="w-5 h-5" />
                Falar no WhatsApp
              </a>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default CaseStudy;
