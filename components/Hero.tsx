"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Sparkles, Award, CheckCircle2, ChevronRight, PackageCheck } from "lucide-react";
import { getAssetPath } from "@/utils/basePath";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-16 lg:py-24">
      {/* Background glowing spice orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/15 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-amber-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Brand Story & CTA */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Trust Pill */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-950/80 to-amber-950/80 border border-amber-500/30 rounded-full px-4 py-1.5 shadow-inner">
              <span className="flex h-2 w-2 rounded-full bg-amber-400 animate-ping" />
              <span className="text-xs font-semibold text-amber-300">
                100% शुद्धता व खुशबू की गारंटी | FSSAI & Agmark Grade
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              असली स्वाद, शुद्धता का वादा{" "}
              <span className="block mt-2 spice-gradient-text">
                देसी अल्फा मसाले
              </span>
            </h1>

            {/* Sub-description */}
            <p className="text-base sm:text-lg text-zinc-300 max-w-2xl leading-relaxed font-normal">
              खेतों से सीधी चुनी हुई हल्दी, तीखी लाल मिर्च, खुशबूदार धनिया और 16 शाही खड़े मसालों का जादुई संगम। 
              <strong> हर वर्ग और हर बजट के लिए — मात्र ₹10 के छोटे पैकेट से लेकर 50g, 100g, 200g, 500g और 1000g (1 Kg) फैमिली पैक तक!</strong>
            </p>

            {/* Quick Highlights Checkpoints */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full pt-2">
              <div className="flex items-center gap-2 text-xs font-medium text-amber-200/90 bg-white/5 border border-white/10 rounded-lg p-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zero Milawat (100% Pure)</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-amber-200/90 bg-white/5 border border-white/10 rounded-lg p-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Cold Stone Ground (तेल सुरक्षित)</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-amber-200/90 bg-white/5 border border-white/10 rounded-lg p-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>₹10 se 1000g Pack Sizes</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4 w-full sm:w-auto">
              <a
                href="#products"
                className="flex items-center justify-center gap-3 bg-gradient-to-r from-red-600 via-red-700 to-amber-600 hover:from-red-500 hover:to-amber-500 text-white font-bold text-sm sm:text-base px-7 py-3.5 rounded-xl shadow-xl shadow-red-900/40 hover:shadow-red-700/50 hover:scale-[1.02] transition-all"
              >
                <span>मसाले देखें व आर्डर करें</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href="#contact"
                className="flex items-center justify-center gap-2 bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 hover:text-white border border-amber-500/40 font-semibold text-sm sm:text-base px-6 py-3.5 rounded-xl transition-all"
              >
                <span>थोक व डीलरशिप इन्क्वायरी</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>

            {/* Quick stats strip */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-4 gap-4 w-full">
              <div>
                <span className="block text-2xl font-black text-amber-400">₹10+</span>
                <span className="text-[11px] text-zinc-400">Pocket Friendly</span>
              </div>
              <div>
                <span className="block text-2xl font-black text-amber-400">1000g</span>
                <span className="text-[11px] text-zinc-400">Max Bulk Pack</span>
              </div>
              <div>
                <span className="block text-2xl font-black text-amber-400">100%</span>
                <span className="text-[11px] text-zinc-400">Pure & Lab Tested</span>
              </div>
              <div>
                <span className="block text-2xl font-black text-amber-400">50K+</span>
                <span className="text-[11px] text-zinc-400">Happy Kitchens</span>
              </div>
            </div>

          </div>

          {/* Right Column: High Quality Visual Showcase */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Visual Card Frame */}
            <div className="relative w-full max-w-md lg:max-w-none rounded-3xl overflow-hidden glass-spice-panel p-3 border-2 border-amber-500/30 shadow-2xl shadow-red-950/60">
              
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden">
                <Image
                  src={getAssetPath("/images/hero-spices.jpg")}
                  alt="Desi Alpha Authentic Indian Spices"
                  fill
                  priority
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Floating badge inside image */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between bg-black/60 backdrop-blur-md p-3 rounded-xl border border-amber-500/30">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-400/40 flex items-center justify-center">
                      <Sparkles className="w-4 h-4 text-amber-400" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white">Desi Alpha Heritage</p>
                      <p className="text-[10px] text-amber-300/80">Traditional Stone Pounding Aroma</p>
                    </div>
                  </div>
                  <span className="text-[11px] bg-red-600 text-white font-bold px-2.5 py-1 rounded-md">
                    Agmark Grade
                  </span>
                </div>
              </div>

              {/* Floating Pack Feature Pill */}
              <div className="mt-3 bg-white/5 rounded-xl p-3 border border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <PackageCheck className="w-4 h-4 text-amber-400" />
                  <span className="text-xs text-zinc-300">
                    उपलब्ध साइज़: <strong>₹10, 50g, 100g, 200g, 500g, 1000g</strong>
                  </span>
                </div>
                <span className="text-[10px] text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded-full font-medium">
                  Fresh Stock
                </span>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
