/* Footer — Companion Flag "Warm Globe" Design
   Deep brown background, warm gold accents, Raleway nav */

import { Link } from "wouter";
import { Mail, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#2A1F15] text-[#E8D8B8]">
      {/* CF stripe at top */}
      <div className="h-1 bg-gradient-to-r from-[#87CEEB] via-[#5BA3C9] to-[#87CEEB]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#87CEEB] border-2 border-[#5BA3C9] flex items-center justify-center flex-shrink-0">
                <div className="flex flex-col items-center gap-0.5">
                  <div className="w-6 h-2.5 bg-white rounded-sm" />
                  <div className="w-6 h-1.5 bg-[#C9A84C] rounded-sm" />
                </div>
              </div>
              <div
                className="text-xl text-[#F5EDD6]"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 600 }}
              >
                The Companion Flag
              </div>
            </div>
            <p
              className="text-sm text-[#B8A890] leading-relaxed"
              style={{ fontFamily: "'Lora', Georgia, serif" }}
            >
              A symbol of all that human beings share in common. Flown below the flags of the world, on the same pole, never alone.
            </p>
            <p
              className="text-xs text-[#8B7A62] mt-4 italic"
              style={{ fontFamily: "'Lora', Georgia, serif" }}
            >
              "A vehicle of connection. A song of the heart."
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3
              className="text-xs tracking-widest uppercase text-[#C9A84C] mb-4"
              style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 600 }}
            >
              Explore
            </h3>
            <nav className="flex flex-col gap-2">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About the Companion Flag" },
                { href: "/such-as", label: "Human Samenesses" },
                { href: "/self-test", label: "Is this idea for you?" },
                { href: "/how-to-acquire", label: "How to Acquire a CF" },
                { href: "/faq", label: "Frequently Asked Questions" },
                { href: "/contact", label: "Contact Us" },
              ].map((link) => (
                <Link key={link.href} href={link.href}>
                  <span
                    className="text-sm text-[#B8A890] hover:text-[#87CEEB] transition-colors"
                    style={{ fontFamily: "'Raleway', sans-serif" }}
                  >
                    {link.label}
                  </span>
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact & Resources */}
          <div>
            <h3
              className="text-xs tracking-widest uppercase text-[#C9A84C] mb-4"
              style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 600 }}
            >
              Resources
            </h3>
            <div className="flex flex-col gap-3">
              <a
                href="/manus-storage/cf-spec-sheet_18841a65.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[#B8A890] hover:text-[#87CEEB] transition-colors"
                style={{ fontFamily: "'Raleway', sans-serif" }}
              >
                <ExternalLink size={14} />
                Download CF Spec Sheet (PDF)
              </a>
              <a
                href="mailto:info@companionflag.org"
                className="flex items-center gap-2 text-sm text-[#B8A890] hover:text-[#87CEEB] transition-colors"
                style={{ fontFamily: "'Raleway', sans-serif" }}
              >
                <Mail size={14} />
                info@companionflag.org
              </a>
            </div>

            <div className="mt-8 pt-6 border-t border-[#3D2B1F]">
              <p
                className="text-xs text-[#6B5A48]"
                style={{ fontFamily: "'Raleway', sans-serif" }}
              >
                © {new Date().getFullYear()} The Companion Flag Project. A non-profit initiative.
              </p>
              <p
                className="text-xs text-[#6B5A48] mt-1"
                style={{ fontFamily: "'Raleway', sans-serif" }}
              >
                companionflag.org
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
