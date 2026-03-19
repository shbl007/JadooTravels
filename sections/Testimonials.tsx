"use client";

import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import fadeIn from "@/animations/fadeIn";
import Container from "@/ui/Container";

const testimonials = [
  {
    id: 1,
    name: "Mike taylor",
    location: "Lahore, Pakistan",
    text: "“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”",
    avatar: "/images/mike-avatar.png",
  },
  {
    id: 2,
    name: "Chris Thomas",
    location: "CEO of Red Button",
    text: "“Jadoo has transformed how we plan our corporate retreats. Unparalleled service and seamless booking experience.”",
    avatar: "/images/chris-img.jpg",
  },
  {
    id: 3,
    name: "Sarah Jenkins",
    location: "London, UK",
    text: "“The best decision I made for my vacation. Every detail was expertly curated and executed flawlessly.”",
    avatar: "/images/women-img.jpg",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="relative pb-16 pt-10 sm:pb-20 lg:pb-28 lg:pt-16 z-10">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          
          {/* Left Text Side */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} variants={fadeIn}>
            <p className="text-lg font-semibold uppercase tracking-widest text-slate mb-2">
              Testimonials
            </p>
            <h2 className="section-heading text-left text-4xl sm:text-[3.25rem] font-bold text-ink leading-tight max-w-[450px]">
              What People Say
              <br />
              About Us.
            </h2>
            
            {/* Navigation Dots */}
            <div className="mt-16 flex items-center gap-6">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-3 w-3 rounded-full transition-all duration-300 ${
                    currentIndex === idx ? "bg-ink" : "bg-[#E5E5E5]"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </motion.div>

          {/* Right Cards Side: Deck Animation */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeIn}
            className="relative min-h-[400px] w-full"
          >
            {testimonials.map((testimonial, idx) => {
              // Calculate index relative to current (0 = active, 1 = next/background, 2 = hidden)
              const relativeIndex = (idx - currentIndex + testimonials.length) % testimonials.length;
              
              const isActive = relativeIndex === 0;
              const isNext = relativeIndex === 1;

              // Animate directly between states for a deck-shuffle effect
              let animateState = {};
              if (isActive) {
                animateState = { opacity: 1, y: 0, x: 0, zIndex: 10, scale: 1 };
              } else if (isNext) {
                // Background card positions itself underneath and staggered right
                animateState = { opacity: 1, y: 80, x: 30, zIndex: 0, scale: 1 };
              } else {
                // Hide inactive cards higher up, sliding out to make room
                animateState = { opacity: 0, y: -40, x: 0, zIndex: -1, scale: 0.95 };
              }

              return (
                <motion.div
                  key={testimonial.id}
                  animate={animateState}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute top-0 left-0 w-full max-w-[500px] bg-white rounded-[10px] shadow-[0_20px_40px_rgba(0,0,0,0.06)] px-8 pt-8 pb-10 sm:px-10 border border-[#F7F7F7]"
                >
                  {/* Hide avatar slightly ahead of transition if inactive */}
                  <motion.div
                    animate={{ opacity: isActive ? 1 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="absolute -left-5 -top-5 sm:-left-8 sm:-top-8 w-[68px] h-[68px] rounded-full overflow-hidden shadow-sm z-20 pointer-events-none"
                  >
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      width={68}
                      height={68}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  
                  <p className="text-[1.05rem] leading-[1.8] text-slate font-medium">
                    {testimonial.text}
                  </p>
                  <div className="mt-8">
                    <h3 className="text-xl font-bold text-slate mb-1">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm font-medium text-slate">
                      {testimonial.location}
                    </p>
                  </div>
                </motion.div>
              );
            })}

            {/* Arrows Navigation placed absolutely relative to container so they sit statically relative to cards */}
            <div className="absolute top-[35%] -right-2 lg:-right-8 -translate-y-1/2 hidden lg:flex flex-col gap-10 z-30">
              <button
                type="button"
                onClick={prevTestimonial}
                aria-label="Previous testimonial"
                className="text-slate hover:text-ink transition-colors hover:-translate-y-1 active:scale-95 duration-200"
              >
                <ChevronUp size={28} />
              </button>
              <button
                type="button"
                onClick={nextTestimonial}
                aria-label="Next testimonial"
                className="text-slate hover:text-ink transition-colors hover:translate-y-1 active:scale-95 duration-200"
              >
                <ChevronDown size={28} />
              </button>
            </div>
            
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
