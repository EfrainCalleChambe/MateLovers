// src/components/hero.tsx
"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

// Componente de Fondo de Aurora Boreal
// Este componente crea el fondo animado y se mantiene separado para que el código principal sea más limpio.
const AuroraBackground = () => (
  <div className="absolute inset-0 z-0 overflow-hidden bg-[var(--background)]">
    {/* Resplandor principal que se mueve lentamente */}
    <motion.div
      className="absolute top-0 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle,var(--primary)_0%,transparent_60%)] opacity-20 dark:opacity-10 blur-3xl"
      animate={{
        x: [0, 100, 0, -50, 0],
        y: [0, 50, 100, 20, 0],
        scale: [1, 1.1, 1, 1.2, 1],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
    {/* Resplandor secundario (opcional, añade más profundidad) */}
    <motion.div
      className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[radial-gradient(circle,var(--primary)_0%,transparent_70%)] opacity-10 dark:opacity-5 blur-3xl"
      animate={{
        x: [0, -80, 0, 40, 0],
        y: [0, -40, -100, -30, 0],
        scale: [1, 1.2, 0.9, 1.1, 1],
      }}
      transition={{
        duration: 25,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 5, // Un retraso para que no se muevan al unísono
      }}
    />
  </div>
);

// Componente principal del Hero
export function Hero() {
  // Hook para el efecto parallax al hacer scroll (la imagen se mueve más lento que la página)
  const { scrollYProgress } = useScroll();
  const translateY = useTransform(scrollYProgress, [0, 0.1], ["0%", "20%"]);

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* 1. Fondo de Aurora */}
      <AuroraBackground />

      {/* Resplandor inferior que conecta con la siguiente sección */}
      <div className="absolute bottom-0 left-0 right-0 h-[800px] z-10 bg-gradient-to-t from-[var(--primary)]/15 via-transparent to-transparent blur-3xl pointer-events-none" />

      {/* 2. Contenedor principal para el contenido, con un z-index para estar por encima del fondo */}
      <div className="container relative z-20 flex flex-col lg:flex-row items-center justify-between max-w-6xl mx-auto px-4">
        {/* Columna Izquierda: Texto y Botón de Llamada a la Acción (CTA) */}
        <div className="text-center lg:text-left lg:w-1/2">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-tight mb-6 text-[var(--foreground)]"
          >
            Aprende. Crea.{" "}
            <span className="text-[var(--primary)]">Innova.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-lg md:text-xl text-[var(--muted-foreground)] mb-10 max-w-xl mx-auto lg:mx-0"
          >
            Tu espacio para dominar la electrónica y la programación. Desde la
            teoría fundamental hasta la creación de proyectos impactantes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            <Button
              asChild
              size="lg"
              className="px-8 py-7 text-lg font-semibold bg-[var(--primary)] hover:bg-[var(--primary)]/90 text-[var(--primary-foreground)] rounded-xl shadow-lg shadow-[var(--primary)]/20"
            >
              <Link href="#servicios">Explorar Servicios →</Link>
            </Button>
          </motion.div>
        </div>

        {/* Columna Derecha: Imagen PNG Flotante */}
        <div className="relative mt-12 lg:mt-0 lg:w-1/2 flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            style={{ translateY }} // Aplicamos el efecto parallax aquí
            className="w-[300px] h-[300px] md:w-[450px] md:h-[450px]"
          >
            {/* Contenedor extra para la animación de flotación, así no interfiere con el parallax */}
            <motion.div
              animate={{ y: [0, -15, 0] }} // Animación de flotación vertical
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Image
                src="/electronics-hero.png" // <-- ¡ASEGÚRATE DE QUE ESTA RUTA SEA CORRECTA!
                alt="Componente electrónico representativo de MatesisLover"
                width={500}
                height={500}
                priority // Importante para el rendimiento (LCP)
                className="drop-shadow-2xl" // Sombra para destacar la imagen
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
