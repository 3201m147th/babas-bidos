import { useEffect, useRef, useState } from "react";

interface AnnouncementBannerProps {
  onHeightChange: (height: number) => void;
}

export function AnnouncementBanner({ onHeightChange }: AnnouncementBannerProps) {
  const [visible, setVisible] = useState(true);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!visible) {
      onHeightChange(0);
      return;
    }

    const el = ref.current;
    if (!el) return;

    const updateHeight = () => onHeightChange(el.offsetHeight);
    updateHeight();

    const observer = new ResizeObserver(updateHeight);
    observer.observe(el);
    return () => observer.disconnect();
  }, [visible, onHeightChange]);

  if (!visible) return null;

  return (
    <div ref={ref} className="fixed top-0 w-full z-[60] bg-primary text-black">
      <div className="container mx-auto px-4 md:px-6 py-2.5 flex items-center justify-center gap-3 text-center">
        <p className="font-sans font-bold text-xs sm:text-sm tracking-wide uppercase">
          We will be closed on July 4th. Happy Independence Day! We'll be back to serving you the next day.
        </p>
        <button
          onClick={() => setVisible(false)}
          aria-label="Dismiss announcement"
          className="shrink-0 ml-1 rounded-full p-1 hover:bg-black/10 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>
    </div>
  );
}
