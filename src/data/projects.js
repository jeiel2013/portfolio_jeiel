import batistaImg from "../assets/images/batistaecontabil.jpg";
import hubImg from "../assets/images/hub.jpg";
import radioImg from "../assets/images/radio.jpg";
import todoImg from "../assets/images/todo.jpg";
import karineImg from "../assets/images/karine.png";
import katherImg from "../assets/images/studiokather.png";

// Projetos exibidos em destaque na Home (trabalhos para clientes reais)
export const FEATURED_TITLES = ["Studio Kather", "Karine Azevedo", "Batista Assessoria"];

// category: "cliente" (trabalho remunerado/entregue) ou "pessoal" (prática/técnico)
export const projects = [
  {
    title: "Studio Kather",
    category: "cliente",
    slug: "studio-kather",
    description:
      "Site institucional desenvolvido para apresentar os serviços do Studio Kather e fortalecer sua presença digital.",
    technologies: ["React", "TailwindCSS", "TypeScript", "Vite"],
    githubUrl: "https://github.com/jeiel2013/studiokather",
    demoUrl: "https://studiokather.com",
    icon: "layout-template",
    image: katherImg,
    caseStudy: {
      challenge:
        "O Studio Kather precisava de um site institucional profissional para apresentar seus serviços e fortalecer a presença digital da marca.",
      solution:
        "Desenvolvi um site institucional moderno com foco em performance e identidade visual, usando React, TypeScript e TailwindCSS.",
      result:
        "Site no ar com carregamento rápido e visual alinhado à marca, servindo como cartão de visitas digital do estúdio.",
    },
  },
  {
    title: "Karine Azevedo",
    category: "cliente",
    slug: "karine-azevedo",
    description:
      "Landing Page para a fotógrafa Karine Azevedo com seus projetos, falando sobre ela e entrar em contato também",
    technologies: [
      "React",
      "TailwindCSS",
      "TypeScript",
      "Vite",
      "Lucide Icons",
    ],
    githubUrl: "https://github.com/jeiel2013/karine-azevedo",
    demoUrl: "https://karineazevedo.vercel.app/",
    icon: "layout-template",
    image: karineImg,
    caseStudy: {
      challenge:
        "A fotógrafa Karine Azevedo precisava de uma landing page para apresentar seu portfólio e facilitar o contato com clientes.",
      solution:
        "Criei uma landing page com galeria de projetos, seção sobre e contato direto, priorizando a experiência visual das fotos.",
      result:
        "Página no ar reunindo portfólio e contato em um só lugar, com visual que valoriza o trabalho fotográfico.",
    },
  },
  {
    title: "Batista Assessoria",
    category: "cliente",
    slug: "batista-assessoria",
    description:
      "Plataforma institucional moderna para contabilidade, otimizada para conversão e velocidade.",
    technologies: ["React", "TypeScript", "Shadcnui", "Vite", "TailwindCSS"],
    githubUrl: "https://github.com/jeiel2013/batistaecontabil",
    demoUrl: "https://batistaecontabil.vercel.app/",
    icon: "building-2",
    image: batistaImg,
    caseStudy: {
      challenge:
        "A Batista Assessoria Contábil precisava de uma plataforma institucional moderna, rápida e otimizada para conversão de visitantes.",
      solution:
        "Construí o site com React, TypeScript e Shadcn/ui, priorizando velocidade de carregamento e clareza na apresentação dos serviços contábeis.",
      result:
        "Plataforma no ar com foco em performance e em transformar visitantes em contatos qualificados.",
    },
  },
  {
    title: "User Hub",
    category: "pessoal",
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
    category: "pessoal",
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
    category: "pessoal",
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
