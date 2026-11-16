const messages = [
  "WELCOME TO THE MIVRA STORE.",
  "EXPLORE THE LATEST ARRIVALS.",
  "DISCOVER THE MEN'S COLLECTION.",
  "DISCOVER THE WOMEN'S COLLECTION.",
  "FIND YOUR NEXT FAVOURITE LOOK.",
  "NEED ASSISTANCE? CONNECT WITH MIVRA ON WHATSAPP.",
];

export default function AnnouncementBar() {
  return (
    <div
      className="announcement-bar flex min-h-9 items-center overflow-hidden bg-[#090909] text-white"
      role="region"
      aria-label="MIVRA store announcements"
    >
      <div className="announcement-track flex w-max shrink-0 items-center">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 items-center" aria-hidden={copy === 1}>
            {messages.map((message) => (
              <span
                key={message}
                className="flex shrink-0 items-center whitespace-nowrap px-7 text-[9px] font-medium tracking-[0.2em] sm:px-10 sm:text-[10px] sm:tracking-[0.24em]"
              >
                {message}
                <span className="ml-7 text-white/40 sm:ml-10">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
