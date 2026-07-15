import {
  GraduationCap,
  Code2,
  FileDown,
} from "lucide-react";
import Curriculo from "../assets/pdf/CurrículoJeiel.pdf";
import { useLanguage } from "../context/LanguageContext";

// Ícone, instituição e período são iguais nos dois idiomas (nomes próprios/datas);
// título e descrição vêm do dicionário de traduções.
const meta = [
  { icon: GraduationCap, institution: "Univale (Universidade Vale do Rio Doce)", period: "2023 – 2026" },
  { icon: Code2, institution: "Udemy - Matheus Fraga", period: "2026" },
  { icon: Code2, institution: "Udemy - Luiz Otávio Miranda", period: "2025" },
  { icon: Code2, institution: "Udemy - Dougllas Sousa", period: "2025" },
];

export default function Education() {
  const { t } = useLanguage();

  return (
    <section
      id="education"
      className="py-24 px-6 border-t border-[var(--border-subtle)]"
    >
      <div className="max-w-5xl mx-auto">

        <h2 className="text-3xl font-semibold tracking-tight mb-12 flex items-center gap-3">
          <span className="text-[var(--accent)] text-xl">04.</span> {t.education.title}
        </h2>

        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">

          <div className="md:w-1/3">
            <div className="sticky top-24">

              <div className="w-10 h-10 rounded-lg bg-[var(--accent-10)] flex items-center justify-center text-[var(--accent)] mb-4 border border-[var(--accent-20)]">
                <GraduationCap size={20} />
              </div>

              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                {t.education.intro}
              </p>

              <div className="mt-8">
                <a
                  href={Curriculo}
                  download
                  className="text-xs font-mono text-[var(--text-secondary)] hover:text-[var(--text-primary)] border-b border-[var(--border-subtle)] hover:border-[var(--text-primary)] transition-all pb-0.5 inline-flex items-center gap-2"
                >
                  <FileDown size={13} />
                  {t.education.downloadCv}
                </a>
              </div>
            </div>
          </div>

          <div className="md:w-2/3 space-y-4">
            {t.education.items.map((item, index) => {
              const { icon: Icon, institution, period } = meta[index];
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
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1 gap-1">
                      <h3 className="text-sm font-medium text-[var(--text-primary)]">
                        {item.title}
                      </h3>
                      <span className="text-[10px] font-mono text-[var(--text-secondary)] bg-[var(--surface-muted)] px-2 py-0.5 rounded border border-[var(--border-subtle)] w-fit shrink-0">
                        {period}
                      </span>
                    </div>

                    <p className="text-xs text-[var(--accent-70)] mb-2">
                      {institution}
                    </p>

                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
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
