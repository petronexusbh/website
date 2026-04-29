import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-carbon border-t border-steel">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-flex flex-col leading-none mb-6">
              <span className="font-display text-2xl font-light tracking-[0.25em] text-gold-light uppercase">
                Petronexus
              </span>
              <span className="font-mono text-[9px] tracking-[0.4em] text-ash uppercase mt-1">
                Limited
              </span>
            </Link>
            <p className="text-silver text-sm leading-relaxed max-w-sm mb-6">
              Engineering, scientific and technical consulting for the global
              oil & gas industry. Precision expertise. Proven results.
            </p>
            <div className="font-mono text-[10px] tracking-[0.2em] text-ash uppercase">
              Registered in England & Wales
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-mono text-[10px] tracking-[0.3em] uppercase text-gold mb-5">
              Navigation
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/services", label: "Services" },
                { href: "/industries", label: "Industries" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-mono text-xs text-silver hover:text-gold transition-colors duration-300 tracking-wider"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-mono text-[10px] tracking-[0.3em] uppercase text-gold mb-5">
              Contact
            </h4>
            <ul className="space-y-3 font-mono text-xs text-silver">
              <li>
                <a
                  href="mailto:enquiries@petronexus.com"
                  className="hover:text-gold transition-colors duration-300"
                >
                  enquiries@petronexus.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+447412815883"
                  className="hover:text-gold transition-colors duration-300"
                >
                  +44 7412 815 883
                </a>
              </li>
              <li className="text-ash leading-relaxed pt-2">
                One Canada Square<br />
                Canary Wharf<br />
                London, E14 5AB<br />
                United Kingdom
              </li>
            </ul>
          </div>
        </div>

        <div className="gold-rule mb-6" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-[10px] tracking-[0.2em] text-ash uppercase">
            © {year} Petronexus Limited. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Legal Notice"].map(
              (item) => (
                <span
                  key={item}
                  className="font-mono text-[10px] tracking-wider text-ash hover:text-silver transition-colors duration-300 cursor-pointer"
                >
                  {item}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
