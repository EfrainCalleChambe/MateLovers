// src/components/sections/empresa.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Zap, Target } from "lucide-react";

const principios = [
  {
    icon: BookOpen,
    title: "Claridad ante Todo",
    description:
      "Traducimos conceptos complejos en guías claras, directas y fáciles de seguir.",
  },
  {
    icon: Zap,
    title: "Enfoque Práctico",
    description:
      "Creemos que la mejor forma de aprender es haciendo. Nos centramos en la aplicación real.",
  },
  {
    icon: Target,
    title: "Soporte Estratégico",
    description:
      "Te asesoramos para tomar las mejores decisiones en tus proyectos académicos y personales.",
  },
];

export function Empresa() {
  return (
    <section
      id="empresa"
      className="relative w-full py-20 md:py-28 bg-[var(--background)] px-4 overflow-hidden"
    >
      {/* Fondo de Grid Sutil (Consistente con el Hero) */}

      {/* Iluminación sutil desde arriba */}
      <div className="absolute top-0 left-0 right-0 h-[800px] z-10 bg-gradient-to-b from-[var(--primary)]/15 via-transparent to-transparent blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-[800px] z-10 bg-gradient-to-t from-[var(--primary)]/15 via-transparent to-transparent blur-3xl pointer-events-none" />

      <div className="container relative z-20 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Columna Izquierda: La Narrativa */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-[var(--foreground)]">
              De la Curiosidad a la{" "}
              <span className="text-[var(--primary)]">Creación</span>
            </h2>
            <div className="space-y-4 text-lg text-[var(--muted-foreground)]">
              <p>
                Somos un colectivo de ingenieros y educadores apasionados por
                desmitificar la tecnología. MatesisLover nació de una idea
                simple: el aprendizaje de la electrónica no tiene por qué ser
                intimidante.
              </p>
              <p>
                Nuestra misión es ser el puente entre la teoría y la práctica,
                ofreciendo materiales y asesoría que te guían hacia soluciones
                correctas y oportunas.
              </p>
            </div>
          </motion.div>

          {/* Columna Derecha: Nuestros Principios */}
          <motion.div
            className="grid grid-cols-1 gap-6"
            initial="initial"
            whileInView="animate"
            transition={{ staggerChildren: 0.15 }}
          >
            {principios.map((principio) => (
              <motion.div
                key={principio.title}
                variants={{
                  initial: { opacity: 0, x: 50 },
                  animate: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <Card className="group relative p-6 transition-all duration-300 bg-[var(--background)]/80 backdrop-blur-sm border border-[var(--border)] overflow-hidden">
                  {/* Glow al hacer hover */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--primary)_0%,transparent_70%)] opacity-0 group-hover:opacity-15 transition-opacity duration-300 -z-10" />

                  <CardHeader className="flex flex-row items-center gap-4 p-0">
                    <div className="p-3 bg-[var(--primary)]/10 rounded-lg border border-[var(--primary)]/20">
                      <principio.icon className="w-6 h-6 text-[var(--primary)]" />
                    </div>
                    <CardTitle className="text-xl font-bold text-[var(--foreground)]">
                      {principio.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0 pt-4">
                    <p className="text-[var(--muted-foreground)]">
                      {principio.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
