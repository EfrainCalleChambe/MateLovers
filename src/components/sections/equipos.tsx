// src/components/sections/equipo.tsx
"use client";

import React, { useRef, MouseEvent } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { FaTiktok } from "react-icons/fa";

// Datos del equipo (sin cambios)
const teamMembers = [
  {
    name: "Jhoel Leysequia",
    role: "Ingeniero Electrónico",
    imageSrc: "/team/fidel.jpeg", // Asegúrate que las rutas son correctas
    socials: [
      { icon: Facebook, url: "#" },
      { icon: Instagram, url: "#" },
      { icon: FaTiktok, url: "#" },
      { icon: Twitter, url: "#" },
    ],
  },
  {
    name: "Fidel Diaz",
    role: "Ingeniero Electrónico",
    imageSrc: "/team/fidel.jpeg",
    socials: [
      { icon: Facebook, url: "#" },
      { icon: Instagram, url: "#" },
      { icon: Twitter, url: "#" },
      { icon: FaTiktok, url: "#" },
    ],
  },
  {
    name: "Darwin Gamonal",
    role: "Ingeniero Electrónico",
    imageSrc: "/team/fidel.jpeg",
    socials: [{ icon: Facebook, url: "#" }],
  },
];

// Componente de Tarjeta individual (sin cambios)
function TeamMemberCard({
  member,
  index,
}: {
  member: (typeof teamMembers)[0];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const { left, top, width, height } =
      cardRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 25;
    const y = (e.clientY - top - height / 2) / 25;
    cardRef.current.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
    const glowX = e.clientX - left;
    const glowY = e.clientY - top;
    cardRef.current.style.setProperty("--glow-x", `${glowX}px`);
    cardRef.current.style.setProperty("--glow-y", `${glowY}px`);
  };

  const onMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = "rotateY(0deg) rotateX(0deg)";
  };

  return (
    <motion.div
      key={member.name}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.15 }}
    >
      <Card
        ref={cardRef}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        className="group relative p-6 pt-10 text-center transition-all duration-300 transform-gpu bg-[var(--background)] [transform-style:preserve-3d] h-[320px] overflow-hidden"
      >
        <div
          className="absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(circle at var(--glow-x) var(--glow-y), var(--primary) 0%, transparent 50%)",
            opacity: 0,
            transition: "opacity 0.5s ease-out",
          }}
        />
        <div className="relative z-10 transform transition-transform duration-500 ease-in-out group-hover:-translate-y-10">
          <div className="relative w-32 h-32 mx-auto mb-4">
            <Image
              src={member.imageSrc}
              alt={`Foto de perfil de ${member.name}`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ objectFit: "cover" }}
              className="rounded-full"
            />
          </div>
          <h3 className="text-xl font-bold text-[var(--foreground)]">
            {member.name}
          </h3>
          <p className="text-base text-[var(--muted-foreground)]">
            {member.role}
          </p>
        </div>
        <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-8 group-hover:translate-y-0">
          {member.socials.map((social, socialIndex) => (
            <Link
              href={social.url}
              key={socialIndex}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-[var(--muted)] hover:bg-[var(--primary)] text-[var(--foreground)] hover:text-[var(--primary-foreground)] transition-colors"
            >
              <social.icon className="w-5 h-5" />
            </Link>
          ))}
        </div>
      </Card>
    </motion.div>
  );
}

// Componente principal de la Sección
export function Equipo() {
  return (
    // CAMBIO 1: Añadir 'relative' y 'overflow-hidden' a la sección principal
    <section
      id="equipo"
      className="relative w-full py-20 md:py-28 bg-[var(--background)] px-4 overflow-hidden" // Cambiado de --muted a --background
    >
      {/* CAMBIO 2: Insertar los dos divs de resplandor */}
      {/* Iluminación sutil desde arriba */}
      <div className="absolute top-0 left-0 right-0 h-[800px] z-10 bg-gradient-to-b from-[var(--primary)]/15 via-transparent to-transparent blur-3xl pointer-events-none" />
      {/* Iluminación sutil desde abajo */}
      <div className="absolute bottom-0 left-0 right-0 h-[800px] z-10 bg-gradient-to-t from-[var(--primary)]/15 via-transparent to-transparent blur-3xl pointer-events-none" />

      {/* CAMBIO 3: Añadir 'relative' y 'z-20' al contenedor principal */}
      <div className="container relative z-20 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-[var(--primary)] uppercase tracking-widest mb-2">
            EQUIPO PROFESIONAL
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-[var(--foreground)]">
            Reúnase con nuestros expertos
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 [perspective:1000px]">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={member.name} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
