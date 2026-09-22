"use client";

import React, { useState, useMemo } from "react";
import { PRODUCTS, CATEGORIES, Product } from "@/data/products";
import ProductCard from "./ProductCard";
import { Search, Sparkles, Filter, PackageOpen } from "lucide-react";

export default function ProductCatalog() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Category check
      const matchesCategory =
        selectedCategory === "all"
          ? true
          : selectedCategory === "chhota_pack"
          ? product.variants.some((v) => v.weight === "10rs")
          : product.category === selectedCategory;

      // Search check
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        product.name.toLowerCase().includes(q) ||
        product.hindiName.includes(q) ||
        product.shortDescription.toLowerCase().includes(q) ||
        product.ingredients.some((ing) => ing.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="products" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center space-y-3 mb-12">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>रसोई का गौरव (Desi Alpha Catalog)</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-white">
          शुद्ध मसालों की पूरी शृंखला{" "}
          <span className="spice-gradient-text">(₹10 से 1000g तक)</span>
        </h2>
        <p className="text-sm sm:text-base text-zinc-400 max-w-2xl">
          आपकी हर ज़रूरत के अनुसार — दैनिक रसोई के लिए ₹10 का छोटा पैकेट हो या रेस्टोरेंट व होटल के लिए 1Kg का फैमिली पैक, हर पैकेट में है असली देसी महक।
        </p>
      </div>

      {/* Filter & Search Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
        
        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`whitespace-nowrap px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all border ${
                  isSelected
                    ? "bg-gradient-to-r from-red-700 to-amber-600 text-white border-amber-400/80 shadow-lg shadow-red-950/50"
                    : "bg-white/5 text-zinc-300 border-white/10 hover:border-amber-400/30 hover:text-white"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-72">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="मसाला खोजें (Haldi, Biryani...)"
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/15 focus:border-amber-400 focus:outline-none text-xs sm:text-sm text-white placeholder:text-zinc-500 transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-zinc-400 hover:text-white"
            >
              Clear
            </button>
          )}
        </div>

      </div>

      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="glass-spice-panel rounded-2xl p-12 text-center flex flex-col items-center space-y-3">
          <PackageOpen className="w-12 h-12 text-amber-500/50" />
          <h3 className="text-lg font-bold text-white">कोई मसाला नहीं मिला</h3>
          <p className="text-sm text-zinc-400">
            Aapki khoj &ldquo;{searchQuery}&rdquo; ke anusaar koi utpaad nahi mila. Kripya doosra naam khojein.
          </p>
          <button
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("all");
            }}
            className="mt-2 text-xs text-amber-400 hover:underline font-semibold"
          >
            Sabhi Masale Dekhein (Reset Filters)
          </button>
        </div>
      )}

      {/* Sachet Notice Banner */}
      <div className="mt-14 glass-spice-panel rounded-2xl p-6 border border-amber-500/30 flex flex-col md:flex-row items-center justify-between gap-6 bg-gradient-to-r from-red-950/40 via-amber-950/30 to-red-950/40">
        <div className="space-y-1 text-center md:text-left">
          <h4 className="text-base sm:text-lg font-black text-amber-300">
            ₹10 Chhota Sachet Pack — Har Rasoi Ka Sathi
          </h4>
          <p className="text-xs sm:text-sm text-zinc-300">
            Pehle aazmayein, phir vishwas karein! Sabhi masalo ke ₹10 wale sachets uplabdh hain jo rozana taaza tadka lagane ke liye ekdum sahi hain.
          </p>
        </div>
        <button
          onClick={() => setSelectedCategory("chhota_pack")}
          className="whitespace-nowrap bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-lg transition-transform hover:scale-105"
        >
          ₹10 Packs Filter Karein
        </button>
      </div>
    </section>
  );
}
