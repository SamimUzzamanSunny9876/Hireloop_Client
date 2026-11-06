"use client"

import { useState } from "react"
import {
  ArrowRight,
  ChartColumn,
  Crown,
  Plus,
  Zap,
  type LucideIcon,
} from "lucide-react"

type Billing = "monthly" | "yearly"

type Plan = {
  name: string
  icon: LucideIcon
  prices: Record<Billing, number>
  features: string[]
  highlighted?: boolean
}

const plans: Plan[] = [
  {
    name: "Starter",
    icon: Crown,
    prices: { monthly: 0, yearly: 0 },
    features: [
      "Daily AI match brief (top 5)",
      "Verified salary bands",
      "Company insight dashboards",
      "1-click apply, unlimited",
    ],
  },
  {
    name: "Growth",
    icon: ChartColumn,
    prices: { monthly: 17, yearly: 13 },
    features: [
      "Daily AI match brief (top 5)",
      "Verified salary bands",
      "Company insight dashboards",
      "1-click apply, unlimited",
    ],
    highlighted: true,
  },
  {
    name: "Premium",
    icon: Zap,
    prices: { monthly: 99, yearly: 74 },
    features: [
      "Everything in Pro",
      "Multi-profile career portfolios",
      "Shared talent rooms",
      "Recruiter view (read-only)",
    ],
  },
]

export function Pricing() {
  const [billing, setBilling] = useState<Billing>("monthly")

  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-[#07070b] py-20 text-white sm:py-24 lg:py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(124,108,246,0.06),transparent_55%)]"
      />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex items-center justify-center gap-3">
            <span aria-hidden className="size-1.5 rounded-[2px] bg-[#7c6cf6]" />
            <p className="text-xs font-medium tracking-[0.28em] text-white/70 uppercase">
              Pricing
            </p>
            <span aria-hidden className="size-1.5 rounded-[2px] bg-[#7c6cf6]" />
          </div>

          <h2 className="mt-5 text-4xl leading-[1.06] font-medium tracking-tight text-balance text-white sm:text-5xl lg:text-6xl">
            Pay for the leverage,
            <br className="hidden sm:block" /> not the listings
          </h2>
        </div>

        <div className="mt-10 flex justify-center sm:mt-12">
          <div
            role="group"
            aria-label="Billing period"
            className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-[#1a1a1d] p-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
          >
            <button
              type="button"
              onClick={() => setBilling("monthly")}
              aria-pressed={billing === "monthly"}
              className={`h-10 rounded-full px-6 text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:outline-none ${
                billing === "monthly"
                  ? "bg-white text-[#0b0b0d]"
                  : "text-white/75 hover:text-white"
              }`}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setBilling("yearly")}
              aria-pressed={billing === "yearly"}
              className={`flex h-10 items-center gap-2 rounded-full pr-2 pl-5 text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:outline-none ${
                billing === "yearly"
                  ? "bg-white text-[#0b0b0d]"
                  : "text-white/75 hover:text-white"
              }`}
            >
              Yearly
              <span className="rounded-full bg-[#d92bc6] px-2.5 py-1 text-xs font-semibold text-white">
                25%
              </span>
            </button>
          </div>
        </div>

        <ul className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 md:grid-cols-3 lg:gap-6">
          {plans.map(({ name, icon: Icon, prices, features, highlighted }) => (
            <li
              key={name}
              className={`flex flex-col rounded-3xl border p-6 sm:p-7 ${
                highlighted
                  ? "border-white/15 bg-gradient-to-b from-[#232326] to-[#131315] shadow-[0_30px_80px_-40px_rgba(0,0,0,0.95)]"
                  : "border-white/10 bg-gradient-to-b from-[#161618] to-[#0b0b0d]"
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex min-w-0 items-center gap-3">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-gradient-to-br from-[#2c2c31] to-[#111113] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                    <Icon
                      aria-hidden
                      className="size-4 text-white/90"
                      strokeWidth={1.6}
                    />
                  </div>
                  <h3 className="truncate text-2xl font-normal tracking-tight text-white">
                    {name}
                  </h3>
                </div>

                <p className="shrink-0 text-white" aria-live="polite">
                  <span className="text-[34px] leading-none font-medium tracking-tight">
                    ${prices[billing]}
                  </span>
                  <span className="ml-1 text-xs text-white/55">/month</span>
                </p>
              </div>

              <p className="mt-8 text-base font-medium text-white sm:text-[17px]">
                Start building your insights hub:
              </p>

              <ul className="mt-5 flex flex-col gap-3.5">
                {features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <span className="flex size-6 shrink-0 items-center justify-center rounded-md border border-white/10 bg-white/[0.04]">
                      <Plus
                        aria-hidden
                        className="size-3.5 text-white/80"
                        strokeWidth={2}
                      />
                    </span>
                    <span className="text-sm text-white/80 sm:text-[15px]">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                className={`mt-10 flex h-14 w-full items-center justify-between rounded-xl px-5 text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#07070b] focus-visible:outline-none md:mt-auto ${
                  highlighted
                    ? "bg-white text-[#0b0b0d] hover:bg-white/90"
                    : "bg-white/[0.07] text-white hover:bg-white/10"
                }`}
              >
                Choose This Plan
                <ArrowRight aria-hidden className="size-4" />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
