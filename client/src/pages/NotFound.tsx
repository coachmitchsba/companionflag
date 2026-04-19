/* 404 Not Found — Companion Flag "Warm Globe" Design */

import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#F5EDD6" }}>
      <Navigation />
      <div className="flex-1 flex items-center justify-center px-4 py-32">
        <div className="text-center max-w-lg">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="h-px w-12 bg-[#C9A84C]" />
            <div className="w-8 h-8 rounded-full bg-[#87CEEB] border-2 border-[#5BA3C9] flex items-center justify-center">
              <div className="flex flex-col items-center gap-0.5">
                <div className="w-4 h-1.5 bg-white rounded-sm" />
                <div className="w-4 h-1 bg-[#C9A84C] rounded-sm" />
              </div>
            </div>
            <div className="h-px w-12 bg-[#C9A84C]" />
          </div>
          <h1 className="text-8xl text-[#D4C4A0] mb-4" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 300 }}>404</h1>
          <h2 className="text-3xl text-[#3D2B1F] mb-4" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 500 }}>Page Not Found</h2>
          <p className="text-[#5C4033] mb-8 leading-relaxed" style={{ fontFamily: "'Lora', Georgia, serif" }}>
            The page you're looking for doesn't exist. Perhaps you were looking for something about our common humanity?
          </p>
          <Link href="/">
            <button className="px-7 py-3 text-sm tracking-wide text-white rounded-sm shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5"
              style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 600, backgroundColor: "#5BA3C9", letterSpacing: "0.08em" }}>
              Return Home
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
