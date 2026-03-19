import Image from "next/image";
import Link from "next/link";
import Container from "@/ui/Container";

const footerColumns = [
  {
    title: "Company",
    links: ["About", "Careers", "Mobile"],
  },
  {
    title: "Contact",
    links: ["Help/FAQ", "Press", "Affilates"],
  },
  {
    title: "More",
    links: ["Airlinefees", "Airline", "Low fare tips"],
  },
];

const socialIcons = [
  { src: "/images/social-facebook.svg", alt: "Facebook" },
  { src: "/images/insta1.svg", alt: "Instagram", isSpecial: true },
  { src: "/images/social-twitter.svg", alt: "Twitter" },
];

export default function Footer() {
  return (
    <footer className="pb-10 pt-20 sm:pt-24 bg-white relative z-10">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.5fr_0.8fr_0.8fr_0.8fr_1.2fr] lg:gap-8 lg:items-start text-left">
          
          <div className="max-w-[260px]">
            <Link href="/" className="font-poppins text-[2.75rem] font-medium text-ink leading-none block mb-4">
              Jadoo.
            </Link>
            <p className="mt-4 text-[0.85rem] font-medium leading-[1.6] text-slate pr-4">
              Book your trip in minute, get full
              <br />
              Control for much longer.
            </p>
          </div>

          {footerColumns.map((column) => (
            <div key={column.title} className="flex flex-col">
              <h3 className="text-[1.35rem] font-bold text-[#080809] mb-6 tracking-wide">
                {column.title}
              </h3>
              <div className="flex flex-col gap-4 text-base leading-none font-medium text-slate">
                {column.links.map((link) => (
                  <Link key={link} href="#" className="hover:text-ink transition-colors">
                    {link}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          <div className="flex flex-col items-start lg:items-start">
            {/* Social Icons */}
            <div className="flex items-start gap-5">
              {socialIcons.map((icon) => (
                <Link
                  key={icon.alt}
                  href="#"
                  className="flex h-[46px] w-[46px] items-center justify-center rounded-full bg-white shadow-[0_12px_30px_rgba(0,0,0,0.08)]"
                >
                  <Image src={icon.src} alt={icon.alt} width={46} height={46} />
                </Link>
              ))}
            </div>

            {/* Discover App */}
            <p className="mt-6 text-[1.25rem] font-medium text-slate tracking-wide w-full lg:text-start">
              Discover our app
            </p>
            
            <div className="mt-4 flex flex-wrap lg:justify-center gap-3">
              <Link href="#" className="hover:opacity-90 transition-opacity">
                <Image src="/images/playStore.svg" alt="Get it on Google Play" width={110} height={35} className="h-[35px] w-auto" />
              </Link>
              <Link href="#" className="hover:opacity-90 transition-opacity">
                <Image src="/images/apple-store.svg" alt="Available on the Apple Store" width={110} height={35} className="h-[35px] w-auto" />
              </Link>
            </div>
          </div>
        </div>

        <p className="mt-20 text-center text-sm font-medium text-slate">
          All rights reserved@jadoo.co
        </p>
      </Container>
    </footer>
  );
}
