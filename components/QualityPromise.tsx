"use client";

import React from "react";
import { ShieldCheck, Award, Leaf, Zap, CheckCircle2, Sparkles, HeartHandshake } from "lucide-react";

export default function QualityPromise() {
  const promises = [
    {
      icon: ShieldCheck,
      title: "100% मिलावट मुक्त (Zero Adulteration)",
      description: "No artificial dyes, no starch, no chalk. We guarantee 100% lab-tested pure Indian spices.",
      hindiNote: "प्रयोगशाला द्वारा प्रमाणित शुद्धता"
    },
    {
      icon: Zap,
      title: "कोल्ड ग्राइंडिंग तकनीक (Low Temp Grinding)",
      description: "Cryogenic & stone grinding ensures natural essential volatile oils and aroma do not evaporate due to heat.",
      hindiNote: "मसालों का प्राकृतिक तेल व महक सुरक्षित"
    },
    {
      icon: Leaf,
      title: "खेतों से सीधा चयन (Direct Farm Sourcing)",
      description: "Guntur chilies, Alleppey turmeric, Rajasthan coriander, and Malabar peppercorns directly from ethical farmers.",
      hindiNote: "भारत के श्रेष्ठ मसाला क्षेत्रों से"
    },
    {
      icon: Award,
      title: "अरोमा-सील पैकेजिंग (Aroma-Lock Packaging)",
      description: "Multi-layer food grade pouches with nitrogen flush prevent moisture ingress and preserve crisp freshness.",
      hindiNote: "अंतिम चुटकी तक पहली जैसी खुशबू"
    }
  ];

  return (
    <section id="quality" className="py-20 relative overflow-hidden bg-gradient-to-b from-black via-zinc-950 to-black">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-amber-600/10 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section title */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>शुद्धता का पैमाना (Our Quality Standard)</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            देसी अल्फा पर भरोसा क्यों करें?{" "}
            <span className="spice-gradient-text">असली मसालों की पहचान</span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400">
            बाज़ार में बिकने वाले आम मसालों में रंग और स्टार्च मिलाया जाता है। देसी अल्फा आपको देता है शुद्ध, बिना किसी मिलावट का असली भारतीय स्वाद।
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {promises.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="glass-spice-card rounded-2xl p-6 flex flex-col justify-between space-y-4 border border-amber-500/20 hover:border-amber-400/50 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-600 to-amber-600 flex items-center justify-center text-white shadow-lg shadow-red-950/60">
                  <Icon className="w-6 h-6" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-base font-bold text-white">{p.title}</h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">{p.description}</p>
                </div>

                <div className="pt-2 border-t border-white/5 flex items-center gap-1.5 text-[11px] text-amber-300/90 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>{p.hindiNote}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Certified Strip */}
        <div className="mt-14 glass-spice-panel rounded-2xl p-6 border border-white/10 flex flex-wrap items-center justify-around gap-6 text-center">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-black text-amber-400">✓</span>
            <div className="text-left">
              <span className="text-xs font-bold text-white block">100% Shuddh</span>
              <span className="text-[10px] text-zinc-400">Zero Added Colors</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-2xl font-black text-amber-400">★</span>
            <div className="text-left">
              <span className="text-xs font-bold text-white block">Agmark Grade-1</span>
              <span className="text-[10px] text-zinc-400">Certified Purity</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-2xl font-black text-amber-400">🌱</span>
            <div className="text-left">
              <span className="text-xs font-bold text-white block">100% Vegetarian</span>
              <span className="text-[10px] text-zinc-400">Green Dot Certified</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-2xl font-black text-amber-400">💰</span>
            <div className="text-left">
              <span className="text-xs font-bold text-white block">Starting ₹10</span>
              <span className="text-[10px] text-zinc-400">Affordable for Everyone</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
