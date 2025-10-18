// src/components/sections/problemas-resueltos.tsx
"use client";

import React from "react";
import { motion, easeOut } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Datos de los problemas y soluciones (sin cambios)
const problemas = [
  {
    value: "item-1",
    pregunta: "¿Cómo calculo la resistencia correcta para un LED?",
    respuesta:
      "Para calcular la resistencia, usa la Ley de Ohm (R = V/I). Primero, determina el voltaje de la fuente (Vs), el voltaje directo del LED (Vf, usualmente ~2V para rojos, ~3.3V para azules/blancos), y la corriente deseada (Id, típicamente 20mA o 0.02A). La fórmula es: R = (Vs - Vf) / Id. Por ejemplo, para una fuente de 5V y un LED rojo: R = (5V - 2V) / 0.02A = 150Ω. Siempre elige el valor de resistencia estándar más cercano por encima.",
  },
  {
    value: "item-2",
    pregunta:
      "¿Cuál es la diferencia entre `analogRead()` y `digitalRead()` en Arduino?",
    respuesta:
      "`digitalRead()` se usa para pines configurados como entradas digitales y solo puede leer dos estados: HIGH (5V) o LOW (0V). Es ideal para botones o interruptores. Por otro lado, `analogRead()` se usa en los pines de entrada analógica (A0-A5) para leer un rango de voltaje, usualmente de 0 a 5V. Devuelve un valor entero entre 0 y 1023, permitiendo leer sensores que varían su salida, como potenciómetros o sensores de luz.",
  },
  {
    value: "item-3",
    pregunta: "¿Qué es un 'pull-up' o 'pull-down' y por qué lo necesito?",
    respuesta:
      "Una resistencia de pull-up o pull-down se usa para asegurar que un pin de entrada digital tenga un estado definido (HIGH o LOW) cuando no está siendo activamente controlado (por ejemplo, un botón no presionado). Sin ella, el pin está 'flotando' y puede leer valores aleatorios. Una resistencia de pull-up conecta el pin a VCC (HIGH) por defecto, y el botón lo conecta a tierra (LOW) al presionarse. Una de pull-down hace lo contrario, conectándolo a tierra (LOW) por defecto.",
  },
];

const fadeInAnimation = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: easeOut },
};

export function ProblemasResueltos() {
  return (
    // CAMBIO 1: Añadir 'relative' y 'overflow-hidden' a la sección principal
    <section
      id="problemas-resueltos"
      className="relative w-full py-20 md:py-28 bg-[var(--background)] px-4 overflow-hidden"
    >
      {/* CAMBIO 2: Insertar los dos divs de resplandor */}
      {/* Iluminación sutil desde arriba */}
      <div className="absolute top-0 left-0 right-0 h-[800px] z-10 bg-gradient-to-b from-[var(--primary)]/15 via-transparent to-transparent blur-3xl pointer-events-none" />
      {/* Iluminación sutil desde abajo */}
      <div className="absolute bottom-0 left-0 right-0 h-[800px] z-10 bg-gradient-to-t from-[var(--primary)]/15 via-transparent to-transparent blur-3xl pointer-events-none" />

      {/* CAMBIO 3: Añadir 'relative' y 'z-20' al contenedor principal */}
      <div className="container relative z-20 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Columna Izquierda: Título y Descripción (sin cambios) */}
          <motion.div {...fadeInAnimation} className="lg:col-span-1">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-[var(--foreground)]">
              Conocimiento en Acción
            </h2>
            <p className="text-lg text-[var(--muted-foreground)] mt-4">
              Explora soluciones a problemas comunes y preguntas frecuentes. Haz
              clic en una pregunta para revelar la solución explicada paso a
              paso.
            </p>
          </motion.div>

          {/* Columna Derecha: Acordeón Interactivo (sin cambios) */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            className="lg:col-span-2"
          >
            <Accordion type="single" collapsible className="w-full">
              {problemas.map((problema) => (
                <AccordionItem
                  key={problema.value}
                  value={problema.value}
                  className="border-b border-[var(--border)]"
                >
                  <AccordionTrigger className="text-lg text-left font-semibold hover:no-underline text-[var(--foreground)]">
                    {problema.pregunta}
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-[var(--muted-foreground)]">
                    {problema.respuesta}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
