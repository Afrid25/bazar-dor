export const BASE_URL = "https://openapi.programming-hero.com/api/bazardor";

export async function fetchProducts() {
  const response = await fetch(`${BASE_URL}/products`, {
    next: { revalidate: 300 },
  });

  if (!response.ok) {
    throw new Error(`পণ্যের তালিকা লোড করা যায়নি (${response.status})`);
  }

  const data = await response.json();

  if (!Array.isArray(data)) {
    throw new Error("অপ্রত্যাশিত ডেটা ফরম্যাট");
  }

  return data;
}

export async function fetchProductsByCategory(categorySlug) {
  const response = await fetch(
    `${BASE_URL}/products?category=${encodeURIComponent(categorySlug)}`,
    { next: { revalidate: 300 } }
  );

  if (!response.ok) {
    throw new Error(
      `ক্যাটাগরির পণ্য লোড করা যায়নি (${response.status})`
    );
  }

  const data = await response.json();

  if (!Array.isArray(data)) {
    throw new Error("অপ্রত্যাশিত ডেটা ফরম্যাট");
  }

  return data;
}

export async function fetchProductById(id) {
  const response = await fetch(`${BASE_URL}/products/${id}`, {
    next: { revalidate: 300 },
  });

  if (!response.ok) {
    return null;
  }

  const data = await response.json();
  return data || null;
}

export async function fetchCategories() {
  const response = await fetch(`${BASE_URL}/categories`, {
    next: { revalidate: 3600 },
  });

  if (!response.ok) {
    throw new Error(`ক্যাটাগরি লোড করা যায়নি (${response.status})`);
  }

  const data = await response.json();

  if (!Array.isArray(data)) {
    throw new Error("অপ্রত্যাশিত ডেটা ফরম্যাট");
  }

  return data;
}

export async function fetchCategoryBySlug(slug) {
  const response = await fetch(
    `${BASE_URL}/categories/${encodeURIComponent(slug)}`,
    { next: { revalidate: 3600 } }
  );

  if (!response.ok) {
    return null;
  }

  const data = await response.json();
  return data || null;
}

export const unitLabels = {
  kg: "প্রতি কেজি",
  litre: "প্রতি লিটার",
  dozen: "প্রতি ডজন",
  piece: "প্রতি পিস",
};

export function toBengaliDigits(value) {
  return String(value).replace(/\d/g, (d) => "০১২৩৪৫৬৭৮৯"[d]);
}

export function formatPrice(value) {
  return toBengaliDigits(Number(value).toLocaleString("en-US"));
}

export function formatChangeValue(value) {
  const num = Number(value || 0);
  return toBengaliDigits(Math.abs(num).toFixed(1));
}

export function getUnitLabel(unit) {
  return unitLabels[unit] || `প্রতি ${unit || "কেজি"}`;
}
