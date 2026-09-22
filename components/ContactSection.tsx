"use client";

import React, { useState } from "react";
import { Send, Phone, Mail, MapPin, MessageSquare, CheckCircle2, Clock, Sparkles, Building2, Store } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    inquiryType: "Wholesale & Distributorship (थोक व एजेंसी)",
    spiceInterest: "All Spices (सभी मसाले)",
    quantityNeeded: "500g - 1Kg Packs",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [successData, setSuccessData] = useState<{ id: string; message: string } | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setSuccessData({ id: data.inquiryId, message: data.message });
        setFormData({
          name: "",
          phone: "",
          email: "",
          inquiryType: "Wholesale & Distributorship (थोक व एजेंसी)",
          spiceInterest: "All Spices (सभी मसाले)",
          quantityNeeded: "500g - 1Kg Packs",
          message: ""
        });
      } else {
        setErrorMessage(data.error || "Form submit nahi ho paya. Kripya dubara koshish karein.");
      }
    } catch {
      setErrorMessage("Network problem. Kripya internet check karein ya WhatsApp par seedha sampark karein.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Glow orb */}
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[150px] pointer-events-none -z-10" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>संपर्क व डीलरशिप (Contact & Wholesale)</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-white">
          हमसे संपर्क करें — <span className="spice-gradient-text">व्यापार व आर्डर पूछताछ</span>
        </h2>
        <p className="text-sm sm:text-base text-zinc-400">
          चाहे आपको घर के लिए मसाले चाहिए हों या आपकी दुकान व रेस्टोरेंट के लिए थोक आपूर्ति, नीचे दिया गया फॉर्म भरें। हमारी टीम आपसे 24 घंटे के अंदर संपर्क करेगी।
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left Column: Direct Info Cards */}
        <div className="lg:col-span-5 space-y-6">
          <div className="glass-spice-panel rounded-3xl p-6 sm:p-8 border border-amber-500/20 space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <Building2 className="w-5 h-5 text-amber-400" />
              <span>देसी अल्फा हेडक्वार्टर</span>
            </h3>

            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              अगर आप डीलरशिप, डिस्ट्रीब्यूटरशिप या बल्क सप्लाई के लिए सीधे बात करना चाहते हैं तो हमें कॉल या व्हाट्सएप भी कर सकते हैं।
            </p>

            <div className="space-y-4 pt-2">
              {/* Phone */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] text-zinc-400 block font-medium">हेल्पलाइन व कॉल:</span>
                  <a href="tel:+919876543210" className="text-sm font-bold text-white hover:text-amber-400 transition-colors">
                    +91 98765 43210 / 0512-288990
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] text-zinc-400 block font-medium">WhatsApp बिज़नेस:</span>
                  <a
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-emerald-400 hover:underline"
                  >
                    +91 98765 43210 (24x7 Chat)
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] text-zinc-400 block font-medium">ईमेल संपर्क:</span>
                  <a href="mailto:contact@desialpha.com" className="text-sm font-bold text-white hover:text-amber-400 transition-colors">
                    contact@desialpha.com
                  </a>
                </div>
              </div>

              {/* Factory Address */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] text-zinc-400 block font-medium">फैक्ट्री व प्रोसेसिंग प्लांट:</span>
                  <p className="text-xs text-zinc-300">
                    Desi Alpha Spices Mill, Plot No. 42-45, Agro & Spice Industrial Zone, India
                  </p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] text-zinc-400 block font-medium">कामकाज का समय:</span>
                  <p className="text-xs text-zinc-300">सोमवार से शनिवार: 9:00 AM - 7:30 PM</p>
                </div>
              </div>
            </div>

            {/* Dealership Perks */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <span className="text-xs font-bold text-amber-300 flex items-center gap-1.5">
                <Store className="w-3.5 h-3.5" /> डिस्ट्रीब्यूटरशिप के विशेष लाभ:
              </span>
              <ul className="text-[11px] text-zinc-300 space-y-1 list-disc list-inside">
                <li>उच्च मार्जिन (Attractive Profit Margins)</li>
                <li>मुफ्त ब्रांडिंग व डिस्प्ले स्टैंड्स</li>
                <li>दुकानों के लिए ₹10 के हैंगिंग स्ट्रिप्स (Ladi Packs)</li>
                <li>100% रिप्लेसमेंट गारंटी</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Contact Form */}
        <div className="lg:col-span-7">
          <div className="glass-spice-panel rounded-3xl p-6 sm:p-10 border border-amber-500/30 shadow-2xl relative">
            
            {successData ? (
              <div className="text-center py-12 space-y-4 animate-fade-in">
                <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/20 border-2 border-emerald-400 flex items-center justify-center text-emerald-400">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-black text-white">आपका संदेश हमें मिल गया है!</h3>
                <div className="bg-white/5 border border-white/10 rounded-xl p-4 max-w-md mx-auto text-left space-y-1">
                  <p className="text-xs text-zinc-400">
                    Inquiry Reference ID: <strong className="text-amber-400 font-mono text-sm">{successData.id}</strong>
                  </p>
                  <p className="text-xs text-zinc-300">
                    {successData.message}
                  </p>
                </div>
                <button
                  onClick={() => setSuccessData(null)}
                  className="mt-4 bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs px-6 py-3 rounded-xl transition-all"
                >
                  नया संदेश भेजें (Submit Another Inquiry)
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    संदेश भेजें / फॉर्म भरें
                  </h3>
                  <p className="text-xs text-zinc-400 mt-1">
                    अपना विवरण भरें, हमारी टीम तुरंत आपको कॉल या व्हाट्सएप पर जानकारी देगी।
                  </p>
                </div>

                {errorMessage && (
                  <div className="p-3 bg-red-950/60 border border-red-500/50 rounded-xl text-xs text-red-200">
                    {errorMessage}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-zinc-300">
                      आपका पूरा नाम (Full Name) *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. अमित वर्मा"
                      className="w-full bg-black/40 border border-white/15 focus:border-amber-400 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder:text-zinc-600 focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Phone / WhatsApp */}
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-zinc-300">
                      मोबाइल / WhatsApp नंबर *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 9876543210"
                      className="w-full bg-black/40 border border-white/15 focus:border-amber-400 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder:text-zinc-600 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email */}
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-zinc-300">
                      ईमेल पता (Email - Optional)
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. amit@example.com"
                      className="w-full bg-black/40 border border-white/15 focus:border-amber-400 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder:text-zinc-600 focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Inquiry Type */}
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-zinc-300">
                      पूछताछ का प्रकार (Inquiry Type) *
                    </label>
                    <select
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                      className="w-full bg-black/40 border border-white/15 focus:border-amber-400 rounded-xl px-4 py-3 text-xs sm:text-sm text-white focus:outline-none transition-colors"
                    >
                      <option className="bg-zinc-900" value="Wholesale & Distributorship (थोक व एजेंसी)">
                        थोक व्यापार व डीलरशिप (Wholesale & Agency)
                      </option>
                      <option className="bg-zinc-900" value="Grocery Store Supply (किराना दुकान सप्लाई)">
                        किराना दुकान सप्लाई (Kirana Store Supply)
                      </option>
                      <option className="bg-zinc-900" value="Hotel & Restaurant Bulk (होटल कैटरिंग थोक)">
                        होटल व कैटरिंग थोक (Hotel & Catering)
                      </option>
                      <option className="bg-zinc-900" value="₹10 Sachet Dealership (₹10 पाउच एजेंसी)">
                        ₹10 पाउच एजेंसी (₹10 Sachets Agency)
                      </option>
                      <option className="bg-zinc-900" value="Retail Home Order (घरेलू आर्डर)">
                        घरेलू आर्डर (Retail Home Order)
                      </option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Spice Interest */}
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-zinc-300">
                      कौनसे मसाले चाहिए? (Spice Interest)
                    </label>
                    <input
                      type="text"
                      value={formData.spiceInterest}
                      onChange={(e) => setFormData({ ...formData, spiceInterest: e.target.value })}
                      placeholder="e.g. Haldi, Mirch, Garam Masala..."
                      className="w-full bg-black/40 border border-white/15 focus:border-amber-400 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder:text-zinc-600 focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Quantity */}
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-zinc-300">
                      अनुमानित मात्रा / साइज़ (Expected Quantity)
                    </label>
                    <select
                      value={formData.quantityNeeded}
                      onChange={(e) => setFormData({ ...formData, quantityNeeded: e.target.value })}
                      className="w-full bg-black/40 border border-white/15 focus:border-amber-400 rounded-xl px-4 py-3 text-xs sm:text-sm text-white focus:outline-none transition-colors"
                    >
                      <option className="bg-zinc-900" value="₹10 Sachets (Ladi Packs)">₹10 Sachets (Ladi Packs)</option>
                      <option className="bg-zinc-900" value="50g - 200g Boxes">50g - 200g Retail Boxes</option>
                      <option className="bg-zinc-900" value="500g - 1Kg Packs">500g - 1Kg Packs</option>
                      <option className="bg-zinc-900" value="Bulk 50Kg+ Commercial">Bulk 50Kg+ Commercial Bags</option>
                      <option className="bg-zinc-900" value="Trial Sample Pack">Trial Sample Pack</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-zinc-300">
                    आपका संदेश या शहर का नाम (Message / City)
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Apna shahar, dukan ka naam ya koi vishesh zaroorat batayein..."
                    className="w-full bg-black/40 border border-white/15 focus:border-amber-400 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder:text-zinc-600 focus:outline-none transition-colors resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 via-amber-600 to-amber-500 hover:from-red-500 hover:to-amber-400 text-white font-extrabold py-4 px-6 rounded-xl text-sm shadow-xl shadow-red-950/60 transition-all hover:scale-[1.01] active:scale-95 disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{loading ? "फॉर्म भेजा जा रहा है..." : "संदेश भेजें (Submit Inquiry)"}</span>
                </button>

                <p className="text-[11px] text-center text-zinc-500">
                  🔒 आपकी जानकारी सुरक्षित है। हम कभी स्पैम नहीं करते।
                </p>
              </form>
            )}

          </div>
        </div>

      </div>
    </section>
  );
}
