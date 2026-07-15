import React from "react";
import { MessageCircle, FileText, Code2, Rocket } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const ICONS = [MessageCircle, FileText, Code2, Rocket];

function Process() {
  const { t } = useLanguage();

  return (
    <section
      id="process"
      className="py-24 px-6 border-t border-[var(--border-subtle)] bg-[var(--bg-card-alt)]"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold tracking-tight mb-12 flex items-center gap-3">
          <span className="text-[var(--accent)] text-xl">02.</span> {t.process.title}
        </h2>

        <div className="space-y-4">
          {t.process.steps.map((step, index) => {
            const Icon = ICONS[index];
            return (
              <div
                key={index}
                className="group flex flex-col sm:flex-row gap-4 p-5 rounded-xl border border-[var(--border-subtle)] bg-[var(--glass-bg)] backdrop-blur-[10px] hover:bg-[var(--surface-muted)] hover:border-[var(--accent-30)] transition-all duration-300"
              >
                <div className="shrink-0">
                  <div className="w-10 h-10 rounded-full bg-[var(--bg-card)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--text-secondary)] group-hover:text-[var(--accent)] transition-colors">
                    <Icon size={20} />
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1 gap-2">
                    <h3 className="text-sm font-medium text-[var(--text-primary)]">{step.title}</h3>
                    <span className="text-[10px] font-mono text-[var(--text-secondary)] bg-[var(--surface-muted)] px-2 py-0.5 rounded border border-[var(--border-subtle)] shrink-0">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
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
