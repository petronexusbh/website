import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";

const services = [
  {
    id: "01",
    title: "Reservoir Engineering",
    category: "Subsurface",
    summary:
      "Rigorous reservoir characterisation, dynamic simulation and production optimisation to unlock maximum recoverable value from your assets.",
    deliverables: [
      "Static & dynamic reservoir modelling",
      "Material balance and production analysis",
      "History matching and forecast uncertainty",
      "EOR screening and design",
      "Depletion strategy and well planning",
      "Reserves and resources assessment (SPE-PRMS)",
    ],
  },
  {
    id: "02",
    title: "Subsurface Geoscience",
    category: "Subsurface",
    summary:
      "Integrated geological and geophysical interpretation to reduce technical risk and improve confidence in subsurface decisions.",
    deliverables: [
      "Seismic interpretation and attribute analysis",
      "Petrophysical evaluation and formation evaluation",
      "Prospect and play assessment",
      "Basin modelling and petroleum systems",
      "Structural and stratigraphic analysis",
      "Field development geological studies",
    ],
  },
  {
    id: "03",
    title: "Process & Facilities Engineering",
    category: "Engineering",
    summary:
      "Comprehensive process engineering from concept through detailed design, ensuring safe, efficient and cost-effective facilities.",
    deliverables: [
      "Concept screening and pre-FEED studies",
      "Front-end engineering design (FEED)",
      "Process flow diagram and P&ID development",
      "Equipment sizing and selection",
      "Control philosophy and ICSS specifications",
      "Flare system and relief load studies",
    ],
  },
  {
    id: "04",
    title: "Asset Integrity & Inspection",
    category: "Engineering",
    summary:
      "Maintaining the safe and reliable operation of ageing and complex assets through robust integrity management frameworks.",
    deliverables: [
      "Integrity management plans and procedures",
      "Corrosion and materials engineering",
      "Inspection programme development",
      "Fitness-for-service and remaining life assessment",
      "Pressure vessel and piping assessments",
      "Anomaly management and risk ranking",
    ],
  },
  {
    id: "05",
    title: "HSE & Risk Management",
    category: "Risk & Assurance",
    summary:
      "Independent safety and risk consultancy to support regulatory compliance, safety case development and major hazard management.",
    deliverables: [
      "Safety case and safety report preparation",
      "HAZID and HAZOP facilitation",
      "Quantitative risk assessment (QRA)",
      "Environmental impact assessment support",
      "Emergency response planning",
      "Regulatory compliance auditing",
    ],
  },
  {
    id: "06",
    title: "Project Management & Assurance",
    category: "Risk & Assurance",
    summary:
      "Independent verification, technical assurance and project management support to keep complex programmes on track.",
    deliverables: [
      "Independent project review and health checks",
      "Technical assurance and verification",
      "Owner's engineer and EPCM oversight",
      "Cost and schedule benchmarking",
      "Scope change and variation management",
      "Commissioning and start-up support",
    ],
  },
  {
    id: "07",
    title: "Commercial & Transactions",
    category: "Advisory",
    summary:
      "Expert technical support for M&A, asset transactions, financing and arbitration in the global oil & gas market.",
    deliverables: [
      "Technical due diligence",
      "Competent person reports (CPR)",
      "Asset valuation and economic modelling",
      "PSA/JOA technical review",
      "Expert witness and dispute support",
      "Lender's technical advisor services",
    ],
  },
  {
    id: "08",
    title: "Energy Transition Advisory",
    category: "Advisory",
    summary:
      "Supporting operators and investors in navigating the energy transition through technical and commercial advisory services.",
    deliverables: [
      "Decarbonisation strategy and emissions benchmarking",
      "CCS and CCUS feasibility and design",
      "Hydrogen production and transport studies",
      "Electrification and power generation studies",
      "Asset repurposing and decommissioning",
      "Carbon credit and ESG reporting support",
    ],
  },
];

const categories = ["All", "Subsurface", "Engineering", "Risk & Assurance", "Advisory"];

export default function ServicesPage() {
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
                Services
              </span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-light text-platinum leading-tight mb-8">
              Specialist capabilities
              <br />
              <em className="text-gold-gradient">across the value chain.</em>
            </h1>
            <p className="text-silver text-lg leading-relaxed max-w-xl">
              From subsurface evaluation to commercial transactions, our
              multidisciplinary teams deliver integrated technical solutions
              tailored to the demands of each engagement.
            </p>
          </div>
        </div>
      </section>

      {/* CATEGORY TAGS */}
      <section className="border-y border-steel bg-carbon">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex gap-0 overflow-x-auto">
            {categories.map((cat, i) => (
              <div
                key={cat}
                className={`flex-shrink-0 px-6 py-5 font-mono text-[10px] tracking-[0.3em] uppercase border-r border-steel cursor-default transition-colors duration-200 ${
                  i === 0
                    ? "text-gold bg-graphite"
                    : "text-ash hover:text-silver"
                }`}
              >
                {cat}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES LIST */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="space-y-6">
            {services.map((service, i) => (
              <ScrollReveal key={service.id} delay={i * 60}>
                <div className="border border-steel hover:border-gold/30 transition-colors duration-400 group">
                  <div className="p-8 lg:p-10">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      {/* Left */}
                      <div className="lg:col-span-1">
                        <div className="flex items-center gap-4 mb-4">
                          <span className="font-mono text-[10px] tracking-[0.4em] text-ash">
                            {service.id}
                          </span>
                          <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-gold border border-gold/30 px-2 py-0.5">
                            {service.category}
                          </span>
                        </div>
                        <h2 className="font-display text-2xl lg:text-3xl font-light text-platinum group-hover:text-gold-light transition-colors duration-300 mb-4">
                          {service.title}
                        </h2>
                        <p className="text-silver text-sm leading-relaxed">
                          {service.summary}
                        </p>
                      </div>

                      {/* Right — deliverables */}
                      <div className="lg:col-span-2">
                        <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-ash mb-4">
                          Typical Deliverables
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {service.deliverables.map((item) => (
                            <div
                              key={item}
                              className="flex items-start gap-3 text-silver text-sm"
                            >
                              <span className="text-gold/50 mt-1 text-xs">—</span>
                              {item}
                            </div>
                          ))}
                        </div>
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
      <section className="py-20 border-t border-steel">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <div className="text-center">
              <h3 className="font-display text-3xl lg:text-4xl font-light text-platinum mb-4">
                Require a bespoke scope?
              </h3>
              <p className="text-silver text-sm mb-8 max-w-md mx-auto">
                Many of our most impactful engagements begin with a conversation.
                Tell us your challenge and we will propose a tailored approach.
              </p>
              <Link href="/contact" className="btn-primary inline-flex">
                <span>Discuss Your Requirements</span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
