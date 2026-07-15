import Background from "../components/Background";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProjectGridCard from "../components/ProjectGridCard";
import { projects } from "../data/projects";
import { useLanguage } from "../context/LanguageContext";

const clientProjects = projects.filter((p) => p.category === "cliente");
const personalProjects = projects.filter((p) => p.category === "pessoal");

function Projetos() {
  const { t } = useLanguage();

  return (
    <div className="relative min-h-screen bg-[var(--bg-page)] text-[var(--text-primary)] antialiased selection:bg-[var(--accent)] selection:text-[var(--accent-on)]">
      <Background />

      <div className="relative z-10">
        <Header />
        <main className="pt-24">
          <section className="px-6 pb-9 lg:pb-20 pt-6 text-center max-w-3xl mx-auto">
            <span className="text-[var(--accent)] font-bold text-lg tracking-widest mb-4 block">
              {t.projetosPage.eyebrow}
            </span>
            <h1 className="text-4xl md:text-5xl pt-8 font-semibold tracking-tight text-[var(--text-primary)]">
              {t.projetosPage.heading}
            </h1>
          </section>

          <section className="py-24 px-6 border-t border-[var(--border-subtle)]">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-semibold tracking-tight mb-3 flex items-center gap-3">
                <span className="text-[var(--accent)] text-xl">01.</span> {t.projetosPage.clientTitle}
              </h2>
              <p className="text-[var(--text-secondary)] text-sm max-w-xl mb-12">
                {t.projetosPage.clientSubtitle}
              </p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {clientProjects.map((project, index) => (
                  <ProjectGridCard key={index} project={project} />
                ))}
              </div>
            </div>
          </section>

          <section className="py-24 px-6 border-t border-[var(--border-subtle)] bg-[var(--bg-card-alt)]">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-semibold tracking-tight mb-3 flex items-center gap-3">
                <span className="text-[var(--accent)] text-xl">02.</span> {t.projetosPage.personalTitle}
              </h2>
              <p className="text-[var(--text-secondary)] text-sm max-w-xl mb-12">
                {t.projetosPage.personalSubtitle}
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
