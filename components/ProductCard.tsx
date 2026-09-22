"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Product, ProductVariant } from "@/data/products";
import { useCart } from "./CartContext";
import { Star, Flame, ShoppingBag, Eye, Check } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem, openProductModal } = useCart();
  
  // Default to 100g or 10rs
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant>(
    product.variants.find((v) => v.weight === "100g") || product.variants[0]
  );
  const [addedAnimation, setAddedAnimation] = useState(false);

  const handleAddToCart = () => {
    addItem(product, selectedVariant, 1);
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 1200);
  };

  const discountPercent = selectedVariant.originalPrice
    ? Math.round(((selectedVariant.originalPrice - selectedVariant.price) / selectedVariant.originalPrice) * 100)
    : 0;

  return (
    <div className="glass-spice-card rounded-2xl overflow-hidden flex flex-col group relative">
      {/* Top badges */}
      <div className="absolute top-3 left-3 z-10 flex flex-col gap-1.5 items-start">
        {product.badge && (
          <span className="text-[10px] font-bold bg-amber-500 text-black px-2.5 py-0.5 rounded-full shadow-md uppercase tracking-wider">
            {product.badge}
          </span>
        )}
        {selectedVariant.weight === "10rs" && (
          <span className="text-[10px] font-bold bg-red-600 text-white px-2 py-0.5 rounded-full shadow-md">
            ₹10 Sachet Pack
          </span>
        )}
      </div>

      {/* Heat meter badge */}
      {product.heatLevel && (
        <div className="absolute top-3 right-3 z-10 flex items-center gap-1 bg-black/70 backdrop-blur-md px-2 py-0.5 rounded-full border border-white/10 text-[10px] text-amber-300 font-medium">
          <Flame
            className={`w-3 h-3 ${
              product.heatLevel === "Fiery"
                ? "text-red-500 fill-red-500"
                : product.heatLevel === "Spicy"
                ? "text-orange-400 fill-orange-400"
                : "text-amber-400"
            }`}
          />
          <span>{product.heatLevel}</span>
        </div>
      )}

      {/* Image container */}
      <div className="relative aspect-square w-full overflow-hidden bg-zinc-900/60 cursor-pointer" onClick={() => openProductModal(product)}>
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />

        {/* Quick view icon overlay on hover */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            openProductModal(product);
          }}
          className="absolute bottom-3 right-3 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 p-2 rounded-xl text-white opacity-0 group-hover:opacity-100 transition-opacity"
          title="Quick View Details"
        >
          <Eye className="w-4 h-4" />
        </button>
      </div>

      {/* Card Content */}
      <div className="p-5 flex flex-col flex-1 justify-between space-y-4">
        <div>
          {/* Rating and Hindi name */}
          <div className="flex items-center justify-between text-xs text-amber-400 mb-1">
            <span className="font-semibold text-amber-300/90 tracking-wide">{product.hindiName}</span>
            <div className="flex items-center gap-1">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span className="font-bold text-white">{product.rating}</span>
              <span className="text-zinc-400 text-[11px]">({product.reviewsCount})</span>
            </div>
          </div>

          {/* Product Title */}
          <h3
            onClick={() => openProductModal(product)}
            className="text-base font-bold text-white group-hover:text-amber-300 transition-colors cursor-pointer line-clamp-1"
          >
            {product.name}
          </h3>

          <p className="text-xs text-zinc-400 mt-1 line-clamp-2 leading-relaxed">
            {product.shortDescription}
          </p>
        </div>

        {/* Variant Weight Selector */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-[11px] text-zinc-400">
            <span>वजन चुनें (Select Pack Size):</span>
            <span className="text-amber-300 font-medium">{selectedVariant.packageType}</span>
          </div>

          <div className="grid grid-cols-3 gap-1.5">
            {product.variants.map((v) => {
              const isSelected = selectedVariant.weight === v.weight;
              return (
                <button
                  key={v.weight}
                  onClick={() => setSelectedVariant(v)}
                  className={`px-2 py-1.5 rounded-lg text-xs font-bold transition-all text-center border ${
                    isSelected
                      ? "bg-gradient-to-r from-red-600 to-amber-600 text-white border-amber-400 shadow-md shadow-red-950/60 scale-[1.02]"
                      : "bg-black/40 text-zinc-300 border-white/10 hover:border-amber-500/40 hover:text-white"
                  }`}
                >
                  {v.weight === "10rs" ? "₹10 Pack" : v.weight}
                </button>
              );
            })}
          </div>
        </div>

        {/* Price and Add to Cart Section */}
        <div className="pt-3 border-t border-white/10 flex items-center justify-between gap-2">
          <div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-xl font-black text-white">₹{selectedVariant.price}</span>
              {selectedVariant.originalPrice && (
                <span className="text-xs text-zinc-500 line-through">₹{selectedVariant.originalPrice}</span>
              )}
            </div>
            {discountPercent > 0 && (
              <span className="text-[10px] font-bold text-emerald-400">
                {discountPercent}% OFF
              </span>
            )}
          </div>

          <button
            onClick={handleAddToCart}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs transition-all ${
              addedAnimation
                ? "bg-emerald-600 text-white"
                : "bg-amber-500 hover:bg-amber-400 text-black hover:scale-105 active:scale-95 shadow-lg shadow-amber-500/20"
            }`}
          >
            {addedAnimation ? (
              <>
                <Check className="w-4 h-4" />
                <span>Added!</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-4 h-4" />
                <span>Add to Cart</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
