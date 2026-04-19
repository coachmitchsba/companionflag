/* Home Page — Companion Flag "Warm Globe" Design
   Sections: Hero → What is CF → Such as? Preview → Philosophy → Is this for you? → CTA
   Parchment backgrounds, Cormorant Garamond display, Lora body */

import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ChevronLeft, ChevronRight } from "lucide-react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663344373217/Gt9L2E9sF7QsUjdxWiBePy/cf-hero-v2-cVgkMLJTXteqZtNer2dfLS.webp";
const TEXTURE_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663344373217/Gt9L2E9sF7QsUjdxWiBePy/cf-section-bg-v2-brtoNWaApaBXVtDqw3p2Hu.webp";
const MONTAGE = "/manus-storage/montage_5ae5ebef.jpg";

const suchAsSlides = [
  { src: "/manus-storage/processes-of-birth_770cd134.jpg", alt: "The processes of birth, aging, and death" },
  { src: "/manus-storage/love-of-children_8a8ca5a8.jpg", alt: "The love of children" },
  { src: "/manus-storage/love-of-music_9fae1457.jpg", alt: "The love of music, stories, and dance" },
  { src: "/manus-storage/need-for-food_923c3764.jpg", alt: "The need for food, water, and air" },
  { src: "/manus-storage/concern-for-friends_4d0b6595.jpg", alt: "Concern for the safety of loved ones" },
  { src: "/manus-storage/susceptibility-to-pain_00359040.jpg", alt: "Susceptibility to pain and pleasure" },
  { src: "/manus-storage/survive-flourish_dc2c3a29.jpg", alt: "The desire to survive and flourish" },
  { src: "/manus-storage/desire-to-feel-safe_74c57464.jpg", alt: "The desire to feel safe and at home in the world" },
  { src: "/manus-storage/setbacks-uncertainties_e825ce39.jpg", alt: "Setbacks and uncertainties" },
  { src: "/manus-storage/desiretofitinv1_8d466ea4.jpg", alt: "The desire to fit in. To matter to oneself and others." },
];

function FadeInSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add("visible"); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return (
    <div ref={ref} className="fade-in-up" style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

export default function Home() {
  const [slideOpen, setSlideOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToSlide = (index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => { setCurrentSlide(index); setIsTransitioning(false); }, 300);
  };
  const prevSlide = () => goToSlide((currentSlide - 1 + suchAsSlides.length) % suchAsSlides.length);
  const nextSlide = () => goToSlide((currentSlide + 1) % suchAsSlides.length);

  useEffect(() => {
    if (!slideOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "Escape") setSlideOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [slideOpen, currentSlide, isTransitioning]);

  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = slideOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [slideOpen]);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F5EDD6" }}>
      <Navigation />

      {/* ═══════════════════════════════════════════ HERO ═══ */}
      <section
        className="relative min-h-screen flex items-center pt-16"
        style={{ backgroundImage: `url(${HERO_BG})`, backgroundSize: "cover", backgroundPosition: "center", backgroundAttachment: "fixed" }}
      >
        <div className="absolute inset-0 bg-[#F5EDD6]/35" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm tracking-[0.25em] uppercase mb-4 text-[#8B6E4E]" style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 500 }}>
                A Non-Profit Initiative
              </p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl text-[#3D2B1F] leading-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 500 }}>
                Imagine it<br /><em className="text-[#5BA3C9]">everywhere…</em>
              </h1>
              <div className="h-0.5 w-24 bg-[#C9A84C] mb-6" />
              <p className="text-xl text-[#5C4033] leading-relaxed mb-8 max-w-lg" style={{ fontFamily: "'Lora', Georgia, serif" }}>
                The Companion Flag is flown directly below the other flags of the world — on the same pole, never alone — as a symbol of all that human beings share in common.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/about">
                  <button className="px-7 py-3 text-sm tracking-wide text-white rounded-sm shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5"
                    style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 600, backgroundColor: "#5BA3C9", letterSpacing: "0.08em" }}>
                    Learn More
                  </button>
                </Link>
                <Link href="/how-to-acquire">
                  <button className="px-7 py-3 text-sm tracking-wide rounded-sm border transition-all hover:-translate-y-0.5"
                    style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 600, color: "#3D2B1F", borderColor: "#8B6E4E", letterSpacing: "0.08em" }}>
                    Acquire a CF
                  </button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute -inset-3 bg-[#C9A84C]/20 rounded-sm -rotate-1" />
                <img src={MONTAGE} alt="Companion Flag adoption ceremonies around the world"
                  className="relative rounded-sm shadow-2xl max-w-full w-full lg:max-w-lg"
                  style={{ border: "6px solid white" }} />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-10">
            <path d="M0 60V30C240 0 480 60 720 30C960 0 1200 60 1440 30V60H0Z" fill="#F5EDD6" />
          </svg>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ WHAT IS CF ═══ */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#F5EDD6" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <p className="text-sm tracking-[0.25em] uppercase text-[#8B6E4E] mb-3" style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 500 }}>The Companion Flag</p>
              <h2 className="text-4xl sm:text-5xl text-[#3D2B1F] mb-6 leading-tight" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 500 }}>
                The World's First Symbol of All Human Samenesses
              </h2>
              <div className="h-0.5 w-16 bg-[#C9A84C] mx-auto mb-8" />
            </div>
          </FadeInSection>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <FadeInSection delay={100}>
              <div className="space-y-5">
                <p className="text-lg text-[#3D2B1F] leading-relaxed" style={{ fontFamily: "'Lora', Georgia, serif" }}>
                  The idea? To model and proclaim publicly — for ourselves, but mainly for our children and all future generations — that while we are proud of our differences, diversity, and special affiliations, we are also mindful of our essential humanity and all that we share in common with people everywhere.
                </p>
                <p className="text-lg text-[#3D2B1F] leading-relaxed" style={{ fontFamily: "'Lora', Georgia, serif" }}>
                  To see ourselves and others this way is to clear a space in our daily lives for increased compassionate regard for the other, and deeper self-understanding and self-compassion.
                </p>
                <blockquote className="border-l-4 border-[#87CEEB] pl-5 py-2 my-6">
                  <p className="text-xl italic text-[#5C4033] leading-relaxed" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 400 }}>
                    "Human samenesses" refers to <em>any and all human characteristics, experiences, concerns, desires, beliefs, or susceptibilities that are shared by all people everywhere, their human differences notwithstanding.</em>
                  </p>
                </blockquote>
                <div className="pt-2">
                  <Link href="/about">
                    <button className="text-sm font-semibold text-[#5BA3C9] hover:text-[#3D8AB0] transition-colors" style={{ fontFamily: "'Raleway', sans-serif" }}>
                      Read the full story →
                    </button>
                  </Link>
                </div>
              </div>
            </FadeInSection>
            <FadeInSection delay={200}>
              <div className="rounded-sm p-8 shadow-md" style={{ backgroundColor: "#EDE3CC", border: "1px solid #D4C4A0" }}>
                <h3 className="text-2xl text-[#3D2B1F] mb-5" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 600 }}>Examples of Human Samenesses:</h3>
                <ul className="space-y-2">
                  {[
                    "The love of children",
                    "The desire for health and knowledge",
                    "Concern for the safety and happiness of loved ones",
                    "Susceptibility to pain and pleasure, illness and injury",
                    "The need for food, water, and air",
                    "The processes of birth, aging, and death",
                    "The love of stories, music, and dance",
                    "Our reliance on rational thinking and symbolic communication",
                    "The desire to be accepted and seen as a complete and worthwhile human being",
                    "The desire to feel safe and at home in the world",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-[#87CEEB] mt-1 flex-shrink-0">•</span>
                      <span className="text-[#5C4033] text-sm leading-relaxed" style={{ fontFamily: "'Lora', Georgia, serif" }}>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-4 border-t border-[#D4C4A0]">
                  <button onClick={() => { setSlideOpen(true); setCurrentSlide(0); }}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#5BA3C9] hover:text-[#3D8AB0] transition-colors"
                    style={{ fontFamily: "'Raleway', sans-serif" }}>
                    See all human samenesses illustrated →
                  </button>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ SUCH AS? ═══ */}
      <section className="py-20 lg:py-28 relative" style={{ backgroundImage: `url(${TEXTURE_BG})`, backgroundSize: "cover" }}>
        <div className="absolute inset-0 bg-[#F0E6D0]/82" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="text-center mb-4">
              <p className="text-lg text-[#6B4C2A] leading-relaxed max-w-2xl mx-auto" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 400, fontStyle: "italic" }}>
                Illuminating the common threads that connect us all…
              </p>
            </div>
          </FadeInSection>
          <FadeInSection delay={150}>
            <div className="text-center mb-10">
              <h2 className="text-4xl sm:text-5xl text-[#3D2B1F] mb-4" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 500 }}>
                What do we all share?
              </h2>
              <p className="text-base text-[#5C4033] max-w-xl mx-auto mb-8" style={{ fontFamily: "'Lora', Georgia, serif" }}>
                The Companion Flag spotlights the samenesses that bind all of humanity. Click below to explore them.
              </p>
              <button onClick={() => { setSlideOpen(true); setCurrentSlide(0); }}
                className="inline-flex items-center gap-3 px-8 py-4 text-white rounded-sm shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 text-base"
                style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 600, backgroundColor: "#5BA3C9", letterSpacing: "0.06em" }}>
                <span className="text-xl">✦</span> Such as?
              </button>
            </div>
          </FadeInSection>
          <FadeInSection delay={250}>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mt-8">
              {suchAsSlides.slice(0, 5).map((slide, i) => (
                <button key={i} onClick={() => { setSlideOpen(true); setCurrentSlide(i); }}
                  className="relative overflow-hidden rounded-sm shadow-md hover:shadow-xl transition-all hover:-translate-y-1 group"
                  style={{ aspectRatio: "4/3" }}>
                  <img src={slide.src} alt={slide.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-[#3D2B1F]/0 group-hover:bg-[#3D2B1F]/20 transition-colors" />
                </button>
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ SLIDESHOW MODAL ═══ */}
      {slideOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={(e) => { if (e.target === e.currentTarget) setSlideOpen(false); }}>
          <div className="relative w-full max-w-4xl mx-4">
            <button onClick={() => setSlideOpen(false)}
              className="absolute -top-10 right-0 text-white/80 hover:text-white text-sm flex items-center gap-1 transition-colors z-10"
              style={{ fontFamily: "'Raleway', sans-serif" }}>
              Close ✕
            </button>
            <div className="relative rounded-sm overflow-hidden shadow-2xl bg-[#F5EDD6]">
              <img src={suchAsSlides[currentSlide].src} alt={suchAsSlides[currentSlide].alt}
                className={`w-full h-auto transition-opacity duration-300 ${isTransitioning ? "opacity-0" : "opacity-100"}`} />
              <button onClick={prevSlide} className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow-md transition-all hover:scale-110">
                <ChevronLeft size={20} className="text-[#3D2B1F]" />
              </button>
              <button onClick={nextSlide} className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow-md transition-all hover:scale-110">
                <ChevronRight size={20} className="text-[#3D2B1F]" />
              </button>
            </div>
            <div className="flex justify-center gap-2 mt-4">
              {suchAsSlides.map((_, i) => (
                <button key={i} onClick={() => goToSlide(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${i === currentSlide ? "bg-[#87CEEB] scale-125" : "bg-white/50 hover:bg-white/80"}`} />
              ))}
            </div>
            <p className="text-center text-white/80 text-sm mt-3" style={{ fontFamily: "'Lora', Georgia, serif", fontStyle: "italic" }}>
              {suchAsSlides[currentSlide].alt}
            </p>
          </div>
        </div>
      )}

      {/* ═══════════════════════════════════════════ PHILOSOPHY ═══ */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#F5EDD6" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="h-px w-12 bg-[#C9A84C]" />
                <div className="w-8 h-8 rounded-full bg-[#87CEEB] border-2 border-[#5BA3C9] flex items-center justify-center">
                  <div className="flex flex-col items-center gap-0.5">
                    <div className="w-4 h-1.5 bg-white rounded-sm" />
                    <div className="w-4 h-1 bg-[#C9A84C] rounded-sm" />
                  </div>
                </div>
                <div className="h-px w-12 bg-[#C9A84C]" />
              </div>
            </div>
          </FadeInSection>
          <FadeInSection delay={100}>
            <div className="space-y-6 text-center">
              <p className="text-xl sm:text-2xl text-[#3D2B1F] leading-relaxed" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 400 }}>
                …Common threads that, together with our differences, compose our identities. Our "samenesses" are spotlighted by the Companion Flag, our differences by the flags displayed above it.
              </p>
              <p className="text-xl sm:text-2xl text-[#3D2B1F] leading-relaxed" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 400 }}>
                We humans are not just different, as the world's symbolic landscape has suggested to impressionable children across the globe for centuries. We are different in valid and important ways, and the same in valid and important ways. Both parts together, not one or the other, make up the whole of our identity.
              </p>
              <p className="text-2xl sm:text-3xl text-[#5BA3C9] leading-relaxed font-medium" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontStyle: "italic" }}>
                "The Companion Flag, like — and with! — each host flag flying above it, is a vehicle of connection. A song of the heart."
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ IS THIS FOR YOU? ═══ */}
      <section className="py-20 lg:py-24" style={{ backgroundColor: "#3D2B1F" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeInSection>
            <h2 className="text-4xl sm:text-5xl text-[#F5EDD6] mb-6 leading-tight" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 500 }}>
              Is this idea for you?
            </h2>
            <p className="text-lg text-[#B8A890] mb-10 max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: "'Lora', Georgia, serif" }}>
              Take a few minutes to reflect. The Companion Flag is for anyone who believes that our shared humanity is worth celebrating — alongside our proud differences.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/self-test">
                <button className="px-8 py-4 rounded-sm shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 text-base font-semibold"
                  style={{ fontFamily: "'Raleway', sans-serif", backgroundColor: "#87CEEB", color: "#1A1008", letterSpacing: "0.06em" }}>
                  Reflect &amp; Explore
                </button>
              </Link>
              <Link href="/how-to-acquire">
                <button className="px-8 py-4 rounded-sm border-2 text-[#E8D8B8] hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all hover:-translate-y-0.5 text-base font-semibold"
                  style={{ fontFamily: "'Raleway', sans-serif", borderColor: "#8B6E4E", letterSpacing: "0.06em" }}>
                  How to Acquire a CF
                </button>
              </Link>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ HISTORY CALLOUT ═══ */}
      <section className="py-16" style={{ backgroundColor: "#EDE3CC" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeInSection>
            <p className="text-sm tracking-[0.2em] uppercase text-[#8B6E4E] mb-4" style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 500 }}>A Project Born in 1999</p>
            <p className="text-lg text-[#5C4033] leading-relaxed" style={{ fontFamily: "'Lora', Georgia, serif" }}>
              The Companion Flag Project began in 1999 as a vision for a more compassionate world — one where the flags of our differences fly proudly alongside a symbol of all we share. We invite you to be part of this growing movement.
            </p>
            <div className="mt-8">
              <Link href="/about">
                <button className="text-sm font-semibold text-[#5BA3C9] hover:text-[#3D8AB0] transition-colors" style={{ fontFamily: "'Raleway', sans-serif" }}>
                  Read the full story →
                </button>
              </Link>
            </div>
          </FadeInSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
