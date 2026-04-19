/* Navigation — Companion Flag "Warm Globe" Design
   Slim top bar with serif wordmark, Raleway nav links
   Sky blue accent on active/hover, parchment background */

import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About the CF" },
  { href: "/such-as", label: "Such as?" },
  { href: "/self-test", label: "Is this for you?" },
  { href: "/how-to-acquire", label: "Acquire a CF" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#F5EDD6]/95 backdrop-blur-sm shadow-sm border-b border-[#D4C4A0]"
          : "bg-[#F5EDD6]/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Wordmark */}
          <Link href="/">
            <div className="flex items-center gap-3 group">
              {/* CF Badge icon */}
              <div className="w-9 h-9 rounded-full bg-[#87CEEB] border-2 border-[#5BA3C9] flex items-center justify-center shadow-sm flex-shrink-0">
                <div className="flex flex-col items-center gap-0.5">
                  <div className="w-5 h-2 bg-white rounded-sm border border-[#5BA3C9]/30" />
                  <div className="w-5 h-1 bg-[#C9A84C] rounded-sm" />
                </div>
              </div>
              <div>
                <div
                  className="text-lg leading-tight text-[#3D2B1F] group-hover:text-[#5BA3C9] transition-colors"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 600 }}
                >
                  The Companion Flag
                </div>
                <div
                  className="text-[10px] text-[#8B6E4E] tracking-widest uppercase"
                  style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 500 }}
                >
                  A Symbol of Our Common Humanity
                </div>
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span
                  className={`px-3 py-1.5 text-sm transition-colors rounded-sm ${
                    location === link.href
                      ? "text-[#5BA3C9] font-semibold"
                      : "text-[#5C4033] hover:text-[#5BA3C9]"
                  }`}
                  style={{ fontFamily: "'Raleway', sans-serif", fontWeight: location === link.href ? 600 : 400 }}
                >
                  {link.label}
                </span>
              </Link>
            ))}
          </nav>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 text-[#3D2B1F] hover:text-[#5BA3C9] transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#F5EDD6] border-t border-[#D4C4A0] shadow-lg">
          <nav className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span
                  className={`block px-3 py-2.5 text-sm rounded transition-colors ${
                    location === link.href
                      ? "text-[#5BA3C9] bg-[#E8D8B8] font-semibold"
                      : "text-[#5C4033] hover:text-[#5BA3C9] hover:bg-[#EDE3CC]"
                  }`}
                  style={{ fontFamily: "'Raleway', sans-serif" }}
                >
                  {link.label}
                </span>
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
