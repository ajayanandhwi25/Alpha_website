"use client";

import React, { useState, useEffect } from "react";
import { X, RefreshCw, MessageSquare, Phone, Calendar, User, Package, Inbox, CheckCircle2, Trash2 } from "lucide-react";
import { getInquiries, deleteInquiry, InquiryRecord } from "@/data/inquiryStorage";

interface InquiriesViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function InquiriesViewerModal({ isOpen, onClose }: InquiriesViewerModalProps) {
  const [inquiries, setInquiries] = useState<InquiryRecord[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchInquiries = () => {
    setLoading(true);
    setError(null);
    try {
      const data = getInquiries();
      setInquiries(data);
    } catch {
      setError("Data load nahi ho saka.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = (id: string) => {
    const updated = deleteInquiry(id);
    setInquiries(updated);
  };

  useEffect(() => {
    if (isOpen) {
      fetchInquiries();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-4xl bg-zinc-950 border border-amber-500/30 rounded-3xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="p-6 border-b border-white/10 bg-zinc-900/60 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
              <Inbox className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-black text-white flex items-center gap-2">
                <span>प्राप्त इन्क्वायरी व ग्राहक डेटा (Owner Portal)</span>
                <span className="text-xs bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded-full border border-amber-500/30 font-bold">
                  {inquiries.length} Leads
                </span>
              </h3>
              <p className="text-xs text-zinc-400">
                वेबसाइट से प्राप्त सभी ग्राहक संदेश, संपर्क नंबर और थोक ऑर्डर यहाँ सुरक्षित हैं।
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={fetchInquiries}
              disabled={loading}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-300 border border-white/10 flex items-center gap-1.5 text-xs font-semibold"
              title="Refresh leads"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin text-amber-400" : ""}`} />
              <span className="hidden sm:inline">Refresh</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white border border-white/10"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {error && (
            <div className="p-4 bg-red-950/60 border border-red-500/40 rounded-xl text-xs text-red-300">
              {error}
            </div>
          )}

          {loading && inquiries.length === 0 ? (
            <div className="py-16 text-center text-zinc-400 text-sm flex flex-col items-center gap-3">
              <RefreshCw className="w-6 h-6 animate-spin text-amber-400" />
              <span>ग्राहक इन्क्वायरी लोड हो रही हैं...</span>
            </div>
          ) : inquiries.length === 0 ? (
            <div className="py-16 text-center text-zinc-400 text-sm">
              अभी तक कोई संदेश प्राप्त नहीं हुआ है। जैसे ही कोई ग्राहक वेबसाइट पर फॉर्म भरेगा, उसका डेटा यहाँ दिखाई देगा।
            </div>
          ) : (
            inquiries.map((inq) => {
              const formattedDate = new Date(inq.createdAt).toLocaleString("en-IN", {
                dateStyle: "medium",
                timeStyle: "short"
              });

              return (
                <div
                  key={inq.id}
                  className="bg-white/5 border border-white/10 hover:border-amber-500/30 rounded-2xl p-5 space-y-3 transition-colors"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/5 pb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-amber-400 bg-amber-950/40 border border-amber-500/30 px-2 py-0.5 rounded">
                        {inq.id}
                      </span>
                      <span className="text-sm font-bold text-white flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 text-zinc-400" />
                        {inq.name}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-zinc-400">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{formattedDate}</span>
                      <span className="bg-emerald-950/60 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded-full text-[11px] font-bold">
                        {inq.status}
                      </span>
                    </div>
                  </div>

                  {/* Details Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                    <div className="bg-black/30 p-2.5 rounded-xl border border-white/5">
                      <span className="text-zinc-500 block text-[10px] uppercase font-bold">संपर्क (Phone / Email):</span>
                      <p className="font-bold text-white mt-0.5">{inq.phone}</p>
                      {inq.email && <p className="text-zinc-400 text-[11px]">{inq.email}</p>}
                    </div>

                    <div className="bg-black/30 p-2.5 rounded-xl border border-white/5">
                      <span className="text-zinc-500 block text-[10px] uppercase font-bold">पूछताछ प्रकार (Inquiry Type):</span>
                      <p className="font-semibold text-amber-300 mt-0.5">{inq.inquiryType}</p>
                    </div>

                    <div className="bg-black/30 p-2.5 rounded-xl border border-white/5">
                      <span className="text-zinc-500 block text-[10px] uppercase font-bold">मसाले व साइज़ (Spices / Qty):</span>
                      <p className="font-medium text-zinc-200 mt-0.5 truncate">{inq.spiceInterest}</p>
                      {inq.quantityNeeded && (
                        <p className="text-[11px] text-zinc-400">{inq.quantityNeeded}</p>
                      )}
                    </div>
                  </div>

                  {/* Message body */}
                  <div className="bg-black/40 p-3 rounded-xl border border-white/5 text-xs text-zinc-300 leading-relaxed">
                    <strong className="text-zinc-400 block text-[10px] uppercase mb-1">ग्राहक का संदेश (Message):</strong>
                    {inq.message}
                  </div>

                  {/* Quick Action bar */}
                  <div className="flex items-center gap-3 pt-1">
                    <a
                      href={`tel:${inq.phone}`}
                      className="inline-flex items-center gap-1.5 bg-white/5 hover:bg-white/10 text-white px-3 py-1.5 rounded-lg text-xs font-semibold border border-white/10"
                    >
                      <Phone className="w-3.5 h-3.5 text-amber-400" />
                      <span>Call Now</span>
                    </a>

                    <a
                      href={`https://wa.me/${inq.phone.replace(/[^0-9]/g, "")}?text=Namaste%20${encodeURIComponent(
                        inq.name
                      )},%20Desi%20Alpha%20Spices%20se%20sampark%20karne%20ke%20liye%20dhanyawad.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 px-3 py-1.5 rounded-lg text-xs font-semibold border border-emerald-500/30"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                      <span>WhatsApp</span>
                    </a>

                    <button
                      onClick={() => handleDelete(inq.id)}
                      title="Delete Lead"
                      className="inline-flex items-center gap-1 bg-red-600/10 hover:bg-red-600/20 text-red-400 px-2.5 py-1.5 rounded-lg text-xs font-semibold border border-red-500/20 transition-colors"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-white/10 bg-zinc-900/60 flex items-center justify-between text-xs text-zinc-400">
          <span>Surakshit Local Leads Portal (Real-time in browser)</span>
          <button
            onClick={onClose}
            className="bg-white/10 hover:bg-white/20 text-white font-bold px-4 py-2 rounded-xl"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
