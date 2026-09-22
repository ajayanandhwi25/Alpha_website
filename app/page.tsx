"use client";

import React, { useState } from "react";
import { CartProvider } from "@/components/CartContext";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductCatalog from "@/components/ProductCatalog";
import QualityPromise from "@/components/QualityPromise";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import ProductModal from "@/components/ProductModal";
import InquiriesViewerModal from "@/components/InquiriesViewerModal";

export default function Home() {
  const [isInquiriesModalOpen, setIsInquiriesModalOpen] = useState(false);

  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col bg-[#0d0a08] text-[#f3ece4]">
        {/* Sticky Header */}
        <Navbar />

        {/* Main Sections */}
        <main className="flex-1">
          {/* Hero Banner with ₹10 to 1000g badge & visuals */}
          <Hero />

          {/* Quality & 100% Purity Promise */}
          <QualityPromise />

          {/* Filterable Products Catalog with ₹10 / 50g / 100g / 200g / 500g / 1000g */}
          <ProductCatalog />

          {/* Brand Heritage & Stone Grinding Story */}
          <AboutSection />

          {/* Contact & Dealership Form with live backend storage */}
          <ContactSection />
        </main>

        {/* Footer with links & owner portal button */}
        <Footer onOpenInquiriesModal={() => setIsInquiriesModalOpen(true)} />

        {/* Global Drawers & Modals */}
        <CartDrawer />
        <ProductModal />
        <InquiriesViewerModal
          isOpen={isInquiriesModalOpen}
          onClose={() => setIsInquiriesModalOpen(false)}
        />
      </div>
    </CartProvider>
  );
}
