// src/components/sections/servicios.tsx
"use client";

import React from "react";
import { motion, easeOut } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Target,
  ClipboardCheck,
  ShieldCheck,
  Users,
  CircuitBoard,
  Code,
  ArrowUpRight,
} from "lucide-react";

// Tu nuevo contenido, refinado y estructurado
const services = [
  {
    icon: Target,
    title: "Consultoría de Proyectos",
    description:
      "Aplicamos nuestra experiencia para resolver los desafíos más complejos y guiar tu proyecto al éxito.",
  },
  {
    icon: ClipboardCheck,
    title: "Auditoría Electrónica",
    description:
      "Evaluamos y validamos la viabilidad y eficiencia de tus diseños, asegurando calidad y rendimiento.",
  },
  {
    icon: ShieldCheck,
    title: "Soporte y Garantía",
    description:
      "Ofrecemos respaldo completo en cada entrega y garantizamos la originalidad y calidad de nuestro trabajo.",
  },
  {
    icon: Users,
    title: "Asesoría Inclusiva",
    description:
      "Nuestro apoyo está disponible para todos, sin excepción, adaptándonos a tus necesidades y nivel de conocimiento.",
  },
  {
    icon: CircuitBoard,
    title: "Diseño de Circuitos",
    description:
      "Desde esquemáticos hasta PCBs, creamos soluciones de hardware a medida para tus proyectos.",
  },
  {
    icon: Code,
    title: "Desarrollo y Depuración",
    description:
      "Nos especializamos en código para Arduino, Proteus y MicroCode Studio, optimizando y solucionando cualquier desafío.",
  },
];

const fadeInAnimation = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: easeOut },
};

export function Servicios() {
  return (
    <section
      id="servicios"
      className="relative w-full py-20 md:py-28 bg-[var(--background)] px-4 overflow-hidden"
    >
      {/* Iluminación sutil (sin cambios) */}
      <div className="absolute top-0 left-0 right-0 h-[800px] z-10 bg-gradient-to-b from-[var(--primary)]/15 via-transparent to-transparent blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-[800px] z-10 bg-gradient-to-t from-[var(--primary)]/15 via-transparent to-transparent blur-3xl pointer-events-none" />

      <div className="container relative z-20 max-w-6xl">
        <motion.div {...fadeInAnimation} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-[var(--foreground)]">
            Soluciones a tu Medida
          </h2>
          <p className="text-lg text-[var(--muted-foreground)] mt-4 max-w-3xl mx-auto">
            Ofrecemos una gama completa de servicios para potenciar tus
            habilidades y asegurar el éxito de tus proyectos electrónicos.
          </p>
        </motion.div>

        {/* La cuadrícula ahora será 2x3 en pantallas medianas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: index * 0.1,
              }}
            >
              <Card className="relative group h-full p-8 overflow-hidden transition-all duration-300 bg-[var(--muted)] hover:bg-[var(--background)] border-2 border-transparent hover:border-[var(--primary)]">
                {/* Efecto de Brillo (Glow Effect) */}
                <div className="absolute -z-10 top-1/2 left-1/2 w-[200%] h-[200%] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle,var(--primary)_0%,transparent_40%)] opacity-0 group-hover:opacity-10 transition-opacity duration-500" />

                {/* Icono de Flecha que aparece */}
                <ArrowUpRight className="absolute top-6 right-6 w-6 h-6 text-[var(--muted-foreground)] opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300" />

                <CardHeader className="p-0 mb-4">
                  <div className="p-4 bg-[var(--primary)]/10 rounded-lg inline-block mb-4">
                    <service.icon className="w-8 h-8 text-[var(--primary)]" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-[var(--foreground)]">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-base text-[var(--muted-foreground)] p-0">
                  {service.description}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
