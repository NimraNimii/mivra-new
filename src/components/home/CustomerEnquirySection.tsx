
"use client";

import { useRef, useState, type FormEvent } from "react";

const WHATSAPP_NUMBER = "923427130326";
const SUPPORT_EMAIL = "mivraofficial8@gmail.com";

const EDITORIAL_IMAGE =
  "https://images.pexels.com/photos/6220660/pexels-photo-6220660.jpeg";

const enquiryTypes = [
  "Product & Size Enquiry",
  "Order & Delivery Support",
  "Returns & Exchanges",
  "Payment Enquiry",
  "Other Enquiry",
];

const fieldClass =
  "w-full border border-[#D8D4CC] bg-[#FBFAF7] px-4 py-[17px] text-[13px] text-[#171717] placeholder:text-[#96918A] outline-none transition duration-300 focus:border-[#8E7962] focus:bg-white";

const labelClass =
  "mb-2.5 block text-[9px] font-semibold tracking-[0.2em] text-[#625D56]";

export default function CustomerEnquirySection() {
  const formRef = useRef<HTMLFormElement>(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState(enquiryTypes[0]);
  const [product, setProduct] = useState("");
  const [message, setMessage] = useState("");

  function getEnquiryMessage() {
    return [
      "MIVRA — PERSONAL CUSTOMER CARE",
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
      aria-label="MIVRA personal customer care"
      className="overflow-hidden bg-[#F4F2EE] py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-[1500px] px-5 sm:px-10 lg:px-14">

        {/* Section identity */}
        <div className="mb-10 flex items-center justify-between border-b border-[#D8D4CC] pb-5 sm:mb-14">
          <div className="flex items-center gap-3">
            <span className="h-[5px] w-[5px] rounded-full bg-[#A58D70]" />
            <p className="text-[9px] font-semibold tracking-[0.28em] text-[#77716A]">
              THE MIVRA EXPERIENCE
            </p>
          </div>

          <p className="text-[9px] tracking-[0.2em] text-[#77716A]">
            PERSONAL CUSTOMER CARE / 01
          </p>
        </div>

        <div className="grid items-stretch gap-7 lg:grid-cols-[0.95fr_1.05fr] lg:gap-8">

          {/* MIVRA editorial image panel */}
          <div className="group relative isolate flex min-h-[620px] flex-col justify-between overflow-hidden bg-[#292929] p-6 sm:min-h-[720px] sm:p-9 lg:min-h-[760px]">

            <img
              src={EDITORIAL_IMAGE}
              alt="MIVRA fashion editorial"
              loading="lazy"
              className="absolute inset-0 -z-20 h-full w-full object-cover object-center transition-transform duration-[1400ms] group-hover:scale-[1.025]"
            />

            {/* Cinematic image treatment */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/35 via-black/10 to-black/75" />

            {/* Editorial top line */}
            <div className="relative z-10 flex items-center justify-between">
              <p className="text-[9px] font-semibold tracking-[0.3em] text-white/90">
                MIVRA / CUSTOMER CARE
              </p>

              <span className="border border-white/40 px-3 py-2 text-[8px] tracking-[0.2em] text-white/90 backdrop-blur-sm">
                ALWAYS HERE
              </span>
            </div>

            {/* Glass typography panel */}
            <div className="relative z-10 my-12 max-w-[470px] border border-white/30 bg-[#171717]/25 p-6 shadow-[0_20px_70px_rgba(0,0,0,0.18)] backdrop-blur-[12px] sm:p-9">

              <p className="mb-7 text-[9px] font-medium tracking-[0.28em] text-white/75">
                SERVICE WITH A PERSONAL TOUCH
              </p>

              <h2 className="font-display text-5xl leading-[0.88] tracking-[-0.06em] text-white drop-shadow-[0_3px_12px_rgba(0,0,0,0.55)] sm:text-6xl lg:text-7xl">
                WE&apos;RE
                <br />
                HERE TO
                <br />
                <span className="text-[#D8C4A5]">HELP.</span>
              </h2>

              <div className="my-7 h-px w-16 bg-[#D8C4A5]" />

              <p className="max-w-sm text-[12px] leading-7 text-white/90 sm:text-[13px]">
                From finding your perfect fit to questions about your
                order, our team is here to make every part of your
                MIVRA experience feel considered.
              </p>
            </div>

            {/* Image panel footer */}
            <div className="relative z-10 flex flex-wrap items-end justify-between gap-5 border-t border-white/35 pt-6 text-white">
              <div>
                <p className="text-[8px] font-semibold tracking-[0.25em] text-white/65">
                  SPEAK WITH OUR TEAM
                </p>

                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-3 text-[12px] tracking-wide transition-colors hover:text-[#D8C4A5]"
                >
                  WhatsApp Customer Care
                  <span aria-hidden="true">↗</span>
                </a>

                <p className="mt-2 text-[11px] text-white/75">
                  {SUPPORT_EMAIL}
                </p>
              </div>

              <span className="font-display text-3xl tracking-[-0.06em] text-white/75">
                M.
              </span>
            </div>
          </div>

          {/* Enquiry form panel */}
          <div className="flex flex-col border border-[#E0DDD6] bg-[#FBFAF7] px-6 py-8 sm:px-9 sm:py-10 lg:px-11 lg:py-12">

            {/* Form heading */}
            <div className="flex items-start justify-between gap-5 border-b border-[#DEDAD2] pb-7">
              <div>
                <p className="text-[9px] font-semibold tracking-[0.28em] text-[#9A8469]">
                  WE&apos;RE LISTENING
                </p>

                <h3 className="mt-4 font-display text-3xl leading-tight tracking-[-0.045em] text-[#171717] sm:text-4xl lg:text-[42px]">
                  Let&apos;s talk.
                </h3>

                <p className="mt-3 max-w-sm text-[12px] leading-6 text-[#77716A]">
                  Tell us what you need. We&apos;ll take it from here.
                </p>
              </div>

              <span className="shrink-0 border border-[#D8D4CC] px-3 py-2 text-[9px] tracking-[0.18em] text-[#81796F]">
                M / 01
              </span>
            </div>

            {/* Form */}
            <form
              ref={formRef}
              onSubmit={handleWhatsApp}
              className="mt-8 flex flex-1 flex-col"
            >
              <div className="grid gap-x-5 gap-y-6 sm:grid-cols-2">

                <div>
                  <label htmlFor="home-care-name" className={labelClass}>
                    YOUR NAME <span className="text-[#A58D70]">*</span>
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
                    EMAIL ADDRESS <span className="text-[#A58D70]">*</span>
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

              <div className="mt-6">
                <label htmlFor="home-care-category" className={labelClass}>
                  HOW CAN WE ASSIST YOU?
                </label>

                <select
                  id="home-care-category"
                  name="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className={`${fieldClass} cursor-pointer`}
                >
                  {enquiryTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mt-6">
                <label htmlFor="home-care-product" className={labelClass}>
                  PRODUCT / COLLECTION
                  <span className="ml-2 font-normal tracking-normal text-[#A19A90]">
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
                  placeholder="Tell us which MIVRA piece"
                  className={fieldClass}
                />
              </div>

              <div className="mt-6 flex flex-1 flex-col">
                <label htmlFor="home-care-message" className={labelClass}>
                  YOUR MESSAGE <span className="text-[#A58D70]">*</span>
                </label>

                <textarea
                  id="home-care-message"
                  name="message"
                  required
                  minLength={5}
                  maxLength={2000}
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="How can our team help you?"
                  className={`${fieldClass} min-h-[125px] flex-1 resize-y`}
                />
              </div>

              {/* Actions */}
              <div className="mt-8 space-y-3">

                <button
                  type="submit"
                  className="group flex w-full items-center justify-between bg-[#090909] px-6 py-[19px] text-left text-[9px] font-semibold tracking-[0.22em] text-white transition duration-300 hover:bg-[#38332D]"
                >
                  <span>SEND WHATSAPP ENQUIRY</span>
                  <span className="text-base text-[#D8C4A5] transition-transform duration-300 group-hover:translate-x-1">
                    ↗
                  </span>
                </button>

                <button
                  type="button"
                  onClick={handleEmail}
                  className="group flex w-full items-center justify-between border border-[#CFCAC1] px-6 py-[17px] text-left text-[9px] font-semibold tracking-[0.22em] text-[#292929] transition duration-300 hover:border-[#8E7962] hover:bg-[#F2EFE9]"
                >
                  <span>CONTINUE THROUGH EMAIL</span>
                  <span className="text-base text-[#9A8469] transition-transform duration-300 group-hover:translate-x-1">
                    ↗
                  </span>
                </button>

              </div>
            </form>

            {/* Form signature */}
            <div className="mt-8 flex items-center justify-between gap-4 border-t border-[#DEDAD2] pt-5">
              <p className="text-[8px] leading-5 tracking-[0.16em] text-[#8A8379]">
                YOUR STYLE MATTERS.
                <br />
                YOUR EXPERIENCE DOES TOO.
              </p>

              <span className="font-display text-2xl tracking-[-0.06em] text-[#A58D70]">
                MIVRA.
              </span>
            </div>
          </div>
        </div>

        {/* Closing brand line */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-[#D8D4CC] pt-5">
          <p className="text-[8px] font-medium tracking-[0.25em] text-[#77716A]">
            DEFINE YOUR STYLE.
          </p>

          <p className="text-[8px] tracking-[0.2em] text-[#77716A]">
            MIVRA CUSTOMER CARE / 2026
          </p>
        </div>

      </div>
    </section>
  );
}
