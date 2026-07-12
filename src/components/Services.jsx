import React from "react";
import { LayoutTemplate, Server, Plug, Smartphone } from "lucide-react";

const services = [
  {
    icon: LayoutTemplate,
    title: "Sites Institucionais & Landing Pages",
    description:
      "Sites rápidos, responsivos e com identidade visual própria para apresentar seu negócio ou trabalho.",
    tags: ["React", "Next.js", "TailwindCSS"],
  },
  {
    icon: Server,
    title: "Sistemas Web Sob Medida",
    description:
      "Painéis, sistemas de gestão e plataformas internas construídos do zero, focados em escalabilidade e segurança.",
    tags: ["NestJS", "Prisma", "PostgreSQL"],
  },
  {
    icon: Plug,
    title: "APIs & Integrações",
    description:
      "Backends e integrações entre sistemas, pagamentos e serviços de terceiros.",
    tags: ["Node.js", "NestJS", "REST"],
  },
  {
    icon: Smartphone,
    title: "Aplicativos Mobile",
    description:
      "Aplicativos para Android e iOS a partir de uma única base de código.",
    tags: ["Flutter", "React Native"],
  },
];

function Services() {
  return (
    <section id="services" className="py-24 px-6 border-t border-white/[0.08]">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold tracking-tight mb-4 flex items-center gap-3">
          <span className="text-[#00d9a3] text-xl">01.</span> O que eu faço
        </h2>
        <p className="text-[#a1a1aa] text-sm max-w-xl mb-12">
          Atendo desde profissionais autônomos até pequenas empresas que
          precisam de uma solução web feita sob medida, do primeiro código ao
          deploy.
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="glass-panel p-6 rounded-xl hover:border-[#00d9a3]/30 transition-colors group bg-white/[0.03] backdrop-blur-[10px] border border-white/[0.08]"
              >
                <Icon className="w-6 h-6 mb-4 text-[#00d9a3]" />
                <h3 className="font-medium text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-xs text-[#a1a1aa] leading-relaxed mb-4">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-[10px] font-mono px-2 py-1 rounded text-[#a1a1aa] bg-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
