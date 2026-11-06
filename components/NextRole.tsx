import Link from "next/link"

function GlobeGrid() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 1440 760"
      preserveAspectRatio="xMidYMin slice"
      className="h-full w-full"
      fill="none"
    >
      <defs>
        <radialGradient id="cta-glow" cx="50%" cy="72%" r="62%">
          <stop offset="0%" stopColor="#6d5af0" stopOpacity="0.42" />
          <stop offset="46%" stopColor="#4b3bc4" stopOpacity="0.16" />
          <stop offset="100%" stopColor="#07070b" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="cta-line" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#9b8dff" stopOpacity="0.45" />
          <stop offset="70%" stopColor="#7c6cf6" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#7c6cf6" stopOpacity="0" />
        </linearGradient>
        <clipPath id="cta-top">
          <rect width="1440" height="760" />
        </clipPath>
      </defs>

      <rect width="1440" height="760" fill="url(#cta-glow)" />

      <g clipPath="url(#cta-top)" stroke="url(#cta-line)" strokeWidth="1">
        {[620, 700, 800, 900, 1000, 1100, 1220].map((radius) => (
          <circle key={radius} cx="720" cy="1200" r={radius} />
        ))}

        {[160, 340, 520, 700, 880].map((rx) => (
          <ellipse key={rx} cx="720" cy="1200" rx={rx} ry="1100" />
        ))}
      </g>
    </svg>
  )
}

export function NextRole() {
  return (
    <section className="relative isolate overflow-hidden bg-[#07070b] pt-24 pb-16 text-white sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px] [mask-image:linear-gradient(to_bottom,black_55%,transparent)] sm:h-[520px] lg:h-[620px]"
      >
        <GlobeGrid />
      </div>

      <div className="mx-auto w-full max-w-3xl px-4 text-center sm:px-6">
        <h2 className="text-4xl leading-[1.08] font-medium tracking-tight text-balance text-white sm:text-5xl lg:text-6xl">
          Your next role is
          <br className="hidden sm:block" /> already looking for you
        </h2>

        <p className="mx-auto mt-5 max-w-md text-sm leading-6 text-white/50 sm:max-w-lg sm:text-base sm:leading-7">
          Build a profile in three minutes. The matches start arriving tomorrow
          morning.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:mt-9 sm:flex-row">
          <Link
            href="/get-started"
            className="inline-flex h-11 w-full items-center justify-center rounded-xl bg-white px-6 text-sm font-medium text-[#0b0b0d] transition-colors hover:bg-white/90 focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#07070b] focus-visible:outline-none sm:w-auto"
          >
            Create a free account
          </Link>
          <Link
            href="#pricing"
            className="inline-flex h-11 w-full items-center justify-center rounded-xl border border-white/15 bg-white/[0.03] px-6 text-sm font-medium text-white transition-colors hover:bg-white/[0.08] focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:outline-none sm:w-auto"
          >
            View pricing
          </Link>
        </div>
      </div>
    </section>
  )
}
