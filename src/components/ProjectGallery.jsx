import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function ProjectGallery({ project, language, labels }) {
  const sectionRef = useRef(null);
  const viewportRef = useRef(null);
  const trackRef = useRef(null);
  const progressRef = useRef(null);
  const scrollTriggerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const markerInset = `${50 / project.gallery.length}%`;

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReducedMotion(media.matches);
    updatePreference();
    media.addEventListener("change", updatePreference);
    return () => media.removeEventListener("change", updatePreference);
  }, []);

  useGSAP(
    () => {
      if (reducedMotion || project.gallery.length < 2) return;

      const track = trackRef.current;
      const viewport = viewportRef.current;
      let currentIndex = 0;

      const tween = gsap.to(track, {
        x: () => -(track.scrollWidth - viewport.clientWidth),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top+=80",
          end: () => `+=${Math.max(viewport.clientWidth * 1.8, track.scrollWidth - viewport.clientWidth)}`,
          scrub: 0.75,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            gsap.set(progressRef.current, { scaleX: self.progress });
            const nextIndex = Math.round(self.progress * (project.gallery.length - 1));
            if (nextIndex !== currentIndex) {
              currentIndex = nextIndex;
              setActiveIndex(nextIndex);
            }
          },
        },
      });

      scrollTriggerRef.current = tween.scrollTrigger;
      return () => {
        scrollTriggerRef.current = null;
      };
    },
    {
      scope: sectionRef,
      dependencies: [project.slug, reducedMotion],
      revertOnUpdate: true,
    },
  );

  const goToSlide = (index) => {
    const trigger = scrollTriggerRef.current;
    if (!trigger || reducedMotion) return;

    const progress = index / (project.gallery.length - 1);
    window.scrollTo({
      top: trigger.start + (trigger.end - trigger.start) * progress,
      behavior: "smooth",
    });
  };

  return (
    <section ref={sectionRef} className="px-6 py-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="font-mono text-xs tracking-[0.18em] text-[var(--accent)]">
              {labels.galleryEyebrow}
            </span>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">
              {labels.galleryTitle}
            </h2>
          </div>
          {!reducedMotion && (
            <p className="max-w-sm text-sm text-[var(--text-secondary)] sm:text-right">
              {labels.galleryHint}
            </p>
          )}
        </div>

        <div
          ref={viewportRef}
          className={reducedMotion ? "overflow-visible" : "overflow-hidden"}
        >
          <div
            ref={trackRef}
            className={reducedMotion ? "grid gap-5" : "flex gap-5 will-change-transform"}
          >
            {project.gallery.map((item, index) => (
              <figure
                key={item.image}
                className={`overflow-hidden rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-card)] shadow-2xl shadow-black/10 ${
                  reducedMotion ? "w-full" : "w-full shrink-0"
                }`}
              >
                <img
                  src={item.image}
                  alt={item.alt[language]}
                  className="aspect-[16/10] w-full object-cover object-top md:aspect-video"
                  loading={index === 0 ? "eager" : "lazy"}
                  decoding="async"
                />
              </figure>
            ))}
          </div>
        </div>

        <div className="relative mx-auto mt-7 max-w-xl px-3">
          <div
            className="absolute top-4 h-px bg-[var(--border-subtle)]"
            style={{ left: markerInset, right: markerInset }}
          />
          <div
            ref={progressRef}
            className="absolute top-4 h-px origin-left bg-[var(--accent)]"
            style={{ left: markerInset, right: markerInset, transform: "scaleX(0)" }}
          />
          <div
            className="relative grid"
            style={{ gridTemplateColumns: `repeat(${project.gallery.length}, minmax(0, 1fr))` }}
          >
            {project.gallery.map((item, index) => (
              <button
                key={item.image}
                type="button"
                onClick={() => goToSlide(index)}
                aria-label={`${labels.galleryImage} ${index + 1}`}
                aria-current={activeIndex === index ? "step" : undefined}
                className="group flex flex-col items-center gap-2"
              >
                <span
                  className={`flex h-8 w-8 items-center justify-center rounded-full border font-mono text-xs transition-colors ${
                    activeIndex === index
                      ? "border-[var(--accent)] bg-[var(--accent)] text-[var(--accent-on)]"
                      : "border-[var(--border-subtle)] bg-[var(--bg-card)] text-[var(--text-secondary)] group-hover:border-[var(--accent-50)]"
                  }`}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
              </button>
            ))}
          </div>
        </div>

        <p className="sr-only" aria-live="polite">
          {labels.galleryImage} {activeIndex + 1} {labels.galleryOf} {project.gallery.length}
        </p>
      </div>
    </section>
  );
}

export default ProjectGallery;
