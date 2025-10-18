// src/components/sections/contacto.tsx
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Github, Youtube, Instagram } from "lucide-react";

export function Contacto() {
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
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-[var(--foreground)] mb-4">
          Ponte en Contacto
        </h2>
        <p className="text-lg text-[var(--muted-foreground)] mb-12">
          ¿Tienes una pregunta o un proyecto en mente? ¡Hablemos!
        </p>
        <form className="space-y-6 text-left">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">Nombre</Label>
              <Input id="name" placeholder="Tu nombre" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="tu@email.com" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Mensaje</Label>
            <Textarea
              id="message"
              placeholder="Cuéntanos tu idea..."
              rows={5}
            />
          </div>
          <div className="text-center">
            <Button
              type="submit"
              size="lg"
              className="bg-[var(--primary)] hover:bg-[var(--primary)]/90 text-[var(--primary-foreground)]"
            >
              Enviar Mensaje
            </Button>
          </div>
        </form>
        <div className="mt-16">
          <p className="text-lg text-[var(--muted-foreground)] mb-4">
            Síguenos en nuestras redes
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="#"
              className="text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
            >
              <Github className="w-8 h-8" />
            </a>
            <a
              href="#"
              className="text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
            >
              <Youtube className="w-8 h-8" />
            </a>
            <a
              href="#"
              className="text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
            >
              <Instagram className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
