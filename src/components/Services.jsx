import React from "react";
import { LayoutTemplate, Server, Plug, Smartphone } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const ICONS = [LayoutTemplate, Server, Plug, Smartphone];
const TAGS = [
  ["React", "Next.js", "TailwindCSS"],
  ["NestJS", "Prisma", "PostgreSQL"],
  ["Node.js", "NestJS", "REST"],
  ["Flutter", "React Native"],
];

function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-24 px-6 border-t border-white/[0.08]">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold tracking-tight mb-4 flex items-center gap-3">
          <span className="text-[#00d9a3] text-xl">01.</span> {t.services.title}
        </h2>
        <p className="text-[#a1a1aa] text-sm max-w-xl mb-12">{t.services.subtitle}</p>

        <div className="grid sm:grid-cols-2 gap-6">
          {t.services.items.map((service, index) => {
            const Icon = ICONS[index];
            return (
              <div
                key={index}
                className="glass-panel p-6 rounded-xl hover:border-[#00d9a3]/30 transition-colors group bg-white/[0.03] backdrop-blur-[10px] border border-white/[0.08]"
              >
                <Icon className="w-6 h-6 mb-4 text-[#00d9a3]" />
                <h3 className="font-medium text-white mb-2">{service.title}</h3>
                <p className="text-xs text-[#a1a1aa] leading-relaxed mb-4">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {TAGS[index].map((tag, tagIndex) => (
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
