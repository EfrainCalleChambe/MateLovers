// src/components/navbar.tsx
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./theme-toggle";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Misión", href: "#empresa" },
  { label: "Servicios", href: "#servicios" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Contacto", href: "#contacto" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

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
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-[var(--border)]"
          : "bg-transparent"
      )}
    >
      <div className="container flex h-20 items-center justify-between max-w-6xl mx-auto px-4">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-semibold text-[var(--foreground)]"
          onClick={() => window.scrollTo({ top: 0 })}
        >
          MatesisLover
        </Link>

        {/* Enlaces de Navegación para Escritorio */}
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
          {/* Toggle de Tema */}
          <ThemeToggle />

          {/* Menú Móvil */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <button className="p-2 rounded-md hover:bg-[var(--accent)]">
                  <Menu className="h-6 w-6" />
                </button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col space-y-6 pt-10">
                  {navItems.map((item) => (
                    <SheetClose asChild key={item.href}>
                      <Link href={item.href} className="text-xl font-medium">
                        {item.label}
                      </Link>
                    </SheetClose>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
