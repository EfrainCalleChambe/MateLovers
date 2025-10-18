// src/app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans"; // Importa GeistSans

// Importa el ThemeProvider que crearemos en el siguiente paso
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "MatesisLover",
  description: "Aprende, Crea y Experimenta con Electrónica y Programación",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning className={GeistSans.className}>
      <body>
        {/* Envuelve toda la aplicación con el ThemeProvider para el modo oscuro/claro */}
        <ThemeProvider
          attribute="class"
          defaultTheme="system" // Usar la preferencia del sistema por defecto
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
