"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const navLinks = ["Destinations", "Hotels", "Flights", "Bookings"];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string,
  ) => {
    const element = document.getElementById(targetId);
    if (element) {
      e.preventDefault();
      const navbarHeight = 80;
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navbarHeight,
        behavior: "smooth",
      });
      setMobileOpen(false);
    } else {
      setMobileOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 px-3 sm:px-[6.2vw] lg:px-[10.27vw] transition-all duration-300 ${
        scrolled || mobileOpen
          ? "bg-[#FFF1DA]/45 backdrop-blur-xl card-shadow"
          : "bg-transparent"
      }`}
    >
      <div className="section-container flex items-center justify-between h-20">
        <Link href="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <Image
            src="/images/jadoo-logo.svg"
            alt="Jadoo"
            width={115}
            height={34}
          />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                onClick={(e) => handleScrollToSection(e, link.toLowerCase())}
                className="relative font-body text-body font-medium hover:text-foreground transition-colors
                  after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-[-4px]
                  after:left-0 after:bg-accent after:origin-bottom-right after:transition-transform
                  after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <button className="font-body text-foreground font-medium hover:text-accent transition-colors">
            Login
          </button>
          <button className="font-body border border-black text-foreground px-4 py-2 rounded-md hover:bg-foreground hover:text-primary-foreground transition-all duration-300">
            Sign up
          </button>
          <span className="flex gap-2 text-body font-body text-base cursor-pointer">
            EN <Image src="/images/chevron-down.svg" alt="Chevron Down" width={10} height={6} />
          </span>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden bg-card card-shadow"
        >
          <div className="section-container py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={(e) => handleScrollToSection(e, link.toLowerCase())}
                className="font-body text-body py-2"
              >
                {link}
              </a>
            ))}
            <div className="flex items-center justify-end gap-4">
              <button className="font-body text-foreground font-semibold">
                Login
              </button>
              <button className="font-body font-semibold bg-foreground text-primary-foreground px-6 py-2 rounded-md w-fit">
                Sign up
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
