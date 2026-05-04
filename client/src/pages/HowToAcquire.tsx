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
      <div className="pt-32 pb-16 relative" style={{ backgroundImage: `url(/manus-storage/cf-hero-v2_cdce503b.jpg)`, backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="absolute inset-0 bg-[#F5EDD6]/60" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm tracking-[0.25em] uppercase text-[#8B6E4E] mb-3" style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 500 }}>Get Involved</p>
          <h1 className="text-5xl sm:text-6xl text-[#3D2B1F] leading-tight mb-4" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 500 }}>How to Acquire a Companion Flag</h1>
          <div className="h-0.5 w-16 bg-[#C9A84C] mx-auto" />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <FadeInSection>
          <div className="flex flex-col lg:flex-row items-center gap-10 mb-12">
            <div className="flex-shrink-0 w-full lg:w-64">
              <div className="rounded-sm overflow-hidden shadow-xl" style={{ border: "1px solid #D4C4A0" }}>
                <img
                  src="/images/cf-physical-flag.jpg"
                  alt="A physical Companion Flag — white field with a warm stripe across the top"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            <p className="text-xl text-[#3D2B1F] leading-relaxed" style={{ fontFamily: "'Lora', Georgia, serif" }}>
              The Companion Flag can be made by any flag maker using the simple specifications below. Whether you order through a professional flag shop or make one yourself, the process is straightforward and the result is meaningful.
            </p>
          </div>
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
                <a href="/images/cf-spec-sheet.pdf" target="_blank" rel="noopener noreferrer"
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

        <FadeInSection delay={220}>
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl text-[#3D2B1F] mb-3" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 500 }}>Recommended Flag Makers</h2>
            <p className="text-[#5C4033] mb-8 leading-relaxed" style={{ fontFamily: "'Lora', Georgia, serif" }}>
              The following companies are established, reputable flag manufacturers who accept custom orders and can produce a Companion Flag from our Spec Sheet. This is not an exhaustive list — any professional flag maker can work from the CF specifications.
            </p>
            <div className="space-y-8">
              {[
                {
                  region: "United States",
                  makers: [
                    { name: "Annin Flagmakers", url: "https://annin.com", location: "Bloomfield, NJ & South Boston, VA", note: "America's oldest and largest flag manufacturer, founded 1847. Accepts custom orders." },
                    { name: "Flag and Banner", url: "https://www.flagandbanner.com", location: "Little Rock, AR", note: "American-made custom flags. FMAA certified. Wide range of sizes and materials." },
                    { name: "Quality Flags", url: "https://www.qualityflags.com", location: "Burlington, NC", note: "All flags manufactured in the USA. Custom orders welcome." },
                    { name: "BestFlag", url: "https://bestflag.com", location: "Online (ships nationwide)", note: "Fully customizable flags in any size. Fast turnaround, satisfaction guaranteed." },
                    { name: "Custom Flag Company", url: "https://www.customflagcompany.com", location: "Online (ships nationwide)", note: "Specializes in custom flags and banners. Free quotes available." },
                  ],
                },
                {
                  region: "Canada",
                  makers: [
                    { name: "Flags Unlimited", url: "https://www.flagsunlimited.com", location: "Canada-wide", note: "Canada's trusted flag partner since 1966. Custom flags, fabric signage, and displays." },
                    { name: "Northstar Flag & Flagpole", url: "https://www.northstarflags.com", location: "Canada-wide", note: "High-quality custom flags at competitive prices. Canadian and world flags a specialty." },
                  ],
                },
                {
                  region: "United Kingdom",
                  makers: [
                    { name: "Flagmakers", url: "https://flagmakers.co.uk", location: "UK", note: "Established 1837. UK's most trusted bespoke flag maker. Premium quality, heritage expertise." },
                    { name: "Flying Colours Flagmakers", url: "https://www.flyingcolours.org", location: "UK", note: "Bespoke flags, banners, bunting, and ceremonial standards. No order too small." },
                    { name: "Northern Flags", url: "https://www.northernflags.com", location: "UK", note: "UK's leading banner and flag manufacturer. Custom printed flags and banners." },
                  ],
                },
                {
                  region: "Australia & New Zealand",
                  makers: [
                    { name: "Harry West Flags", url: "https://harrywestflags.com.au", location: "Australia", note: "Australia's most trusted flag manufacturer with over 115 years of experience. Australian-made." },
                    { name: "Australian Flag Makers", url: "https://www.australianflagmakers.com.au", location: "Australia", note: "One of Australia's largest custom flag manufacturers. Indoor and outdoor flags." },
                    { name: "Fox Flags", url: "https://foxflags.com.au", location: "Australia", note: "45 years of experience crafting custom flags and banners. Dedicated design team." },
                    { name: "Flagmakers Ltd", url: "https://www.flagmakers.co.nz", location: "New Zealand", note: "New Zealand's specialist flag and banner shop. Custom orders accepted." },
                  ],
                },
              ].map((group, gi) => (
                <div key={gi}>
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-xl text-[#3D2B1F]" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 600 }}>{group.region}</h3>
                    <div className="flex-1 h-px" style={{ backgroundColor: "#D4C4A0" }} />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {group.makers.map((maker, mi) => (
                      <a
                        key={mi}
                        href={maker.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block rounded-sm p-4 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 group"
                        style={{ backgroundColor: "#F8F2E4", border: "1px solid #D4C4A0", textDecoration: "none" }}
                      >
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <span className="text-base text-[#3D2B1F] group-hover:text-[#5BA3C9] transition-colors font-semibold" style={{ fontFamily: "'Raleway', sans-serif" }}>{maker.name}</span>
                          <svg className="w-3.5 h-3.5 text-[#8B6E4E] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                        </div>
                        <p className="text-xs text-[#8B6E4E] mb-1.5" style={{ fontFamily: "'Raleway', sans-serif" }}>{maker.location}</p>
                        <p className="text-sm text-[#5C4033] leading-snug" style={{ fontFamily: "'Lora', Georgia, serif" }}>{maker.note}</p>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <p className="text-sm text-[#8B6E4E] mt-6 italic" style={{ fontFamily: "'Lora', Georgia, serif" }}>
              Know a flag maker who should be on this list? <a href="mailto:info@companionflag.org" className="text-[#5BA3C9] hover:underline">Let us know.</a>
            </p>
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
