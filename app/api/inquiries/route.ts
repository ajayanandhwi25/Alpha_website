import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

const DATA_FILE_PATH = path.join(process.cwd(), "data", "inquiries.json");

export async function GET() {
  try {
    let existingInquiries = [];
    try {
      const fileData = await fs.readFile(DATA_FILE_PATH, "utf-8");
      existingInquiries = JSON.parse(fileData);
    } catch {
      existingInquiries = [];
    }

    return NextResponse.json({
      success: true,
      count: existingInquiries.length,
      inquiries: existingInquiries
    });
  } catch (error) {
    console.error("Error fetching inquiries:", error);
    return NextResponse.json(
      { success: false, error: "Failed to load inquiries" },
      { status: 500 }
    );
  }
}
