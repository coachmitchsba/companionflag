/* Contact Page — Companion Flag "Warm Globe" Design */

import { useState, useEffect, useRef } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Mail, Send } from "lucide-react";

function FadeInSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add("visible"); obs.disconnect(); } }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return <div ref={ref} className="fade-in-up" style={{ transitionDelay: `${delay}ms` }}>{children}</div>;
}

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Open mailto with form data
    const subject = encodeURIComponent(form.subject || "Message from companionflag.org");
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.open(`mailto:info@companionflag.org?subject=${subject}&body=${body}`);
    setSubmitted(true);
  };

  const inputClass = "w-full px-4 py-3 rounded-sm border text-[#3D2B1F] placeholder-[#B8A890] focus:outline-none focus:ring-2 focus:ring-[#87CEEB] transition-all";
  const inputStyle = { backgroundColor: "#F8F2E4", borderColor: "#D4C4A0", fontFamily: "'Lora', Georgia, serif" };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F5EDD6" }}>
      <Navigation />
      <div className="pt-32 pb-16 relative" style={{ backgroundImage: `url(/manus-storage/cf-hero-v2_cdce503b.jpg)`, backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="absolute inset-0 bg-[#F5EDD6]/60" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm tracking-[0.25em] uppercase text-[#8B6E4E] mb-3" style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 500 }}>Get in Touch</p>
          <h1 className="text-5xl sm:text-6xl text-[#3D2B1F] leading-tight mb-4" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 500 }}>Contact Us</h1>
          <div className="h-0.5 w-16 bg-[#C9A84C] mx-auto" />
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left: info */}
          <div className="lg:col-span-2">
            <FadeInSection>
              <h2 className="text-3xl text-[#3D2B1F] mb-4" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 500 }}>We'd love to hear from you</h2>
              <p className="text-[#5C4033] leading-relaxed mb-8" style={{ fontFamily: "'Lora', Georgia, serif" }}>
                Whether you have a question about the Companion Flag, want to share your story, are interested in getting involved, or simply want to talk about the idea — please reach out.
              </p>
              <div className="space-y-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#87CEEB] flex items-center justify-center flex-shrink-0">
                    <Mail size={18} className="text-[#1A4A6B]" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-[#8B6E4E] mb-0.5" style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 600 }}>Email</p>
                    <a href="mailto:info@companionflag.org" className="text-[#5BA3C9] hover:underline text-sm" style={{ fontFamily: "'Lora', Georgia, serif" }}>info@companionflag.org</a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#C9A84C]/30 flex items-center justify-center flex-shrink-0">
                    <span className="text-[#8B6E4E] text-lg">🌐</span>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-[#8B6E4E] mb-0.5" style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 600 }}>Website</p>
                    <span className="text-[#5C4033] text-sm" style={{ fontFamily: "'Lora', Georgia, serif" }}>companionflag.org</span>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t" style={{ borderColor: "#D4C4A0" }}>
                <p className="text-sm italic text-[#8B6E4E]" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.1rem" }}>
                  "A vehicle of connection. A song of the heart."
                </p>
              </div>
            </FadeInSection>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-3">
            <FadeInSection delay={150}>
              {submitted ? (
                <div className="rounded-sm p-10 text-center shadow-md" style={{ backgroundColor: "#EDE3CC", border: "1px solid #D4C4A0" }}>
                  <div className="w-16 h-16 rounded-full bg-[#87CEEB] flex items-center justify-center mx-auto mb-4">
                    <Send size={28} className="text-[#1A4A6B]" />
                  </div>
                  <h3 className="text-2xl text-[#3D2B1F] mb-3" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 500 }}>Message Prepared</h3>
                  <p className="text-[#5C4033]" style={{ fontFamily: "'Lora', Georgia, serif" }}>Your email client should have opened with your message ready to send to info@companionflag.org. Thank you for reaching out!</p>
                  <button onClick={() => setSubmitted(false)} className="mt-6 text-sm text-[#5BA3C9] hover:underline" style={{ fontFamily: "'Raleway', sans-serif" }}>Send another message</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs uppercase tracking-wide text-[#8B6E4E] mb-1.5" style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 600 }}>Your Name</label>
                      <input type="text" required placeholder="Jane Smith" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className={inputClass} style={inputStyle} />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wide text-[#8B6E4E] mb-1.5" style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 600 }}>Email Address</label>
                      <input type="email" required placeholder="jane@example.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} className={inputClass} style={inputStyle} />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wide text-[#8B6E4E] mb-1.5" style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 600 }}>Subject</label>
                    <input type="text" placeholder="Question about the Companion Flag" value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })} className={inputClass} style={inputStyle} />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wide text-[#8B6E4E] mb-1.5" style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 600 }}>Message</label>
                    <textarea required rows={6} placeholder="Tell us what's on your mind…" value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} className={inputClass} style={inputStyle} />
                  </div>
                  <button type="submit" className="w-full flex items-center justify-center gap-2 py-3.5 text-white rounded-sm shadow hover:shadow-md transition-all hover:-translate-y-0.5 font-semibold" style={{ backgroundColor: "#5BA3C9", fontFamily: "'Raleway', sans-serif", letterSpacing: "0.06em" }}>
                    <Send size={16} /> Send Message
                  </button>
                  <p className="text-xs text-center text-[#8B6E4E]" style={{ fontFamily: "'Raleway', sans-serif" }}>This will open your email client with your message ready to send.</p>
                </form>
              )}
            </FadeInSection>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
