import React from "react";
import { MessageCircle, FileText, Code2, Rocket } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    title: "Primeiro contato",
    description:
      "Conversamos sobre sua ideia, objetivo e prazo — sem compromisso.",
  },
  {
    icon: FileText,
    title: "Proposta e escopo",
    description:
      "Você recebe um orçamento claro, com prazos e etapas de entrega definidos.",
  },
  {
    icon: Code2,
    title: "Desenvolvimento",
    description:
      "Construo o projeto com atualizações periódicas, sem surpresas no caminho.",
  },
  {
    icon: Rocket,
    title: "Entrega e suporte",
    description:
      "Site ou sistema no ar, com suporte para ajustes após a entrega.",
  },
];

function Process() {
  return (
    <section
      id="process"
      className="py-24 px-6 border-t border-white/[0.08] bg-[#1a1a1a]/30"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold tracking-tight mb-12 flex items-center gap-3">
          <span className="text-[#00d9a3] text-xl">02.</span> Como funciona
        </h2>

        <div className="space-y-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="group flex flex-col sm:flex-row gap-4 p-5 rounded-xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-[10px] hover:bg-white/[0.05] hover:border-[#00d9a3]/30 transition-all duration-300"
              >
                <div className="shrink-0">
                  <div className="w-10 h-10 rounded-full bg-[#121212] border border-white/[0.08] flex items-center justify-center text-[#a1a1aa] group-hover:text-[#00d9a3] transition-colors">
                    <Icon size={20} />
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1 gap-2">
                    <h3 className="text-sm font-medium text-white">
                      {step.title}
                    </h3>
                    <span className="text-[10px] font-mono text-[#a1a1aa] bg-white/[0.05] px-2 py-0.5 rounded border border-white/[0.08] shrink-0">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="text-xs text-[#a1a1aa] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Process;
