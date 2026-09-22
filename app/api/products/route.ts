import { NextRequest, NextResponse } from "next/server";
import { PRODUCTS, CATEGORIES } from "@/data/products";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const category = searchParams.get("category");
    const search = searchParams.get("search")?.toLowerCase();

    let filtered = PRODUCTS;

    if (category && category !== "all") {
      if (category === "chhota_pack") {
        // filter products that have 10rs pack
        filtered = filtered.filter((p) => p.variants.some((v) => v.weight === "10rs"));
      } else {
        filtered = filtered.filter((p) => p.category === category);
      }
    }

    if (search) {
      filtered = filtered.filter(
        (p) =>
          p.name.toLowerCase().includes(search) ||
          p.hindiName.includes(search) ||
          p.shortDescription.toLowerCase().includes(search) ||
          p.ingredients.some((ing) => ing.toLowerCase().includes(search))
      );
    }

    return NextResponse.json({
      success: true,
      count: filtered.length,
      categories: CATEGORIES,
      products: filtered
    });
  } catch (error) {
    console.error("Products API error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to load products" },
      { status: 500 }
    );
  }
}
