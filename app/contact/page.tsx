"use client";
import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";

const offices = [
  {
    city: "London",
    address: "One Canada Square, Canary Wharf, London E14 5AB, United Kingdom",
    phone: "+44 (0) 20 7123 4567",
    email: "london@petronexus.com",
    type: "Headquarters",
  },
  {
    city: "Aberdeen",
    address: "Silver Fin Building, 10 Silver Street, Aberdeen AB10 1EJ, United Kingdom",
    phone: "+44 (0) 1224 123 456",
    email: "aberdeen@petronexus.com",
    type: "Regional Office",
  },
  {
    city: "Houston",
    address: "1000 Louisiana Street, Suite 5800, Houston, TX 77002, USA",
    phone: "+1 (713) 123 4567",
    email: "houston@petronexus.com",
    type: "Americas Office",
  },
];

const enquiryTypes = [
  "General Enquiry",
  "Technical Services",
  "Commercial Advisory",
  "Transactions / Due Diligence",
  "Energy Transition",
  "Partnership / Teaming",
  "Careers",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    type: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
                Contact
              </span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-light text-platinum leading-tight mb-8">
              Let us begin
              <br />
              <em className="text-gold-gradient">a conversation.</em>
            </h1>
            <p className="text-silver text-lg leading-relaxed max-w-xl">
              Whether you have a defined requirement or are at the early stages
              of scoping a project, we welcome the opportunity to understand
              your needs.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT FORM + INFO */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              <ScrollReveal>
                {!submitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="font-mono text-[10px] tracking-[0.4em] uppercase text-gold mb-8">
                      Enquiry Form
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {[
                        { name: "name", label: "Full Name *", type: "text", required: true },
                        { name: "company", label: "Company", type: "text", required: false },
                        { name: "email", label: "Email Address *", type: "email", required: true },
                        { name: "phone", label: "Phone Number", type: "tel", required: false },
                      ].map((field) => (
                        <div key={field.name}>
                          <label className="block font-mono text-[9px] tracking-[0.3em] uppercase text-ash mb-2">
                            {field.label}
                          </label>
                          <input
                            type={field.type}
                            name={field.name}
                            required={field.required}
                            value={formData[field.name as keyof typeof formData]}
                            onChange={handleChange}
                            className="w-full bg-graphite border border-steel hover:border-gold/30 focus:border-gold/60 outline-none text-platinum text-sm px-4 py-3 transition-colors duration-200 font-body"
                          />
                        </div>
                      ))}
                    </div>

                    {/* Enquiry type */}
                    <div>
                      <label className="block font-mono text-[9px] tracking-[0.3em] uppercase text-ash mb-2">
                        Nature of Enquiry
                      </label>
                      <select
                        name="type"
                        value={formData.type}
                        onChange={handleChange}
                        className="w-full bg-graphite border border-steel hover:border-gold/30 focus:border-gold/60 outline-none text-platinum text-sm px-4 py-3 transition-colors duration-200 font-body appearance-none"
                      >
                        <option value="">Select type...</option>
                        {enquiryTypes.map((t) => (
                          <option key={t} value={t}>
                            {t}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block font-mono text-[9px] tracking-[0.3em] uppercase text-ash mb-2">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Please describe your project or requirement..."
                        className="w-full bg-graphite border border-steel hover:border-gold/30 focus:border-gold/60 outline-none text-platinum text-sm px-4 py-3 transition-colors duration-200 font-body resize-none placeholder:text-ash"
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <p className="font-mono text-[9px] tracking-wider text-ash">
                        All enquiries treated with strict confidentiality.
                      </p>
                      <button type="submit" className="btn-primary">
                        <span>Submit Enquiry</span>
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
                      </button>
                    </div>
                  </form>
                ) : (
                  <div className="border border-gold/30 bg-graphite/30 p-12 text-center">
                    <div className="text-3xl text-gold mb-6">◈</div>
                    <h3 className="font-display text-2xl font-light text-platinum mb-4">
                      Thank you for your enquiry.
                    </h3>
                    <p className="text-silver text-sm leading-relaxed max-w-sm mx-auto">
                      A member of our team will review your message and respond
                      within one business day. For urgent matters, please call
                      our London headquarters directly.
                    </p>
                  </div>
                )}
              </ScrollReveal>
            </div>

            {/* Info */}
            <div className="lg:col-span-2">
              <ScrollReveal delay={200}>
                <div className="space-y-8">
                  <div>
                    <div className="font-mono text-[10px] tracking-[0.4em] uppercase text-gold mb-6">
                      Our Offices
                    </div>
                    <div className="space-y-6">
                      {offices.map((office) => (
                        <div
                          key={office.city}
                          className="border border-steel p-6 hover:border-gold/30 transition-colors duration-300 group"
                        >
                          <div className="flex items-center justify-between mb-3">
                            <h3 className="font-display text-lg font-light text-platinum group-hover:text-gold-light transition-colors duration-300">
                              {office.city}
                            </h3>
                            <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-gold border border-gold/30 px-2 py-0.5">
                              {office.type}
                            </span>
                          </div>
                          <p className="text-ash text-xs leading-relaxed mb-3">
                            {office.address}
                          </p>
                          <div className="space-y-1">
                            <a
                              href={`tel:${office.phone}`}
                              className="block font-mono text-xs text-silver hover:text-gold transition-colors duration-200"
                            >
                              {office.phone}
                            </a>
                            <a
                              href={`mailto:${office.email}`}
                              className="block font-mono text-xs text-silver hover:text-gold transition-colors duration-200"
                            >
                              {office.email}
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="gold-rule" />

                  <div>
                    <div className="font-mono text-[10px] tracking-[0.4em] uppercase text-gold mb-4">
                      General Enquiries
                    </div>
                    <a
                      href="mailto:enquiries@petronexus.com"
                      className="block font-mono text-sm text-silver hover:text-gold transition-colors duration-200 mb-2"
                    >
                      enquiries@petronexus.com
                    </a>
                    <p className="text-ash text-xs leading-relaxed">
                      Responses within one business day.
                      <br />
                      Urgent matters: +44 (0) 20 7123 4567
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
