/* FAQ Page — Companion Flag "Warm Globe" Design */

import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ChevronDown } from "lucide-react";

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

const faqs: { q: string; a: React.ReactNode }[] = [
  {
    q: "What exactly is the Companion Flag?",
    a: "The Companion Flag is a simple, elegant flag — a bright white field with a single-colored stripe across the top — that is flown directly below another flag (called the 'host flag') on the same pole. It is a symbol of all that human beings share in common, regardless of nationality, culture, religion, or any other difference.",
  },
  {
    q: "Why is it called the 'Companion' Flag?",
    a: "Because it is always flown as a companion to another flag, never alone. It accompanies the host flag — be it a national flag, a state flag, a university flag, or any other — as a visual reminder that our differences and our samenesses both deserve recognition.",
  },
  {
    q: "What does the stripe color mean?",
    a: "The stripe at the top of the Companion Flag matches a color found in the host flag flying above it. This creates a visual bond between the two flags — the CF literally 'borrows' a color from its host, symbolizing connection and shared identity.",
  },
  {
    q: "Can the CF be flown with any flag?",
    a: "Yes. The Companion Flag is designed to be flown below any flag in the world — national flags, state and provincial flags, city flags, organizational flags, university flags, sports team flags, pride flags, and more. The only rule is that it is always flown below the host flag, never above it or alone.",
  },
  {
    q: "Is the Companion Flag a political statement?",
    a: "No. The Companion Flag is explicitly non-political. It does not endorse any political party, ideology, or cause. It is a humanistic symbol — a celebration of what all people share, regardless of their political views. It is meant to complement, not compete with, the flags it accompanies.",
  },
  {
    q: "Who can fly the Companion Flag?",
    a: "Anyone. Individuals, families, schools, universities, businesses, governments, non-profits, sports teams, religious institutions — any person or organization that wishes to publicly acknowledge our shared humanity alongside their proud affiliations.",
  },
  {
    q: "How do I get a Companion Flag?",
    a: (
      <>
        The CF can be made by any flag maker using the simple specifications on our Spec Sheet (available for free download on the{" "}
        <Link href="/how-to-acquire">
          <span className="text-[#5BA3C9] hover:underline cursor-pointer">Acquire a CF</span>
        </Link>{" "}
        page). You can take the Spec Sheet to a local flag shop, make one yourself, or{" "}
        <Link href="/contact">
          <span className="text-[#5BA3C9] hover:underline cursor-pointer">contact us</span>
        </Link>{" "}
        for a list of recommended flag makers.
      </>
    ),
  },
  {
    q: "How much does a Companion Flag cost?",
    a: "The cost depends on the flag maker and the size of the flag. Since the CF is a simple two-color design (white field + one stripe color), it is generally among the least expensive custom flags to produce. Contact a local flag maker with the Spec Sheet for a quote.",
  },
  {
    q: "Is the Companion Flag Project a non-profit?",
    a: "Yes. The Companion Flag Project is a non-profit initiative dedicated to spreading the idea of the CF and supporting its adoption around the world.",
  },
  {
    q: "When did the Companion Flag Project begin?",
    a: "The project was founded in 1999. After a pause due to personal circumstances, it has returned with renewed energy and a growing community of supporters worldwide.",
  },
  {
    q: "Can I use the CF in a ceremony or event?",
    a: "Absolutely. The CF is especially meaningful in ceremonies — flag-raising events, school assemblies, community gatherings, international meetings, and more. We encourage creative and thoughtful uses of the CF that highlight our shared humanity.",
  },
  {
    q: "How can I support the Companion Flag Project?",
    a: "The most powerful thing you can do is fly the CF and share the idea with others. You can also contact us to get involved, share resources, or help spread the word. Every conversation about human samenesses is a step forward.",
  },
];

function FAQItem({ q, a }: { q: string; a: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b" style={{ borderColor: "#D4C4A0" }}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left py-5 flex items-start justify-between gap-4 group"
      >
          <span
          className="text-lg text-[#3D2B1F] group-hover:text-[#5BA3C9] transition-colors leading-snug"
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 500 }}
        >
          {q}
        </span>
        <ChevronDown
          size={20}
          className={`flex-shrink-0 mt-1 text-[#8B6E4E] transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? "max-h-96 pb-5" : "max-h-0"}`}
      >
        <div className="text-[#5C4033] leading-relaxed pl-8" style={{ fontFamily: "'Lora', Georgia, serif" }}>
          {a}
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F5EDD6" }}>
      <Navigation />
      <div className="pt-32 pb-16 relative" style={{ backgroundImage: `url(/manus-storage/cf-hero-v2_cdce503b.jpg)`, backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="absolute inset-0 bg-[#F5EDD6]/60" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm tracking-[0.25em] uppercase text-[#8B6E4E] mb-3" style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 500 }}>Common Questions</p>
          <h1 className="text-5xl sm:text-6xl text-[#3D2B1F] leading-tight mb-4" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 500 }}>Frequently Asked Questions</h1>
          <div className="h-0.5 w-16 bg-[#C9A84C] mx-auto" />
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <FadeInSection>
          <p className="text-lg text-[#5C4033] mb-12 leading-relaxed" style={{ fontFamily: "'Lora', Georgia, serif" }}>
            Have a question about the Companion Flag? You'll likely find the answer here. If not, please don't hesitate to <a href="mailto:info@companionflag.org" className="text-[#5BA3C9] hover:underline">reach out to us</a>.
          </p>
        </FadeInSection>

        <FadeInSection delay={100}>
          <div>
            {faqs.map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} />
            ))}
          </div>
        </FadeInSection>

        <FadeInSection delay={200}>
          <div className="mt-16 rounded-sm p-8 text-center shadow-md" style={{ backgroundColor: "#3D2B1F" }}>
            <h3 className="text-2xl text-[#F5EDD6] mb-3" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 500 }}>Still have questions?</h3>
            <p className="text-[#B8A890] mb-6" style={{ fontFamily: "'Lora', Georgia, serif" }}>We'd love to hear from you.</p>
            <a href="mailto:info@companionflag.org" className="inline-flex items-center gap-2 px-6 py-3 text-[#1A1008] rounded-sm shadow hover:shadow-md transition-all hover:-translate-y-0.5 text-sm font-semibold" style={{ backgroundColor: "#87CEEB", fontFamily: "'Raleway', sans-serif", letterSpacing: "0.06em" }}>
              Contact Us
            </a>
          </div>
        </FadeInSection>
      </div>
      <Footer />
    </div>
  );
}
