import {
  GraduationCap,
  Code2,
  FileDown,
} from "lucide-react";

import Curriculo from "../assets/pdf/CurrículoJeielAlves.pdf";

const educationItems = [
  {
    icon: GraduationCap,
    title: "Sistemas de Informação",
    institution: "Univale (Universidade Vale do Rio Doce)",
    period: "2023 – 2026",
    description:
      "Graduação com foco em engenharia de software, desenvolvimento web e banco de dados. Desenvolvimento de projetos práticos e aplicações fullstack durante a formação.",
  },
  {
    icon: Code2,
    title: "React JS com TypeScript do zero ao avançado na prática",
    institution: "Udemy - Matheus Fraga",
    period: "2026",
    description:
      "Focado no desenvolvimento de habilidades práticas na área de tecnologia, abordando conceitos fundamentais e aplicação prática por meio de exercícios e projetos.",
  },
  {
    icon: Code2,
    title: "NestJS para REST API com TypeORM, Autenticação JWT e Testes",
    institution: "Udemy - Luiz Otávio Miranda",
    period: "2025",
    description:
      "Curso voltado para o desenvolvimento de habilidades práticas, com foco na aplicação dos conceitos estudados em projetos e boas práticas de desenvolvimento.",
  },
  {
    icon: Code2,
    title: "Spring Boot Expert: JPA, REST, JWT, OAuth2 com Docker e AWS",
    institution: "Udemy - Dougllas Sousa",
    period: "2025",
    description:
      "Formação em Java com foco em fundamentos da linguagem, programação orientada a objetos, desenvolvimento de APIs e integração com banco de dados utilizando tecnologias como Spring Boot e JPA.",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="py-24 px-6 border-t border-white/[0.08]"
    >
      <div className="max-w-5xl mx-auto">

        {/* Título com número — mesmo padrão do About/Tech */}
        <h2 className="text-3xl font-semibold tracking-tight mb-12 flex items-center gap-3">
          <span className="text-[#00d9a3] text-xl">04.</span> Formação &amp; Certificações
        </h2>

        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">

          {/* ── Sidebar esquerda ── */}
          <div className="md:w-1/3">
            <div className="sticky top-24">

              <div className="w-10 h-10 rounded-lg bg-[#00d9a3]/10 flex items-center justify-center text-[#00d9a3] mb-4 border border-[#00d9a3]/20">
                <GraduationCap size={20} />
              </div>

              <p className="text-sm text-[#a1a1aa] leading-relaxed">
                Minha jornada acadêmica e qualificações técnicas que fundamentam
                meu trabalho como desenvolvedor.
              </p>

              <div className="mt-8">
                <a
                  href={Curriculo}
                  download
                  className="text-xs font-mono text-white/60 hover:text-white border-b border-white/20 hover:border-white transition-all pb-0.5 inline-flex items-center gap-2"
                >
                  <FileDown size={13} />
                  Download CV
                </a>
              </div>
            </div>
          </div>

          {/* ── Lista de itens ── */}
          <div className="md:w-2/3 space-y-4">
            {educationItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="group flex flex-col sm:flex-row gap-4 p-5 rounded-xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-[10px] hover:bg-white/[0.05] hover:border-[#00d9a3]/30 transition-all duration-300"
                >
                  {/* Ícone circular */}
                  <div className="shrink-0">
                    <div className="w-10 h-10 rounded-full bg-[#121212] border border-white/[0.08] flex items-center justify-center text-[#a1a1aa] group-hover:text-[#00d9a3] transition-colors">
                      <Icon size={20} />
                    </div>
                  </div>

                  {/* Conteúdo */}
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1 gap-1">
                      <h3 className="text-sm font-medium text-white">
                        {item.title}
                      </h3>
                      <span className="text-[10px] font-mono text-[#a1a1aa] bg-white/[0.05] px-2 py-0.5 rounded border border-white/[0.08] w-fit shrink-0">
                        {item.period}
                      </span>
                    </div>

                    <p className="text-xs text-[#00d9a3]/70 mb-2">
                      {item.institution}
                    </p>

                    <p className="text-xs text-[#a1a1aa] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}