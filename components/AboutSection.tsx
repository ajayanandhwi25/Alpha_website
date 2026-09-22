"use client";

import React from "react";
import Image from "next/image";
import { Sparkles, Heart, Award, Users, CheckCircle } from "lucide-react";
import { getAssetPath } from "@/utils/basePath";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Image with artisan story */}
        <div className="lg:col-span-6 relative">
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden glass-spice-panel p-2 border-2 border-amber-500/30 shadow-2xl">
            <Image
              src={getAssetPath("/images/about-stone-grinding.jpg")}
              alt="Desi Alpha Traditional Stone Grinding"
              fill
              className="object-cover rounded-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-black/70 backdrop-blur-md border border-white/10">
              <p className="text-xs font-bold text-amber-400">सिल-बट्टा और चक्की की पारंपरिक महक</p>
              <p className="text-[11px] text-zinc-300 mt-0.5">
                पारंपरिक धीमी पिसाई जिससे मसालों का कुदरती तेल और औषधीय गुण 100% सुरक्षित रहते हैं।
              </p>
            </div>
          </div>

          {/* Floating Experience badge */}
          <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-red-600 to-amber-600 p-4 rounded-2xl shadow-xl border border-amber-300/40 text-center text-white hidden sm:block">
            <span className="block text-2xl font-black">100%</span>
            <span className="text-[10px] font-bold uppercase tracking-wider">शुद्धता की गारंटी</span>
          </div>
        </div>

        {/* Right Column: Narrative Content */}
        <div className="lg:col-span-6 space-y-6">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>हमारी कहानी (The Desi Alpha Story)</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
            भारतीय रसोई की असली महक को{" "}
            <span className="spice-gradient-text">घर-घर पहुँचाने का संकल्प</span>
          </h2>

          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
            <strong>Desi Alpha</strong> की शुरुआत एक साधारण लेकिन दृढ़ सोच से हुई — बाज़ार में उपलब्ध मिलावटी और महंगे मसालों के बीच आम भारतीय परिवारों को असली, बिना किसी मिलावट का शुद्ध मसाला उपलब्ध कराना।
          </p>

          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
            हम सीधे आंध्र प्रदेश के गुंटूर से तीखी लाल मिर्च, केरल के इदुक्की और मालाबार से हरी इलायची व काली मिर्च, तथा राजस्थान से हरी धनिया के दाने चुनते हैं। आधुनिक कोल्ड-ग्राइंडिंग तकनीक के जरिए मसालों को गर्म किए बिना पीसा जाता है, जिससे उनके प्राकृतिक तेल और खुशबू नष्ट नहीं होते।
          </p>

          {/* Vision for All Budgets */}
          <div className="p-4 rounded-2xl bg-amber-950/20 border border-amber-500/20 space-y-2">
            <div className="flex items-center gap-2 text-amber-300 font-bold text-sm">
              <Heart className="w-4 h-4 text-red-500 fill-red-500" />
              <span>हर रसोई, हर बजट के लिए — ₹10 से शुरुआत</span>
            </div>
            <p className="text-xs text-zinc-300 leading-relaxed">
              हमारा मानना है कि शुद्धता पर सबका अधिकार है। इसलिए हमने ₹10 के छोटे पॉकेट पाउच (15-20g) से लेकर 50g, 100g, 200g, 500g और 1000g के फैमिली व होटल पैक तक उपलब्ध कराए हैं ताकि कोई भी परिवार मिलावटी मसाला खाने को मजबूर न हो।
            </p>
          </div>

          {/* 3 bullet points */}
          <div className="space-y-2.5 pt-2">
            <div className="flex items-center gap-2.5 text-xs text-zinc-200">
              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>कोई केमिकल, सिंथेटिक रंग या चावल की भूसी नहीं।</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-zinc-200">
              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>हाई-करक्यूमिन हल्दी जो रंग के साथ-साथ प्रतिरोधक क्षमता भी बढ़ाए।</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-zinc-200">
              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>थोक व्यापारियों, किराना दुकानों और रेस्टोरेंट्स के लिए विशेष डीलरशिप छूट।</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
