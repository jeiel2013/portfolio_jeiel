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
    const numStars = 500; // Número de partículas

    const particleRGB = theme === "light" ? "0, 0, 0" : "255, 255, 255";

    // Configurar tamanho do canvas
    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    // Classe Star para as partículas
    class Star {
      constructor() {
        this.reset();
        this.y = Math.random() * height; // Começar espalhadas
      }

      reset() {
        this.x = Math.random() * width;
        this.y = height + Math.random() * 100; // Começar abaixo da tela
        this.size = Math.random() * 2;
        this.speed = Math.random() * 0.5 + 0.1;
        this.opacity =
          theme === "light" ? Math.random() * 0.5 + 0.5 : Math.random() * 0.5 + 0.1;
      }

      update() {
        this.y -= this.speed; // Movimento para cima
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

    // Inicializar estrelas
    const initStars = () => {
      for (let i = 0; i < numStars; i++) {
        stars.push(new Star());
      }
    };

    // Loop de animação
    let animationFrame;
    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      stars.forEach((star) => {
        star.update();
        star.draw();
      });
      animationFrame = requestAnimationFrame(animate);
    };

    // Event listeners
    window.addEventListener("resize", resize);

    // Inicializar
    resize();
    initStars();
    animate();

    // Cleanup
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrame);
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
