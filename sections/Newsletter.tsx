"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import Image from "next/image";
import slideUp from "@/animations/slideUp";
import Container from "@/ui/Container";

export default function Newsletter() {
  return (
    <section className="relative pb-24 pt-16 sm:pb-32 lg:pb-32 lg:pt-20">
      <Container className="relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={slideUp}
          className="relative w-full rounded-tl-[129px] rounded-bl-[20px] rounded-br-[20px] rounded-tr-[20px] bg-[#DFD7F9]/20 px-6 py-16 sm:px-10 lg:px-24 lg:py-24"
        >
          {/* Top Right Send/Paperplane Icon */}
          <div className="absolute right-[-15px] top-[-20px] z-20 md:right-[-20px] md:top-[-20px]">
            <Image
              src="/images/send-icon.svg"
              alt="Send"
              width={70}
              height={70}
              className="h-14 w-14 md:h-[70px] md:w-[70px]"
            />
          </div>

          {/* Left Spiral Decor */}
          <div className="absolute bottom-0 left-0 z-0 opacity-50 mix-blend-multiply pointer-events-none rounded-bl-[20px] overflow-hidden">
            <Image
              src="/images/spiral-decor1.svg"
              alt="Spiral Decoration Bottom Left"
              width={380}
              height={300}
              className="h-auto w-auto max-w-[200px] md:max-w-[380px] -translate-x-10 translate-y-10 md:translate-y-0 md:translate-x-0"
            />
          </div>

          {/* Right Spiral Decor */}
          <div className="absolute top-0 right-0 z-0 opacity-50 mix-blend-multiply pointer-events-none rounded-tr-[20px] overflow-hidden">
            <Image
              src="/images/spiral-decor2.svg"
              alt="Spiral Decoration Top Right"
              width={260}
              height={260}
              className="h-auto w-auto max-w-[150px] md:max-w-[260px] translate-x-4 -translate-y-4 md:translate-y-0 md:translate-x-0"
            />
          </div>

          <div className="relative z-10 ">
            <h2 className="text-center text-[1.7rem] font-semibold leading-[1.6] text-slate sm:text-[2rem] lg:text-[2.05rem]">
              Subscribe to get information, latest news and other
              <br className="hidden md:block" /> interesting offers about Jadoo
            </h2>

            <form className="mx-auto mt-12 flex max-w-[650px] flex-col gap-5 sm:flex-row items-center justify-center">
              <div className="flex w-full flex-1 items-center gap-4 rounded-xl bg-white px-6 py-5 shadow-sm">
                <Mail size={22} className="text-slate" />
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full border-none bg-transparent text-[1.05rem] text-slate outline-none placeholder:text-slate/70"
                />
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto rounded-xl bg-gradient-to-br from-[#FF946D] to-[#FF7D68] px-10 py-5 text-[1.05rem] font-semibold text-white shadow-md transition-transform hover:-translate-y-1 active:scale-95 whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Bottom Right Plus Grid Decor */}
          <div className="absolute bottom-[-60px] right-[-8%] z-[-1] hidden lg:block opacity-60">
             <Image
              src="/images/decor-plus.svg"
              alt="Plus Pattern Decoration"
              width={150}
              height={150}
              className="h-auto w-auto"
            />
          </div>

        </motion.div>
      </Container>
    </section>
  );
}
