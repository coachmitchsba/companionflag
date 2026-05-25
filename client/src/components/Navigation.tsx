/* Navigation — Companion Flag "Warm Globe" Design
   Desktop: Globe wordmark + "Home" standalone link + "Menu ▾" dropdown for all other items
   Mobile: Globe wordmark + hamburger toggle with full list
   Client-specified menu items: Home, News & Updates, Acquire a CF, CF Spec Sheet, Host Flags, FAQ, Contact */

import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";

const MOUNTAIN_BLUE = "#2C4A3E";
const SKY = "#3CCDFC";

// Full menu list per client spec
const allLinks = [
  { href: "/", label: "Home" },
  { href: "/news", label: "News & Updates" },
  { href: "/how-to-acquire", label: "Acquire a CF" },
  { href: "/images/cf-spec-sheet.pdf", label: "CF Spec Sheet", external: true },
  { href: "/wall-of-flags", label: "Host Flags" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
  }, [location]);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const dropdownLinks = allLinks.filter(l => l.href !== "/");

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

          {/* ── Wordmark ── */}
          <Link href="/">
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="w-9 h-9 rounded-full shadow-sm flex-shrink-0 overflow-hidden" style={{ border: "2px solid #1AAAD4" }}>
                <img
                  src="/images/globe-icon.jpg"
                  alt="Globe"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: "center 45%" }}
                />
              </div>
              <div>
                <div
                  className="text-lg leading-tight text-[#3D2B1F] transition-colors group-hover:text-[#3CCDFC]"
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

          {/* ── Desktop nav: Home standalone + Menu dropdown ── */}
          <nav className="hidden lg:flex items-center gap-2">
            {/* Standalone Home link */}
            <Link href="/">
              <span
                className="px-3 py-1.5 text-sm transition-colors rounded-sm cursor-pointer"
                style={{
                  fontFamily: "'Raleway', sans-serif",
                  fontWeight: location === "/" ? 600 : 400,
                  color: location === "/" ? SKY : "#5C4033",
                }}
                onMouseEnter={e => { if (location !== "/") (e.currentTarget as HTMLElement).style.color = SKY; }}
                onMouseLeave={e => { if (location !== "/") (e.currentTarget as HTMLElement).style.color = ""; }}
              >
                Home
              </span>
            </Link>

            {/* Menu dropdown */}
            <div ref={dropdownRef} className="relative">
              <button
                onClick={() => setDropdownOpen(v => !v)}
                className="flex items-center gap-1.5 px-4 py-1.5 text-sm rounded-sm transition-all"
                style={{
                  fontFamily: "'Raleway', sans-serif",
                  fontWeight: 500,
                  color: dropdownOpen ? SKY : "#5C4033",
                  backgroundColor: dropdownOpen ? "#EDE3CC" : "transparent",
                  border: `1px solid ${dropdownOpen ? "#D4C4A0" : "transparent"}`,
                }}
                onMouseEnter={e => { if (!dropdownOpen) (e.currentTarget as HTMLElement).style.color = SKY; }}
                onMouseLeave={e => { if (!dropdownOpen) (e.currentTarget as HTMLElement).style.color = ""; }}
              >
                Menu
                <ChevronDown
                  size={14}
                  className="transition-transform duration-200"
                  style={{ transform: dropdownOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                />
              </button>

              {/* Dropdown panel */}
              {dropdownOpen && (
                <div
                  className="absolute right-0 top-full mt-2 w-52 rounded-sm shadow-xl border border-[#D4C4A0] overflow-hidden"
                  style={{ backgroundColor: "#F5EDD6", zIndex: 100 }}
                >
                  {dropdownLinks.map(link => (
                    (link as any).external ? (
                      <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer"
                        className="block px-4 py-2.5 text-sm transition-colors cursor-pointer"
                        style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 400, color: "#3D2B1F", textDecoration: "none" }}
                        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "#EDE3CC"; (e.currentTarget as HTMLElement).style.color = SKY; }}
                        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "transparent"; (e.currentTarget as HTMLElement).style.color = "#3D2B1F"; }}
                      >{link.label}</a>
                    ) : (
                      <Link key={link.href} href={link.href}>
                        <span
                          className="block px-4 py-2.5 text-sm transition-colors cursor-pointer"
                          style={{
                            fontFamily: "'Raleway', sans-serif",
                            fontWeight: location === link.href ? 600 : 400,
                            color: location === link.href ? SKY : "#3D2B1F",
                            backgroundColor: location === link.href ? "#EDE3CC" : "transparent",
                          }}
                          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "#EDE3CC"; (e.currentTarget as HTMLElement).style.color = SKY; }}
                          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = location === link.href ? "#EDE3CC" : "transparent"; (e.currentTarget as HTMLElement).style.color = location === link.href ? SKY : "#3D2B1F"; }}
                        >
                          {link.label}
                        </span>
                      </Link>
                    )
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* ── Mobile hamburger toggle ── */}
          <button
            className="lg:hidden p-2 text-[#3D2B1F] transition-colors"
            onMouseEnter={e => (e.currentTarget.style.color = SKY)}
            onMouseLeave={e => (e.currentTarget.style.color = "")}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* ── Mobile menu drawer ── */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#F5EDD6] border-t border-[#D4C4A0] shadow-lg">
          <nav className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-1">
            {allLinks.map(link => (
              (link as any).external ? (
                <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer"
                  className="block px-3 py-2.5 text-sm rounded transition-colors cursor-pointer text-[#5C4033] hover:bg-[#EDE3CC]"
                  style={{ fontFamily: "'Raleway', sans-serif", textDecoration: "none" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = SKY; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = ""; }}
                >{link.label}</a>
              ) : (
                <Link key={link.href} href={link.href}>
                  <span
                    className={`block px-3 py-2.5 text-sm rounded transition-colors cursor-pointer ${
                      location === link.href ? "bg-[#E8D8B8] font-semibold" : "text-[#5C4033] hover:bg-[#EDE3CC]"
                    }`}
                    style={{ fontFamily: "'Raleway', sans-serif", color: location === link.href ? SKY : undefined }}
                    onMouseEnter={e => { if (location !== link.href) (e.currentTarget as HTMLElement).style.color = SKY; }}
                    onMouseLeave={e => { if (location !== link.href) (e.currentTarget as HTMLElement).style.color = ""; }}
                  >
                    {link.label}
                  </span>
                </Link>
              )
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
