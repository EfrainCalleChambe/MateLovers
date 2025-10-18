export function Footer() {
  return (
    <footer className="w-full py-8 bg-[var(--muted)] border-t border-[var(--border)] text-center">
      <div className="container text-[var(--muted-foreground)] space-y-2">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-[var(--foreground)]">
            MatesisLover
          </span>{" "}
          · Creando conocimiento para el futuro.
        </p>
        <div className="flex justify-center gap-6 text-sm">
          <a href="#empresa" className="hover:text-[var(--primary)]">
            Empresa
          </a>
          <a href="#servicios" className="hover:text-[var(--primary)]">
            Servicios
          </a>
          <a href="#proyectos" className="hover:text-[var(--primary)]">
            Proyectos
          </a>
          <a href="#contacto" className="hover:text-[var(--primary)]">
            Contacto
          </a>
        </div>
      </div>
    </footer>
  );
}
