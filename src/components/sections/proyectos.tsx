// src/components/sections/proyectos.tsx
"use client";

import React from "react";
import { motion, easeOut } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Card, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const proyectosDestacados = [
  {
    title: "Estación Meteorológica WiFi",
    description:
      "Un dispositivo IoT que mide y envía datos ambientales a la nube usando un ESP32.",
    imageSrc: "/riego.jpeg",
    tags: ["Arduino", "ESP32", "IoT"],
    url: "#",
  },
  {
    title: "Brazo Robótico Controlado",
    description:
      "Un brazo robótico de 4 ejes controlado por servomotores y una interfaz personalizada.",
    imageSrc: "/riego.jpeg",
    tags: ["Robótica", "PIC", "Servomotores"],
    url: "#",
  },
  {
    title: "Matriz de LEDs Interactiva",
    description:
      "Una matriz 8x8 que muestra animaciones y juegos controlados vía Bluetooth.",
    imageSrc: "/riego.jpeg",
    tags: ["Electrónica", "Bluetooth", "Animación"],
    url: "#",
  },
  {
    title: "Sistema de Riego Automático",
    description:
      "Prototipo que riega plantas automáticamente basándose en la humedad del suelo.",
    imageSrc: "/riego.jpeg",
    tags: ["Automatización", "Sensores"],
    url: "#",
  },
];

const fadeInAnimation = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: easeOut },
};

export function Proyectos() {
  return (
    // CAMBIO 1: Añadir 'relative' y 'overflow-hidden' a la sección principal
    <section
      id="proyectos"
      className="relative w-full py-20 md:py-28 bg-[var(--background)] px-4 overflow-hidden"
    >
      {/* CAMBIO 2: Insertar los dos divs de resplandor */}
      {/* Iluminación sutil desde arriba */}
      <div className="absolute top-0 left-0 right-0 h-[800px] z-10 bg-gradient-to-b from-[var(--primary)]/15 via-transparent to-transparent blur-3xl pointer-events-none" />
      {/* Iluminación sutil desde abajo */}
      <div className="absolute bottom-0 left-0 right-0 h-[800px] z-10 bg-gradient-to-t from-[var(--primary)]/15 via-transparent to-transparent blur-3xl pointer-events-none" />

      {/* CAMBIO 3: Añadir 'relative' y 'z-20' al contenedor principal */}
      <div className="container relative z-20 max-w-6xl">
        <motion.div {...fadeInAnimation} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-[var(--foreground)]">
            De la Idea a la Realidad
          </h2>
          <p className="text-lg text-[var(--muted-foreground)] mt-4 max-w-3xl mx-auto">
            Explora algunos de los proyectos que hemos desarrollado. Cada uno es
            un testimonio del poder de combinar hardware y software.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {proyectosDestacados.map((proyecto, index) => (
            <motion.div
              key={proyecto.title}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ y: -10, scale: 1.05 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: index * 0.15,
              }}
            >
              <Link href={proyecto.url} className="block group">
                <Card className="h-96 relative flex flex-col justify-end p-6 overflow-hidden rounded-2xl border-2 border-[var(--border)] transition-all duration-300">
                  {/* Imagen de fondo con zoom al hover */}
                  <Image
                    src="/riego.jpeg"
                    alt="Sistema de riego"
                    fill
                    className="object-cover"
                    sizes="100vw" // porque ocupa todo el ancho de la pantalla
                    priority // 👈 mejora el performance de LCP
                  />

                  {/* Gradiente para legibilidad del texto */}
                  <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

                  {/* Contenido de texto */}
                  <div className="relative z-20">
                    <CardTitle className="text-2xl font-bold text-white mb-2">
                      {proyecto.title}
                    </CardTitle>
                    <p className="text-gray-300 text-sm mb-4">
                      {proyecto.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {proyecto.tags.map((tag) => (
                        <Badge
                          key={tag}
                          className="bg-white/10 text-white backdrop-blur-sm border-none"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
