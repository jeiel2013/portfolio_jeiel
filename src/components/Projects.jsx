import React, { useState, useRef } from "react";
import {
  SiNestjs,
  SiPrisma,
  SiReact,
  SiNodedotjs,
  SiJavascript,
  SiPostgresql,
  SiTailwindcss,
  SiShadcnui,
  SiVite,
} from "react-icons/si";
import {
  FaGithub,
  FaPlay,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

import batista from "../assets/images/batistaecontabil.jpg";
import hub from "../assets/images/hub.jpg";
import todo from "../assets/images/todo.jpg";
import radio from "../assets/images/radio.jpg";

function ProjectsSection() {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const containerRef = useRef(null);

  const projects = [
    {
      title: "User Hub",
      description:
        "CRUD completo de usuários desenvolvido com NestJS e Prisma.",
      image: hub,
      technologies: [
        { name: "NestJS", icon: <SiNestjs className="w-5 h-5" /> },
        { name: "Node.js", icon: <SiNodedotjs className="w-5 h-5" /> },
        { name: "Prisma", icon: <SiPrisma className="w-5 h-5" /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="w-5 h-5" /> },
        { name: "React", icon: <SiReact className="w-5 h-5" /> },
        { name: "Vite", icon: <SiVite className="w-5 h-5" /> },
      ],
      githubUrl: "https://github.com/jeiel2013/User-Hub/tree/main",
      demoUrl: null,
    },
    {
      title: "Batista Assessoria Contábil",
      description:
        "Site desenvolvido para uma empresa de contabilidade, tendo serviços e modos de contato.",
      image: batista,
      technologies: [
        { name: "React", icon: <SiReact className="w-5 h-5" /> },
        { name: "Vite", icon: <SiVite className="w-5 h-5" /> },
        { name: "TailwindCss", icon: <SiTailwindcss className="w-5 h-5" /> },
        { name: "Shadcn", icon: <SiShadcnui /> },
      ],
      githubUrl: "https://github.com/jeiel2013/batistaecontabil",
      demoUrl: "https://batistaecontabil.vercel.app/",
    },
    {
      title: "Coroaci Rádio FM",
      description:
        "Site desenvolvido sobre a Rádio de Coroaci, com um player da stream da rádio.",
      image: radio,
      technologies: [
        { name: "React", icon: <SiReact className="w-5 h-5" /> },
        { name: "Vite", icon: <SiVite className="w-5 h-5" /> },
        { name: "TailwindCss", icon: <SiTailwindcss className="w-5 h-5" /> },
        { name: "JavaScript", icon: <SiJavascript className="w-5 h-5" /> },
      ],
      githubUrl: "https://github.com/jeiel2013/batistaecontabil",
      demoUrl: "https://batistaecontabil.vercel.app/",
    },
    {
      title: "ToDo List",
      description:
        "Aplicação simples de lista de tarefas feita para prática e aprendizado.",
      image: todo,
      technologies: [
        { name: "React", icon: <SiReact className="w-5 h-5" /> },
        { name: "TailwindCss", icon: <SiTailwindcss className="w-5 h-5" /> },
        { name: "Shadcn", icon: <SiShadcnui className="w-5 h-5" /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="w-5 h-5" /> },
        { name: "NestJS", icon: <SiNestjs className="w-5 h-5" /> },
        { name: "Prisma", icon: <SiPrisma className="w-5 h-5" /> },
      ],
      githubUrl: "https://github.com/jeiel2013/frontend-todo",
      demoUrl: "https://frontend-todo-x6f1.onrender.com/login",
    },
  ];

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const scrollToNext = () => {
    const container = containerRef.current;
    const cardWidth = container.querySelector(".project-card").offsetWidth + 32;
    container.scrollBy({ left: cardWidth, behavior: "smooth" });
  };

  const scrollToPrev = () => {
    const container = containerRef.current;
    const cardWidth = container.querySelector(".project-card").offsetWidth + 32;
    container.scrollBy({ left: -cardWidth, behavior: "smooth" });
  };

  return (
    <section
      id="projects"
      className="w-full min-h-screen bg-zinc-950 py-20 px-6 sm:px-8 lg:px-12 relative overflow-hidden"
    >
      {/* Fundo com gradiente dark */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black opacity-90"></div>

      {/* Grid pattern sutil */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(16, 185, 129, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(16, 185, 129, 0.1) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      ></div>

      {/* Partículas decorativas */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-emerald-500 opacity-30 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-cyan-400 opacity-40 rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-emerald-400 opacity-20 rounded-full animate-pulse delay-700"></div>
        <div className="absolute bottom-20 right-1/3 w-1 h-1 bg-cyan-300 opacity-50 rounded-full animate-pulse delay-500"></div>
        <div className="absolute top-1/2 left-1/3 w-2 h-2 bg-emerald-500 opacity-25 rounded-full animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-zinc-100 mb-6"
            style={{ fontFamily: "'Fira Code', monospace" }}
          >
            Projetos
          </h2>
          <p
            className="text-zinc-400 text-lg max-w-3xl mx-auto"
            style={{ fontFamily: "'Fira Code', monospace" }}
          >
            Aqui estão alguns dos projetos onde apliquei na prática meus
            conhecimentos em backend, APIs e organização de dados.
          </p>
        </div>

        {/* Container do Carrossel */}
        <div className="relative">
          {/* Botão Anterior */}
          <button
            onClick={scrollToPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 bg-zinc-900/80 hover:bg-zinc-800 text-zinc-100 p-4 rounded-full border border-emerald-500/50 hover:border-emerald-400 transition-all duration-300 hover:scale-110 shadow-lg hidden lg:block"
            aria-label="Projeto anterior"
          >
            <FaChevronLeft className="w-6 h-6" />
          </button>

          {/* Botão Próximo */}
          <button
            onClick={scrollToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 bg-zinc-900/80 hover:bg-zinc-800 text-zinc-100 p-4 rounded-full border border-emerald-500/50 hover:border-emerald-400 transition-all duration-300 hover:scale-110 shadow-lg hidden lg:block"
            aria-label="Próximo projeto"
          >
            <FaChevronRight className="w-6 h-6" />
          </button>

          {/* Carrossel Arrastável */}
          <div
            ref={containerRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            className={`flex gap-8 overflow-x-auto scrollbar-hide scroll-smooth ${
              isDragging ? "cursor-grabbing" : "cursor-grab"
            }`}
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {projects.map((project, index) => (
              <div
                key={index}
                className="project-card flex-shrink-0 w-[calc(33.333%-1.33rem)] min-w-[320px] md:min-w-[350px]"
              >
                <div className="group relative bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-3xl overflow-hidden hover:border-emerald-500/60 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/20 h-full flex flex-col">
                  {/* Borda animada */}
                  <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-emerald-500 to-cyan-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none"></div>

                  {/* Efeito de brilho */}
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

                  {/* Imagem do projeto */}
                  <div className="relative h-48 bg-gradient-to-br from-zinc-800/30 to-zinc-900/30 overflow-hidden flex-shrink-0">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 pointer-events-none select-none"
                      draggable="false"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent"></div>
                  </div>

                  {/* Conteúdo */}
                  <div className="relative p-6 space-y-4 bg-zinc-900/50 flex-1 flex flex-col">
                    <h3
                      className="text-2xl font-bold text-zinc-100 group-hover:text-emerald-300 transition-colors duration-300"
                      style={{ fontFamily: "'Fira Code', monospace" }}
                    >
                      {project.title}
                    </h3>

                    <p
                      className="text-zinc-400 text-sm leading-relaxed"
                      style={{ fontFamily: "'Fira Code', monospace" }}
                    >
                      {project.description}
                    </p>

                    {/* Tecnologias */}
                    <div className="flex flex-wrap gap-3 pt-2 flex-1">
                      {project.technologies.map((tech, techIndex) => (
                        <div
                          key={techIndex}
                          className="flex items-center gap-2 px-3 py-1.5 bg-zinc-800/50 border border-zinc-700 rounded-full text-zinc-300 text-sm h-fit"
                          style={{ fontFamily: "'Fira Code', monospace" }}
                        >
                          <span className="text-emerald-400">{tech.icon}</span>
                          <span>{tech.name}</span>
                        </div>
                      ))}
                    </div>

                    {/* Botões */}
                    <div
                      className="flex gap-4 pt-4 mt-auto"
                      style={{ fontFamily: "'Fira Code', monospace" }}
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${
                          project.demoUrl ? "flex-1" : "w-full"
                        } flex items-center justify-center gap-2 px-4 py-2.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-100 rounded-lg transition-all duration-300 border border-zinc-700 hover:border-emerald-500`}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaGithub className="w-4 h-4" />
                        <span className="text-sm font-medium">Código</span>
                      </a>

                      {project.demoUrl ? (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-zinc-950 rounded-lg transition-all duration-300"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FaPlay className="w-3 h-3" />
                          <span className="text-sm font-medium">Demo</span>
                        </a>
                      ) : (
                        <div className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-zinc-800/50 text-zinc-500 rounded-lg border border-zinc-700/50 cursor-not-allowed">
                          <FaPlay className="w-3 h-3" />
                          <span className="text-sm font-medium">Em breve</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Indicador de arrastar */}
        <div className="text-center mt-8">
          <p
            className="text-zinc-500 text-sm"
            style={{ fontFamily: "'Fira Code', monospace" }}
          >
            ← Arraste para ver mais projetos →
          </p>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}

export default ProjectsSection;
