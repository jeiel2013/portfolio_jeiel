import batistaImg from "../assets/images/batistaecontabil.jpg";
import hubImg from "../assets/images/hub.jpg";
import radioImg from "../assets/images/radio.jpg";
import todoImg from "../assets/images/todo.jpg";
import karineImg from "../assets/images/karine.png";
import katherImg from "../assets/images/studiokather.png";

// Projetos exibidos em destaque na Home (trabalhos para clientes reais)
export const FEATURED_TITLES = ["Studio Kather", "Karine Azevedo", "Batista Assessoria"];

// category: "cliente" (trabalho remunerado/entregue) ou "pessoal" (prática/técnico)
// description e caseStudy são bilíngues ({ pt, en) }); título e tecnologias são iguais nos dois idiomas.
export const projects = [
  {
    title: "Studio Kather",
    category: "cliente",
    slug: "studio-kather",
    description: {
      pt: "Site institucional desenvolvido para apresentar os serviços do Studio Kather e fortalecer sua presença digital.",
      en: "Institutional website built to showcase Studio Kather's services and strengthen its digital presence.",
    },
    technologies: ["React", "TailwindCSS", "TypeScript", "Vite"],
    githubUrl: "https://github.com/jeiel2013/studiokather",
    demoUrl: "https://studiokather.com",
    icon: "layout-template",
    image: katherImg,
    caseStudy: {
      challenge: {
        pt: "O Studio Kather precisava de um site institucional profissional para apresentar seus serviços e fortalecer a presença digital da marca.",
        en: "Studio Kather needed a professional institutional website to showcase its services and strengthen the brand's digital presence.",
      },
      solution: {
        pt: "Desenvolvi um site institucional moderno com foco em performance e identidade visual, usando React, TypeScript e TailwindCSS.",
        en: "I built a modern institutional website focused on performance and visual identity, using React, TypeScript and TailwindCSS.",
      },
      result: {
        pt: "Site no ar com carregamento rápido e visual alinhado à marca, servindo como cartão de visitas digital do estúdio.",
        en: "The site went live with fast loading and visuals aligned with the brand, serving as the studio's digital business card.",
      },
    },
  },
  {
    title: "Karine Azevedo",
    category: "cliente",
    slug: "karine-azevedo",
    description: {
      pt: "Landing Page para a fotógrafa Karine Azevedo com seus projetos, falando sobre ela e entrar em contato também",
      en: "Landing page for photographer Karine Azevedo featuring her work, an about section and a way to get in touch.",
    },
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
      challenge: {
        pt: "A fotógrafa Karine Azevedo precisava de uma landing page para apresentar seu portfólio e facilitar o contato com clientes.",
        en: "Photographer Karine Azevedo needed a landing page to showcase her portfolio and make it easier for clients to get in touch.",
      },
      solution: {
        pt: "Criei uma landing page com galeria de projetos, seção sobre e contato direto, priorizando a experiência visual das fotos.",
        en: "I created a landing page with a project gallery, an about section and direct contact, prioritizing the visual experience of the photos.",
      },
      result: {
        pt: "Página no ar reunindo portfólio e contato em um só lugar, com visual que valoriza o trabalho fotográfico.",
        en: "The page went live bringing together portfolio and contact in one place, with visuals that highlight the photography work.",
      },
    },
  },
  {
    title: "Batista Assessoria",
    category: "cliente",
    slug: "batista-assessoria",
    description: {
      pt: "Plataforma institucional moderna para contabilidade, otimizada para conversão e velocidade.",
      en: "Modern institutional platform for an accounting firm, optimized for conversion and speed.",
    },
    technologies: ["React", "TypeScript", "Shadcnui", "Vite", "TailwindCSS"],
    githubUrl: "https://github.com/jeiel2013/batistaecontabil",
    demoUrl: "https://batistaecontabil.vercel.app/",
    icon: "building-2",
    image: batistaImg,
    caseStudy: {
      challenge: {
        pt: "A Batista Assessoria Contábil precisava de uma plataforma institucional moderna, rápida e otimizada para conversão de visitantes.",
        en: "Batista Assessoria Contábil needed a modern, fast institutional platform optimized for converting visitors.",
      },
      solution: {
        pt: "Construí o site com React, TypeScript e Shadcn/ui, priorizando velocidade de carregamento e clareza na apresentação dos serviços contábeis.",
        en: "I built the site with React, TypeScript and Shadcn/ui, prioritizing loading speed and clarity in presenting the accounting services.",
      },
      result: {
        pt: "Plataforma no ar com foco em performance e em transformar visitantes em contatos qualificados.",
        en: "The platform went live focused on performance and turning visitors into qualified leads.",
      },
    },
  },
  {
    title: "User Hub",
    category: "pessoal",
    description: {
      pt: "Sistema robusto de gerenciamento de usuários focado em escalabilidade e segurança de dados.",
      en: "Robust user management system focused on scalability and data security.",
    },
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
    description: {
      pt: "Aplicação de rádio web com streaming ao vivo e integração em tempo real.",
      en: "Web radio application with live streaming and real-time integration.",
    },
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
    description: {
      pt: "Aplicação simples de lista de tarefas feita para prática e aprendizado.",
      en: "Simple to-do list app built for practice and learning.",
    },
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
