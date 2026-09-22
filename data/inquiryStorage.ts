import initialInquiriesData from "./inquiries.json";

export interface InquiryRecord {
  id: string;
  name: string;
  phone: string;
  email?: string;
  inquiryType?: string;
  spiceInterest?: string;
  quantityNeeded?: string;
  message: string;
  createdAt: string;
  status: string;
}

const STORAGE_KEY = "desi_alpha_inquiries";

export function getInquiries(): InquiryRecord[] {
  if (typeof window === "undefined") {
    return initialInquiriesData as InquiryRecord[];
  }

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(initialInquiriesData));
      return initialInquiriesData as InquiryRecord[];
    }
    return JSON.parse(raw);
  } catch (e) {
    console.error("Error reading inquiries from localStorage:", e);
    return initialInquiriesData as InquiryRecord[];
  }
}

export function saveInquiry(
  data: Omit<InquiryRecord, "id" | "createdAt" | "status"> & {
    id?: string;
    createdAt?: string;
    status?: string;
  }
): { success: boolean; inquiryId: string } {
  const newId = data.id || `DA-${Math.floor(100000 + Math.random() * 900000)}`;
  const newRecord: InquiryRecord = {
    id: newId,
    name: data.name,
    phone: data.phone,
    email: data.email || "",
    inquiryType: data.inquiryType || "General Inquiry",
    spiceInterest: data.spiceInterest || "All Spices",
    quantityNeeded: data.quantityNeeded || "Retail",
    message: data.message || "",
    createdAt: data.createdAt || new Date().toISOString(),
    status: data.status || "New Lead"
  };

  if (typeof window !== "undefined") {
    try {
      const current = getInquiries();
      const updated = [newRecord, ...current];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch (e) {
      console.error("Error saving inquiry to localStorage:", e);
    }
  }

  return { success: true, inquiryId: newId };
}

export function deleteInquiry(id: string): InquiryRecord[] {
  if (typeof window === "undefined") return [];
  try {
    const current = getInquiries();
    const updated = current.filter((item) => item.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    return updated;
  } catch (e) {
    console.error("Error deleting inquiry:", e);
    return [];
  }
}
