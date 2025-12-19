import React from "react";
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
import { FaGithub, FaPlay } from "react-icons/fa";
import Snowfall from "react-snowfall";

import batista from '../assets/images/batistaecontabil.jpg';
import hub from '../assets/images/hub.jpg';
import todo from '../assets/images/todo.jpg';

function ProjectsSection() {
  const projects = [
    {
      title: "User Hub",
      description:
        "CRUD completo de usuários desenvolvido com NestJS e Prisma.",
      image: hub, // Substitua pelo caminho real da imagem
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
      image: batista, // Substitua pelo caminho real da imagem
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
      title: "ToDo List",
      description:
        "Aplicação simples de lista de tarefas feita para prática e aprendizado.",
      image: todo, // Substitua pelo caminho real da imagem
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

  return (
    <section
      id="projects"
      className="w-full min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 py-20 px-6 sm:px-8 lg:px-12 relative overflow-hidden"
    >
      <Snowfall color="#82C3D9" />
      {/* Partículas decorativas */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 opacity-30 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-purple-400 opacity-40 rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-blue-300 opacity-20 rounded-full animate-pulse delay-700"></div>
        <div className="absolute bottom-20 right-1/3 w-1 h-1 bg-purple-300 opacity-50 rounded-full animate-pulse delay-500"></div>
        <div className="absolute top-1/2 left-1/3 w-2 h-2 bg-indigo-400 opacity-25 rounded-full animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Projetos
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Aqui estão alguns dos projetos onde apliquei na prática meus
            conhecimentos em backend, APIs e organização de dados.
          </p>
        </div>

        {/* Grid de Projetos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-gray-900/50 backdrop-blur-sm border border-purple-500/30 rounded-3xl overflow-hidden hover:border-purple-400/60 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
            >
              {/* Borda animada - movida para trás de tudo */}
              <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none"></div>

              {/* Efeito de brilho */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

              {/* Imagem do projeto */}
              <div className="relative h-48 bg-gradient-to-br from-blue-800/30 to-purple-800/30 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
              </div>

              {/* Conteúdo */}
              <div className="relative p-6 space-y-4 bg-gray-900/50">
                <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tecnologias */}
                <div className="flex flex-wrap gap-3 pt-2">
                  {project.technologies.map((tech, techIndex) => (
                    <div
                      key={techIndex}
                      className="flex items-center gap-2 px-3 py-1.5 bg-gray-800/50 border border-gray-700 rounded-full text-gray-300 text-sm"
                    >
                      <span className="text-purple-400">{tech.icon}</span>
                      <span>{tech.name}</span>
                    </div>
                  ))}
                </div>

                {/* Botões */}
                <div className="flex gap-4 pt-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${
                      project.demoUrl ? "flex-1" : "w-full"
                    } flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-all duration-300 border border-gray-700 hover:border-purple-500`}
                  >
                    <FaGithub className="w-4 h-4" />
                    <span className="text-sm font-medium">Código</span>
                  </a>

                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-purple-600 hover:bg-purple-500 text-white rounded-lg transition-all duration-300"
                    >
                      <FaPlay className="w-3 h-3" />
                      <span className="text-sm font-medium">Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
