// src/components/sections/feature-section.tsx
"use client"; // <-- ¡AÑADE ESTA LÍNEA AQUÍ!

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FeatureSectionProps {
  id: string;
  title: string;
  description: string | React.ReactNode;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
  backgroundColorClass?: string;
}

export function FeatureSection({
  id,
  title,
  description,
  imageSrc,
  imageAlt,
  reverse = false,
  backgroundColorClass = "bg-[var(--background)]",
}: FeatureSectionProps) {
  return (
    <section
      id={id}
      className={cn("w-full py-20 md:py-32 px-4", backgroundColorClass)}
    >
      <div className="container max-w-6xl mx-auto">
        <div
          className={cn(
            "flex flex-col md:flex-row items-center gap-12",
            reverse ? "md:flex-row-reverse" : ""
          )}
        >
          <div className="w-full md:w-1/2 flex justify-center">
            <motion.div
              initial={{ opacity: 0, x: reverse ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative w-[350px] h-[300px] md:w-[500px] md:h-[400px] rounded-lg overflow-hidden shadow-xl border-[var(--border)]"
            >
              <Image
                src={imageSrc}
                alt={imageAlt}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 hover:scale-105"
              />
            </motion.div>
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
              className="text-4xl font-bold text-[var(--foreground)]"
            >
              {title}
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
              className="text-lg text-[var(--muted-foreground)]"
            >
              {description}
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
