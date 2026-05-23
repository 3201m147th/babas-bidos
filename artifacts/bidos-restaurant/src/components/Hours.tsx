const HOURS = [
  { day: "Monday", hours: "11:00 AM – 11:00 PM" },
  { day: "Tuesday", hours: "11:00 AM – 11:00 PM" },
  { day: "Wednesday", hours: "11:00 AM – 11:00 PM" },
  { day: "Thursday", hours: "11:00 AM – 11:00 PM" },
  { day: "Friday", hours: "11:00 AM – 11:00 PM" },
  { day: "Saturday", hours: "11:00 AM – 11:00 PM" },
  { day: "Sunday", hours: "11:00 AM – 11:00 PM" },
];

function getTodayName() {
  return new Date().toLocaleDateString("en-US", { weekday: "long" });
}

export function Hours() {
  const today = getTodayName();

  return (
    <section id="hours" className="py-24 md:py-28 bg-card relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[600px] h-64 bg-primary/5 blur-[80px]" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <p className="text-primary font-sans font-semibold uppercase tracking-[0.3em] text-sm mb-4">
              Come Find Us
            </p>
            <h2 className="font-display text-5xl md:text-6xl text-white uppercase tracking-wide mb-8">
              Location <br />
              <span className="text-primary glow-text">& Hours</span>
            </h2>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold font-sans mb-0.5">Baba's Bido's</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    3201 147th St<br />
                    Midlothian, IL 60445<br />
                    <a
                      href="https://maps.google.com/?q=3201+147th+St,+Midlothian,+IL+60445"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Get Directions →
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold font-sans mb-0.5">Call Ahead</p>
                  <a href="tel:+17739995555" className="text-primary text-sm hover:underline">
                    (773) 999-5555
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold font-sans mb-0.5">Order Online</p>
                  <a
                    href="https://order.toasttab.com/online/babas-bidos"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary text-sm hover:underline"
                  >
                    babasbidos.com / Toast
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/8 overflow-hidden bg-background">
            <div className="px-6 py-4 border-b border-white/8 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm font-sans font-semibold text-white uppercase tracking-wider">
                Hours
              </span>
            </div>
            <div className="divide-y divide-white/5">
              {HOURS.map(({ day, hours }) => {
                const isToday = day === today;
                return (
                  <div
                    key={day}
                    className={`flex justify-between items-center px-6 py-4 transition-colors ${
                      isToday ? "bg-primary/8" : "hover:bg-white/3"
                    }`}
                  >
                    <span
                      className={`font-sans font-medium text-sm ${
                        isToday ? "text-primary font-bold" : "text-muted-foreground"
                      }`}
                    >
                      {day}
                      {isToday && (
                        <span className="ml-2 text-xs bg-primary text-black px-2 py-0.5 rounded-full uppercase tracking-wide">
                          Today
                        </span>
                      )}
                    </span>
                    <span
                      className={`font-sans text-sm ${
                        isToday ? "text-primary font-semibold" : "text-foreground"
                      }`}
                    >
                      {hours}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
