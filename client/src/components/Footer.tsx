/* Footer — Companion Flag "Warm Globe" Design
   Deep brown background, warm gold accents, Raleway nav
   Three columns: Brand | Navigation | Contact Us (with email form) */

import { useState } from "react";
import { Link } from "wouter";

export default function Footer() {
  const [form, setForm] = useState({ name: "", email: "", country: "", message: "", permission: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Build mailto link as a simple fallback for static site
    const subject = encodeURIComponent("Message from Companion Flag Website");
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nCountry: ${form.country}\nPermission to share: ${form.permission}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:info@companionflag.org?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <footer className="bg-[#2A1F15] text-[#E8D8B8]">
      {/* CF stripe at top */}
      <div className="h-1" style={{ background: "linear-gradient(to right, #3CCDFC, #1AAAD4, #3CCDFC)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* ── Column 1: Brand ── */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full flex-shrink-0 overflow-hidden" style={{ border: "2px solid #1AAAD4" }}>
                <img src="/images/globe-icon.jpg" alt="Globe" className="w-full h-full object-cover" style={{ objectPosition: "center 45%" }} />
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

          {/* ── Column 2: Navigation ── */}
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
                { href: "/news", label: "News & Updates" },
                { href: "/how-to-acquire", label: "Acquire a CF" },
                { href: "/cf-spec-sheet", label: "CF Spec Sheet" },
                { href: "/host-flags", label: "Host Flags" },
                { href: "/faq", label: "FAQ" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <Link key={link.href} href={link.href}>
                  <span
                    className="text-sm text-[#B8A890] transition-colors cursor-pointer"
                    onMouseEnter={e => (e.currentTarget.style.color = '#3CCDFC')}
                    onMouseLeave={e => (e.currentTarget.style.color = '')}
                    style={{ fontFamily: "'Raleway', sans-serif" }}
                  >
                    {link.label}
                  </span>
                </Link>
              ))}
            </nav>
          </div>

          {/* ── Column 3: Contact Us ── */}
          <div>
            <h3
              className="text-xs tracking-widest uppercase text-[#C9A84C] mb-4"
              style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 600 }}
            >
              Contact Us
            </h3>

            {submitted ? (
              <p className="text-sm text-[#B8A890]" style={{ fontFamily: "'Lora', Georgia, serif" }}>
                Thank you for reaching out! We'll be in touch soon.
              </p>
            ) : (
              <>
                <p className="text-sm text-[#B8A890] mb-4 leading-relaxed" style={{ fontFamily: "'Lora', Georgia, serif" }}>
                  We'd love to hear from you! Share your questions, impressions, or critiques of the CF idea!
                </p>
                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                  <input
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    className="w-full px-3 py-2 text-sm bg-[#3D2B1F] text-[#E8D8B8] placeholder-[#6B5A48] rounded-sm border border-[#4D3B2F] focus:outline-none focus:border-[#3CCDFC]"
                    style={{ fontFamily: "'Raleway', sans-serif" }}
                  />
                  <input
                    type="email"
                    placeholder="Your email"
                    value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    className="w-full px-3 py-2 text-sm bg-[#3D2B1F] text-[#E8D8B8] placeholder-[#6B5A48] rounded-sm border border-[#4D3B2F] focus:outline-none focus:border-[#3CCDFC]"
                    style={{ fontFamily: "'Raleway', sans-serif" }}
                  />
                  <input
                    type="text"
                    placeholder="Your country"
                    value={form.country}
                    onChange={e => setForm(f => ({ ...f, country: e.target.value }))}
                    className="w-full px-3 py-2 text-sm bg-[#3D2B1F] text-[#E8D8B8] placeholder-[#6B5A48] rounded-sm border border-[#4D3B2F] focus:outline-none focus:border-[#3CCDFC]"
                    style={{ fontFamily: "'Raleway', sans-serif" }}
                  />
                  <textarea
                    placeholder="Your message, question, or critique…"
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    rows={3}
                    className="w-full px-3 py-2 text-sm bg-[#3D2B1F] text-[#E8D8B8] placeholder-[#6B5A48] rounded-sm border border-[#4D3B2F] focus:outline-none focus:border-[#3CCDFC] resize-none"
                    style={{ fontFamily: "'Raleway', sans-serif" }}
                  />
                  {/* Permission Y/N */}
                  <div>
                    <p className="text-xs text-[#8B7A62] mb-2" style={{ fontFamily: "'Raleway', sans-serif" }}>
                      Do you give us permission to share your message with others (at our discretion)?
                    </p>
                    <div className="flex gap-4">
                      {["Yes", "No"].map(opt => (
                        <label key={opt} className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="permission"
                            value={opt}
                            checked={form.permission === opt}
                            onChange={e => setForm(f => ({ ...f, permission: e.target.value }))}
                            className="accent-[#3CCDFC]"
                          />
                          <span className="text-sm text-[#B8A890]" style={{ fontFamily: "'Raleway', sans-serif" }}>{opt}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="px-5 py-2 text-sm text-white rounded-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
                    style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 600, backgroundColor: "#1AAAD4", letterSpacing: "0.06em" }}
                  >
                    Send Message
                  </button>
                </form>
              </>
            )}

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
