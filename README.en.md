# 👋 Hi, I'm Jeiel

🌐 *Leia isso em [Português](./README.md)*

Welcome to the repository of my **personal portfolio**! This is the source code for my site, showcasing who I am, the services I offer as a freelance developer, and the projects I've delivered. 🌐

You can see the live result at:
👉 [https://jeieldev.vercel.app/](https://jeieldev.vercel.app/)

---

## 📸 Preview

![Portfolio preview](./public/SiteJeiel.gif)

---

## ✨ About this Portfolio

This portfolio was built to showcase my work as a **freelance fullstack developer**: the services I offer, the projects I've delivered for real clients, and a technical showcase of my personal projects. The interface was designed with careful attention to both aesthetics and usability.

For the **UI**, I used a couple of modern tools to help along the way:

- _aura.build_ to speed up and inspire the visual interface creation.
- _Claude_ for design support, organizing ideas, refining layouts, and evolving the site from a single landing page into a multi-page portfolio.

This combination helped me deliver a beautiful, smooth, and responsive site. 🚀

---

## 📄 Pages

| Route | Description |
| --- | --- |
| `/` | Home — hero, about, tech stack, featured projects and contact |
| `/servicos` | What I offer as a freelancer and how the process works |
| `/projetos` | All projects, split into Client Projects and Technical & Personal Projects |
| `/projetos/:slug` | Individual case study for each client project (challenge, solution and result) |
| `/links` | "Link in bio" style page with my main links |

Unknown routes fall back to a custom 404 page, matching the site's visual style.

---

## 🧠 Tech Stack

This project was built with the following main technologies:

- **React** – JavaScript library for building interfaces.
- **React Router** – navigation between the site's pages.
- **Vite** – super fast build tool for web projects.
- **Tailwind CSS** – modern utility styles for an elegant, responsive interface.
- **Lucide React / React Icons** – icons used throughout the interface.
- **Deploy on Vercel** – fast and reliable hosting.

---

## 📁 Repository Structure

The repository contains:

- `/src/pages` – the site's pages (Home, Services, Projects, Case Study, Links, 404).
- `/src/components` – components reused across pages (Header, Footer, Background, Home sections, project cards, etc.).
- `/src/data` – centralized project data (used by the Home, the full Projects page and the Case Studies).
- `/src/utils` – shared utility functions (e.g. project icons).
- `/src/config` – central configuration, such as the contact e-mail used in CTAs.
- `/src/assets` – static files like images, icons and the resume PDF.
- `/public` – static files served directly.
- Lint, build and script configuration for local development.
- The README you're reading right now 😄

---

## 🗺️ Roadmap

Things I plan to add to the portfolio:

- [ ] Mode Light/Dark
- [X] Change language
- [ ] More detailed projects

---

## 🚀 Getting Started

If you want to run this project locally:

1. Clone this repository:

   ```bash
   git clone https://github.com/jeiel2013/portfolio_jeiel
   ```

2. Enter the project folder:

   ```bash
   cd portfolio_jeiel
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open in your browser:

   ```
   http://localhost:3000
   ```

---

## ⭐ Liked my Portfolio?

If you enjoyed the project or it inspired you in any way, leave a ⭐ star on GitHub. It helps a lot and motivates me to keep improving and building cool things!

---

## 📬 Contact

I'm available for new freelance projects — institutional websites, custom web systems, and long-term partnerships. Feel free to reach out via the e-mail available on the site itself, on the Services page, or in the footer. 😉
