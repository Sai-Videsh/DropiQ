"use client"

import SectionReveal from "./section-reveal"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Sparkles, Crown } from "lucide-react"
import { Button } from "@/components/ui/button"
import WaitlistForm from "./waitlist-form"

function Feature({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3">
      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-emerald-500 to-lime-500 dark:from-cyan-400 dark:to-sky-400 flex items-center justify-center">
        <Check className="h-3 w-3 text-white" aria-hidden="true" />
      </div>
      <span className="dark:text-gray-200 text-gray-700">{text}</span>
    </li>
  )
}

export default function PricingTeaser() {
  const scrollToFinalCTA = () => {
    document.querySelector("#final-cta")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <SectionReveal id="pricing" as="section" className="container mx-auto px-4 py-14">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold dark:text-white">{"Pricing Teaser"}</h2>
        <p className="mt-2 text-gray-600 dark:text-gray-200">
          {"Start free. Upgrade for unlimited comparisons and alerts."}
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {/* Free Plan Card */}
        <div className="group relative [perspective:1000px] h-[400px]">
          <div className="relative h-full transform-gpu transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] motion-reduce:transition-none motion-reduce:[transform:none]">
            {/* Front face */}
            <Card className="p-6 rounded-2xl relative overflow-hidden transition-all duration-300 dark:bg-slate-900 dark:border-slate-800 [backface-visibility:hidden] h-full flex flex-col bg-gradient-to-br from-white via-gray-50 to-white dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 border-2 border-emerald-200 dark:border-cyan-700 shadow-lg hover:shadow-xl hover:scale-[1.02] group-hover:shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 via-transparent to-lime-50/50 dark:from-cyan-900/20 dark:via-transparent dark:to-sky-900/20" />
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-to-br from-emerald-100 to-lime-100 dark:from-cyan-900/30 dark:to-sky-900/30 blur-xl" />
              <div className="absolute -left-8 -bottom-8 h-24 w-24 rounded-full bg-gradient-to-br from-lime-100 to-emerald-100 dark:from-sky-900/20 dark:to-cyan-900/20 blur-lg" />
              
              <div className="relative flex-1 flex flex-col items-center justify-center text-center">
                <div className="mb-4 p-3 rounded-full bg-gradient-to-r from-emerald-100 to-lime-100 dark:from-cyan-900/30 dark:to-sky-900/30">
                  <Sparkles className="h-8 w-8 text-emerald-600 dark:text-cyan-400" />
                </div>
                <h3 className="text-3xl sm:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 via-lime-600 to-emerald-600 dark:from-cyan-400 dark:via-sky-400 dark:to-cyan-400 animate-[gradientMove_8s_ease_infinite] bg-[length:200%_200%]">
                  {"Free Forever"}
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm">{"Perfect to get started"}</p>
              </div>
            </Card>

            {/* Back face */}
            <Card className="p-6 rounded-2xl relative overflow-hidden dark:bg-slate-900 dark:border-slate-800 absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden] h-full flex flex-col bg-gradient-to-br from-white via-gray-50 to-white dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 border-2 border-emerald-200 dark:border-cyan-700 shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/30 via-transparent to-lime-50/30 dark:from-cyan-900/15 dark:via-transparent dark:to-sky-900/15" />
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br from-emerald-100 to-lime-100 dark:from-cyan-900/20 dark:to-sky-900/20 blur-lg" />
              
              <div className="relative flex flex-col h-full">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold dark:text-white">{"Free Forever"}</h3>
                  <Badge className="bg-gradient-to-r from-emerald-100 to-lime-100 text-emerald-800 dark:from-cyan-900/40 dark:to-sky-900/40 dark:text-cyan-300 border border-emerald-200 dark:border-cyan-700">
                    {"Starter"}
                  </Badge>
                </div>
                <div className="mt-2">
                  <span className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-lime-600 dark:from-cyan-400 dark:to-sky-400">{"₹0"}</span>
                  <span className="text-gray-500 dark:text-gray-400 ml-1">{"forever"}</span>
                </div>
                <ul className="mt-4 space-y-3 text-sm text-gray-700 dark:text-gray-200 flex-1">
                  <Feature text="Limited comparisons per month" />
                  <Feature text="Core Value Score" />
                  <Feature text="Basic price-drop alerts" />
                </ul>
                <Button
                  onClick={scrollToFinalCTA}
                  className="mt-6 w-full rounded-xl bg-gradient-to-r from-emerald-500 to-lime-500 hover:from-emerald-600 hover:to-lime-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 dark:from-cyan-500 dark:to-sky-500 dark:hover:from-cyan-600 dark:hover:to-sky-600 dark:hover:shadow-[0_0_26px_rgba(34,211,238,0.4)]"
                >
                  {"Get Started Free"}
                </Button>
              </div>
            </Card>
          </div>
        </div>

        {/* Pro Plan Card */}
        <div className="group relative [perspective:1000px] h-[400px]">
          <div className="relative h-full transform-gpu transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] motion-reduce:transition-none motion-reduce:[transform:none]">
            {/* Front face */}
            <Card className="p-6 rounded-2xl relative overflow-hidden transition-all duration-300 dark:bg-slate-900 dark:border-slate-800 [backface-visibility:hidden] h-full flex flex-col bg-gradient-to-br from-white via-emerald-50 to-white dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 border-2 border-emerald-200 dark:border-cyan-700 shadow-lg hover:shadow-xl hover:scale-[1.02] group-hover:shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/60 via-transparent to-lime-50/60 dark:from-cyan-900/25 dark:via-transparent dark:to-sky-900/25" />
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-to-br from-emerald-200 to-lime-200 dark:from-cyan-800/40 dark:to-sky-800/40 blur-xl" />
              <div className="absolute -left-8 -bottom-8 h-24 w-24 rounded-full bg-gradient-to-br from-lime-200 to-emerald-200 dark:from-sky-800/30 dark:to-cyan-800/30 blur-lg" />
              
              <div className="relative flex-1 flex flex-col items-center justify-center text-center">
                <div className="mb-4 p-3 rounded-full bg-gradient-to-r from-emerald-200 to-lime-200 dark:from-cyan-800/40 dark:to-sky-800/40">
                  <Crown className="h-8 w-8 text-emerald-600 dark:text-cyan-400" />
                </div>
                <h3 className="text-3xl sm:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 via-lime-600 to-emerald-600 dark:from-cyan-400 dark:via-sky-400 dark:to-cyan-400 animate-[gradientMove_8s_ease_infinite] bg-[length:200%_200%]">
                  {"Pro Plan"}
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm">{"Unlock unlimited power"}</p>
              </div>
            </Card>

            {/* Back face */}
            <Card className="p-6 rounded-2xl relative overflow-hidden dark:bg-slate-900 dark:border-slate-800 absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden] h-full flex flex-col bg-gradient-to-br from-white via-emerald-50 to-white dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 border-2 border-emerald-200 dark:border-cyan-700 shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/40 via-transparent to-lime-50/40 dark:from-cyan-900/20 dark:via-transparent dark:to-sky-900/20" />
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br from-emerald-200 to-lime-200 dark:from-cyan-800/30 dark:to-sky-800/30 blur-lg" />
              
              <div className="relative flex flex-col h-full">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold dark:text-white">{"Pro Plan"}</h3>
                  <Badge className="bg-gradient-to-r from-emerald-200 to-lime-200 text-emerald-800 dark:from-cyan-800/50 dark:to-sky-800/50 dark:text-cyan-300 border border-emerald-300 dark:border-cyan-600 text-xs font-semibold">
                    {"50% OFF for Life"}
                  </Badge>
                </div>
                <div className="mt-2">
                  <span className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-lime-600 dark:from-cyan-400 dark:to-sky-400">{"₹498"}</span>
                  <span className="text-gray-500 dark:text-gray-400 ml-1">{"/mo"}</span>
                </div>
                <ul className="mt-4 space-y-3 text-sm text-gray-700 dark:text-gray-200 flex-1">
                  <Feature text="Unlimited comparisons" />
                  <Feature text="Priority price-drop alerts" />
                  <Feature text="Offline stores (coming soon)" />
                  <Feature text="Early access features" />
                </ul>
                <Button
                  onClick={scrollToFinalCTA}
                  className="mt-6 w-full rounded-xl bg-gradient-to-r from-emerald-600 to-lime-600 hover:from-emerald-700 hover:to-lime-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 dark:from-cyan-500 dark:to-sky-500 dark:hover:from-cyan-600 dark:hover:to-sky-600 dark:hover:shadow-[0_0_26px_rgba(34,211,238,0.4)]"
                >
                  {"Upgrade to Pro"}
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>

      <div className="mt-8 max-w-xl mx-auto">
        <WaitlistForm size="md" buttonText="Join Early Access" />
      </div>
    </SectionReveal>
  )
}
