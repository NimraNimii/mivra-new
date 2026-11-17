
"use client";

import Image from "next/image";
import { useRef, useState, type FormEvent } from "react";

const WHATSAPP_NUMBER = "923427130326";
const SUPPORT_EMAIL = "mivraofficial8@gmail.com";

const EDITORIAL_IMAGE =
  "/images/editorial/womens-leather-editorial.png";

const enquiryTypes = [
  "Product & Size Enquiry",
  "Order & Delivery Support",
  "Returns & Exchanges",
  "Payment Enquiry",
  "Other Enquiry",
];

const labelClass =
  "mb-2.5 block text-[9px] font-semibold tracking-[0.22em] text-white/65";

const fieldClass =
  "w-full border border-white/15 bg-white/[0.035] px-4 py-4 text-[13px] text-white outline-none backdrop-blur-md transition duration-300 placeholder:text-white/35 hover:border-white/30 focus:border-[#C7AD8C] focus:bg-white/[0.07]";

export default function CustomerEnquirySection() {
  const formRef = useRef<HTMLFormElement>(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState(enquiryTypes[0]);
  const [product, setProduct] = useState("");
  const [message, setMessage] = useState("");

  function getEnquiryMessage() {
    return [
      "MIVRA — PRIVATE CONCIERGE",
      "",
      `Name: ${name.trim()}`,
      `Email: ${email.trim()}`,
      `Enquiry: ${category}`,
      `Product: ${product.trim() || "Not specified"}`,
      "",
      "Message:",
      message.trim(),
    ].join("\n");
  }

  function handleWhatsApp(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!formRef.current?.reportValidity()) return;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      getEnquiryMessage()
    )}`;

    window.open(url, "_blank", "noopener,noreferrer");
  }

  function handleEmail() {
    if (!formRef.current?.reportValidity()) return;

    const subject = encodeURIComponent(`MIVRA — ${category}`);
    const body = encodeURIComponent(getEnquiryMessage());

    window.location.href =
      `mailto:${SUPPORT_EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <section
      id="customer-care"
      aria-label="MIVRA private concierge"
    className="relative isolate overflow-hidden bg-[#090909] py-10 text-white sm:py-12 lg:py-14"
    >
      {/* Ambient background lighting */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-[#8C7357]/[0.10] blur-[130px]" />
        <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-[#74604A]/[0.09] blur-[150px]" />
      </div>

      <div className="mx-auto max-w-[1380px] px-5 sm:px-10 lg:px-14">

        {/* Editorial heading */}
        <div className="mb-7 flex flex-wrap items-end justify-between gap-5 border-b border-white/15 pb-6 sm:mb-9">
          <div>
            <p className="mb-5 flex items-center gap-3 text-[9px] font-semibold tracking-[0.3em] text-[#C7AD8C]">
              <span className="h-1 w-1 rounded-full bg-[#C7AD8C]" />
              THE MIVRA CONCIERGE
            </p>

            <h2 className="font-display text-4xl leading-[1.04] tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
              A personal touch.
              <br />
              <span className="text-[#B5A18A]">A lasting impression.</span>
            </h2>
          </div>

          <div className="max-w-[330px] pb-1">
            <p className="text-[12px] leading-7 text-white/55">
              Exceptional style deserves exceptional service.
              Connect with our team for thoughtful assistance
              throughout your MIVRA experience.
            </p>

            <p className="mt-5 text-[9px] tracking-[0.22em] text-[#B5A18A]">
              PERSONAL SERVICE / MIVRA
            </p>
          </div>
        </div>

        {/* Main concierge layout */}
        <div className="grid items-stretch gap-6 lg:grid-cols-[0.88fr_1.12fr] lg:gap-8">

          {/* Editorial image card */}
          <div className="group relative isolate min-h-[440px] overflow-hidden rounded-sm border border-white/15 bg-[#171412] sm:min-h-[480px] lg:min-h-[520px]">

            <Image
              src={EDITORIAL_IMAGE}
              alt="MIVRA contemporary fashion editorial"
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover object-center transition-transform duration-[1600ms] group-hover:scale-[1.035]"
            />

            <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-black/85" />

            <div className="absolute inset-x-0 top-0 flex items-center justify-between p-6 sm:p-8">
              <span className="text-[9px] font-semibold tracking-[0.25em] text-white">
                MIVRA / PRIVATE SERVICE
              </span>

              <span className="border border-white/35 bg-black/20 px-3 py-2 text-[8px] tracking-[0.2em] text-white backdrop-blur-xl">
                ALWAYS HERE
              </span>
            </div>

            {/* Floating glass panel */}
            <div className="absolute bottom-6 left-5 right-5 rounded-sm border border-white/25 bg-black/40 p-6 shadow-2xl backdrop-blur-xl sm:bottom-9 sm:left-8 sm:right-8 sm:p-9">

              <p className="mb-5 text-[9px] font-semibold tracking-[0.28em] text-[#D5C1A6]">
                SERVICE BEYOND EXPECTATIONS
              </p>

              <h3 className="font-display text-4xl leading-[1.05] tracking-[-0.045em] text-white sm:text-5xl">
                We're here
                <br />
                for you.
              </h3>

              <div className="my-6 h-px w-14 bg-[#C7AD8C]" />

              <p className="max-w-[310px] text-[12px] leading-7 text-white/75">
                From finding your perfect fit to answering
                your questions, every detail matters to us.
              </p>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-3 border-b border-white/40 pb-2 text-[9px] font-semibold tracking-[0.2em] text-white transition-colors hover:border-[#C7AD8C] hover:text-[#C7AD8C]"
              >
                CONNECT WITH OUR TEAM
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          {/* Glass enquiry form */}
          <div className="relative flex flex-col overflow-hidden rounded-sm border border-white/15 bg-white/[0.045] p-5 shadow-[0_25px_100px_rgba(0,0,0,0.25)] backdrop-blur-2xl sm:p-7 lg:p-8">

            {/* Subtle glass highlight */}
            <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-[#C7AD8C]/[0.07] blur-[90px]" />

            <div className="relative flex items-start justify-between gap-4 border-b border-white/15 pb-7">
              <div>
                <p className="text-[9px] font-semibold tracking-[0.28em] text-[#C7AD8C]">
                  YOUR EXPERIENCE MATTERS
                </p>

                <h3 className="mt-4 font-display text-3xl tracking-[-0.045em] text-white sm:text-4xl">
                  Let's talk.
                </h3>

                <p className="mt-3 text-[12px] leading-6 text-white/50">
                  Tell us what you need. We're listening.
                </p>
              </div>

              <span className="hidden border border-white/20 px-3 py-2 text-[9px] tracking-[0.2em] text-white/55 sm:block">
                M / 01
              </span>
            </div>

            <form
              ref={formRef}
              onSubmit={handleWhatsApp}
              className="relative mt-8 flex flex-1 flex-col"
            >
              <div className="grid gap-x-7 gap-y-7 sm:grid-cols-2">

                <div>
                  <label htmlFor="home-care-name" className={labelClass}>
                    YOUR NAME *
                  </label>

                  <input
                    id="home-care-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    maxLength={100}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your full name"
                    className={fieldClass}
                  />
                </div>

                <div>
                  <label htmlFor="home-care-email" className={labelClass}>
                    EMAIL ADDRESS *
                  </label>

                  <input
                    id="home-care-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    maxLength={254}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className={fieldClass}
                  />
                </div>

              </div>

              <div className="mt-8">
                <label htmlFor="home-care-category" className={labelClass}>
                  HOW CAN WE ASSIST YOU?
                </label>

                <select
                  id="home-care-category"
                  name="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className={`${fieldClass} cursor-pointer [color-scheme:dark]`}
                >
                  {enquiryTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mt-8">
                <label htmlFor="home-care-product" className={labelClass}>
                  PRODUCT / COLLECTION
                  <span className="ml-2 font-normal tracking-normal text-white/35">
                    OPTIONAL
                  </span>
                </label>

                <input
                  id="home-care-product"
                  name="product"
                  type="text"
                  maxLength={150}
                  value={product}
                  onChange={(e) => setProduct(e.target.value)}
                  placeholder="Which MIVRA piece interests you?"
                  className={fieldClass}
                />
              </div>

              <div className="mt-8 flex flex-1 flex-col">
                <label htmlFor="home-care-message" className={labelClass}>
                  YOUR MESSAGE *
                </label>

                <textarea
                  id="home-care-message"
                  name="message"
                  required
                  minLength={5}
                  maxLength={2000}
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us how we can help..."
                  className={`${fieldClass} min-h-[115px] flex-1 resize-y`}
                />
              </div>

              {/* Form actions */}
              <div className="mt-9 grid gap-3 sm:grid-cols-2">

                <button
                  type="submit"
                  className="group flex items-center justify-between border border-[#C7AD8C] bg-[#C7AD8C] px-5 py-[18px] text-left text-[9px] font-semibold tracking-[0.16em] text-[#14110E] transition-all duration-300 hover:bg-[#E1D0B9]"
                >
                  <span>WHATSAPP ENQUIRY</span>
                  <span className="text-base transition-transform group-hover:translate-x-1">
                    ↗
                  </span>
                </button>

                <button
                  type="button"
                  onClick={handleEmail}
                  className="group flex items-center justify-between border border-white/25 bg-white/[0.025] px-5 py-[18px] text-left text-[9px] font-semibold tracking-[0.16em] text-white transition-all duration-300 hover:border-[#C7AD8C] hover:bg-white/[0.08]"
                >
                  <span>EMAIL OUR TEAM</span>
                  <span className="text-base text-[#C7AD8C] transition-transform group-hover:translate-x-1">
                    ↗
                  </span>
                </button>

              </div>
            </form>

            {/* Form footer */}
            <div className="relative mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-white/15 pt-5">
              <p className="text-[9px] tracking-[0.15em] text-white/40">
                THOUGHTFUL SERVICE. ALWAYS.
              </p>

              <a
                href={`mailto:${SUPPORT_EMAIL}`}
                className="text-[10px] text-[#C7AD8C] transition-colors hover:text-white"
              >
                {SUPPORT_EMAIL}
              </a>
            </div>
          </div>
        </div>

        {/* Brand signature */}
        <div className="mt-8 flex items-center justify-between border-t border-white/15 pt-5">
          <p className="text-[9px] font-medium tracking-[0.25em] text-white/45">
            DEFINE YOUR STYLE.
          </p>

          <p className="font-display text-xl tracking-[-0.06em] text-[#C7AD8C]">
            MIVRA.
          </p>
        </div>
      </div>
    </section>
  );
}
