"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import fadeIn from "@/animations/fadeIn";
import Container from "@/ui/Container";

const partners = [
  { name: "Axon", src: "/images/axon.svg", width: 130, height: 40 },
  { name: "Jetstar", src: "/images/jetstar.svg", width: 172, height: 50 },
  { name: "Expedia", src: "/images/Expedia.svg", width: 241, height: 86 },
  { name: "Qantas", src: "/images/qantas.svg", width: 162, height: 34 },
  { name: "Alitalia", src: "/images/alitalia.svg", width: 120, height: 28 },
];

export default function Partners() {
  return (
    <section className="pb-16 pt-6 sm:pb-20 lg:pb-24 z-10 relative bg-white">
      <Container>
        {/* We use 'group' on the container to detect when ANY partner is hovered */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeIn}
          className="group flex flex-wrap items-center justify-center gap-8 sm:gap-12 lg:justify-between"
        >
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="
                relative flex items-center justify-center rounded-2xl px-6 py-2 
                transition-all duration-300 ease-out cursor-pointer
                grayscale-[100%] opacity-60
                group-hover:opacity-40 group-hover:grayscale-[100%]
                hover:!opacity-100 hover:!grayscale-0 hover:-translate-y-3 hover:bg-white hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:!scale-105
              "
            >
              <Image
                src={partner.src}
                alt={partner.name}
                width={partner.width}
                height={partner.height}
                className="h-auto w-auto max-w-[120px] sm:max-w-full mix-blend-multiply"
              />
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
