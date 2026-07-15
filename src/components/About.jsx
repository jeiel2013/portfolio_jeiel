import React from "react";
import { Code2, MessageSquareText, Sparkles } from "lucide-react";
import {
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiPrisma,
  SiTailwindcss,
  SiNestjs,
  SiMysql,
  SiJavascript,
  SiPostgresql,
  SiGit,
} from "react-icons/si";
import { useLanguage } from "../context/LanguageContext";

function AboutSection() {
  const { t } = useLanguage();

  const technologies = [
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    { name: "Prisma", icon: SiPrisma, color: "var(--text-primary)" },
    { name: "Tailwind", icon: SiTailwindcss, color: "#38B2AC" },
    { name: "NestJS", icon: SiNestjs, color: "#E0234E" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "MySQL", icon: SiMysql, color: "#4479A1" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "var(--text-primary)" },
    { name: "Git", icon: SiGit, color: "#F1502F" },
  ];

  return (
    <>
      {/* About Section */}
      <section id="about" className="py-24 px-6 border-t border-[var(--border-subtle)]">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold tracking-tight flex items-center gap-3">
              <span className="text-[var(--accent)] text-xl">01.</span> {t.about.title}
            </h2>
            <div className="space-y-4 text-[var(--text-secondary)] text-sm leading-7">
              <p>{t.about.paragraph1}</p>
              <p>{t.about.paragraph2}</p>
              <p>{t.about.paragraph3}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <div className="glass-panel p-6 rounded-xl hover:border-[var(--accent-30)] transition-colors group bg-[var(--glass-bg)] backdrop-blur-[10px] border border-[var(--border-subtle)]">
              <Code2 className="w-6 h-6 mb-4 text-[var(--accent)]" />
              <h3 className="font-medium text-[var(--text-primary)] mb-2">{t.about.card1Title}</h3>
              <p className="text-xs text-[var(--text-secondary)]">{t.about.card1Desc}</p>
            </div>

            <div className="glass-panel p-6 rounded-xl hover:border-[var(--accent-30)] transition-colors group bg-[var(--glass-bg)] backdrop-blur-[10px] border border-[var(--border-subtle)]">
              <MessageSquareText className="w-6 h-6 mb-4 text-[var(--accent)]" />
              <h3 className="font-medium text-[var(--text-primary)] mb-2">{t.about.card2Title}</h3>
              <p className="text-xs text-[var(--text-secondary)]">{t.about.card2Desc}</p>
            </div>

            <div className="glass-panel p-6 rounded-xl hover:border-[var(--accent-30)] transition-colors group bg-[var(--glass-bg)] backdrop-blur-[10px] border border-[var(--border-subtle)]">
              <Sparkles className="w-6 h-6 mb-4 text-[var(--accent)]" />
              <h3 className="font-medium text-[var(--text-primary)] mb-2">{t.about.card3Title}</h3>
              <p className="text-xs text-[var(--text-secondary)]">{t.about.card3Desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section
        id="tech"
        className="py-24 px-6 border-t border-[var(--border-subtle)] bg-[var(--bg-card-alt)]"
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold tracking-tight mb-12 flex items-center gap-3">
            <span className="text-[var(--accent)] text-xl">02.</span> {t.about.techTitle}
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

function TechItem({ name, icon: Icon, color }) {
  return (
    <div className="flex flex-col items-center justify-center p-6 rounded-lg bg-[var(--bg-card)] border border-[var(--border-subtle)] hover:border-[var(--accent-50)] transition-all group">
      <Icon
        className="w-8 h-8 text-[var(--text-secondary)] group-hover:text-[var(--tech-color)] transition-colors"
        style={{ "--tech-color": color }}
      />
      <span className="mt-3 text-xs font-mono text-[var(--text-secondary)] group-hover:text-[var(--text-primary)]">
        {name}
      </span>
    </div>
  );
}

export default AboutSection;
