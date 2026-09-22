"use client";

import React from "react";
import { Flame, ShieldCheck, Heart, Lock, MessageCircle, Phone } from "lucide-react";

interface FooterProps {
  onOpenInquiriesModal: () => void;
}

export default function Footer({ onOpenInquiriesModal }: FooterProps) {
  return (
    <footer className="border-t border-amber-500/20 bg-zinc-950 text-zinc-400 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-600 via-amber-500 to-amber-700 flex items-center justify-center shadow-lg shadow-red-700/30 ring-2 ring-amber-400/40">
                <Flame className="w-6 h-6 text-white fill-amber-200" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black text-white">
                  DESI <span className="spice-gradient-text">ALPHA</span>
                </span>
                <span className="text-[10px] text-amber-300 font-medium tracking-wider">
                  असली स्वाद • शुद्धता का वादा
                </span>
              </div>
            </div>

            <p className="text-xs text-zinc-400 leading-relaxed">
              देसी अल्फा भारत का उभरता हुआ प्रामाणिक मसाला ब्रांड है। हम पारंपरिक धीमी पिसाई और आधुनिक स्वच्छता के साथ हर भारतीय रसोई तक शुद्ध मसाले पहुँचाते हैं।
            </p>

            <div className="flex items-center gap-2 text-xs text-amber-300 bg-white/5 border border-white/10 p-2.5 rounded-xl">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Agmark Grade-1 & FSSAI Standards Verified</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">नेविगेशन (Links)</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#products" className="hover:text-amber-400 transition-colors">
                  सभी मसाले (Catalog)
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-amber-400 transition-colors">
                  ₹10 छोटा पैकेट (Sachets)
                </a>
              </li>
              <li>
                <a href="#quality" className="hover:text-amber-400 transition-colors">
                  शुद्धता का पैमाना (Quality)
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-amber-400 transition-colors">
                  हमारी कहानी (About Us)
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-400 transition-colors">
                  डीलरशिप फॉर्म (Dealership)
                </a>
              </li>
            </ul>
          </div>

          {/* Available Sizes */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">उपलब्ध पैक साइज़ (Pack Sizes)</h4>
            <ul className="space-y-1.5 text-xs text-zinc-400">
              <li className="flex items-center justify-between">
                <span>₹10 Chhota Sachet:</span>
                <span className="text-amber-300 font-semibold">15g - 20g</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Pocket Pouch:</span>
                <span className="text-amber-300 font-semibold">50g</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Kitchen Box:</span>
                <span className="text-amber-300 font-semibold">100g & 200g</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Family Pack:</span>
                <span className="text-amber-300 font-semibold">500g</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Commercial / Bulk:</span>
                <span className="text-amber-300 font-semibold">1000g (1 Kg)</span>
              </li>
            </ul>
          </div>

          {/* Owner Portal & Support */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">ग्राहक व ओनर पोर्टल</h4>
            
            <p className="text-xs text-zinc-400 leading-relaxed">
              कस्टमर सपोर्ट या थोक ऑर्डर के लिए:
            </p>

            <div className="flex flex-col gap-2">
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 p-2 rounded-xl hover:bg-emerald-900/30"
              >
                <MessageCircle className="w-4 h-4 shrink-0" />
                <span>WhatsApp: +91 98765 43210</span>
              </a>

              <button
                onClick={onOpenInquiriesModal}
                className="flex items-center gap-2 text-xs text-amber-300 bg-amber-950/40 border border-amber-500/40 p-2 rounded-xl hover:bg-amber-900/40 transition-colors font-bold text-left"
              >
                <Lock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>ब्रांड ओनर: प्राप्त ग्राहक डेटा देखें</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} Desi Alpha Spices. सर्वाधिकार सुरक्षित (All Rights Reserved).</p>
          <div className="flex items-center gap-1">
            <span>Made with</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
            <span>for Indian Kitchens across Bharat</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
