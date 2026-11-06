import {
  Bookmark,
  Building2,
  ChartLine,
  FileText,
  Hexagon,
  Search,
  Sparkles,
  TrendingUp,
  type LucideIcon,
} from "lucide-react"

type Feature = {
  title: string
  description: string
  icon: LucideIcon
}

const features: Feature[] = [
  {
    title: "Smart Search",
    description: "Find your ideal job with advanced filters.",
    icon: Search,
  },
  {
    title: "Salary Insights",
    description: "Get real salary data to negotiate confidently.",
    icon: ChartLine,
  },
  {
    title: "Top Companies",
    description: "Apply to vetted companies that are hiring.",
    icon: Building2,
  },
  {
    title: "Saved Jobs",
    description: "Manage apps & favorites on your dashboard.",
    icon: Bookmark,
  },
  {
    title: "One-Click Apply",
    description: "Simplify your job applications for an easier process!",
    icon: Sparkles,
  },
  {
    title: "Resume Builder",
    description: "Create professional resumes with modern templates.",
    icon: FileText,
  },
  {
    title: "Skill-Based Matching",
    description: "Discover jobs that match your skills and experience.",
    icon: Hexagon,
  },
  {
    title: "Career Growth Resources",
    description: "Boost your career with quick interview tips.",
    icon: TrendingUp,
  },
]

export function Features() {
  return (
    <section
      id="features"
      className="relative border-y border-white/[0.06] bg-[#0a0a0c] text-white"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(124,108,246,0.05),transparent_60%)]"
      />

      <div className="relative mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex items-center justify-center gap-3">
            <span aria-hidden className="size-1.5 rounded-[2px] bg-[#7c6cf6]" />
            <p className="text-xs font-medium tracking-[0.28em] text-white/70 uppercase">
              Features Job
            </p>
            <span aria-hidden className="size-1.5 rounded-[2px] bg-[#7c6cf6]" />
          </div>

          <h2 className="mt-5 text-4xl leading-[1.06] font-medium tracking-tight text-balance text-white sm:text-5xl lg:text-6xl">
            Everything you need
            <br className="hidden sm:block" /> to succeed
          </h2>
        </div>

        <ul className="mt-14 grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 sm:gap-y-12 lg:mt-20 lg:grid-cols-4 lg:gap-x-8 xl:gap-x-12">
          {features.map(({ title, description, icon: Icon }) => (
            <li key={title} className="group flex items-start gap-4">
              <div className="relative flex size-16 shrink-0 items-center justify-center rounded-2xl border border-white/[0.07] bg-gradient-to-br from-[#26262b] via-[#151518] to-[#0a0a0c] shadow-[inset_0_1px_0_rgba(255,255,255,0.07),0_18px_36px_-18px_rgba(0,0,0,0.9)] transition-colors duration-300 group-hover:border-white/[0.14] sm:size-20 lg:size-[76px]">
                <Icon
                  aria-hidden
                  className="size-6 text-white/90 sm:size-7"
                  strokeWidth={1.5}
                />
              </div>

              <div className="min-w-0 pt-0.5 sm:pt-1">
                <h3 className="text-base font-medium tracking-tight text-white sm:text-[17px]">
                  {title}
                </h3>
                <p className="mt-1.5 text-sm leading-6 text-white/45">
                  {description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
