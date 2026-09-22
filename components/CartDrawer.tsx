"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useCart } from "./CartContext";
import { X, Trash2, ShoppingBag, MessageCircle, ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

export default function CartDrawer() {
  const {
    items,
    removeItem,
    updateQuantity,
    clearCart,
    totalAmount,
    totalItemsCount,
    isCartOpen,
    setIsCartOpen
  } = useCart();

  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState<string | null>(null);

  if (!isCartOpen) return null;

  const freeDeliveryThreshold = 499;
  const deliveryFee = totalAmount >= freeDeliveryThreshold || totalAmount === 0 ? 0 : 40;
  const finalTotal = totalAmount + deliveryFee;

  // Generate WhatsApp Order Message
  const generateWhatsAppLink = () => {
    let text = `*Namaste Desi Alpha! Mujhe ye masale order karne hain:*\n\n`;
    items.forEach((item, index) => {
      text += `${index + 1}. ${item.product.name} (${item.variant.weight}) x ${item.quantity} = ₹${
        item.variant.price * item.quantity
      }\n`;
    });
    text += `\n*Subtotal:* ₹${totalAmount}`;
    text += `\n*Delivery:* ${deliveryFee === 0 ? "FREE" : `₹${deliveryFee}`}`;
    text += `\n*Total Order Value:* ₹${finalTotal}`;
    text += `\n\nKripya mera order confirm karein aur payment details bhejein.`;
    return `https://wa.me/919876543210?text=${encodeURIComponent(text)}`;
  };

  const handleCheckoutSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName || !customerPhone) return;

    setIsSubmitting(true);
    try {
      const orderSummaryText = items
        .map((it) => `${it.product.name} [${it.variant.weight}] x${it.quantity}`)
        .join(", ");

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: customerName,
          phone: customerPhone,
          inquiryType: "Online Retail Order",
          spiceInterest: orderSummaryText,
          quantityNeeded: `Total ₹${finalTotal} (${totalItemsCount} items)`,
          message: `Delivery Address: ${customerAddress || "Not specified"}. Order details: ${orderSummaryText}`
        })
      });

      const data = await res.json();
      if (data.success) {
        setOrderSuccess(data.inquiryId);
        clearCart();
      } else {
        alert(data.error || "Order submit nahi ho paya.");
      }
    } catch {
      alert("Network error. Kripya WhatsApp par seedha order karein.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/75 backdrop-blur-sm animate-fade-in">
      <div className="absolute inset-0" onClick={() => setIsCartOpen(false)} />

      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-zinc-950 border-l border-amber-500/30 flex flex-col shadow-2xl">
          
          {/* Header */}
          <div className="p-5 border-b border-white/10 flex items-center justify-between bg-zinc-900/50">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center">
                <ShoppingBag className="w-4 h-4 text-amber-400" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">आपकी टोकरी (Your Cart)</h3>
                <p className="text-[11px] text-amber-300/80">{totalItemsCount} Masala items selected</p>
              </div>
            </div>

            <button
              onClick={() => setIsCartOpen(false)}
              className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items List */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-3">
                <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-500">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h4 className="text-base font-bold text-white">कार्ट अभी खाली है</h4>
                <p className="text-xs text-zinc-400">
                  Desi Alpha ke shuddh masale ₹10 ke sachet se lekar 1Kg pack tak chunen!
                </p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="mt-2 text-xs bg-amber-500 hover:bg-amber-400 text-black font-bold px-4 py-2 rounded-xl"
                >
                  मसाले देखें (Shop Spices)
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={`${item.product.id}-${item.variant.weight}`}
                  className="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/5 relative group"
                >
                  <div className="relative w-14 h-14 rounded-lg overflow-hidden bg-zinc-900 shrink-0">
                    <Image
                      src={item.product.image}
                      alt={item.product.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h5 className="text-xs font-bold text-white truncate">{item.product.name}</h5>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="text-[11px] text-amber-400 font-semibold bg-amber-500/10 px-1.5 py-0.5 rounded border border-amber-500/20">
                        {item.variant.weight === "10rs" ? "₹10 Pack" : item.variant.weight}
                      </span>
                      <span className="text-xs text-zinc-300 font-bold">₹{item.variant.price}</span>
                    </div>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex items-center bg-black/50 border border-white/10 rounded-lg p-0.5">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.variant.weight, -1)}
                          className="w-5 h-5 flex items-center justify-center text-zinc-400 hover:text-white text-xs font-bold"
                        >
                          -
                        </button>
                        <span className="w-6 text-center text-xs font-bold text-white">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.variant.weight, 1)}
                          className="w-5 h-5 flex items-center justify-center text-zinc-400 hover:text-white text-xs font-bold"
                        >
                          +
                        </button>
                      </div>

                      <span className="text-xs font-extrabold text-amber-300 ml-auto">
                        ₹{item.variant.price * item.quantity}
                      </span>
                    </div>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeItem(item.product.id, item.variant.weight)}
                    className="text-zinc-500 hover:text-red-400 p-1"
                    title="Remove item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Footer & Checkout Action */}
          {items.length > 0 && (
            <div className="p-4 border-t border-white/10 bg-zinc-900/60 space-y-3">
              {/* Delivery notice */}
              <div className="bg-amber-950/30 border border-amber-500/20 rounded-lg p-2 text-center text-[11px] text-amber-200">
                {totalAmount >= freeDeliveryThreshold ? (
                  <span className="text-emerald-400 font-bold flex items-center justify-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" /> FREE Home Delivery Applied!
                  </span>
                ) : (
                  <span>
                    Add ₹{freeDeliveryThreshold - totalAmount} more for <strong>FREE Delivery</strong>
                  </span>
                )}
              </div>

              {/* Price Breakdown */}
              <div className="space-y-1 text-xs">
                <div className="flex justify-between text-zinc-400">
                  <span>Subtotal:</span>
                  <span className="text-white font-medium">₹{totalAmount}</span>
                </div>
                <div className="flex justify-between text-zinc-400">
                  <span>Delivery Charge:</span>
                  <span className={deliveryFee === 0 ? "text-emerald-400 font-semibold" : "text-white"}>
                    {deliveryFee === 0 ? "FREE" : `₹${deliveryFee}`}
                  </span>
                </div>
                <div className="flex justify-between text-sm font-bold text-white pt-1 border-t border-white/10">
                  <span>Total Amount:</span>
                  <span className="text-amber-400 text-base">₹{finalTotal}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                <a
                  href={generateWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs py-3 px-3 rounded-xl transition-transform hover:scale-[1.02] shadow-lg shadow-emerald-950/40"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Order</span>
                </a>

                <button
                  onClick={() => setCheckoutModalOpen(true)}
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-500 hover:to-amber-500 text-white font-bold text-xs py-3 px-3 rounded-xl transition-transform hover:scale-[1.02] shadow-lg shadow-red-950/40"
                >
                  <span>Website Checkout</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="text-center">
                <button
                  onClick={clearCart}
                  className="text-[11px] text-zinc-500 hover:text-red-400 transition-colors"
                >
                  Clear Cart (खाली करें)
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Checkout Inquiry Modal */}
      {checkoutModalOpen && (
        <div className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="relative w-full max-w-md bg-zinc-950 border border-amber-500/40 rounded-2xl p-6 shadow-2xl">
            <button
              onClick={() => {
                setCheckoutModalOpen(false);
                setOrderSuccess(null);
              }}
              className="absolute top-4 right-4 text-zinc-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            {orderSuccess ? (
              <div className="text-center py-6 space-y-3">
                <div className="w-14 h-14 mx-auto rounded-full bg-emerald-500/20 border border-emerald-400 flex items-center justify-center text-emerald-400">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-black text-white">Order Confirmed!</h4>
                <p className="text-xs text-zinc-300">
                  Aapka order ID: <strong>{orderSuccess}</strong>
                </p>
                <p className="text-xs text-zinc-400">
                  Desi Alpha spice dispatch team aapko payment aur delivery confirmation ke liye jald call karegi.
                </p>
                <button
                  onClick={() => {
                    setCheckoutModalOpen(false);
                    setIsCartOpen(false);
                    setOrderSuccess(null);
                  }}
                  className="mt-4 bg-amber-500 text-black font-bold text-xs px-6 py-2.5 rounded-xl hover:bg-amber-400"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <form onSubmit={handleCheckoutSubmit} className="space-y-4">
                <div>
                  <h4 className="text-lg font-black text-white">Order Details Darj Karein</h4>
                  <p className="text-xs text-zinc-400">
                    Total: <strong className="text-amber-300">₹{finalTotal}</strong> ({totalItemsCount} items)
                  </p>
                </div>

                <div className="space-y-3 text-xs">
                  <div>
                    <label className="block text-zinc-300 mb-1 font-medium">आपका नाम (Full Name) *</label>
                    <input
                      type="text"
                      required
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder="e.g. Ramesh Kumar"
                      className="w-full bg-white/5 border border-white/15 rounded-xl px-3 py-2 text-white placeholder:text-zinc-600 focus:border-amber-400 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-zinc-300 mb-1 font-medium">फोन या WhatsApp नंबर *</label>
                    <input
                      type="tel"
                      required
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      placeholder="e.g. 9876543210"
                      className="w-full bg-white/5 border border-white/15 rounded-xl px-3 py-2 text-white placeholder:text-zinc-600 focus:border-amber-400 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-zinc-300 mb-1 font-medium">डिलीवरी पता (Delivery Address)</label>
                    <textarea
                      rows={2}
                      value={customerAddress}
                      onChange={(e) => setCustomerAddress(e.target.value)}
                      placeholder="Ghar / Dukan ka pata, Pin code sahit"
                      className="w-full bg-white/5 border border-white/15 rounded-xl px-3 py-2 text-white placeholder:text-zinc-600 focus:border-amber-400 focus:outline-none resize-none"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-500 hover:to-amber-500 text-white font-bold py-3 rounded-xl text-xs transition-transform hover:scale-[1.02] disabled:opacity-50"
                >
                  {isSubmitting ? "Order Submit Ho Raha Hai..." : `Order Confirm Karein (₹${finalTotal})`}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
