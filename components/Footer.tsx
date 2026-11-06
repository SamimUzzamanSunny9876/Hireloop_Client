import Image from "next/image"
import Link from "next/link"

import logo from "@/app/images/logo.png"

const footerColumns = [
  {
    title: "Product",
    links: ["Job discovery", "Worker AI", "Companies", "Salary data"],
  },
  {
    title: "Navigations",
    links: ["Help center", "Career library", "Contact"],
  },
  {
    title: "Resources",
    links: ["Brand Guideline", "Newsroom"],
  },
]

function DiscordIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M20.317 4.37a19.79 19.79 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.865-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.058a.082.082 0 0 0 .031.056c2.053 1.508 4.041 2.423 5.993 3.03a.078.078 0 0 0 .084-.028c.462-.63.873-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.1 13.1 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.126-.094.252-.192.372-.291a.074.074 0 0 1 .077-.011c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.099.246.198.373.292a.077.077 0 0 1-.006.127 12.3 12.3 0 0 1-1.873.892.077.077 0 0 0-.04.106c.36.698.771 1.363 1.225 1.993a.076.076 0 0 0 .084.029c1.961-.607 3.95-1.522 6.002-3.03a.077.077 0 0 0 .032-.055c.5-5.177-.839-9.674-3.549-13.66a.061.061 0 0 0-.031-.029ZM8.02 15.331c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.419 0 1.334-.956 2.419-2.157 2.419Zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.419 0 1.334-.946 2.419-2.157 2.419Z" />
    </svg>
  )
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4V8h4" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="bg-[#07070b] text-white">
      <div className="mx-auto w-full max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 border-t border-white/[0.06] pt-12 sm:grid-cols-2 sm:gap-x-10 lg:grid-cols-[1.6fr_1fr_1fr_1fr] lg:pt-16">
          <div className="col-span-2 sm:col-span-2 lg:col-span-1">
            <Link href="/" aria-label="HireLoop home" className="inline-block">
              <Image src={logo} alt="HireLoop" className="h-7 w-auto" />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-6 text-white/45">
              The AI-native career platform. Built for people who take their
              work seriously.
            </p>
          </div>

          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-medium text-[#a89bff]">
                {column.title}
              </h3>
              <ul className="mt-4 flex flex-col gap-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-sm text-white/55 transition-colors hover:text-white"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-6 sm:mt-14 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2.5">
            <Link
              href="#"
              aria-label="Facebook"
              className="inline-flex size-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-white transition-colors hover:bg-white/10"
            >
              <FacebookIcon className="size-4" />
            </Link>
            <Link
              href="#"
              aria-label="Discord"
              className="inline-flex size-9 items-center justify-center rounded-lg bg-[#7c6cf6] text-white transition-colors hover:bg-[#6a5ae0]"
            >
              <DiscordIcon className="size-4" />
            </Link>
            <Link
              href="#"
              aria-label="LinkedIn"
              className="inline-flex size-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-white transition-colors hover:bg-white/10"
            >
              <LinkedinIcon className="size-4" />
            </Link>
          </div>

          <div className="flex flex-col gap-3 text-xs text-white/35 sm:flex-row sm:items-center sm:gap-6">
            <p>Copyright {new Date().getFullYear()} — HireLoop</p>
            <div className="flex items-center gap-6">
              <Link href="#" className="transition-colors hover:text-white/70">
                Terms &amp; Policy
              </Link>
              <Link href="#" className="transition-colors hover:text-white/70">
                Privacy Guideline
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
