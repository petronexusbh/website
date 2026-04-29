import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

const stats = [
  { value: "25+", label: "Years of expertise" },
  { value: "140+", label: "Projects delivered" },
  { value: "38", label: "Countries served" },
  { value: "60+", label: "Technical specialists" },
];

const services = [
  {
    number: "01",
    title: "Reservoir Engineering",
    description:
      "Comprehensive reservoir characterisation, simulation and production optimisation studies to maximise hydrocarbon recovery.",
  },
  {
    number: "02",
    title: "Process Engineering",
    description:
      "Front-end engineering design, FEED studies and detailed process engineering for upstream and downstream facilities.",
  },
  {
    number: "03",
    title: "Subsurface Geoscience",
    description:
      "Integrated geological and geophysical interpretation, prospect assessment and field development planning.",
  },
  {
    number: "04",
    title: "HSE & Risk Management",
    description:
      "Safety case development, HAZOP/HAZID, quantitative risk assessment and regulatory compliance consultancy.",
  },
  {
    number: "05",
    title: "Asset Integrity",
    description:
      "Corrosion management, inspection strategy, remaining life assessment and fitness-for-service evaluations.",
  },
  {
    number: "06",
    title: "Project Management",
    description:
      "End-to-end project delivery, technical assurance, independent verification and EPCM oversight.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
        {/* Decorative diagonal */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-graphite/40 to-transparent" />
          <div className="absolute bottom-0 left-0 w-px h-2/3 bg-gradient-to-t from-gold/30 to-transparent" />
          <div className="absolute top-1/4 right-1/4 w-80 h-80 rounded-full bg-gold/3 blur-3xl" />
          <div className="absolute bottom-1/3 left-1/3 w-60 h-60 rounded-full bg-gold/4 blur-3xl" />
        </div>

        {/* Corner ornaments */}
        <div className="absolute top-28 left-6 lg:left-12">
          <div className="w-12 h-px bg-gold/40" />
          <div className="w-px h-12 bg-gold/40 mt-0" />
        </div>
        <div className="absolute bottom-12 right-6 lg:right-12">
          <div className="w-px h-12 bg-gold/40 ml-auto" />
          <div className="w-12 h-px bg-gold/40" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 pt-20">
          <div className="max-w-4xl">
            {/* Eyebrow */}
            <div className="flex items-center gap-4 mb-8 animate-fade-in">
              <div className="h-px w-12 bg-gold" />
              <span className="font-mono text-[10px] tracking-[0.4em] uppercase text-gold">
                Oil & Gas · Engineering · Scientific · Technical
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-display font-light leading-none mb-8">
              <span
                className="block text-5xl md:text-7xl lg:text-8xl text-platinum animate-fade-up"
                style={{ animationDelay: "0.1s", animationFillMode: "both" }}
              >
                Engineering
              </span>
              <span
                className="block text-5xl md:text-7xl lg:text-8xl text-platinum animate-fade-up"
                style={{ animationDelay: "0.25s", animationFillMode: "both" }}
              >
                excellence
              </span>
              <span
                className="block text-5xl md:text-7xl lg:text-8xl text-gold-gradient animate-fade-up italic"
                style={{ animationDelay: "0.4s", animationFillMode: "both" }}
              >
                without compromise.
              </span>
            </h1>

            {/* Body */}
            <p
              className="text-silver text-lg max-w-xl leading-relaxed mb-12 animate-fade-up"
              style={{ animationDelay: "0.6s", animationFillMode: "both" }}
            >
              Petronexus delivers specialist engineering, scientific and
              technical consulting to the global oil & gas industry — combining
              decades of sector expertise with rigorous analytical precision.
            </p>

            {/* CTAs */}
            <div
              className="flex flex-col sm:flex-row gap-4 animate-fade-up"
              style={{ animationDelay: "0.75s", animationFillMode: "both" }}
            >
              <Link href="/services" className="btn-primary">
                <span>Explore Services</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="relative z-10"
                >
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
              <Link href="/about" className="btn-outline">
                <span>Our Story</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in" style={{ animationDelay: "1.2s", animationFillMode: "both" }}>
          <div className="w-px h-8 bg-gradient-to-b from-gold/60 to-transparent animate-pulse" />
          <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-ash">
            Scroll
          </span>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-steel bg-graphite/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-steel">
            {stats.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 100}>
                <div className="p-8 lg:p-10 text-center">
                  <div className="font-display text-4xl lg:text-5xl font-light text-gold-light mb-2">
                    {stat.value}
                  </div>
                  <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-ash">
                    {stat.label}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT TEASER */}
      <section className="py-28 lg:py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <ScrollReveal>
              <div className="relative">
                {/* Decorative frame */}
                <div className="absolute -top-4 -left-4 w-24 h-24 border-t border-l border-gold/30" />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b border-r border-gold/30" />

                <div className="bg-steel/40 p-px">
                  <div className="bg-graphite p-10 lg:p-12 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 blur-2xl" />
                    <div className="font-mono text-[10px] tracking-[0.4em] uppercase text-gold mb-6">
                      Est. 2001
                    </div>
                    <h2 className="font-display text-3xl lg:text-4xl font-light text-platinum leading-snug mb-6">
                      Two decades of
                      <br />
                      <em className="text-gold-gradient">trusted expertise</em>
                    </h2>
                    <p className="text-silver text-sm leading-relaxed mb-6">
                      Founded by industry veterans with backgrounds spanning
                      major operators, independents and service companies,
                      Petronexus has built a reputation for rigorous independent
                      analysis and pragmatic technical solutions.
                    </p>
                    <p className="text-silver text-sm leading-relaxed">
                      Our multidisciplinary team operates at the intersection of
                      engineering, geoscience and commercial intelligence — providing
                      clients with the insight needed to make confident decisions in
                      complex hydrocarbon environments.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-px w-8 bg-gold" />
                  <span className="font-mono text-[10px] tracking-[0.4em] uppercase text-gold">
                    Why Petronexus
                  </span>
                </div>
                <h2 className="font-display text-4xl lg:text-5xl font-light text-platinum leading-tight mb-10">
                  Precision at every
                  <br />
                  stage of the cycle
                </h2>

                <div className="space-y-6">
                  {[
                    {
                      title: "Independent Thinking",
                      desc: "We are beholden only to technical truth — never to vendor relationships or commercial interests.",
                    },
                    {
                      title: "Deep Sector Knowledge",
                      desc: "Our consultants average 18 years' direct industry experience across upstream, midstream and downstream.",
                    },
                    {
                      title: "Global Reach",
                      desc: "With projects spanning 38 countries across six continents, we understand the complexity of international operations.",
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-5 group">
                      <div className="flex-shrink-0 w-px bg-steel group-hover:bg-gold transition-colors duration-300 mt-1" />
                      <div>
                        <h3 className="font-mono text-xs tracking-wider text-gold mb-2 uppercase">
                          {item.title}
                        </h3>
                        <p className="text-silver text-sm leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-10">
                  <Link href="/about" className="btn-outline">
                    <span>Learn More About Us</span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M3 8h10M9 4l4 4-4 4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-28 lg:py-36 bg-carbon border-y border-steel">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-px w-8 bg-gold" />
                  <span className="font-mono text-[10px] tracking-[0.4em] uppercase text-gold">
                    Core Capabilities
                  </span>
                </div>
                <h2 className="font-display text-4xl lg:text-5xl font-light text-platinum">
                  Our services
                </h2>
              </div>
              <Link
                href="/services"
                className="font-mono text-xs tracking-[0.2em] uppercase text-silver hover:text-gold transition-colors duration-300 gold-underline"
              >
                View all services →
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-steel">
            {services.map((service, i) => (
              <ScrollReveal key={service.number} delay={i * 80}>
                <div className="service-card bg-carbon p-8 lg:p-10 h-full group cursor-default">
                  <div className="font-mono text-[10px] tracking-[0.4em] text-ash mb-6 group-hover:text-gold transition-colors duration-300">
                    {service.number}
                  </div>
                  <h3 className="font-display text-xl font-light text-platinum mb-4 group-hover:text-gold-light transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-silver text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="py-28 lg:py-36 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-graphite to-obsidian" />
        <div className="absolute inset-0 grid-bg opacity-50" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

        <div className="relative max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <ScrollReveal>
            <div className="font-mono text-[10px] tracking-[0.5em] uppercase text-gold mb-6">
              Enquire Today
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-platinum mb-8 leading-tight">
              Ready to bring rigour
              <br />
              <em className="text-gold-gradient">to your next project?</em>
            </h2>
            <p className="text-silver text-base max-w-lg mx-auto mb-12 leading-relaxed">
              Whether you are planning a major development, require independent
              assurance or need specialist technical support — our team is ready
              to engage.
            </p>
            <Link href="/contact" className="btn-primary inline-flex">
              <span>Start a Conversation</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="relative z-10"
              >
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
