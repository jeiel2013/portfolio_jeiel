# 👋 Olá, eu sou o Jeiel

🌐 *Read this in [English](./README.en.md)*

Bem-vindo ao repositório do meu **portfólio pessoal**! Aqui está o código fonte do meu site, que apresenta quem eu sou, meus serviços como desenvolvedor freelancer e os projetos que já entreguei. 🌐

Você pode ver o resultado final ao vivo em:
👉 [https://jeieldev.vercel.app/](https://jeieldev.vercel.app/)

---

## 📸 Preview

![Preview do portfólio](./public/SiteJeiel.gif)

---

## ✨ Sobre este Portfólio

Este portfólio foi criado para apresentar meu trabalho como **desenvolvedor fullstack freelancer**: os serviços que ofereço, os projetos que já entreguei para clientes reais e uma vitrine técnica dos meus projetos pessoais. O design da interface foi construído com muito cuidado, focando tanto na estética quanto na usabilidade.

Para **a UI (User Interface)**, contei com a ajuda de ferramentas modernas:

- Usei _aura.build_ para acelerar e inspirar a criação da interface visual.
- Utilizei _Claude_ para apoio no design, organização de ideias, refinamento dos layouts e evolução do site de landing page única para um portfólio multi-página.

Essa combinação me ajudou a entregar um site bonito, fluido e responsivo. 🚀

---

## 📄 Páginas

| Rota | Descrição |
| --- | --- |
| `/` | Home — hero, sobre, tecnologias, destaques de projetos e contato |
| `/servicos` | O que ofereço como freelancer e como funciona o processo |
| `/projetos` | Todos os projetos, separados em Projetos para Clientes e Projetos Técnicos & Pessoais |
| `/projetos/:slug` | Case study individual de cada projeto para cliente (desafio, solução e resultado) |
| `/links` | Página estilo "link in bio" com meus principais links |

Rotas não encontradas caem numa página 404 própria, no mesmo estilo visual do site.

---

## 🧠 Tecnologias Utilizadas

Este projeto foi desenvolvido com as seguintes tecnologias principais:

- **React** – biblioteca JavaScript para construir interfaces.
- **React Router** – navegação entre as páginas do site.
- **Vite** – ferramenta de build super rápida para projetos web.
- **Tailwind CSS** – estilos modernos e utilitários para tornar a interface elegante e responsiva.
- **Lucide React / React Icons** – ícones usados em toda a interface.
- **Deploy no Vercel** – para hospedagem rápida e estável do site.

---

## 📁 Estrutura do Repositório

O repositório contém:

- `/src/pages` – as páginas do site (Home, Serviços, Projetos, Case Study, Links, 404).
- `/src/components` – componentes reutilizados entre as páginas (Header, Footer, Background, seções da Home, cards de projeto, etc.).
- `/src/data` – dados centralizados dos projetos (usados tanto na Home quanto na página completa de Projetos e nos Case Studies).
- `/src/utils` – funções utilitárias compartilhadas (ex: ícones dos projetos).
- `/src/config` – configurações centrais, como o e-mail de contato usado nos CTAs.
- `/src/assets` – arquivos estáticos como imagens, iconografia e o PDF do currículo.
- `/public` – arquivos estáticos servidos diretamente.
- Configurações de lint, build e scripts para facilitar desenvolvimento local.
- O README que você está lendo agora 😄

---

## 🚀 Começando

Se você quiser rodar esse projeto localmente:

1. Clone este repositório:

   ```bash
   git clone https://github.com/jeiel2013/portfolio_jeiel
   ```

2. Entre na pasta do projeto:

   ```bash
   cd portfolio_jeiel
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Monte o ambiente de desenvolvimento:

   ```bash
   npm run dev
   ```

5. Abra no navegador:

   ```
   http://localhost:3000
   ```

---

## 🗺️ Roadmap

Coisas que pretendo adicionar ao portfólio:

- [X] Modo Claro/Escuro
- [X] Mudar linguagem
- [ ] Mais projetos detalhados

---

## ⭐ Gostou do meu Portfólio?

Se você curtiu o projeto ou se ele te inspirou de alguma forma, deixe uma estrelinha ⭐ no GitHub. Isso ajuda muito e motiva a continuar melhorando e criando mais coisas legais!

---

## 📬 Contato

Estou disponível para novos projetos freelancer — sites institucionais, sistemas web sob medida e parcerias de longo prazo. Sinta-se à vontade para entrar em contato comigo pelo e-mail disponível no próprio site, na página de Serviços ou no rodapé. 😉
