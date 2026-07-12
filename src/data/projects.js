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
    category: "cliente",
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
  },
  {
    title: "Batista Assessoria",
    category: "cliente",
    description:
      "Plataforma institucional moderna para contabilidade, otimizada para conversão e velocidade.",
    technologies: ["React", "TypeScript", "Shadcnui", "Vite", "TailwindCSS"],
    githubUrl: "https://github.com/jeiel2013/batistaecontabil",
    demoUrl: "https://batistaecontabil.vercel.app/",
    icon: "building-2",
    image: batistaImg,
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
