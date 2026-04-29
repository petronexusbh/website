import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";

const team = [
  {
    name: "Dr. Jonathan Hargreaves",
    title: "Founder & Managing Director",
    background: "Formerly VP Reservoir Engineering, Shell International",
    expertise: "Reservoir Simulation · Field Development Planning",
  },
  {
    name: "Dr. Amara Osei-Bonsu",
    title: "Director, Geoscience",
    background: "Former Principal Geophysicist, BP Exploration",
    expertise: "Seismic Interpretation · Prospect Assessment",
  },
  {
    name: "Claire Whitmore",
    title: "Director, Process Engineering",
    background: "Former Lead Process Engineer, TotalEnergies",
    expertise: "FEED Studies · Facilities Optimisation",
  },
  {
    name: "Mikhail Sorokin",
    title: "Director, HSE & Risk",
    background: "Former Head of Safety, Equinor",
    expertise: "HAZOP/HAZID · Risk Assessment · Regulatory",
  },
];

const values = [
  {
    icon: "◈",
    title: "Technical Integrity",
    desc: "We never compromise our analysis for commercial convenience. Our recommendations are grounded in evidence, not expectation.",
  },
  {
    icon: "◉",
    title: "Client Focus",
    desc: "We immerse ourselves in our clients' challenges — understanding their business context, constraints and strategic objectives.",
  },
  {
    icon: "◇",
    title: "Rigorous Methodology",
    desc: "Every deliverable is subject to internal peer review. Quality is not a standard we aspire to — it is a discipline we enforce.",
  },
  {
    icon: "◎",
    title: "Collaborative Spirit",
    desc: "We believe the best outcomes emerge from genuine partnership — integrating seamlessly with client teams across disciplines.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-8 bg-gold" />
              <span className="font-mono text-[10px] tracking-[0.4em] uppercase text-gold">
                About Us
              </span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-light text-platinum leading-tight mb-8">
              A legacy built on
              <br />
              <em className="text-gold-gradient">technical truth.</em>
            </h1>
            <p className="text-silver text-lg leading-relaxed max-w-xl">
              For over two decades, Petronexus has served as a trusted
              independent advisor to operators, financiers and governments
              navigating the complexities of the oil & gas sector.
            </p>
          </div>
        </div>
      </section>

      {/* HISTORY */}
      <section className="py-20 border-t border-steel">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <ScrollReveal>
              <div className="space-y-6">
                <h2 className="font-display text-3xl lg:text-4xl font-light text-platinum">
                  Our founding story
                </h2>
                <p className="text-silver text-sm leading-relaxed">
                  Petronexus was founded in 2001 by a group of senior engineers
                  who had spent their careers inside major oil companies and grew
                  frustrated by the lack of truly independent, rigorous technical
                  counsel available to the market.
                </p>
                <p className="text-silver text-sm leading-relaxed">
                  Beginning with a small team of five specialists in London, we
                  built our reputation one engagement at a time — earning trust
                  through the quality and candour of our work, not through
                  marketing or scale. Today, we employ over 60 technical
                  professionals and have delivered projects across six continents.
                </p>
                <p className="text-silver text-sm leading-relaxed">
                  Despite our growth, our founding ethos remains unchanged: every
                  client engagement receives the same calibre of senior-led
                  analysis and the same uncompromising commitment to accuracy.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <div className="space-y-4">
                {[
                  { year: "2001", event: "Founded in London with 5 specialists" },
                  { year: "2005", event: "First international engagement — Nigeria deepwater" },
                  { year: "2009", event: "Expanded into LNG and gas monetisation" },
                  { year: "2013", event: "Opened offices in Aberdeen and Houston" },
                  { year: "2017", event: "Surpassed 100 international project deliveries" },
                  { year: "2021", event: "Energy transition advisory practice launched" },
                  { year: "2025", event: "60+ specialists, presence in 38 countries" },
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="font-mono text-xs tracking-wider text-gold w-12 flex-shrink-0 pt-0.5">
                      {item.year}
                    </div>
                    <div className="flex gap-4 items-start flex-1">
                      <div className="w-px self-stretch bg-steel group-hover:bg-gold/40 transition-colors duration-300 mt-1" />
                      <p className="text-silver text-sm pb-4">{item.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-28 bg-carbon border-y border-steel">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="h-px w-8 bg-gold" />
                <span className="font-mono text-[10px] tracking-[0.4em] uppercase text-gold">
                  What We Stand For
                </span>
                <div className="h-px w-8 bg-gold" />
              </div>
              <h2 className="font-display text-4xl lg:text-5xl font-light text-platinum">
                Our core values
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-steel">
            {values.map((value, i) => (
              <ScrollReveal key={value.title} delay={i * 100}>
                <div className="bg-carbon p-10 lg:p-12 group hover:bg-graphite transition-colors duration-300">
                  <div className="text-2xl text-gold mb-6 font-light">
                    {value.icon}
                  </div>
                  <h3 className="font-display text-xl font-light text-platinum mb-4 group-hover:text-gold-light transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-silver text-sm leading-relaxed">
                    {value.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="py-28 lg:py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-px w-8 bg-gold" />
                <span className="font-mono text-[10px] tracking-[0.4em] uppercase text-gold">
                  Leadership
                </span>
              </div>
              <h2 className="font-display text-4xl lg:text-5xl font-light text-platinum">
                Senior team
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {team.map((member, i) => (
              <ScrollReveal key={member.name} delay={i * 100}>
                <div className="border border-steel hover:border-gold/30 transition-colors duration-400 p-8 group">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-display text-xl font-light text-platinum group-hover:text-gold-light transition-colors duration-300 mb-1">
                        {member.name}
                      </h3>
                      <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-gold">
                        {member.title}
                      </div>
                    </div>
                    <div className="w-10 h-10 border border-steel flex items-center justify-center text-ash group-hover:border-gold/30 group-hover:text-gold transition-all duration-300">
                      <span className="text-sm">◈</span>
                    </div>
                  </div>
                  <p className="text-ash text-xs mb-3 font-mono">
                    {member.background}
                  </p>
                  <div className="gold-rule my-4" />
                  <p className="text-silver text-xs font-mono tracking-wider">
                    {member.expertise}
                  </p>
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
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 p-10 lg:p-12 border border-steel bg-graphite/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gold/4 blur-3xl" />
              <div>
                <h3 className="font-display text-2xl lg:text-3xl font-light text-platinum mb-2">
                  Ready to work together?
                </h3>
                <p className="text-silver text-sm">
                  Contact us to discuss your project requirements.
                </p>
              </div>
              <Link href="/contact" className="btn-primary flex-shrink-0">
                <span>Get in Touch</span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
