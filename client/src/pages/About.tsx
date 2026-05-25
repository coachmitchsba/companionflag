/* About Page — Companion Flag "Warm Globe" Design
   Full philosophy, history, flag design explanation, and interactive CF visualizer */

import { useState, useEffect, useRef } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import DefinitionPopup from "@/components/DefinitionPopup";

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

const stripeColors = [
  { name: "Red", hex: "#CC0000", label: "Canada, Turkey, Japan" },
  { name: "Blue", hex: "#003DA5", label: "France, EU, United Nations" },
  { name: "Green", hex: "#009A44", label: "Nigeria, Brazil, Saudi Arabia" },
  { name: "Gold", hex: "#FFD700", label: "Germany, Ukraine, Sweden" },
  { name: "Black", hex: "#1A1A1A", label: "Germany, Kenya, Uganda" },
  { name: "Sky Blue", hex: "#87CEEB", label: "Argentina, Israel, Greece" },
];

function CFVisualizer() {
  const [selected, setSelected] = useState(stripeColors[0]);
  return (
    <div className="rounded-sm p-6 shadow-md" style={{ backgroundColor: "#EDE3CC", border: "1px solid #D4C4A0" }}>
      <h3 className="text-xl text-[#3D2B1F] mb-2" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 600 }}>
        See How It Works
      </h3>
      <p className="text-sm text-[#5C4033] mb-5" style={{ fontFamily: "'Lora', Georgia, serif" }}>
        Choose a stripe color to see how the Companion Flag adapts to any host flag.
      </p>
      {/* Flag preview */}
      <div className="flex flex-col items-center gap-0 mb-6">
        <div className="w-44 h-24 rounded-t-sm shadow-md overflow-hidden" style={{ border: "2px solid #8B6E4E" }}>
          <div className="w-full h-full flex items-center justify-center" style={{ backgroundColor: selected.hex }}>
            <span className="text-white/80 text-xs font-medium" style={{ fontFamily: "'Raleway', sans-serif" }}>Host Flag</span>
          </div>
        </div>
        <div className="w-1 h-3 bg-[#8B6E4E]" />
        <div className="w-44 h-24 rounded-b-sm shadow-md overflow-hidden" style={{ border: "2px solid #8B6E4E" }}>
          <div className="w-full h-[20%]" style={{ backgroundColor: selected.hex }} />
          <div className="w-full h-[80%] bg-white flex items-center justify-center">
            <span className="text-[#8B6E4E] text-xs" style={{ fontFamily: "'Raleway', sans-serif" }}>Companion Flag</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {stripeColors.map((c) => (
          <button key={c.name} onClick={() => setSelected(c)}
            className={`flex items-center gap-2 px-3 py-2 rounded-sm text-xs transition-all ${selected.name === c.name ? "ring-2 ring-[#5BA3C9] ring-offset-1 bg-[#F8F2E4]" : "hover:bg-[#F5EDD6]"}`}
            style={{ fontFamily: "'Raleway', sans-serif" }}>
            <div className="w-4 h-4 rounded-sm flex-shrink-0 border border-[#D4C4A0]" style={{ backgroundColor: c.hex }} />
            <div className="text-left">
              <div className="text-[#3D2B1F] font-medium">{c.name}</div>
              <div className="text-[#8B6E4E] text-[10px] leading-tight">{c.label}</div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

export default function About() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F5EDD6" }}>
      <Navigation />
      <div className="pt-32 pb-16" style={{ backgroundColor: "#F5EDD6" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm tracking-[0.25em] uppercase text-[#8B6E4E] mb-3" style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 500 }}>About the Project</p>
          <h1 className="text-5xl sm:text-6xl text-[#3D2B1F] leading-tight mb-4" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 500 }}>The Companion Flag</h1>
          <div className="h-0.5 w-16 bg-[#C9A84C] mx-auto" />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-12">
            <FadeInSection>
              <h2 className="text-3xl sm:text-4xl text-[#3D2B1F] mb-5" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 500 }}>What is the Companion Flag?</h2>
              <div className="space-y-4 text-[#3D2B1F]" style={{ fontFamily: "'Lora', Georgia, serif", fontSize: "1.05rem", lineHeight: "1.85" }}>
                <p>The Companion Flag is the world's first symbol of all "human samenesses." It is flown directly below the other flags of the world — flags of nations, states, provinces, universities, businesses, and all other communities and affiliations — on the same pole, never alone.</p>
                <p>The idea is to model and proclaim publicly — for ourselves, but mainly for our children and all future generations — that while we are proud of our differences, diversity, and special affiliations, we are also mindful of our essential humanity and all that we share in common with people everywhere.</p>
                <p>To see ourselves and others this way is to clear a space in our daily lives for increased compassionate regard for the other, and deeper self-understanding and self-compassion.</p>
              </div>
            </FadeInSection>

            <div className="h-px" style={{ backgroundColor: "#D4C4A0" }} />

            <FadeInSection delay={100}>
              <h2 className="text-3xl sm:text-4xl text-[#3D2B1F] mb-5" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 500 }}>"Human Samenesses"</h2>
              <div className="space-y-4 text-[#3D2B1F]" style={{ fontFamily: "'Lora', Georgia, serif", fontSize: "1.05rem", lineHeight: "1.85" }}>
                <p>
                  <DefinitionPopup
                    term='"Human samenesses"'
                    underlineColor="#1AAAD4"
                    definition={
                      <>
                        A &lsquo;human sameness,&rsquo; for our purposes, is: any characteristic, experience, concern, desire, belief, or susceptibility that is shared by all people everywhere, our human differences notwithstanding. Examples include the experiences of birth, aging, and death, concern for the safety and happiness of loved ones, and the desire to communicate effectively, and to understand others when they are trying to communicate with us. More examples in Glossary.
                      </>
                    }
                  />{" "}
                  refers to any and all human characteristics, experiences, concerns, desires, beliefs, or susceptibilities that are shared by all people everywhere, their{" "}
                  <DefinitionPopup
                    term="human differences"
                    underlineColor="#1AAAD4"
                    definition={
                      <>
                        A &lsquo;human difference&rsquo; is: any characteristic, experience, concern, desire, belief, or susceptibility that is not shared by all people everywhere. (NOTE: many human differences&mdash;e.g., owning a television set, or knowing how to ride a bicycle&mdash;are shared by millions, or even billions of people worldwide. Still, &lsquo;shared differences&rsquo; are, by definition, not human samenesses, a fact frequently (although not exclusively) lost on the very young). More examples in Glossary.
                      </>
                    }
                  />{" "}
                  notwithstanding.
                </p>
              </div>
              <blockquote className="border-l-4 border-[#87CEEB] pl-5 py-2 my-6">
                <p className="text-xl italic text-[#5C4033]" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                  Examples: the love of children • the desire for health and knowledge • concern for the safety and happiness of loved ones • susceptibility to pain and pleasure, illness and injury • the need for food, water, and air • the processes of birth, aging, and death • the love of stories, music, and dance • our reliance on rational thinking and symbolic communication • the desire to be accepted by others and be seen as a complete and worthwhile human being • the desire to feel safe and at home in the world.
                </p>
              </blockquote>
              <Link href="/such-as">
                <button className="text-sm font-semibold text-[#5BA3C9] hover:text-[#3D8AB0] transition-colors" style={{ fontFamily: "'Raleway', sans-serif" }}>
                  Explore all human samenesses illustrated →
                </button>
              </Link>
            </FadeInSection>

            <div className="h-px" style={{ backgroundColor: "#D4C4A0" }} />

            <FadeInSection delay={150}>
              <h2 className="text-3xl sm:text-4xl text-[#3D2B1F] mb-5" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 500 }}>Both Parts Together</h2>
              <div className="space-y-4 text-[#3D2B1F]" style={{ fontFamily: "'Lora', Georgia, serif", fontSize: "1.05rem", lineHeight: "1.85" }}>
                <p>Common threads that, together with our differences, compose our identities. Our "samenesses" are spotlighted by the Companion Flag, our differences by the flags displayed above it.</p>
                <p>We humans are not just different, as the world's symbolic landscape has suggested to impressionable children across the globe for centuries. We are different in valid and important ways, and the same in valid and important ways. Both parts together, not one or the other, make up the whole of our identity as an individual, as a member of a family, society, or collective, and even as a constituent and representative of the human race.</p>
              </div>
              <blockquote className="border-l-4 border-[#C9A84C] pl-5 py-3 my-6 bg-[#EDE3CC] pr-5 rounded-r-sm">
                <p className="text-xl italic text-[#3D2B1F] font-medium" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                  "The Companion Flag, like — and with! — each host flag flying above it, is a vehicle of connection. A song of the heart."
                </p>
              </blockquote>
            </FadeInSection>

            <div className="h-px" style={{ backgroundColor: "#D4C4A0" }} />

            <FadeInSection delay={200}>
              <h2 className="text-3xl sm:text-4xl text-[#3D2B1F] mb-5" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 500 }}>The Flag's Design</h2>
              <div className="space-y-4 text-[#3D2B1F]" style={{ fontFamily: "'Lora', Georgia, serif", fontSize: "1.05rem", lineHeight: "1.85" }}>
                <p>The Companion Flag is simple by design: a bright, plain white field with a single-colored stripe across the top. The stripe's color matches any color appearing in the host flag above it — creating a visual bond between the two flags.</p>
                <p>It matches the host flag in size exactly, and is always flown below it on the same pole. Together, these flags signify:</p>
              </div>
              <blockquote className="border-l-4 border-[#C9A84C] pl-5 py-3 my-6 bg-[#EDE3CC] pr-5 rounded-r-sm">
                <p className="text-xl italic text-[#3D2B1F] font-medium" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                  "Here we are proud of our differences, our diversity, and our special affiliations, but we are mindful, too, of our essential humanity and all that we share in common with people everywhere."
                </p>
              </blockquote>
            </FadeInSection>

            <div className="h-px" style={{ backgroundColor: "#D4C4A0" }} />

            <FadeInSection delay={250}>
              <h2 className="text-3xl sm:text-4xl text-[#3D2B1F] mb-5" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 500 }}>A Project Born in 1999</h2>
              <div className="space-y-4 text-[#3D2B1F]" style={{ fontFamily: "'Lora', Georgia, serif", fontSize: "1.05rem", lineHeight: "1.85" }}>
                <p>The Companion Flag Project was founded in 1999 as a vision for a more compassionate and self-aware world — one where the flags of our differences fly proudly alongside a symbol of all we share. After a pause due to personal circumstances, the project has returned with renewed purpose and a growing community of supporters around the world.</p>
                <p>We invite you to join this movement. Fly the Companion Flag. Share the idea. Help build a world where our common humanity is as visible as our proud differences.</p>
              </div>
            </FadeInSection>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            <FadeInSection delay={300}>
              <CFVisualizer />
            </FadeInSection>

            <FadeInSection delay={350}>
              <div className="rounded-sm p-6 shadow-sm" style={{ backgroundColor: "#EDE3CC", border: "1px solid #D4C4A0" }}>
                <h3 className="text-lg text-[#3D2B1F] mb-4" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 600 }}>Quick Links</h3>
                <div className="space-y-2">
                  {[
                    { href: "/such-as", label: "Human Samenesses Gallery" },
                    { href: "/self-test", label: "Is this idea for you?" },
                    { href: "/how-to-acquire", label: "How to Acquire a CF" },
                    { href: "/faq", label: "Frequently Asked Questions" },
                    { href: "/contact", label: "Contact Us" },
                  ].map((l) => (
                    <Link key={l.href} href={l.href}>
                      <div className="flex items-center gap-2 text-sm text-[#5BA3C9] hover:text-[#3D8AB0] transition-colors py-1" style={{ fontFamily: "'Raleway', sans-serif" }}>
                        <span>→</span> {l.label}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </FadeInSection>

            <FadeInSection delay={400}>
              <div className="rounded-sm p-6 shadow-sm text-center" style={{ backgroundColor: "#3D2B1F" }}>
                <p className="text-lg italic text-[#E8D8B8] mb-3" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                  "A vehicle of connection. A song of the heart."
                </p>
                <a href="/images/cf-spec-sheet.pdf" target="_blank" rel="noopener noreferrer" className="text-xs text-[#87CEEB] hover:underline" style={{ fontFamily: "'Raleway', sans-serif" }}>
                  Download the CF Spec Sheet →
                </a>
              </div>
            </FadeInSection>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
