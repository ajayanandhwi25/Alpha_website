"use client";

import React, { useState } from "react";
import { useCart } from "./CartContext";
import { ShoppingBag, Flame, PhoneCall, Menu, X, Sparkles, MessageCircle } from "lucide-react";

export default function Navbar() {
  const { totalItemsCount, setIsCartOpen } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full glass-spice-panel border-b border-amber-500/20 shadow-xl shadow-black/40">
      {/* Top micro bar for announcement */}
      <div className="bg-gradient-to-r from-red-950 via-amber-950 to-red-950 text-amber-200 text-xs py-1.5 px-4 text-center font-medium border-b border-amber-500/10 flex items-center justify-center gap-2">
        <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
        <span>
          100% Shuddh Desi Masale | <strong>Sirf ₹10 ke sachet</strong> se lekar 1Kg family pack tak uplabdh! Free Home Delivery on ₹499+
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-600 via-amber-500 to-amber-700 flex items-center justify-center shadow-lg shadow-red-700/30 ring-2 ring-amber-400/40 group-hover:scale-105 transition-transform">
              <Flame className="w-7 h-7 text-white fill-amber-200" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black tracking-tight text-white flex items-center gap-1.5">
                DESI <span className="spice-gradient-text">ALPHA</span>
              </span>
              <span className="text-[11px] text-amber-300/80 font-medium tracking-wider uppercase">
                असली स्वाद • शुद्धता का वादा
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#products"
              className="text-sm font-semibold text-zinc-200 hover:text-amber-400 transition-colors flex items-center gap-1"
            >
              मसाले (Products)
              <span className="text-[10px] bg-red-600/30 text-amber-300 border border-red-500/40 px-1.5 py-0.5 rounded-full">
                ₹10 se shuru
              </span>
            </a>
            <a
              href="#quality"
              className="text-sm font-semibold text-zinc-200 hover:text-amber-400 transition-colors"
            >
              शुद्धता की गारंटी (Purity)
            </a>
            <a
              href="#about"
              className="text-sm font-semibold text-zinc-200 hover:text-amber-400 transition-colors"
            >
              हमारे बारे में (About Us)
            </a>
            <a
              href="#contact"
              className="text-sm font-semibold text-zinc-200 hover:text-amber-400 transition-colors"
            >
              डीलरशिप व संपर्क (Contact)
            </a>
          </nav>

          {/* Action buttons */}
          <div className="flex items-center gap-3">
            {/* Quick WhatsApp / Order */}
            <a
              href="https://wa.me/919876543210?text=Namaste%20Desi%20Alpha,%20mujhe%20masale%20order%20karne%20hai"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center gap-2 bg-emerald-700/20 hover:bg-emerald-700/30 text-emerald-400 border border-emerald-500/30 px-3.5 py-2 rounded-full text-xs font-semibold transition-all hover:scale-105"
            >
              <MessageCircle className="w-4 h-4 fill-emerald-500 text-emerald-900" />
              <span>WhatsApp Order</span>
            </a>

            {/* Cart Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2.5 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-400 hover:text-amber-300 transition-all flex items-center gap-2"
              aria-label="Shopping Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              <span className="hidden sm:inline text-xs font-bold text-amber-200">Cart</span>
              {totalItemsCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-gradient-to-r from-red-600 to-amber-600 text-white font-black text-[11px] w-5 h-5 rounded-full flex items-center justify-center shadow-lg border border-amber-300/40 animate-bounce">
                  {totalItemsCount}
                </span>
              )}
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-zinc-400 hover:text-white md:hidden"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-spice-panel border-t border-amber-500/20 px-4 pt-3 pb-5 space-y-3">
          <a
            href="#products"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-zinc-200 hover:text-amber-400 py-2 border-b border-white/5"
          >
            मसाले (All Products & ₹10 Packs)
          </a>
          <a
            href="#quality"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-zinc-200 hover:text-amber-400 py-2 border-b border-white/5"
          >
            शुद्धता की गारंटी (Purity & Quality)
          </a>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-zinc-200 hover:text-amber-400 py-2 border-b border-white/5"
          >
            हमारे बारे में (About Desi Alpha)
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-zinc-200 hover:text-amber-400 py-2 border-b border-white/5"
          >
            डीलरशिप व संपर्क (Dealership & Contact)
          </a>
          <div className="pt-2 flex flex-col gap-2">
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white py-2.5 rounded-lg text-sm font-bold"
            >
              <MessageCircle className="w-4 h-4" />
              Order on WhatsApp (+91 98765 43210)
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
