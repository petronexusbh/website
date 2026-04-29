import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";

const industries = [
  {
    id: "01",
    title: "Upstream Exploration & Production",
    description:
      "From frontier exploration through mature field redevelopment, we support operators in unlocking subsurface value at every stage of asset lifecycle. Our teams have worked across virtually every major basin worldwide, including deepwater, ultra-deepwater, HPHT and unconventional plays.",
    capabilities: [
      "Exploration portfolio evaluation",
      "Appraisal and development planning",
      "Field development optimisation",
      "Mature field redevelopment",
      "Decommissioning planning",
    ],
    regions: "North Sea · Gulf of Mexico · West Africa · Middle East · Asia Pacific",
  },
  {
    id: "02",
    title: "Liquefied Natural Gas (LNG)",
    description:
      "Petronexus has extensive experience advising across the entire LNG chain — from upstream gas reservoirs through liquefaction facilities, shipping logistics and regasification terminals. We support project developers, buyers, sellers and financiers.",
    capabilities: [
      "LNG project concept studies",
      "Liquefaction plant FEED review",
      "Regas terminal design and assessment",
      "LNG supply and offtake advisory",
      "Technical due diligence for LNG assets",
    ],
    regions: "Australia · Qatar · USA · East Africa · SE Asia",
  },
  {
    id: "03",
    title: "Refining & Petrochemicals",
    description:
      "Our downstream capability covers the full spectrum of refinery engineering and petrochemical processing. We help clients optimise operating margins, improve reliability and meet increasingly stringent environmental performance standards.",
    capabilities: [
      "Refinery configuration studies",
      "Process unit debottlenecking",
      "Energy efficiency improvements",
      "Product quality and specifications",
      "Regulatory compliance engineering",
    ],
    regions: "Europe · Middle East · Asia · Americas",
  },
  {
    id: "04",
    title: "Pipelines & Terminals",
    description:
      "We provide independent engineering, integrity and commercial advisory services for onshore and offshore pipeline systems, bulk liquid terminals and associated infrastructure.",
    capabilities: [
      "Pipeline route selection and design",
      "Integrity management and inspection",
      "Cathodic protection studies",
      "Terminal operations review",
      "Tariff and commercial structuring support",
    ],
    regions: "Global",
  },
  {
    id: "05",
    title: "National Oil Companies",
    description:
      "We have a long track record of supporting NOCs in building technical capacity, managing strategic assets and navigating complex government relationships. Our advisory work spans technical studies to board-level strategic counsel.",
    capabilities: [
      "Capacity building and training",
      "Strategic asset evaluation",
      "Production sharing agreement support",
      "Government and regulatory advisory",
      "Technology transfer programmes",
    ],
    regions: "West Africa · MENA · SE Asia · Central Asia",
  },
  {
    id: "06",
    title: "Finance & Investment",
    description:
      "Banks, private equity houses and infrastructure funds rely on Petronexus for independent technical opinion when capital is at stake. Our competent person reports, due diligence reviews and expert witness services are trusted by the world's leading financial institutions.",
    capabilities: [
      "Competent person reports (CPR)",
      "Reserves certification",
      "Lender's technical advisor",
      "M&A technical due diligence",
      "Expert witness and arbitration support",
    ],
    regions: "Global",
  },
];

export default function IndustriesPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-8 bg-gold" />
              <span className="font-mono text-[10px] tracking-[0.4em] uppercase text-gold">
                Industries
              </span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-light text-platinum leading-tight mb-8">
              Deep sector fluency
              <br />
              <em className="text-gold-gradient">across the industry.</em>
            </h1>
            <p className="text-silver text-lg leading-relaxed max-w-xl">
              Our consultants have worked within the industry they advise — giving
              Petronexus an authenticity and contextual understanding that
              generalist advisors cannot replicate.
            </p>
          </div>
        </div>
      </section>

      {/* WORLD MAP INDICATOR */}
      <section className="border-y border-steel bg-graphite/20 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-ash">
              Active project presence across
            </div>
            <div className="flex gap-6 flex-wrap justify-center">
              {[
                "North Sea",
                "Gulf of Mexico",
                "West Africa",
                "Middle East",
                "Asia Pacific",
                "Latin America",
              ].map((region) => (
                <span
                  key={region}
                  className="font-mono text-[10px] tracking-[0.2em] uppercase text-silver border border-steel px-3 py-1.5"
                >
                  {region}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="space-y-6">
            {industries.map((industry, i) => (
              <ScrollReveal key={industry.id} delay={i * 80}>
                <div className="border border-steel hover:border-gold/30 transition-all duration-400 group overflow-hidden">
                  <div className="p-8 lg:p-10">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                      {/* Header */}
                      <div className="lg:col-span-2">
                        <div className="font-mono text-[10px] tracking-[0.4em] text-ash mb-4">
                          {industry.id}
                        </div>
                        <h2 className="font-display text-2xl lg:text-3xl font-light text-platinum group-hover:text-gold-light transition-colors duration-300 mb-6">
                          {industry.title}
                        </h2>
                        <p className="text-silver text-sm leading-relaxed mb-6">
                          {industry.description}
                        </p>
                        <div className="font-mono text-[9px] tracking-[0.2em] text-ash">
                          {industry.regions}
                        </div>
                      </div>

                      {/* Capabilities */}
                      <div className="lg:col-span-3 lg:pl-8 lg:border-l border-steel">
                        <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-ash mb-5">
                          Our Capabilities
                        </div>
                        <ul className="space-y-3">
                          {industry.capabilities.map((cap) => (
                            <li
                              key={cap}
                              className="flex items-start gap-4 text-silver text-sm"
                            >
                              <span className="text-gold mt-1.5 text-[8px]">◆</span>
                              {cap}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-steel bg-carbon">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <div className="text-center">
              <h3 className="font-display text-3xl lg:text-4xl font-light text-platinum mb-4">
                Your sector. Our expertise.
              </h3>
              <p className="text-silver text-sm mb-8 max-w-md mx-auto">
                No matter where your project sits in the value chain, our team has
                the experience to add value from day one.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/services" className="btn-outline inline-flex">
                  <span>View Our Services</span>
                </Link>
                <Link href="/contact" className="btn-primary inline-flex">
                  <span>Contact Us</span>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
