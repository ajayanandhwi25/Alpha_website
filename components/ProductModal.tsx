"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useCart } from "./CartContext";
import { ProductVariant } from "@/data/products";
import { X, Star, Flame, CheckCircle2, ShoppingBag, Sparkles, ShieldCheck } from "lucide-react";

export default function ProductModal() {
  const { activeModalProduct, closeProductModal, addItem } = useCart();
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!activeModalProduct) return null;

  const currentVariant =
    selectedVariant ||
    activeModalProduct.variants.find((v) => v.weight === "100g") ||
    activeModalProduct.variants[0];

  const handleAdd = () => {
    addItem(activeModalProduct, currentVariant, quantity);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      closeProductModal();
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div
        className="relative w-full max-w-2xl bg-zinc-950 border border-amber-500/30 rounded-3xl overflow-hidden shadow-2xl shadow-red-950/80 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={closeProductModal}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 hover:bg-black/90 text-zinc-400 hover:text-white border border-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
          {/* Header & Image preview */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-start">
            <div className="sm:col-span-5 relative aspect-square rounded-2xl overflow-hidden bg-black/50 border border-white/10">
              <Image
                src={activeModalProduct.image}
                alt={activeModalProduct.name}
                fill
                className="object-cover"
              />
              {activeModalProduct.badge && (
                <span className="absolute top-3 left-3 bg-amber-500 text-black text-[10px] font-black px-2.5 py-1 rounded-full uppercase">
                  {activeModalProduct.badge}
                </span>
              )}
            </div>

            <div className="sm:col-span-7 space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-amber-400">{activeModalProduct.hindiName}</span>
                <div className="flex items-center gap-1 text-xs text-amber-300">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span className="font-bold text-white">{activeModalProduct.rating}</span>
                  <span className="text-zinc-500">({activeModalProduct.reviewsCount})</span>
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
                {activeModalProduct.name}
              </h3>

              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed pt-1">
                {activeModalProduct.description}
              </p>

              {/* Heat profile */}
              {activeModalProduct.heatLevel && (
                <div className="inline-flex items-center gap-1.5 bg-red-950/40 border border-red-500/20 px-3 py-1 rounded-lg text-xs text-amber-200">
                  <Flame className="w-3.5 h-3.5 text-red-400 fill-red-400" />
                  <span>Spice Level: <strong>{activeModalProduct.heatLevel}</strong></span>
                </div>
              )}
            </div>
          </div>

          {/* Key Features */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">
              खूबियां व खासियत (Key Highlights)
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {activeModalProduct.features.map((feature, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 text-xs text-zinc-300 bg-white/5 p-2 rounded-lg border border-white/5"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Ingredients list */}
          <div className="space-y-1.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">
              सामग्री (Ingredients)
            </h4>
            <p className="text-xs text-zinc-400 italic bg-black/40 p-3 rounded-xl border border-white/5">
              {activeModalProduct.ingredients.join(" • ")}
            </p>
          </div>

          {/* Variants Selector */}
          <div className="space-y-2 pt-2 border-t border-white/10">
            <div className="flex items-center justify-between text-xs text-zinc-300 font-medium">
              <span>उपलब्ध पैकेट साइज़ (Choose Weight Variant):</span>
              <span className="text-amber-300 font-bold">{currentVariant.packageType}</span>
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
              {activeModalProduct.variants.map((v) => {
                const isSelected = currentVariant.weight === v.weight;
                return (
                  <button
                    key={v.weight}
                    onClick={() => setSelectedVariant(v)}
                    className={`py-2 px-1 rounded-xl text-xs font-bold text-center border transition-all ${
                      isSelected
                        ? "bg-gradient-to-r from-red-600 to-amber-600 text-white border-amber-400 shadow-md shadow-red-950/80 scale-105"
                        : "bg-white/5 text-zinc-300 border-white/10 hover:border-amber-400/40"
                    }`}
                  >
                    <div className="text-[11px]">{v.weight === "10rs" ? "₹10 Pack" : v.weight}</div>
                    <div className="text-[10px] text-amber-300/80">₹{v.price}</div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Price, Quantity & Add CTA */}
          <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-4">
            <div>
              <span className="text-xs text-zinc-400 block">कुल मूल्य (Price):</span>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-black text-white">
                  ₹{currentVariant.price * quantity}
                </span>
                {currentVariant.originalPrice && (
                  <span className="text-xs text-zinc-500 line-through">
                    ₹{currentVariant.originalPrice * quantity}
                  </span>
                )}
              </div>
            </div>

            {/* Quantity adjust */}
            <div className="flex items-center bg-white/5 rounded-xl border border-white/10 p-1">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-8 h-8 rounded-lg flex items-center justify-center text-zinc-300 hover:bg-white/10 font-bold text-sm"
              >
                -
              </button>
              <span className="w-8 text-center text-sm font-bold text-white">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-8 h-8 rounded-lg flex items-center justify-center text-zinc-300 hover:bg-white/10 font-bold text-sm"
              >
                +
              </button>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAdd}
              disabled={added}
              className="flex-1 max-w-[200px] flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-500 hover:to-amber-500 text-white font-bold py-3 px-4 rounded-xl text-sm shadow-lg shadow-red-950/60 transition-all hover:scale-105"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>{added ? "कार्ट में जोड़ा गया!" : "Add To Cart"}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
