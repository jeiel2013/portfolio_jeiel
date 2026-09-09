import React, { useEffect, useRef } from "react";
import { useTheme } from "../context/ThemeContext";

function Background() {
  const canvasRef = useRef(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let width, height;
    const stars = [];
    let animationFrame = null;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const particleRGB = theme === "light" ? "0, 0, 0" : "255, 255, 255";

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      stars.length = 0;
      initStars();

      if (reducedMotion.matches || document.hidden) {
        drawFrame(false);
      }
    };

    class Star {
      constructor() {
        this.reset();
        this.y = Math.random() * height;
      }

      reset() {
        this.x = Math.random() * width;
        this.y = height + Math.random() * 100;
        this.size = Math.random() * 2;
        this.speed = Math.random() * 0.5 + 0.1;
        this.opacity =
          theme === "light" ? Math.random() * 0.5 + 0.5 : Math.random() * 0.5 + 0.1;
      }

      update() {
        this.y -= this.speed;
        if (this.y < -10) {
          this.reset();
        }
      }

      draw() {
        ctx.fillStyle = `rgba(${particleRGB}, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const initStars = () => {
      const density = width < 768 ? 120 : width < 1280 ? 220 : 300;
      const starCount = reducedMotion.matches ? Math.min(70, density) : density;

      for (let i = 0; i < starCount; i++) {
        stars.push(new Star());
      }
    };

    const drawFrame = (shouldUpdate = true) => {
      ctx.clearRect(0, 0, width, height);
      stars.forEach((star) => {
        if (shouldUpdate) star.update();
        star.draw();
      });
    };

    const animate = () => {
      drawFrame();
      animationFrame = requestAnimationFrame(animate);
    };

    const stopAnimation = () => {
      if (animationFrame !== null) {
        cancelAnimationFrame(animationFrame);
        animationFrame = null;
      }
    };

    const startAnimation = () => {
      stopAnimation();
      if (document.hidden || reducedMotion.matches) {
        drawFrame(false);
        return;
      }
      animate();
    };

    const handleVisibility = () => {
      if (document.hidden) {
        stopAnimation();
      } else {
        startAnimation();
      }
    };

    const handleMotionPreference = () => {
      resize();
      startAnimation();
    };

    resize();
    startAnimation();
    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", handleVisibility);
    reducedMotion.addEventListener("change", handleMotionPreference);

    return () => {
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", handleVisibility);
      reducedMotion.removeEventListener("change", handleMotionPreference);
      stopAnimation();
    };
  }, [theme]);

  return (
    <>
      {/* Canvas com partículas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-0 opacity-40"
      />

      {/* Grid pattern overlay */}
      <div className="fixed inset-0 w-full h-full pointer-events-none z-0 bg-grid" />
    </>
  );
}

export default Background;
