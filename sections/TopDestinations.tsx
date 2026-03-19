"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Container from "@/ui/Container";

import pizzatowerImg from "../public/images/pizzatower.png";
import londonImg from "../public/images/london.png";
import europeImg from "../public/images/europe.png";

const destinations = [
  {
    title: "Rome, Italty",
    price: "$5,42k",
    duration: "10 Days Trip",
    image: pizzatowerImg,
  },
  {
    title: "London, UK",
    price: "$4.2k",
    duration: "12 Days Trip",
    image: londonImg,
  },
  {
    title: "Full Europe",
    price: "$15k",
    duration: "28 Days Trip",
    image: europeImg,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5 },
  }),
};

export default function TopDestinations() {
  return (
    <section id="destinations" className="relative pb-16 pt-14 sm:pb-20 lg:pb-28 lg:pt-24 z-10">
      <Container className="relative ">
        <div className="text-center relative z-10">
          <p className="text-lg font-semibold uppercase tracking-widest text-slate mb-2">
            Top Selling
          </p>
          <h2 className="section-heading text-center text-4xl sm:text-[3.25rem] font-bold text-ink">
            Top Destinations
          </h2>
        </div>

        <div className="mt-16 relative">
          {/* Spring Decor SVG placed absolutely behind the grid on the right side */}
          <div className="absolute right-0 bottom-[8%] z-0 hidden lg:block">
            <Image
              src="/images/spring-decor.svg"
              alt="Spring Decoration"
              width={96}
              height={252}
              className="w-auto h-auto opacity-90"
            />
          </div>

          <div className="grid gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-3 relative z-10 w-full max-w-[1100px] mx-auto">
            {destinations.map((destination, i) => (
              <motion.article
                key={destination.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={cardVariants}
                whileHover={{ y: -12, boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden rounded-[24px] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.04)] flex flex-col cursor-pointer"
              >
                <div className="relative h-[327px] w-full">
                  <Image
                    src={destination.image}
                    alt={destination.title}
                    fill
                    className="object-cover"
                    placeholder="blur"
                  />
                </div>
                
                <div className="flex flex-col flex-1 px-8 py-8 space-y-5 bg-white">
                  <div className="flex items-center justify-between gap-4 text-[1.15rem] font-medium text-slate">
                    <h3>{destination.title}</h3>
                    <span>{destination.price}</span>
                  </div>
                  
                  <div className="flex items-center gap-4 text-base font-medium text-slate">
                    {/* <Send size={18} className="text-slate -rotate-45" /> */}
                    <Image
                    src="/images/location.svg"
                    alt="Location"
                    width={18}
                    height={18}
                    className="text-slate"
                    />
                    <span>{destination.duration}</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
