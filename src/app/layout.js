import { Noto_Serif_Bengali } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/sonner";

const notoSerifBengali = Noto_Serif_Bengali({
  subsets: ["latin", "bengali"],
});

export const metadata = {
  title: "বাজার দর — আজকের বাজারের দাম এক নজরে",
  description:
    "বাংলাদেশের নিত্যপণ্যের দৈনিক বাজারদর এক জায়গায়। চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম জানুন।",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="bn"
      data-theme="light"
      className={`${notoSerifBengali.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
