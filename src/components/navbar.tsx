// src/components/navbar.tsx
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence, Variants } from "framer-motion"; // Importar Variants
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./theme-toggle";
import { Menu, X } from "lucide-react";
import { Github, Youtube, Instagram } from "lucide-react";

const navItems = [
  { label: "Misión", href: "#empresa" },
  { label: "Servicios", href: "#servicios" },
  { label: "Equipo", href: "#equipo" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Contacto", href: "#contacto" },
];

// Componente para el Menú Móvil Inmersivo
function MobileMenu({
  isOpen,
  setIsOpen,
  activeSection,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  activeSection: string;
}) {
  const menuVariants: Variants = {
    // Añadir tipo Variants
    hidden: { opacity: 0, transition: { when: "afterChildren" } },
    visible: {
      opacity: 1,
      transition: { when: "beforeChildren", staggerChildren: 0.1 },
    },
  };

  // ----- ¡CAMBIO 1: Eliminar 'transition' de la variante! -----
  const itemVariants: Variants = {
    // Añadir tipo Variants
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={menuVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="fixed inset-0 z-50 flex flex-col bg-[var(--background)] p-4"
        >
          {/* Encabezado */}
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="text-xl font-semibold"
              onClick={() => setIsOpen(false)}
            >
              MatesisLover
            </Link>
            <button onClick={() => setIsOpen(false)} className="p-2">
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Enlaces de Navegación */}
          <motion.div
            variants={menuVariants}
            className="flex flex-1 flex-col items-center justify-center gap-8"
          >
            {navItems.map((item) => (
              // ----- ¡CAMBIO 2: Añadir la transición directamente aquí! -----
              <motion.div
                key={item.href}
                variants={itemVariants}
                transition={{ type: "spring", stiffness: 100 }} // La transición ahora está en el componente
              >
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "text-3xl font-medium transition-colors",
                    activeSection === item.href
                      ? "text-[var(--primary)]"
                      : "text-[var(--muted-foreground)]"
                  )}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Pie de página con Redes Sociales */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex justify-center gap-6 pb-8"
          >
            <a href="#">
              <Github className="w-6 h-6 text-[var(--muted-foreground)]" />
            </a>
            <a href="#">
              <Youtube className="w-6 h-6 text-[var(--muted-foreground)]" />
            </a>
            <a href="#">
              <Instagram className="w-6 h-6 text-[var(--muted-foreground)]" />
            </a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Componente Principal del Navbar (sin cambios)
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      const sections = navItems.map((item) =>
        document.querySelector(item.href)
      );
      let currentSection = "";
      sections.forEach((section) => {
        if (section) {
          const sectionTop = (section as HTMLElement).offsetTop - 150;
          if (window.scrollY >= sectionTop) {
            currentSection = `#${section.id}`;
          }
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className={cn(
          "fixed inset-x-0 top-0 z-40 transition-all duration-300",
          scrolled
            ? "bg-background/80 backdrop-blur-md border-b border-[var(--border)]"
            : "bg-transparent"
        )}
      >
        <div className="container flex h-20 items-center justify-between max-w-6xl mx-auto px-4">
          <Link
            href="/"
            className="text-xl font-semibold text-[var(--foreground)]"
            onClick={() => window.scrollTo({ top: 0 })}
          >
            MatesisLover
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative text-sm font-medium transition-colors",
                  activeSection === item.href
                    ? "text-[var(--foreground)]"
                    : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
                )}
              >
                {item.label}
                {activeSection === item.href && (
                  <motion.span
                    layoutId="underline"
                    className="absolute left-0 -bottom-2 block h-[2px] w-full bg-[var(--primary)]"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(true)}
                className="p-2 rounded-md hover:bg-[var(--accent)]"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      <MobileMenu
        isOpen={isMenuOpen}
        setIsOpen={setIsMenuOpen}
        activeSection={activeSection}
      />
    </>
  );
}
