import { NextRequest, NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

const DATA_FILE_PATH = path.join(process.cwd(), "data", "inquiries.json");

interface InquiryInput {
  name: string;
  phone: string;
  email?: string;
  inquiryType?: string;
  spiceInterest?: string;
  quantityNeeded?: string;
  message: string;
}

export async function POST(req: NextRequest) {
  try {
    const body: InquiryInput = await req.json();

    if (!body.name || !body.name.trim()) {
      return NextResponse.json(
        { success: false, error: "Kripya apna naam darj karein (Please enter your name)" },
        { status: 400 }
      );
    }

    if (!body.phone || !body.phone.trim()) {
      return NextResponse.json(
        { success: false, error: "Kripya apna phone ya WhatsApp number darj karein (Please enter your phone number)" },
        { status: 400 }
      );
    }

    const cleanPhone = body.phone.replace(/[\s-]/g, "");
    if (cleanPhone.length < 10) {
      return NextResponse.json(
        { success: false, error: "Kripya sahi 10-digit mobile number darj karein" },
        { status: 400 }
      );
    }

    let existingInquiries = [];
    try {
      const fileData = await fs.readFile(DATA_FILE_PATH, "utf-8");
      existingInquiries = JSON.parse(fileData);
    } catch {
      existingInquiries = [];
    }

    const newInquiry = {
      id: `DA-${Date.now().toString().slice(-4)}${Math.floor(10 + Math.random() * 90)}`,
      name: body.name.trim(),
      phone: body.phone.trim(),
      email: body.email?.trim() || "Not provided",
      inquiryType: body.inquiryType || "General Inquiry",
      spiceInterest: body.spiceInterest || "All Spices",
      quantityNeeded: body.quantityNeeded || "Retail / Trial",
      message: body.message?.trim() || "Interested in Desi Alpha Spices",
      createdAt: new Date().toISOString(),
      status: "New Lead"
    };

    existingInquiries.unshift(newInquiry);

    await fs.mkdir(path.dirname(DATA_FILE_PATH), { recursive: true });
    await fs.writeFile(DATA_FILE_PATH, JSON.stringify(existingInquiries, null, 2), "utf-8");

    return NextResponse.json({
      success: true,
      inquiryId: newInquiry.id,
      message: "Shukriya! Aapka sandesh Desi Alpha team ko mil gaya hai. Hamare spice executive jald hi aapse sampark karenge.",
      inquiry: newInquiry
    });
  } catch (error) {
    console.error("Error saving inquiry:", error);
    return NextResponse.json(
      { success: false, error: "Server error: message save nahi ho paya. Kripya dubara koshish karein." },
      { status: 500 }
    );
  }
}
