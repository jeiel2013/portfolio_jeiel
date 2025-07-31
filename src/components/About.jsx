import React from 'react';
import { SiMysql, SiNestjs, SiPrisma } from 'react-icons/si';

function AboutSection() {
  const skills = [
    {
      name: 'Node.js',
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
          <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.570,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.275-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z"/>
        </svg>
      )
    },
    {
      name: 'NestJS',
      icon: <SiNestjs className="w-8 h-8 text-[#E0234E]" />
    },
    {
      name: 'TypeScript',
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
          <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"/>
        </svg>
      )
    },
    {
      name: 'MySQL',
      icon: <SiMysql className="w-8 h-8 text-[#00758F]" />
    },
    {
      name: 'Prisma',
      icon: <SiPrisma className="w-8 h-8 text-[#2D3748]" />
    },
    {
      name: 'JavaScript',
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
          <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/>
        </svg>
      )
    }
  ];

  return (
    <section id='about-me' className="w-full min-h-[80vh] flex items-stretch">
      <div className="w-full flex flex-col lg:flex-row min-h-[80vh]">
        
        {/* Lado esquerdo - Sobre mim (fundo claro) */}
        <div className="w-full lg:w-1/2 bg-gray-50 flex items-center justify-center min-h-screen lg:min-h-full py-12 lg:py-16 px-6 sm:px-8 lg:px-12">
          <div className="max-w-2xl -mt-50">
            <div className="space-y-8">
              <div className="text-center lg:text-left">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                  Sobre 
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 ml-3">
                    Mim
                  </span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto lg:mx-0"></div>
              </div>
              
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  Sou estudante de <strong>Sistemas de Informação</strong> desde 2023, com foco no desenvolvimento backend. 
                  Estudo de forma independente, aprofundando conhecimentos em <strong>TypeScript</strong> e <strong>NestJS</strong>.
                </p>
                
                <p className="text-lg">
                  Meu objetivo é transformar ideias em soluções práticas através do código, sempre valorizando 
                  o trabalho em equipe e a troca de conhecimentos.
                </p>
                
                <p className="text-lg">
                  No tempo livre, gosto de jogar e estar com amigos - atividades que estimulam minha 
                  criatividade e pensamento estratégico.
                </p>
              </div>

              <div className="pt-4">
                <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                  <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                    Desenvolvimento Backend
                  </span>
                  <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                    Trabalho em Equipe
                  </span>
                  <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                    Aprendizado Contínuo
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Lado direito - Skills (fundo escuro) */}
        <div className="w-full lg:w-1/2 bg-gray-900 flex items-center justify-center min-h-screen lg:min-h-full py-12 lg:py-16 px-6 sm:px-8 lg:px-12 relative overflow-hidden">
          {/* Fundo com gradiente */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-800/20 to-purple-900/20"></div>
          
          {/* Partículas decorativas */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 opacity-30 rounded-full animate-pulse"></div>
            <div className="absolute top-40 right-20 w-1 h-1 bg-purple-400 opacity-40 rounded-full animate-pulse delay-300"></div>
            <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-blue-300 opacity-20 rounded-full animate-pulse delay-700"></div>
            <div className="absolute bottom-20 right-1/3 w-1 h-1 bg-purple-300 opacity-50 rounded-full animate-pulse delay-500"></div>
          </div>

          <div className="relative z-10 max-w-2xl w-full -mt-50">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
                Hard 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 ml-3">
                  Skills
                </span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto"></div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:bg-gray-700/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10"
                >
                  {/* Efeito de brilho no hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10 flex flex-col items-center space-y-3">
                    <div className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                      {skill.icon}
                    </div>
                    <h3 className="text-white font-semibold text-sm sm:text-base text-center">
                      {skill.name}
                    </h3>
                  </div>

                  {/* Borda animada */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                  <div className="absolute inset-0.5 bg-gray-800 rounded-2xl -z-10"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;