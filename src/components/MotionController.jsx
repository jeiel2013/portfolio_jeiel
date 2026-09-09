import { useRef } from "react";
import { useLocation } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function MotionController({ children }) {
  const rootRef = useRef(null);
  const { pathname } = useLocation();

  useGSAP(
    () => {
      const root = rootRef.current;
      const media = gsap.matchMedia();

      media.add(
        {
          reduceMotion: "(prefers-reduced-motion: reduce)",
          desktop: "(min-width: 768px)",
          mobile: "(max-width: 767px)",
        },
        ({ conditions }) => {
          if (conditions.reduceMotion) return;

          const main = root.querySelector("main");
          const heroItems = gsap.utils.toArray("[data-hero-item]", root);

          if (main) {
            gsap.fromTo(main, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.3, ease: "power1.out" });
          }

          if (heroItems.length) {
            gsap.fromTo(
              heroItems,
              { autoAlpha: 0, y: conditions.desktop ? 24 : 16 },
              { autoAlpha: 1, y: 0, duration: 0.7, stagger: 0.09, ease: "power3.out", delay: 0.08 },
            );
          }

          gsap.utils.toArray("[data-reveal]", root).forEach((section) => {
            const items = section.querySelectorAll("[data-reveal-item]");
            const targets = items.length ? [...items] : [section];

            gsap.fromTo(
              targets,
              { autoAlpha: 0, y: conditions.desktop ? 28 : 18 },
              {
                autoAlpha: 1,
                y: 0,
                duration: 0.75,
                stagger: 0.08,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: section,
                  start: "top 84%",
                  once: true,
                },
              },
            );
          });

          const preview = root.querySelector("[data-business-preview]");
          if (preview) {
            const previewItems = preview.querySelectorAll("[data-preview-item]");
            gsap.fromTo(
              previewItems,
              { autoAlpha: 0, y: 16, scale: 0.97 },
              {
                autoAlpha: 1,
                y: 0,
                scale: 1,
                duration: 0.6,
                stagger: 0.09,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: preview,
                  start: "top 78%",
                  once: true,
                },
              },
            );
          }
        },
      );

      return () => media.revert();
    },
    { scope: rootRef, dependencies: [pathname], revertOnUpdate: true },
  );

  return <div ref={rootRef}>{children}</div>;
}

export default MotionController;
