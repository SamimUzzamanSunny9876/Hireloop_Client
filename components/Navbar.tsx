"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"

import logo from "@/app/images/logo.png"
import { cn } from "@/lib/utils"

const navLinks = [
  { label: "Browse Jobs", href: "#browse-jobs" },
  { label: "Company", href: "#company" },
  { label: "Pricing", href: "#pricing" },
]

const buttonStyle =
  "inline-flex h-10 items-center justify-center rounded-full bg-[#7c6cf6] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#6a5ae0] focus-visible:ring-2 focus-visible:ring-[#7c6cf6]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#07070b] focus-visible:outline-none"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#07070b]/80 backdrop-blur-xl">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-6 px-4 sm:h-20 sm:px-6 lg:px-8"
      >
        <Link href="/" className="shrink-0" aria-label="HireLoop home">
          <Image
            src={logo}
            alt="HireLoop"
            priority
            className="h-7 w-auto sm:h-8"
          />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-white/65 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-6 md:flex">
          <Link
            href="/sign-in"
            className="text-sm font-medium text-white/65 transition-colors hover:text-white"
          >
            Sign In
          </Link>
          <Link href="/get-started" className={buttonStyle}>
            Get Started
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className="inline-flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-colors hover:bg-white/10 md:hidden"
        >
          {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={cn(
          "overflow-hidden border-t bg-[#07070b] transition-all duration-300 md:hidden",
          isOpen
            ? "max-h-96 border-white/10 opacity-100"
            : "max-h-0 border-transparent opacity-0"
        )}
      >
        <div className="flex flex-col gap-1 px-4 py-4 sm:px-6">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-white/70 transition-colors hover:bg-white/5 hover:text-white"
            >
              {link.label}
            </Link>
          ))}

          <div className="mt-3 flex flex-col gap-2 border-t border-white/10 pt-4">
            <Link
              href="/sign-in"
              onClick={() => setIsOpen(false)}
              className="inline-flex h-10 items-center justify-center rounded-full text-sm font-medium text-white/80 transition-colors hover:bg-white/5 hover:text-white focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:outline-none"
            >
              Sign In
            </Link>
            <Link
              href="/get-started"
              onClick={() => setIsOpen(false)}
              className={buttonStyle}
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
