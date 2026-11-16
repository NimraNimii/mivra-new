
"use client";

import { useRef, useState, type FormEvent } from "react";

const WHATSAPP_NUMBER = "923427130326";
const SUPPORT_EMAIL = "mivraofficial8@gmail.com";

const enquiryTypes = [
  "Product & Size Enquiry",
  "Order & Delivery Support",
  "Returns & Exchanges",
  "Payment Enquiry",
  "Other Enquiry",
];

export default function CustomerSupportWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState(enquiryTypes[0]);
  const [product, setProduct] = useState("");
  const [orderNumber, setOrderNumber] = useState("");
  const [message, setMessage] = useState("");

  const formRef = useRef<HTMLFormElement>(null);

  function getEnquiryMessage() {
    return [
      "MIVRA CUSTOMER ENQUIRY",
      "",
      `Name: ${name.trim()}`,
      `Email: ${email.trim()}`,
      `Enquiry: ${category}`,
      `Product: ${product.trim() || "Not specified"}`,
      `Order number: ${orderNumber.trim() || "Not applicable"}`,
      "",
      "Message:",
      message.trim(),
    ].join("\n");
  }

  function handleWhatsApp(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      getEnquiryMessage()
    )}`;

    window.open(url, "_blank", "noopener,noreferrer");
  }

  function handleEmail() {
    if (!formRef.current?.reportValidity()) return;

  const subject = encodeURIComponent(`MIVRA - ${category}`);
    const body = encodeURIComponent(getEnquiryMessage());

    window.location.href = `mailto:${SUPPORT_EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <div className="fixed bottom-3 right-3 z-[100] flex flex-col items-end gap-2 sm:bottom-7 sm:right-7 sm:gap-3">
      {isOpen && (
        <section
         className="flex max-h-[min(720px,calc(100dvh-84px))] w-[min(420px,calc(100vw-24px))] flex-col overflow-hidden border border-black/10 bg-[#F4F2EE] shadow-[0_20px_80px_rgba(0,0,0,0.2)]"
          aria-label="MIVRA customer support"
        >
          <header className="flex items-center justify-between bg-[#090909] px-5 py-5 text-white">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center border border-white/30 font-serif text-2xl">
                M
              </div>

              <div>
                <p className="font-serif text-lg tracking-wide">MIVRA</p>
                <p className="text-[9px] tracking-[0.2em] text-white/60">
                  PERSONAL CUSTOMER CARE
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close customer support"
              className="flex h-9 w-9 items-center justify-center text-xl text-white/70 transition hover:text-white"
            >
              ×
            </button>
          </header>

          <div className="overflow-y-auto p-5 sm:p-6">
            <p className="text-[9px] font-semibold tracking-[0.25em] text-[#777D82]">
              MIVRA CUSTOMER EXPERIENCE
            </p>

            <h2 className="mt-3 font-serif text-3xl leading-tight text-[#090909]">
              How can we assist you?
            </h2>

            <p className="mt-2 text-xs leading-6 text-[#777D82]">
              Share your enquiry with our team. We will be happy to help.
            </p>

            <form
              ref={formRef}
              onSubmit={handleWhatsApp}
              className="mt-6 space-y-4"
            >
              <div>
                <label
                  htmlFor="mivra-name"
                  className="mb-2 block text-[9px] font-semibold tracking-[0.15em]"
                >
                  YOUR NAME *
                </label>
                <input
                  id="mivra-name"
                  required
                  maxLength={100}
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Enter your name"
                  className="w-full border border-[#D8D5CE] bg-white px-4 py-3 text-sm outline-none transition focus:border-black"
                />
              </div>

              <div>
                <label
                  htmlFor="mivra-email"
                  className="mb-2 block text-[9px] font-semibold tracking-[0.15em]"
                >
                  EMAIL ADDRESS *
                </label>
                <input
                  id="mivra-email"
                  type="email"
                  required
                  maxLength={254}
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="you@example.com"
                  className="w-full border border-[#D8D5CE] bg-white px-4 py-3 text-sm outline-none transition focus:border-black"
                />
              </div>

              <div>
                <label
                  htmlFor="mivra-category"
                  className="mb-2 block text-[9px] font-semibold tracking-[0.15em]"
                >
                  WHAT CAN WE HELP YOU WITH?
                </label>
                <select
                  id="mivra-category"
                  value={category}
                  onChange={(event) => setCategory(event.target.value)}
                  className="w-full border border-[#D8D5CE] bg-white px-4 py-3 text-sm outline-none focus:border-black"
                >
                  {enquiryTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="mivra-product"
                  className="mb-2 block text-[9px] font-semibold tracking-[0.15em]"
                >
                  PRODUCT NAME (OPTIONAL)
                </label>
                <input
                  id="mivra-product"
                  maxLength={150}
                  value={product}
                  onChange={(event) => setProduct(event.target.value)}
                  placeholder="Which MIVRA piece?"
                  className="w-full border border-[#D8D5CE] bg-white px-4 py-3 text-sm outline-none focus:border-black"
                />
              </div>

              <div>
                <label
                  htmlFor="mivra-order"
                  className="mb-2 block text-[9px] font-semibold tracking-[0.15em]"
                >
                  ORDER NUMBER (OPTIONAL)
                </label>
                <input
                  id="mivra-order"
                  maxLength={50}
                  value={orderNumber}
                  onChange={(event) => setOrderNumber(event.target.value)}
                  placeholder="e.g. MIV-00001"
                  className="w-full border border-[#D8D5CE] bg-white px-4 py-3 text-sm outline-none focus:border-black"
                />
              </div>

              <div>
                <label
                  htmlFor="mivra-message"
                  className="mb-2 block text-[9px] font-semibold tracking-[0.15em]"
                >
                  YOUR MESSAGE *
                </label>
                <textarea
                  id="mivra-message"
                  required
                  minLength={5}
                  maxLength={2000}
                  rows={4}
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  placeholder="Tell us how we can help..."
                  className="w-full resize-y border border-[#D8D5CE] bg-white px-4 py-3 text-sm outline-none transition focus:border-black"
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-3 bg-[#090909] px-5 py-4 text-[10px] font-semibold tracking-[0.16em] text-white transition hover:bg-[#292929]"
              >
                CONTINUE TO WHATSAPP
                <span aria-hidden="true">↗</span>
              </button>

              <button
                type="button"
                onClick={handleEmail}
                className="flex w-full items-center justify-center gap-2 border border-[#BFC0BE] px-5 py-4 text-[10px] font-semibold tracking-[0.16em] text-[#292929] transition hover:border-black"
              >
                EMAIL OUR SUPPORT TEAM
              </button>
            </form>

            <p className="mt-5 text-center text-[9px] leading-5 tracking-wide text-[#777D82]">
              YOUR STYLE MATTERS. YOUR EXPERIENCE DOES TOO.
            </p>
          </div>
        </section>
      )}

      <button
        type="button"
        onClick={() => setIsOpen((previous) => !previous)}
        aria-label={isOpen ? "Close MIVRA support" : "Open MIVRA support"}
        aria-expanded={isOpen}
      className="flex h-12 w-12 items-center justify-center rounded-full bg-[#090909] p-0 text-white shadow-[0_8px_30px_rgba(0,0,0,0.2)] transition hover:bg-[#292929] sm:h-14 sm:w-auto sm:gap-3 sm:px-6"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8z" />
        </svg>

       <span className="hidden text-[10px] font-semibold tracking-[0.18em] sm:inline">
          {isOpen ? "CLOSE" : "NEED HELP?"}
        </span>
      </button>
    </div>
  );
}
