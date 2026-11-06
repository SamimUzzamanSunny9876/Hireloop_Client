import Image from "next/image"
import { Briefcase, MapPin, Search } from "lucide-react"

import globe from "@/app/images/globe.png"

const trendingPositions = [
  "Product Designer",
  "AI Engineering",
  "Dev-ops Engineer",
]

export function Banner() {
  return (
    <section className="relative isolate overflow-hidden bg-[#07070b] text-white">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-[560px] bg-[radial-gradient(ellipse_at_center,rgba(124,108,246,0.18),transparent_65%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#07070b_0%,#07070b_45%,#040408_100%)]" />
      </div>

      <div className="mx-auto max-w-4xl px-4 pt-14 text-center sm:px-6 sm:pt-20 lg:pt-24">
        <div className="flex items-center justify-center gap-3">
          <span className="hidden h-px w-10 bg-white/15 sm:block" />
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur">
            <Briefcase className="size-3.5 text-[#ff8a3d] sm:size-4" />
            <span className="text-xs font-semibold text-white sm:text-sm">
              50,000+
            </span>
            <span className="text-[10px] font-medium tracking-[0.18em] text-white/45 uppercase sm:text-xs">
              New jobs this month
            </span>
          </div>
          <span className="hidden h-px w-10 bg-white/15 sm:block" />
        </div>

        <h1 className="mt-6 text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl lg:text-6xl">
          Find Your Dream Job Today
        </h1>

        <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-white/55 sm:text-base sm:leading-7">
          HireLoop connects top talent with world-class companies. Browse
          thousands of curated opportunities and land your next role — faster.
        </p>

        <form
          role="search"
          className="mx-auto mt-8 flex w-full max-w-2xl flex-col gap-2 rounded-2xl border border-white/10 bg-white/[0.04] p-2 shadow-2xl shadow-black/40 backdrop-blur-xl sm:flex-row sm:items-center sm:rounded-full"
        >
          <label className="flex min-w-0 flex-1 items-center gap-2 rounded-full px-3 py-2 sm:py-0">
            <Search className="size-4 shrink-0 text-white/40" />
            <span className="sr-only">Job title, skill or company</span>
            <input
              type="text"
              name="query"
              placeholder="Job title, skill or company"
              className="h-9 w-full min-w-0 bg-transparent text-sm text-white outline-none placeholder:text-white/40"
            />
          </label>

          <span
            aria-hidden
            className="hidden h-7 w-px shrink-0 bg-white/10 sm:block"
          />

          <label className="flex min-w-0 flex-1 items-center gap-2 rounded-full px-3 py-2 sm:py-0">
            <MapPin className="size-4 shrink-0 text-white/40" />
            <span className="sr-only">Location or Remote</span>
            <input
              type="text"
              name="location"
              placeholder="Location or Remote"
              className="h-9 w-full min-w-0 bg-transparent text-sm text-white outline-none placeholder:text-white/40"
            />
          </label>

          <button
            type="submit"
            aria-label="Search jobs"
            className="inline-flex h-11 w-full shrink-0 items-center justify-center rounded-full bg-[#7c6cf6] text-white transition-colors hover:bg-[#6a5ae0] focus-visible:ring-2 focus-visible:ring-[#7c6cf6]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#07070b] focus-visible:outline-none sm:w-11"
          >
            <Search className="size-4" />
          </button>
        </form>

        <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
          <span className="mr-1 text-xs text-white/45 sm:text-sm">
            Trending Position
          </span>
          {trendingPositions.map((position) => (
            <span
              key={position}
              className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/75 transition-colors hover:border-white/20 hover:bg-white/[0.08] sm:text-sm"
            >
              {position}
            </span>
          ))}
        </div>
      </div>

      <div className="relative mx-auto mt-10 h-[300px] w-full max-w-5xl overflow-hidden sm:mt-14 sm:h-[420px] lg:h-[560px]">
        <Image
          src={globe}
          alt=""
          priority
          aria-hidden
          className="absolute inset-x-0 top-0 h-auto w-full -translate-y-[28%] select-none"
        />
        <p className="absolute inset-x-0 top-[40%] mx-auto max-w-lg px-6 text-center text-xl leading-snug font-medium text-balance text-white/90 sm:top-[44%] sm:text-2xl md:top-[50%] md:text-3xl lg:top-[54%]">
          Assisting over{" "}
          <span className="font-semibold text-white">15,000</span> job seekers
          find their dream positions.
        </p>
      </div>
    </section>
  )
}
