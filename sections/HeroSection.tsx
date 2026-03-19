"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import Image from "next/image";
import fadeIn from "@/animations/fadeIn";
import slideUp from "@/animations/slideUp";
import Button from "@/ui/Button";
import Container from "@/ui/Container";

export default function HeroSection() {
  return (
    <header className="relative overflow-hidden pb-12 pt-8 sm:pb-16 lg:pb-24">
        <Image src="/images/Decore.png" alt="" width={700} height={380} className="absolute top-0 right-0 z-0" />
      <div className="pointer-events-none absolute right-0 top-0 h-[560px] w-full lg:h-[724px]" />

      <Container className="relative mt-10">
        <div className="grid items-center  lg:grid-cols-[minmax(0,1fr)_minmax(520px,1fr)] lg:gap-2">
          <motion.div initial="hidden" animate="visible" variants={slideUp} className="order-2 lg:order-1 relative z-10 pt-8 lg:pt-20">
            <p className="text-lg font-bold uppercase tracking-tight text-coral sm:text-xl">
              Best destinations around the world
            </p>

            <div className="relative mt-5 max-w-[730px]">
              <h1 className="hero-title relative z-10 text-ink">
              <span className="lg:whitespace-nowrap">Travel, enjoy</span>
                <br />
                <span className="lg:whitespace-nowrap">and live a new</span>
                <br />
                and full life
              </h1>
              <Image
                src="/images/hero-underline.svg"
                alt=""
                width={486}
                height={10}
                className="pointer-events-none absolute left-[42%] top-[28%] z-0 hidden w-[380px] lg:block"
              />
            </div>

            <p className="mt-8 max-w-[480px] text-lg leading-9 text-slate">
              Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening.
              Park gate sell they west hard for the.
            </p>

            <div className="mt-9 flex flex-col gap-5 sm:flex-row sm:items-center">
              <Button className="min-w-[170px] rounded-2xl">Find out more</Button>
              <button type="button" className="inline-flex items-center gap-5 text-[1.05rem] font-medium text-slate">
                <span className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-[#DF6951] text-white shadow-[0_15px_25px_rgba(223,105,81,0.3)]">
                  <Play size={18} className="ml-1" fill="currentColor" />
                </span>
                Play Demo
              </button>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="order-1 lg:order-2 relative flex min-h-[380px] items-center justify-center sm:min-h-[690px] lg:min-h-[720px]"
          >
            {/* <Image
              src="/images/plane-blue.svg"
              alt=""
              width={140}
              height={63}
              className="pointer-events-none absolute left-[5%] top-[28%] z-20 hidden w-[120px] lg:block"
            />
            <Image
              src="/images/plane-blue.svg"
              alt=""
              width={128}
              height={57}
              className="pointer-events-none absolute right-[6%] top-[36%] z-20 hidden w-[110px] rotate-[6deg] lg:block"
            /> */}
            <Image
              src="/images/lady-traveller.webp"
              alt="Happy traveler seated on luggage"
              width={767}
              height={764}
              priority
              className="absolute sm:right-12 z-10 h-auto  w-full max-w-[720px]"
            />
          </motion.div>
        </div>
      </Container>
    </header>
  );
}
