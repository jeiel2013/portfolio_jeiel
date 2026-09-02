import {
  ArrowRight, BarChart3, BriefcaseBusiness, Building2, Check, ChevronRight,
  Clock3, Globe2, HeartPulse, LayoutDashboard, MessageCircle, ShieldCheck,
  Store, Target, UsersRound, Zap,
} from "lucide-react";
import { Link } from "react-router-dom";
import Background from "../components/Background";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { getWhatsAppLink } from "../config/whatsapp";
import { useLanguage } from "../context/LanguageContext";

const SEGMENT_ICONS = [Building2, HeartPulse, BriefcaseBusiness, Store];
const PROBLEM_ICONS = [Globe2, Target, Clock3, ShieldCheck];
const SOLUTION_ICONS = [Globe2, LayoutDashboard, BarChart3];
const PREVIEW_ICONS = [UsersRound, Zap, Target, ShieldCheck];
const BENEFIT_ICONS = [MessageCircle, Zap, ShieldCheck, UsersRound];

function Empresas() {
  const { t, language } = useLanguage();
  const content = t.leadPage;
  const whatsappLink = getWhatsAppLink(
    language === "pt"
      ? "Olá, Jeiel! Quero entender qual solução digital faz mais sentido para o meu negócio."
      : "Hi, Jeiel! I would like to understand which digital solution is the best fit for my business."
  );

  return (
    <div className="relative min-h-screen overflow-hidden bg-[var(--bg-page)] text-[var(--text-primary)] antialiased selection:bg-[var(--accent)] selection:text-[var(--accent-on)]">
      <Background />
      <div className="relative z-10">
        <Header />
        <main>
          <section className="relative overflow-hidden px-6 pb-20 pt-32 md:pb-28 md:pt-40">
            <div className="pointer-events-none absolute left-1/2 top-1/3 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-[var(--accent-10)] blur-[120px]" />
            <div className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.12fr_0.88fr] lg:gap-20">
              <div>
                <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[var(--accent-20)] bg-[var(--accent-10)] px-3 py-1.5 text-xs font-semibold tracking-wide text-[var(--accent)]">
                  {content.hero.badge}
                </div>
                <h1 className="max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tighter md:text-6xl lg:text-7xl">
                  {content.hero.title}{" "}
                  <span className="text-[var(--accent)]">{content.hero.highlight}</span>
                </h1>
                <p className="mt-7 max-w-2xl text-base leading-7 text-[var(--text-secondary)] md:text-lg md:leading-8">
                  {content.hero.description}
                </p>
                <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <CtaLink href={whatsappLink}>
                    <MessageCircle className="h-4 w-4" />
                    {content.hero.primaryCta}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </CtaLink>
                  <a href="#solutions" className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--border-subtle)] bg-[var(--surface-muted)] px-7 py-3.5 text-sm font-medium transition-colors hover:bg-[var(--surface-muted-hover)]">
                    {content.hero.secondaryCta} <ChevronRight className="h-4 w-4" />
                  </a>
                </div>
                <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-xs text-[var(--text-secondary)]">
                  {content.hero.trust.map((item) => (
                    <span key={item} className="flex items-center gap-2">
                      <Check className="h-3.5 w-3.5 text-[var(--accent)]" /> {item}
                    </span>
                  ))}
                </div>
              </div>
              <BusinessPreview content={content.preview} />
            </div>
          </section>

          <section className="border-y border-[var(--border-subtle)] bg-[var(--bg-card-alt)] px-6 py-8">
            <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
              <p className="max-w-md text-center text-base font-semibold leading-snug sm:text-lg md:text-left">{content.segments.title}</p>
              <div className="grid w-full grid-cols-2 gap-3 md:w-auto md:grid-cols-4">
                {content.segments.items.map((item, index) => {
                  const Icon = SEGMENT_ICONS[index];
                  return (
                    <div key={item} className="flex min-h-14 items-center justify-center gap-3 rounded-xl border border-[var(--border-subtle)] bg-[var(--glass-bg)] px-5 py-4 text-sm font-medium text-[var(--text-secondary)]">
                      <Icon className="h-5 w-5 shrink-0 text-[var(--accent)]" /> {item}
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          <CardSection content={content.problems} number="01." icons={PROBLEM_ICONS} />

          <section id="solutions" className="border-b border-[var(--border-subtle)] bg-[var(--bg-card-alt)] px-6 py-24 md:py-32">
            <div className="mx-auto max-w-6xl">
              <SectionHeading number="02." content={content.solutions} />
              <div className="mt-12 grid gap-6 lg:grid-cols-3">
                {content.solutions.items.map((item, index) => {
                  const Icon = SOLUTION_ICONS[index];
                  return (
                    <article key={item.title} className="flex h-full flex-col rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-card)] p-7 transition-colors hover:border-[var(--accent-30)]">
                      <div className="mb-7 flex items-start justify-between">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--accent-10)] text-[var(--accent)]"><Icon className="h-6 w-6" /></div>
                        <span className="font-mono text-xs text-[var(--text-secondary-50)]">0{index + 1}</span>
                      </div>
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                      <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">{item.description}</p>
                      <ul className="mt-6 space-y-3 border-t border-[var(--border-subtle)] pt-6">
                        {item.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2.5 text-xs text-[var(--text-secondary)]">
                            <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--accent)]" /> {feature}
                          </li>
                        ))}
                      </ul>
                    </article>
                  );
                })}
              </div>
            </div>
          </section>

          <section className="border-b border-[var(--border-subtle)] px-6 py-24 md:py-32">
            <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
              <div>
                <SectionHeading number="03." content={content.process} />
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)] hover:text-[var(--accent-hover)]">
                  {content.process.cta} <ArrowRight className="h-4 w-4" />
                </a>
              </div>
              <ol className="space-y-4">
                {content.process.steps.map((step, index) => (
                  <li key={step.title} className="flex gap-4 rounded-xl border border-[var(--border-subtle)] bg-[var(--glass-bg)] p-5 backdrop-blur-[10px] transition-colors hover:border-[var(--accent-30)] sm:gap-5 sm:p-6">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--accent-30)] bg-[var(--accent-10)] font-mono text-xs text-[var(--accent)]">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <div>
                      <h3 className="text-sm font-medium sm:text-base">{step.title}</h3>
                      <p className="mt-2 text-xs leading-5 text-[var(--text-secondary)] sm:text-sm sm:leading-6">{step.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          <section className="border-b border-[var(--border-subtle)] bg-[var(--bg-card-alt)] px-6 py-24 md:py-32">
            <div className="mx-auto max-w-5xl">
              <SectionHeading number="04." content={content.why} centered />
              <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-[var(--border-subtle)] bg-[var(--border-subtle)] sm:grid-cols-2 lg:grid-cols-4">
                {content.why.items.map((item, index) => {
                  const Icon = BENEFIT_ICONS[index];
                  return (
                    <div key={item.title} className="bg-[var(--bg-card)] p-6 text-center">
                      <Icon className="mx-auto h-6 w-6 text-[var(--accent)]" />
                      <h3 className="mt-4 text-base font-medium">{item.title}</h3>
                      <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">{item.description}</p>
                    </div>
                  );
                })}
              </div>
              <div className="mt-10 text-center">
                <Link to="/projetos" className="inline-flex items-center gap-2 rounded-full border border-[var(--border-subtle)] bg-[var(--surface-muted)] px-6 py-3 text-sm font-medium hover:bg-[var(--surface-muted-hover)]">
                  {content.why.projectsCta} <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </section>

          <section className="border-b border-[var(--border-subtle)] px-6 py-24 md:py-32">
            <div className="mx-auto max-w-3xl">
              <SectionHeading number="05." content={content.faq} />
              <div className="mt-10 space-y-3">
                {content.faq.items.map((item) => (
                  <details key={item.question} className="group rounded-xl border border-[var(--border-subtle)] bg-[var(--glass-bg)] px-5 py-4 open:border-[var(--accent-30)] open:bg-[var(--surface-muted)]">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-medium marker:hidden">
                      {item.question}
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[var(--border-subtle)] text-[var(--accent)] transition-transform group-open:rotate-45">+</span>
                    </summary>
                    <p className="pr-10 pt-4 text-sm leading-6 text-[var(--text-secondary)]">{item.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>

          <section className="relative overflow-hidden px-6 py-24 md:py-32">
            <div className="pointer-events-none absolute bottom-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-[var(--accent-10)] blur-[100px]" />
            <div className="relative mx-auto max-w-3xl text-center">
              <span className="font-mono text-xs tracking-[0.2em] text-[var(--accent)]">{content.finalCta.eyebrow}</span>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">{content.finalCta.title}</h2>
              <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[var(--text-secondary)] md:text-base">{content.finalCta.description}</p>
              <div className="mt-9">
                <CtaLink href={whatsappLink}>
                  <MessageCircle className="h-5 w-5" /> {content.finalCta.button}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </CtaLink>
              </div>
              <p className="mt-4 text-xs text-[var(--text-secondary-50)]">{content.finalCta.note}</p>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}

function BusinessPreview({ content }) {
  return (
    <div className="relative mx-auto w-full max-w-lg lg:mx-0">
      <div className="absolute -inset-4 rounded-[2rem] bg-[var(--accent-10)] blur-3xl" />
      <div className="glass-panel relative overflow-hidden rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-card)] p-5 shadow-2xl md:p-7">
        <div className="mb-7 flex items-center justify-between border-b border-[var(--border-subtle)] pb-5">
          <div><p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--text-secondary)]">{content.eyebrow}</p><p className="mt-1 text-sm font-medium">{content.title}</p></div>
          <span className="flex items-center gap-1.5 rounded-full bg-[var(--accent-10)] px-2.5 py-1 font-mono text-[10px] text-[var(--accent)]"><span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--accent)]" />{content.status}</span>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {content.metrics.map((metric, index) => {
            const Icon = PREVIEW_ICONS[index];
            return <div key={metric.label} className="rounded-xl border border-[var(--border-subtle)] bg-[var(--surface-muted)] p-4"><Icon className="mb-5 h-5 w-5 text-[var(--accent)]" /><p className="text-sm font-medium">{metric.value}</p><p className="mt-1 text-[11px] leading-4 text-[var(--text-secondary)]">{metric.label}</p></div>;
          })}
        </div>
        <div className="mt-3 rounded-xl border border-[var(--border-subtle)] bg-[var(--surface-muted)] p-4">
          <div className="mb-4 flex items-center justify-between"><span className="text-xs font-medium">{content.flowTitle}</span><BarChart3 className="h-4 w-4 text-[var(--accent)]" /></div>
          <div className="grid grid-cols-3 gap-2">
            {content.flow.map((item, index) => <div key={item} className="text-center"><div className="mx-auto mb-2 flex h-7 w-7 items-center justify-center rounded-full border border-[var(--accent-30)] bg-[var(--accent-10)] font-mono text-[10px] text-[var(--accent)]">{String(index + 1).padStart(2, "0")}</div><p className="text-[10px] text-[var(--text-secondary)]">{item}</p></div>)}
          </div>
        </div>
      </div>
    </div>
  );
}

function CardSection({ content, number, icons }) {
  return (
    <section className="border-b border-[var(--border-subtle)] px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading number={number} content={content} />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {content.items.map((item, index) => {
            const Icon = icons[index];
            return <article key={item.title} className="rounded-xl border border-[var(--border-subtle)] bg-[var(--glass-bg)] p-6 backdrop-blur-[10px] transition-all hover:-translate-y-1 hover:border-[var(--accent-30)]"><Icon className="mb-5 h-6 w-6 text-[var(--accent)]" /><h3 className="text-base font-medium">{item.title}</h3><p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">{item.description}</p></article>;
          })}
        </div>
      </div>
    </section>
  );
}

function SectionHeading({ number, content, centered = false }) {
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-2xl"}>
      <span className={centered ? "mb-4 flex items-center justify-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent)]" : "mb-4 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent)]"}>
        <span>{number}</span> {content.eyebrow}
      </span>
      <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{content.title}</h2>
      <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)] md:text-base">{content.description}</p>
    </div>
  );
}

function CtaLink({ href, children }) {
  return <a href={href} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center justify-center gap-2 rounded-full bg-[var(--accent)] px-7 py-3.5 text-sm font-semibold text-[var(--accent-on)] shadow-lg shadow-[var(--accent-20)] transition-all hover:-translate-y-0.5 hover:bg-[var(--accent-hover)]">{children}</a>;
}

export default Empresas;
