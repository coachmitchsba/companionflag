/* How to Acquire a CF Page — Companion Flag "Warm Globe" Design */

import { useEffect, useRef } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Download, Mail } from "lucide-react";

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

export default function HowToAcquire() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F5EDD6" }}>
      <Navigation />
      <div className="pt-32 pb-16 relative" style={{ backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663344373217/Gt9L2E9sF7QsUjdxWiBePy/cf-hero-v2-cVgkMLJTXteqZtNer2dfLS.webp)`, backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="absolute inset-0 bg-[#F5EDD6]/60" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm tracking-[0.25em] uppercase text-[#8B6E4E] mb-3" style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 500 }}>Get Involved</p>
          <h1 className="text-5xl sm:text-6xl text-[#3D2B1F] leading-tight mb-4" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 500 }}>How to Acquire a Companion Flag</h1>
          <div className="h-0.5 w-16 bg-[#C9A84C] mx-auto" />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <FadeInSection>
          <p className="text-xl text-[#3D2B1F] leading-relaxed mb-12" style={{ fontFamily: "'Lora', Georgia, serif" }}>
            The Companion Flag can be made by any flag maker using the simple specifications below. Whether you order through a professional flag shop or make one yourself, the process is straightforward and the result is meaningful.
          </p>
        </FadeInSection>

        <FadeInSection delay={100}>
          <div className="rounded-sm p-8 mb-12 shadow-md" style={{ backgroundColor: "#EDE3CC", border: "1px solid #D4C4A0" }}>
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 rounded-full bg-[#87CEEB] flex items-center justify-center flex-shrink-0 shadow-sm">
                <Download size={24} className="text-[#1A4A6B]" />
              </div>
              <div>
                <h2 className="text-2xl text-[#3D2B1F] mb-2" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 600 }}>Download the CF Spec Sheet</h2>
                <p className="text-[#5C4033] mb-4 leading-relaxed" style={{ fontFamily: "'Lora', Georgia, serif" }}>
                  The Companion Flag Spec Sheet provides all the technical details a flag maker needs to produce a CF to exact specifications. Take this to your local flag shop, or use it as a guide for DIY construction.
                </p>
                <a href="/manus-storage/cf-spec-sheet_18841a65.pdf" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 text-white rounded-sm shadow hover:shadow-md transition-all hover:-translate-y-0.5 text-sm font-semibold"
                  style={{ backgroundColor: "#5BA3C9", fontFamily: "'Raleway', sans-serif", letterSpacing: "0.06em" }}>
                  <Download size={16} /> Download Spec Sheet (PDF)
                </a>
              </div>
            </div>
          </div>
        </FadeInSection>

        <FadeInSection delay={150}>
          <h2 className="text-3xl sm:text-4xl text-[#3D2B1F] mb-6" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 500 }}>Specifications at a Glance</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
            {[
              { label: "Size", value: "Matches the host flag exactly. If the host flag is 36″ × 60″, the CF is also 36″ × 60″." },
              { label: "Design", value: "A bright, plain white field with a single-colored stripe across the top (no white showing above the stripe)." },
              { label: "Stripe Dimensions", value: "The stripe height is 20% of the overall flag height. Example: a 91cm × 183cm flag has an 18.2cm stripe." },
              { label: "Stripe Color", value: "Matches any color appearing in the host flag. When the host has multiple colors, the choice is agreed upon with the customer." },
              { label: "Materials", value: "Nylon (200 Denier) or 2-Ply Polyester. White or off-white canvas duck heading." },
              { label: "Fasteners", value: "#2 (3/8″) rolled rim brass grommets for standard residential flags. Other sizes for larger or smaller flags." },
            ].map((spec, i) => (
              <div key={i} className="rounded-sm p-5 shadow-sm" style={{ backgroundColor: "#F8F2E4", border: "1px solid #D4C4A0" }}>
                <h3 className="text-sm tracking-wide uppercase text-[#8B6E4E] mb-2" style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 600 }}>{spec.label}</h3>
                <p className="text-[#3D2B1F] text-sm leading-relaxed" style={{ fontFamily: "'Lora', Georgia, serif" }}>{spec.value}</p>
              </div>
            ))}
          </div>
        </FadeInSection>

        <FadeInSection delay={200}>
          <h2 className="text-3xl sm:text-4xl text-[#3D2B1F] mb-6" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 500 }}>Your Options</h2>
          <div className="space-y-6 mb-12">
            {[
              { title: "1. Order from a Local Flag Maker", desc: "Take the CF Spec Sheet to any flag shop in your area. The design is simple enough that most flag makers can produce it without difficulty. Ask them to match the stripe color to a color in your host flag." },
              { title: "2. Make Your Own", desc: "The CF's simple design makes it suitable for DIY construction. The Spec Sheet provides all measurements and material specifications you need. Basic sewing skills and the right fabric are all that's required." },
              { title: "3. Contact Us for Recommended Makers", desc: "We are building a list of flag makers who are familiar with the CF and can produce it to exact specifications. Contact us at info@companionflag.org to inquire about makers in your region." },
            ].map((option, i) => (
              <div key={i} className="rounded-sm p-6 shadow-sm" style={{ backgroundColor: "#EDE3CC", border: "1px solid #D4C4A0" }}>
                <h3 className="text-xl text-[#3D2B1F] mb-2" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 600 }}>{option.title}</h3>
                <p className="text-[#5C4033] leading-relaxed" style={{ fontFamily: "'Lora', Georgia, serif" }}>{option.desc}</p>
              </div>
            ))}
          </div>
        </FadeInSection>

        <FadeInSection delay={250}>
          <div className="rounded-sm p-8 text-center shadow-md" style={{ backgroundColor: "#3D2B1F" }}>
            <h3 className="text-2xl text-[#F5EDD6] mb-3" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 500 }}>Questions? We're here to help.</h3>
            <p className="text-[#B8A890] mb-6" style={{ fontFamily: "'Lora', Georgia, serif" }}>Contact the Companion Flag Project with any questions about acquiring, making, or displaying your CF.</p>
            <a href="mailto:info@companionflag.org" className="inline-flex items-center gap-2 px-6 py-3 text-[#1A1008] rounded-sm shadow hover:shadow-md transition-all hover:-translate-y-0.5 text-sm font-semibold" style={{ backgroundColor: "#87CEEB", fontFamily: "'Raleway', sans-serif", letterSpacing: "0.06em" }}>
              <Mail size={16} /> info@companionflag.org
            </a>
          </div>
        </FadeInSection>
      </div>
      <Footer />
    </div>
  );
}
