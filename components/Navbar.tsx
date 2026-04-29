"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-obsidian/95 backdrop-blur-md border-b border-steel"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex flex-col leading-none group">
            <span className="font-display text-xl font-light tracking-[0.25em] text-gold-light uppercase">
              Petronexus
            </span>
            <span className="font-mono text-[9px] tracking-[0.4em] text-ash uppercase mt-0.5">
              Limited
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-mono text-xs tracking-[0.2em] uppercase transition-colors duration-300 gold-underline ${
                  pathname === link.href
                    ? "text-gold"
                    : "text-silver hover:text-platinum"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <Link
            href="/contact"
            className="hidden md:flex btn-outline py-2.5 px-5 text-[10px]"
          >
            <span>Enquire Now</span>
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-px bg-gold transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-4 h-px bg-gold transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-px bg-gold transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-500 overflow-hidden ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="bg-carbon border-t border-steel px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`font-mono text-xs tracking-[0.3em] uppercase ${
                pathname === link.href ? "text-gold" : "text-silver"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="gold-rule mt-2" />
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="font-mono text-xs tracking-[0.3em] uppercase text-gold"
          >
            Enquire Now →
          </Link>
        </nav>
      </div>
    </header>
  );
}
