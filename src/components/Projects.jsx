 
import React, { useRef, useState } from "react";

// Importe suas imagens aqui
import batistaImg from "../assets/images/batistaecontabil.jpg";
import hubImg from "../assets/images/hub.jpg";
import radioImg from "../assets/images/radio.jpg";
import todoImg from "../assets/images/todo.jpg";
import karineImg from "../assets/images/karine.png";
import katherImg from "../assets/images/studiokather.png";

function ProjectsSection() {
  const projects = [
    {
      title: "Studio Kather",
      description:
        "Site institucional desenvolvido para apresentar os serviços do Studio Kather e fortalecer sua presença digital.",
      technologies: ["React", "TailwindCSS", "TypeScript", "Vite"],
      githubUrl: "https://github.com/jeiel2013/studiokather",
      demoUrl: "https://studiokather.com",
      icon: "layout-template",
      image: katherImg,
    },
    {
      title: "Karine Azevedo",
      description:
        "Landing Page para a fotógrafa Karine Azevedo com seus projetos, falando sobre ela e entrar em contato também",
<<<<<<< HEAD
      technologies: ["React", "TailwindCSS", "Vite", "Lucide Icons"],
=======
      technologies: [
        "React",
        "TailwindCSS",
        "TypeScript",
        "Vite",
        "Lucide Icons"
      ],
>>>>>>> 9c9a7cfeda7985f747dd9a58fd5edaa432208835
      githubUrl: "https://github.com/jeiel2013/karine-azevedo",
      demoUrl: "https://karineazevedo.vercel.app/",
      icon: "layout-template",
      image: karineImg,
    },
    {
      title: "Batista Assessoria",
      description:
<<<<<<< HEAD
        "Plataforma institucional moderna para contabilidade, otimizada para conversão e velocidade.",
      technologies: ["React", "Shadcnui", "Vite", "TailwindCSS"],
=======
      "Plataforma institucional moderna para contabilidade, otimizada para conversão e velocidade.",
      technologies: ["React", "TypeScript", "Shadcnui", "Vite", "TailwindCSS"],
>>>>>>> 9c9a7cfeda7985f747dd9a58fd5edaa432208835
      githubUrl: "https://github.com/jeiel2013/batistaecontabil",
      demoUrl: "https://batistaecontabil.vercel.app/",
      icon: "building-2",
      image: batistaImg,
    },
    {
      title: "User Hub",
      description:
        "Sistema robusto de gerenciamento de usuários focado em escalabilidade e segurança de dados.",
      technologies: [
        "NestJS",
        "Prisma",
        "PostgreSQL",
        "Node.js",
        "React",
        "Vite",
      ],
      githubUrl: "https://github.com/jeiel2013/User-Hub/tree/main",
      demoUrl: null,
      icon: "layout-template",
      image: hubImg,
    },
    {
      title: "Coroaci Rádio FM",
      description:
        "Aplicação de rádio web com streaming ao vivo e integração em tempo real.",
      technologies: ["React", "TailwindCSS", "Vite", "JavaScript"],
      githubUrl: "https://github.com/jeiel2013/batistaecontabil",
      demoUrl: "https://coroaciradiofm.vercel.app/",
      icon: "radio",
      image: radioImg,
      featured: true,
    },
    {
      title: "ToDo List",
      description:
        "Aplicação simples de lista de tarefas feita para prática e aprendizado.",
      technologies: [
        "React",
        "TailwindCSS",
        "Shadcnui",
        "PostgreSQL",
        "NestJS",
        "Prisma",
      ],
      githubUrl: "https://github.com/jeiel2013/frontend-todo",
      demoUrl: "https://frontend-todo-x6f1.onrender.com/login",
      icon: "radio",
      image: todoImg,
      featured: true,
    },
  ];

  const carouselRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const [dragging, setDragging] = useState(false);

  const onMouseDown = (e) => {
    isDragging.current = true;
    setDragging(true);
    startX.current = e.pageX - carouselRef.current.offsetLeft;
    scrollLeft.current = carouselRef.current.scrollLeft;
  };

  const onMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX.current) * 1;
    carouselRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const onMouseUp = () => {
    isDragging.current = false;
    setDragging(false);
  };

  const onTouchStart = (e) => {
    startX.current = e.touches[0].pageX - carouselRef.current.offsetLeft;
    scrollLeft.current = carouselRef.current.scrollLeft;
  };

  const onTouchMove = (e) => {
    const x = e.touches[0].pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX.current) * 1;
    carouselRef.current.scrollLeft = scrollLeft.current - walk;
  };

  return (
    <section
      id="projects"
      className="py-24 border-t border-white/[0.08] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-semibold tracking-tight flex items-center gap-3">
            <span className="text-[#00d9a3] text-xl">03.</span> Projetos
          </h2>
          <div className="flex gap-2 text-[#a1a1aa]">
            <span className="text-xs font-mono border border-white/[0.08] px-2 py-1 rounded select-none">
              ← ARRASTE →
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto">
        <div
          ref={carouselRef}
          className={`flex overflow-x-auto snap-x snap-mandatory gap-5 pb-6 pl-6 pr-6 select-none ${
            dragging ? "cursor-grabbing" : "cursor-grab"
          }`}
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            scrollBehavior: "smooth",
          }}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} dragging={dragging} />
          ))}
        </div>
      </div>

      <style>{`
        div::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  );
}

function ProjectCard({ project, dragging }) {
  const getIcon = (iconName) => {
    const icons = {
      "layout-template": (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3zM14 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1h-4a1 1 0 01-1-1v-3z"
          />
        </svg>
      ),
      "building-2": (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
      radio: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.348 14.651a3.75 3.75 0 010-5.303m5.304 0a3.75 3.75 0 010 5.303m-7.425 2.122a6.75 6.75 0 010-9.546m9.546 0a6.75 6.75 0 010 9.546M5.106 18.894c-3.808-3.808-3.808-9.98 0-13.789m13.788 0c3.808 3.808 3.808 9.981 0 13.79M12 12h.008v.007H12V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
          />
        </svg>
      ),
    };
    return icons[iconName] || icons["layout-template"];
  };

  return (
    <article className="snap-center shrink-0 w-[300px] md:w-[340px] bg-[#121212] rounded-xl border border-white/[0.08] overflow-hidden flex flex-col group hover:border-[#00d9a3]/50 transition-all duration-300">
      <div className="h-40 bg-gradient-to-br from-gray-800 to-black relative overflow-hidden group-hover:opacity-90 transition-opacity">
        {project.image ? (
          <>
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
              draggable={false}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent" />
          </>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-[#a1a1aa]/20 group-hover:text-[#00d9a3]/20 transition-colors">
            {getIcon(project.icon)}
          </div>
        )}
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold text-white group-hover:text-[#00d9a3] transition-colors">
            {project.title}
          </h3>
        </div>

        <p className="text-sm text-[#a1a1aa] mb-6 flex-grow">
          {project.description}
        </p>

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
          {project.demoUrl ? (
            <>
              <a
                href={dragging ? undefined : project.demoUrl}
                onClick={(e) => dragging && e.preventDefault()}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium flex items-center gap-1 text-[#00d9a3] hover:text-[#00b386] transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {project.featured ? "Visitar Site" : "Deploy"}
              </a>
              <a
                href={dragging ? undefined : project.githubUrl}
                onClick={(e) => dragging && e.preventDefault()}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium flex items-center gap-1 hover:text-white text-[#a1a1aa] transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                Code
              </a>
            </>
          ) : (
            <a
              href={dragging ? undefined : project.githubUrl}
              onClick={(e) => dragging && e.preventDefault()}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium flex items-center gap-1 hover:text-white text-[#a1a1aa] transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              Code
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectsSection;
