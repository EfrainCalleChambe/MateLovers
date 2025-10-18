// src/app/page.tsx
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Empresa } from "@/components/sections/empresa";
import { Servicios } from "@/components/sections/servicios";
import { FeatureSection } from "@/components/sections/feature-section";
import { ProblemasResueltos } from "@/components/sections/problemas-resueltos";
import { Proyectos } from "@/components/sections/proyectos";
import { Equipo } from "@/components/sections/equipos";
import { Contacto } from "@/components/sections/contacto";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Navbar />
      <main>
        <Hero />
        <Empresa />
        <Servicios />
        <Equipo />
        <ProblemasResueltos />
        <Proyectos />

        <Contacto />
      </main>
      <Footer />
    </div>
  );
}
