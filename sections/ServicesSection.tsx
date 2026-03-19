"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Container from "@/ui/Container";

const services = [
  {
    icon: "/images/satellite-dish.svg",
    title: "Calculated Weather",
    desc: "Built Wicket longer admire do barton vanity itself do in it.",
    width: 92,
    height: 78,
  },
  {
    icon: "/images/best-flights.svg",
    title: "Best Flights",
    desc: "Engrossed listening. Park gate sell they west hard for the.",
    width: 140,
    height: 120, // Making sure dimensions are big enough 
  },
  {
    icon: "/images/local-events.svg",
    title: "Local Events",
    desc: "Barton vanity itself do in it. Preferd to men it engrossed listening.",
    width: 67,
    height: 75,
  },
  {
    icon: "/images/customization.svg",
    title: "Customization",
    desc: "We deliver outsourced aviation services for military customers",
    width: 77,
    height: 66,
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

const Services = () => {
  return (
    <section id="services" className="relative pb-16 pt-14 sm:pb-20 lg:pb-28 lg:pt-24 z-10">
      <Container className="relative">
        {/* Plus Decor (Top Right) */}
        <div className="absolute top-0 right-[-3%] md:right-0 z-0 hidden lg:block opacity-60">
          <Image
            src="/images/category-plus.png"
            alt="Plus Background Decoration"
            width={153}
            height={166}
            className="w-36 h-auto"
          />
        </div>

        <div className="text-center relative z-10">
          <p className="text-lg font-semibold uppercase tracking-widest text-slate">Category</p>
          <h2 className="section-heading mt-2 text-center text-4xl sm:text-[3.25rem] font-bold text-ink">
            We Offer Best Services
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mt-16 relative z-10">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              whileHover="hover"
              className="relative group mx-auto w-full max-w-[280px]"
            >
              {/* Orange decorative block on hover */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  hover: { opacity: 1, scale: 1 },
                }}
                className="absolute -bottom-8 -left-8 w-[100px] h-[100px] bg-coral rounded-tl-[30px] rounded-br-[10px] rounded-tr-[10px] rounded-bl-[30px] -z-10 transition-all duration-300 pointer-events-none"
                style={{ backgroundColor: '#DF6951' }} // Using exact color from design
              />

              {/* Card Body */}
              <motion.div
                variants={{
                  hidden: { y: 0, boxShadow: "none", backgroundColor: "transparent" },
                  hover: { y: -12, boxShadow: "0 20px 40px rgba(0,0,0,0.06)", backgroundColor: "#ffffff" },
                }}
                className="relative bg-transparent rounded-[36px] flex flex-col items-center p-10 text-center transition-all duration-300 h-full z-10"
              >
                <div className="h-[90px] flex items-center justify-center mb-6">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={service.width}
                    height={service.height}
                    className="object-contain"
                  />
                </div>
                <h3 className="font-display text-[1.4rem] font-bold text-ink mb-4">{service.title}</h3>
                <p className="text-base text-slate font-medium leading-[1.6]">{service.desc}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Services;
