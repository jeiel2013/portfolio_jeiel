import React from "react";
import { Link } from "react-router-dom";
import { getProjectIcon } from "../utils/projectIcons";
import { useLanguage } from "../context/LanguageContext";

function ProjectGridCard({ project }) {
  const { t, language } = useLanguage();

  return (
    <article className="bg-[#121212] rounded-xl border border-white/[0.08] overflow-hidden flex flex-col group hover:border-[#00d9a3]/50 transition-all duration-300">
      <div className="h-40 bg-gradient-to-br from-gray-800 to-black relative overflow-hidden group-hover:opacity-90 transition-opacity">
        {project.image ? (
          <>
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent" />
          </>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-[#a1a1aa]/20 group-hover:text-[#00d9a3]/20 transition-colors">
            {getProjectIcon(project.icon)}
          </div>
        )}
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-white group-hover:text-[#00d9a3] transition-colors mb-2">
          {project.title}
        </h3>

        <p className="text-sm text-[#a1a1aa] mb-6 flex-grow">
          {project.description[language]}
        </p>

        {project.slug && (
          <Link
            to={`/projetos/${project.slug}`}
            className="text-xs font-medium text-[#00d9a3] hover:text-[#00b386] transition-colors mb-4 inline-block w-fit"
          >
            {t.caseStudy.viewCaseStudy}
          </Link>
        )}

        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, techIndex) => (
            <span
              key={techIndex}
              className={`text-[10px] font-mono px-2 py-1 rounded ${
                techIndex === 0
                  ? "text-[#00d9a3] bg-[#00d9a3]/10"
                  : "text-[#a1a1aa] bg-white/5"
              }`}
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4 mt-auto pt-4 border-t border-white/5">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium flex items-center gap-1 text-[#00d9a3] hover:text-[#00b386] transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              {t.caseStudy.visitSite}
            </a>
          )}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium flex items-center gap-1 hover:text-white text-[#a1a1aa] transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            {t.caseStudy.viewCode}
          </a>
        </div>
      </div>
    </article>
  );
}

export default ProjectGridCard;
