"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Building2, Heart } from "lucide-react";
import Image from "next/image";
import fadeIn from "@/animations/fadeIn";
import slideUp from "@/animations/slideUp";
import Card from "@/ui/Card";
import Container from "@/ui/Container";

const steps = [
  {
    title: "Choose Destination",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
    color: "bg-[#F0BB1F]",
    icon: "/images/step-destination.svg",
  },
  {
    title: "Make Payment",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
    color: "bg-[#F15A2B]",
    icon: "/images/step-payment.svg",
  },
  {
    title: "Reach Airport on Selected Date",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
    color: "bg-[#006380]",
    icon: "/images/step-airport.svg",
  },
];

export default function BookingSteps() {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <section id="bookings" className="relative overflow-hidden pb-16 pt-10 sm:pb-20 lg:pb-28 lg:pt-20">
      <div className="pointer-events-none absolute right-[8%] top-[14%] hidden h-[420px] w-[420px] rounded-full bg-[#59B1E6]/20 blur-[90px] lg:block" />

      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-[0.96fr_1fr] lg:gap-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={slideUp}
          >
            <p className="text-left text-lg font-semibold text-slate">
              Easy and Fast
            </p>
            <h2 className="section-heading mt-4 max-w-[520px] text-left">
              Book Your Next Trip
              <br />
              In 3 Easy Steps
            </h2>

            <div className="mt-10 space-y-12">
              {steps.map((step) => (
                <div key={step.title} className="flex items-start gap-5">
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-[13px] mt-3 ${step.color}`}
                  >
                    <Image src={step.icon} alt="" width={22} height={22} />
                  </div>
                  <div className="max-w-[400px]">
                    <h3 className="text-base font-bold text-slate">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-base  text-slate">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeIn}
            className="relative mx-auto w-full max-w-[485px]"
          >
            <Card className="relative mx-auto w-full max-w-[370px] p-6 pb-8">
              <Image
                src="/images/greece-img.png"
                alt="Trip to Greece"
                width={321}
                height={161}
                className="h-auto w-full rounded-[24px]"
              />
              <h3 className="mt-6 text-[1.15rem] font-medium tracking-[0.015em] text-[#080809]">
                Trip To Greece
              </h3>
              <p className="mt-4 text-lg text-[#84829A]">
                14-29 June | by Robbin joseph
              </p>
              <div className="mt-5 flex items-center gap-4 text-[#84829A]">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F5F5F5]">
                  <Image
                    src="/images/leaf.svg"
                    alt="Leaf"
                    width={16}
                    height={16}
                  />
                </span>
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F5F5F5]">
                  <Image
                    src="/images/map.svg"
                    alt="Map"
                    width={16}
                    height={16}
                  />
                </span>
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F5F5F5]">
                  <Image
                    src="/images/send.svg"
                    alt="Send"
                    width={16}
                    height={16}
                  />
                </span>
              </div>
              <div className="mt-7 flex items-center justify-between">
                <div className="flex items-center gap-4 text-[#84829A]">
                  <Building2 size={18} />
                  <span className="text-lg">24 people going</span>
                </div>
                <Heart
                  size={20}
                  onClick={() => setIsLiked(!isLiked)}
                  className={`cursor-pointer transition-transform hover:scale-110 active:scale-95 ${
                    isLiked ? "fill-[#4152CA] text-[#4152CA]" : "text-[#4152CA]"
                  }`}
                />
              </div>
            </Card>

            <div className="absolute right-0 top-[66%] w-full max-w-[278px] -translate-y-1/2 rounded-[18px] bg-white p-5 shadow-card sm:right-[-18%]">
              <div className="flex gap-4">
                <Image
                  src="/images/rome-trip.svg"
                  alt="Trip to Rome"
                  width={50}
                  height={50}
                  className="h-[50px] w-[50px] rounded-full"
                />
                <div className="flex-1">
                  <p className="text-sm text-[#84829A]">Ongoing</p>
                  <h4 className="mt-1 text-[1.12rem] font-medium text-[#080809]">
                    Trip to rome
                  </h4>
                  <p className="mt-2 text-sm text-[#84829A]">
                    <span className="text-[#8A79DF]">40%</span> completed
                  </p>
                  <div className="mt-3 h-[5px] rounded-full bg-[#F5F5F5]">
                    <div className="h-full w-[40%] rounded-full bg-[#8A79DF]" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
