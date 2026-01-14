import React from "react";
import { Code2, Users, Sparkles } from "lucide-react";
import {
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiPrisma,
  SiTailwindcss,
  SiNestjs,
  SiMysql,
  SiVuedotjs,
  SiJavascript,
  SiPostgresql,
  SiGit,
} from "react-icons/si";

function AboutSection() {
  const technologies = [
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" }, //
    { name: "React", icon: SiReact, color: "#61DAFB" }, //
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" }, //
    { name: "Prisma", icon: SiPrisma, color: "#ffffff" }, //
    { name: "Tailwind", icon: SiTailwindcss, color: "#38B2AC" }, //
    { name: "NestJS", icon: SiNestjs, color: "#E0234E" }, //
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" }, //
    { name: "MySQL", icon: SiMysql, color: "#4479A1" }, //
    { name: "PostgreSQL", icon: SiPostgresql, color: "#ffffff" },
    { name: "Git", icon: SiGit, color: "#F1502F" },
  ];

  return (
    <>
      {/* About Section */}
      <section id="about" className="py-24 px-6 border-t border-white/[0.08]">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold tracking-tight flex items-center gap-3">
              <span className="text-[#00d9a3] text-xl">01.</span> Sobre Mim
            </h2>
            <div className="space-y-4 text-[#a1a1aa] text-sm leading-7">
              <p>
                Iniciei minha trajetória no desenvolvimento em 2023, movido pela
                curiosidade em compreender como sistemas funcionam por trás da
                interface. Atualmente, curso{" "}
                <span className="text-white font-medium">
                  Sistemas de Informação
                </span>{" "}
                e uno a base acadêmica a uma prática constante em projetos reais
                e desenvolvimento independente.
              </p>

              <p>
                Tenho como foco a criação de experiências web modernas e
                performáticas, utilizando o ecossistema{" "}
                <span className="text-white font-medium">
                  JavaScript/TypeScript
                </span>
                . Acredito que uma boa tecnologia é aquela que não se impõe, mas
                atua de forma silenciosa, conectando problemas reais a soluções
                eficientes e bem pensadas.
              </p>

              <p>
                Fora do ambiente de código, encontro inspiração em jogos e
                atividades que estimulam o raciocínio estratégico, a
                criatividade e a tomada de decisão.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {/* Stat Card 1 */}
            <div className="glass-panel p-6 rounded-xl hover:border-[#00d9a3]/30 transition-colors group bg-white/[0.03] backdrop-blur-[10px] border border-white/[0.08]">
              <Code2 className="w-6 h-6 mb-4 text-[#00d9a3]" />
              <h3 className="font-medium text-white mb-2">
                Desenvolvimento Fullstack
              </h3>
              <p className="text-xs text-[#a1a1aa]">
                Domínio do ciclo completo, do banco de dados à interface do
                usuário.
              </p>
            </div>

            {/* Stat Card 2 */}
            <div className="glass-panel p-6 rounded-xl hover:border-[#00d9a3]/30 transition-colors group bg-white/[0.03] backdrop-blur-[10px] border border-white/[0.08]">
              <Users className="w-6 h-6 mb-4 text-[#00d9a3]" />
              <h3 className="font-medium text-white mb-2">
                Trabalho em Equipe
              </h3>
              <p className="text-xs text-[#a1a1aa]">
                Experiência em colaboração e metodologias ágeis de
                desenvolvimento.
              </p>
            </div>

            {/* Stat Card 3 */}
            <div className="glass-panel p-6 rounded-xl hover:border-[#00d9a3]/30 transition-colors group bg-white/[0.03] backdrop-blur-[10px] border border-white/[0.08]">
              <Sparkles className="w-6 h-6 mb-4 text-[#00d9a3]" />
              <h3 className="font-medium text-white mb-2">
                Aprendizado Contínuo
              </h3>
              <p className="text-xs text-[#a1a1aa]">
                Constantemente explorando novas tecnologias como StyledX e
                NestJS.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section
        id="tech"
        className="py-24 px-6 border-t border-white/[0.08] bg-[#1a1a1a]/30"
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold tracking-tight mb-12 flex items-center gap-3">
            <span className="text-[#00d9a3] text-xl">02.</span> Tecnologias
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {technologies.map((tech, index) => (
              <TechItem key={index} {...tech} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

// Componente separado para cada tecnologia
function TechItem({ name, icon: Icon, color }) {
  return (
    <div className="flex flex-col items-center justify-center p-6 rounded-lg bg-[#121212] border border-white/[0.08] hover:border-[#00d9a3]/50 transition-all group">
      <Icon
        className="w-8 h-8 text-[#a1a1aa] group-hover:text-[var(--tech-color)] transition-colors"
        style={{ "--tech-color": color }}
      />
      <span className="mt-3 text-xs font-mono text-[#a1a1aa] group-hover:text-white">
        {name}
      </span>
    </div>
  );
}

export default AboutSection;
