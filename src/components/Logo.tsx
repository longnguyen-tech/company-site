import { site } from "@/content/site";

type LogoProps = {
  variant?: "dark" | "light";
  className?: string;
};

export default function Logo({ variant = "dark", className = "" }: LogoProps) {
  const text = variant === "dark" ? "text-navy-900" : "text-white";
  const sub = variant === "dark" ? "text-brand-600" : "text-brand-400";
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <LogoMark className="h-10 w-10 shrink-0" />
      <span className="flex flex-col leading-none">
        <span className={`text-lg font-extrabold tracking-wide ${text}`}>
          KNIGHTCORE
        </span>
        <span className={`text-[0.7rem] font-semibold tracking-[0.28em] ${sub}`}>
          TECHNOLOGIES
        </span>
        <span className="sr-only">{site.legalName}</span>
      </span>
    </span>
  );
}

export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      aria-hidden="true"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="kc-shield" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1d4ed8" />
          <stop offset="100%" stopColor="#0b1f3f" />
        </linearGradient>
      </defs>
      {/* Shield */}
      <path
        d="M32 3 L56 12 V30 C56 45 45 55 32 61 C19 55 8 45 8 30 V12 Z"
        fill="url(#kc-shield)"
      />
      <path
        d="M32 8 L51 15.5 V30 C51 42 42 50.5 32 55.5 C22 50.5 13 42 13 30 V15.5 Z"
        fill="none"
        stroke="#93c5fd"
        strokeOpacity="0.45"
        strokeWidth="1.5"
      />
      {/* Knight silhouette */}
      <path
        d="M24 46 H42 V43 H24 Z
           M26 43 C26 36 29 33 33 30 L35 27 L41 29 L40 23 L36 18 C35 16 33 15 31 16 L30 18 L26 20 C24 21 23 24 24 26 L28 28 C27 31 25 34 25 38 Z"
        fill="#ffffff"
      />
      <circle cx="34" cy="22" r="1.4" fill="#0b1f3f" />
      {/* Circuit accent */}
      <path
        d="M44 36 h6 M47 36 v6 M18 40 h-5 M15 40 v-6"
        stroke="#93c5fd"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="50" cy="42" r="1.6" fill="#93c5fd" />
      <circle cx="15" cy="34" r="1.6" fill="#93c5fd" />
    </svg>
  );
}
