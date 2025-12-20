import {
  Github,
  Linkedin,
  Mail,
  Globe,
  FileText,
  Twitter,
  Instagram,
} from "lucide-react";

import cv from "../assets/pdf/CurrículoJeielAlves.pdf";

const Links = () => {
  // Seus links - customize aqui
  const links = [
    {
      title: "Portfolio",
      url: "/",
      icon: <Globe className="w-5 h-5" />,
      description: "Veja meus projetos e trabalhos",
    },
    {
      title: "GitHub",
      url: "https://github.com/jeiel2013",
      icon: <Github className="w-5 h-5" />,
      description: "Meus repositórios de código",
    },
    {
      title: "LinkedIn",
      url: "https://linkedin.com/in/jeiel2013",
      icon: <Linkedin className="w-5 h-5" />,
      description: "Conecte-se comigo profissionalmente",
    },
    {
      title: "Email",
      url: "mailto:contatojeiel2013@gmail.com",
      icon: <Mail className="w-5 h-5" />,
      description: "Entre em contato diretamente",
    },
    {
      title: "Currículo",
      url: cv,
      icon: <FileText className="w-5 h-5" />,
      description: "Baixe meu CV completo",
    },
    {
      title: "Instagram",
      url: "https://instagram.com/jeiel2013",
      icon: <Instagram className="w-5 h-5" />,
      description: "Acompanhe meu dia a dia",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header com foto e informações */}
        <div className="text-center mb-12">
          <div className="mb-6 flex justify-center">
            <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
              <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center text-4xl font-bold text-white">
                <img
                  src="https://github.com/jeiel2013.png"
                  alt="Jeiel Alves"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>
          </div>

          <h1 className="text-4xl font-bold text-white mb-3">Jeiel Alves</h1>

          <p className="text-gray-400 text-lg mb-2">Desenvolvedor Full Stack</p>

          <p className="text-gray-500 max-w-md mx-auto">
            Todos os meus links importantes em um só lugar
          </p>
        </div>

        {/* Grid de links */}
        <div className="space-y-4">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target={link.url.startsWith("http") ? "_blank" : "_self"}
              rel={link.url.startsWith("http") ? "noopener noreferrer" : ""}
              className="block"
            >
              <div className="bg-gray-800/50 border border-gray-700 rounded-lg hover:bg-gray-800 hover:border-gray-600 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10 backdrop-blur-sm">
                <div className="p-6 flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white">
                    {link.icon}
                  </div>

                  <div className="flex-grow text-left">
                    <h3 className="text-white font-semibold text-lg mb-1">
                      {link.title}
                    </h3>
                    <p className="text-gray-400 text-sm">{link.description}</p>
                  </div>

                  <div className="flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-gray-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            © 2025 Jeiel Alves. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Links;
