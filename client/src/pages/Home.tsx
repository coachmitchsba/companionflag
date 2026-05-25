/* Home Page — Companion Flag "Warm Globe" Design
   Sections: Hero → What is CF → Placeholder → Precision is Key → Such as? → Slideshow Modal → Physical Flag → Philosophy → Gallery → Is this for you? → History
   Parchment backgrounds, Cormorant Garamond display, Lora body
   Sky blue accent: #3CCDFC (true sky blue, matching "Reflect & Explore" button tone) */

import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ChevronLeft, ChevronRight } from "lucide-react";

import DefinitionPopup from "@/components/DefinitionPopup";

const HERO_BG = "/manus-storage/cf-hero-v2_cdce503b.jpg";
const TEXTURE_BG = "/manus-storage/cf-section-bg-v2_5818c4e7.jpg";
const MONTAGE = "/images/kidsonstage.jpg";
const SKY = "#3CCDFC";
const SKY_DARK = "#1AAAD4";

// Slides with matching index for anchor linking
const suchAsSlides = [
  { src: "/images/processes-of-birth.jpg", alt: "The processes of birth, aging, and death", label: "The processes of birth, aging, and death" },
  { src: "/images/love-of-children.jpg", alt: "The love of children", label: "The love of children" },
  { src: "/images/love-of-music.jpg", alt: "The love of music, stories, and dance", label: "The love of stories, music, and dance" },
  { src: "/images/need-for-food.jpg", alt: "The need for food, water, and air", label: "The need for food, water, and air" },
  { src: "/images/concern-for-friends.jpg", alt: "Concern for the safety of loved ones", label: "Concern for the safety and happiness of loved ones" },
  { src: "/images/susceptibility-to-pain.jpg", alt: "Susceptibility to pain and pleasure", label: "Susceptibility to pain and pleasure, illness and injury" },
  { src: "/images/survive-flourish.jpg", alt: "The desire to survive and flourish", label: "The desire to survive and flourish" },
  { src: "/images/desire-to-feel-safe.jpg", alt: "The desire to feel safe and at home in the world", label: "The desire to feel safe and at home in the world" },
  { src: "/images/setbacks-uncertainties.jpg", alt: "Setbacks and uncertainties", label: "Setbacks and uncertainties" },
  { src: "/images/desiretofitinv1.jpg", alt: "The desire to fit in. To matter to oneself and others.", label: "The desire to be accepted and seen as a complete and worthwhile human being" },
];

// Map example text to slide index
const examplesWithSlides: { text: string; slideIndex: number }[] = [
  { text: "The love of children", slideIndex: 1 },
  { text: "The desire for health and knowledge", slideIndex: 7 },
  { text: "Concern for the safety and happiness of loved ones", slideIndex: 4 },
  { text: "Susceptibility to pain and pleasure, illness and injury", slideIndex: 5 },
  { text: "The need for food, water, and air", slideIndex: 3 },
  { text: "The processes of birth, aging, and death", slideIndex: 0 },
  { text: "The love of stories, music, and dance", slideIndex: 2 },
  { text: "Our reliance on rational thinking and symbolic communication", slideIndex: 8 },
  { text: "The desire to be accepted and seen as a complete and worthwhile human being", slideIndex: 9 },
  { text: "The desire to feel safe and at home in the world", slideIndex: 7 },
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
  const suchAsRef = useRef<HTMLElement>(null);

  const goToSlide = (index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => { setCurrentSlide(index); setIsTransitioning(false); }, 300);
  };
  const prevSlide = () => goToSlide((currentSlide - 1 + suchAsSlides.length) % suchAsSlides.length);
  const nextSlide = () => goToSlide((currentSlide + 1) % suchAsSlides.length);

  const openSlideAt = (index: number) => {
    setCurrentSlide(index);
    setSlideOpen(true);
    // Scroll to such-as section
    suchAsRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const scrollToSuchAs = () => {
    suchAsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

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
            {/* Left: text */}
            <div>
              <p className="text-sm tracking-[0.25em] uppercase mb-4 text-[#8B6E4E]" style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 500 }}>
                A Non-Profit Initiative
              </p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl text-[#3D2B1F] leading-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 500 }}>
                Imagine it<br /><em style={{ color: SKY }}>everywhere…</em>
              </h1>
              <div className="h-0.5 w-24 bg-[#C9A84C] mb-6" />
              <p className="text-xl text-[#5C4033] leading-relaxed mb-8 max-w-lg" style={{ fontFamily: "'Lora', Georgia, serif" }}>
                The Companion Flag is flown directly below the other flags of the world — on the same pole, never alone — as a symbol of all that human beings share in common.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/about">
                  <button className="px-7 py-3 text-sm tracking-wide text-white rounded-sm shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5"
                    style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 600, backgroundColor: SKY, letterSpacing: "0.08em" }}>
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

            {/* Right: hero image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-lg">
                <div className="absolute -inset-3 bg-[#C9A84C]/20 rounded-sm -rotate-1" />
                <img
                  src="/images/hero-flags.jpg"
                  alt="Flags of the world flying together"
                  className="relative rounded-sm shadow-2xl w-full object-cover"
                  style={{ border: "6px solid white", maxHeight: "380px" }}
                />
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

      {/* ═══════════════════════════════════════════ WHAT IS CF — single column ═══ */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#F5EDD6" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="text-center mb-12">
              <p className="text-sm tracking-[0.25em] uppercase text-[#8B6E4E] mb-3" style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 500 }}>The Companion Flag</p>
              <h2 className="text-4xl sm:text-5xl text-[#3D2B1F] mb-6 leading-tight" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 500 }}>
                The World's First Symbol of Our Shared Humanity
              </h2>
              <div className="h-0.5 w-16 bg-[#C9A84C] mx-auto" />
            </div>
          </FadeInSection>

          <FadeInSection delay={100}>
            <div className="space-y-5 mb-14">
              <p className="text-lg text-[#3D2B1F] leading-relaxed" style={{ fontFamily: "'Lora', Georgia, serif" }}>
                The idea? To foreground and make salient to children everywhere the fact that we humans, throughout our lives, are not only different from other people across town or across the globe, but also the same in important ways. It is always both. It is not (nor has it ever been) just one or the other.
              </p>
              <p className="text-lg text-[#3D2B1F] leading-relaxed" style={{ fontFamily: "'Lora', Georgia, serif" }}>
                Adding the Companion Flag below the world's existing flags makes this point. It is not a panacea. However, the Companion Flag, with its host flag above, is a vehicle of truth-telling and connection. A song of the heart. Over time, the two flags' explicit and implicit messaging will:
              </p>
              <ul className="space-y-3 pl-2" style={{ fontFamily: "'Lora', Georgia, serif" }}>
                <li className="flex items-start gap-3 text-lg text-[#3D2B1F] leading-relaxed">
                  <span className="mt-2 w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: SKY }} />
                  <span>Usher in, for our children and future generations, a new way of seeing 'self' and 'other';</span>
                </li>
                <li className="flex items-start gap-3 text-lg text-[#3D2B1F] leading-relaxed">
                  <span className="mt-2 w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: SKY }} />
                  <span>Promote patience and understanding, care, concern, and fellow feeling across all of our borders and differences; and</span>
                </li>
                <li className="flex items-start gap-3 text-lg text-[#3D2B1F] leading-relaxed">
                  <span className="mt-2 w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: SKY }} />
                  <span>Clear a new, historic space for increased levels of cooperation, connection, and non-violent conflict resolution.</span>
                </li>
              </ul>
            </div>
          </FadeInSection>

          {/* Montage photo */}
          <FadeInSection delay={200}>
            <div className="relative flex justify-center">
              <div className="absolute -inset-2 bg-[#C9A84C]/15 rounded-sm -rotate-1" />
              <img
                src={MONTAGE}
                alt="Companion Flag adoption ceremonies around the world"
                className="relative rounded-sm shadow-xl w-full max-w-2xl"
                style={{ border: "5px solid white" }}
              />
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ PRECISION IS KEY ═══ */}
      <section className="py-20 lg:py-28 relative" style={{ backgroundColor: "#EDE3CC" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="text-center mb-12">
              <p className="text-sm tracking-[0.25em] uppercase text-[#8B6E4E] mb-3" style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 500 }}>A Crucial Distinction</p>
              <h2 className="text-4xl sm:text-5xl text-[#3D2B1F] mb-4 leading-tight" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 500 }}>
                Precision is Key: Distinguishing 'Shared Differences'<br className="hidden sm:block" /> from 'Human Samenesses'
              </h2>
              <div className="h-0.5 w-16 bg-[#C9A84C] mx-auto mb-8" />
            </div>
          </FadeInSection>

          <FadeInSection delay={100}>
            <div className="mb-10">
              {/* Definition blockquote */}
              <div className="flex gap-5 mb-10">
                <div className="flex-shrink-0 w-1 rounded-full" style={{ backgroundColor: SKY }} />
                <div>
                  <p className="text-base text-[#5C4033] mb-2" style={{ fontFamily: "'Lora', Georgia, serif", lineHeight: "1.85" }}>
                    <span className="text-2xl sm:text-3xl font-semibold" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: SKY_DARK }}>
                      <DefinitionPopup
                        term='"Human Samenesses"'
                        underlineColor={SKY_DARK}
                        definition={
                          <>
                            A &lsquo;human sameness,&rsquo; for our purposes, is: any characteristic, experience, concern, desire, belief, or susceptibility that is shared by all people everywhere, our human differences notwithstanding. Examples include the experiences of birth, aging, and death, concern for the safety and happiness of loved ones, and the desire to communicate effectively, and to understand others when they are trying to communicate with us. More examples in Glossary.
                          </>
                        }
                      />
                    </span>{" "}
                    refers to any and all human characteristics, experiences, concerns, desires, beliefs, or susceptibilities that are shared by all people everywhere, their{" "}
                    <DefinitionPopup
                      term="human differences"
                      underlineColor={SKY_DARK}
                      definition={
                        <>
                          A &lsquo;human difference&rsquo; is: any characteristic, experience, concern, desire, belief, or susceptibility that is not shared by all people everywhere. (NOTE: many human differences&mdash;e.g., owning a television set, or knowing how to ride a bicycle&mdash;are shared by millions, or even billions of people worldwide. Still, &lsquo;shared differences&rsquo; are, by definition, not human samenesses, a fact frequently (although not exclusively) lost on the very young). More examples in Glossary.
                        </>
                      }
                    />{" "}
                    notwithstanding.
                  </p>
                </div>
              </div>

              {/* Examples heading */}
              <h3 className="text-2xl text-[#3D2B1F] mb-5" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 600 }}>
                Examples of Human Samenesses:
              </h3>

              {/* Examples list — each links to matching slide */}
              <ul className="space-y-2 mb-8">
                {examplesWithSlides.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: SKY }} />
                    <button
                      onClick={() => openSlideAt(item.slideIndex)}
                      className="text-left text-base leading-relaxed transition-colors hover:underline"
                      style={{ fontFamily: "'Lora', Georgia, serif", color: "#3D2B1F" }}
                      onMouseEnter={e => (e.currentTarget.style.color = SKY_DARK)}
                      onMouseLeave={e => (e.currentTarget.style.color = "#3D2B1F")}
                    >
                      {item.text}
                    </button>
                  </li>
                ))}
              </ul>

              {/* Anchor link to Such as? slideshow */}
              <button
                onClick={scrollToSuchAs}
                className="inline-flex items-center gap-2 text-sm font-semibold transition-colors"
                style={{ fontFamily: "'Raleway', sans-serif", color: SKY }}
                onMouseEnter={e => (e.currentTarget.style.color = SKY_DARK)}
                onMouseLeave={e => (e.currentTarget.style.color = SKY)}
              >
                See all human samenesses illustrated ↓
              </button>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ SUCH AS? ═══ */}
      <section
        id="such-as"
        ref={suchAsRef}
        className="py-20 lg:py-28 relative"
        style={{ backgroundImage: `url(${TEXTURE_BG})`, backgroundSize: "cover" }}
      >
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
                style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 600, backgroundColor: SKY, letterSpacing: "0.06em" }}>
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
                  className={`w-2.5 h-2.5 rounded-full transition-all ${i === currentSlide ? "scale-125" : "bg-white/50 hover:bg-white/80"}`}
                  style={{ backgroundColor: i === currentSlide ? SKY : undefined }} />
              ))}
            </div>
            <p className="text-center text-white/80 text-sm mt-3" style={{ fontFamily: "'Lora', Georgia, serif", fontStyle: "italic" }}>
              {suchAsSlides[currentSlide].alt}
            </p>
          </div>
        </div>
      )}

      {/* ═══════════════════════════════════════════ PHYSICAL FLAG PHOTO ═══ */}
      <section className="py-16 lg:py-20" style={{ backgroundColor: "#F5EDD6" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
              <div className="flex-shrink-0 w-full lg:w-80">
                <div className="rounded-sm overflow-hidden shadow-xl" style={{ border: "1px solid #D4C4A0" }}>
                  <img
                    src="/images/cf-physical-flag.jpg"
                    alt="A physical Companion Flag — white field with a warm stripe across the top"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
              <div className="flex-1">
                <p className="text-sm tracking-[0.25em] uppercase text-[#8B6E4E] mb-3" style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 500 }}>Simple. Elegant. Universal.</p>
                <h2 className="text-3xl sm:text-4xl text-[#3D2B1F] mb-5 leading-tight" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 500 }}>A flag that belongs beside every flag</h2>
                <p className="text-lg text-[#5C4033] leading-relaxed" style={{ fontFamily: "'Lora', Georgia, serif" }}>
                  The Companion Flag is a physical object — a real flag, sewn from the same materials as the flag it accompanies. Its design is intentionally simple: a bright white field with a single stripe whose color is drawn from the host flag above. That simplicity is the point. It says: <em>we are proud of what makes us different, and we are mindful of what makes us the same.</em>
                </p>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ PHILOSOPHY ═══ */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#F5EDD6" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="h-px w-12 bg-[#C9A84C]" />
                <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0" style={{ border: `2px solid ${SKY_DARK}` }}>
                  <img src="/images/globe-icon.jpg" alt="Globe" className="w-full h-full object-cover" style={{ objectPosition: "center 30%" }} />
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
              <p className="text-2xl sm:text-3xl leading-relaxed font-medium" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontStyle: "italic", color: SKY }}>
                "The Companion Flag, like — and with! — each host flag flying above it, is a vehicle of connection. A song of the heart."
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ PHOTO GALLERY — 4 SUBSECTIONS ═══ */}
      <section className="py-16 lg:py-24" style={{ backgroundColor: "#EDE3CC" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

          {/* — Subsection 2: Kyrgyzstan + Hamilton Middle School — */}
          <FadeInSection>
            <div className="space-y-8">
              {/* Kyrgyzstan image with caption */}
              <div className="flex flex-col items-center">
                <p className="text-sm font-semibold text-center text-black mb-3" style={{ fontFamily: "'Raleway', sans-serif", letterSpacing: "0.06em", textTransform: "uppercase" }}>Flag of Kyrgyzstan</p>
                <img
                  src="/images/kyrgyzstan-cf-options.jpg"
                  alt="Flag of Kyrgyzstan with Companion Flag stripe options"
                  className="rounded-sm shadow-xl max-w-xl w-full"
                  style={{ border: "6px solid white" }}
                />
              </div>
              {/* Hamilton Middle School image */}
              <div className="flex justify-center">
                <img
                  src="/images/hamilton-middle-school.jpg"
                  alt="Hamilton International Middle School CF Assembly"
                  className="rounded-sm shadow-xl max-w-md w-full"
                  style={{ border: "6px solid white" }}
                />
              </div>
            </div>
          </FadeInSection>

          {/* — Subsection 3: CF Interpretive Sign + CF Pins — */}
          <FadeInSection delay={100}>
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              {/* CF Sign — top/left, no white border */}
              <div className="flex-shrink-0 w-full lg:w-1/2">
                <img
                  src="/images/cf-interpretive-sign.jpg"
                  alt="The Companion Flag interpretive sign"
                  className="rounded-sm shadow-md w-full"
                />
              </div>
              {/* CF Pins + host flag list — right column */}
              <div className="flex-1 flex flex-col items-center gap-6">
                <img
                  src="/images/cf-pins-montage.jpg"
                  alt="Companion Flag buttons and pins for various host flags"
                  className="w-48 object-contain"
                />
                <div>
                  <p className="text-sm font-semibold text-[#3D2B1F] mb-3" style={{ fontFamily: "'Raleway', sans-serif", letterSpacing: "0.05em", textTransform: "uppercase" }}>The CF flies below any flag:</p>
                  <ul className="grid grid-cols-2 gap-x-6 gap-y-1" style={{ fontFamily: "'Lora', Georgia, serif", fontSize: "0.9rem", color: "#5C4033" }}>
                    {[
                      "National flags", "State & provincial flags",
                      "Tribal & indigenous flags", "Religious flags",
                      "University flags", "Business flags",
                      "Sports team flags", "Interest group flags",
                      "Municipal flags", "Military flags",
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: "#3CCDFC" }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </FadeInSection>

          {/* — Subsection 4: Uzbekistan teenagers + Kids on stage — */}
          <FadeInSection delay={150}>
            <div className="space-y-8">
              <div className="flex justify-center">
                <img
                  src="/images/andijan-uzbekistan.jpg"
                  alt="Teenagers in Uzbekistan holding their new Companion Flag outside their school"
                  className="rounded-sm shadow-xl max-w-2xl w-full"
                  style={{ border: "6px solid white" }}
                />
              </div>
              <div className="flex justify-center">
                <img
                  src="/images/kidsonstage.jpg"
                  alt="Elementary school children on stage proudly holding their art-project national flags and Companion Flags"
                  className="rounded-sm shadow-xl max-w-2xl w-full"
                  style={{ border: "6px solid white" }}
                />
              </div>
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
                  style={{ fontFamily: "'Raleway', sans-serif", backgroundColor: SKY, color: "#fff", letterSpacing: "0.06em" }}>
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
                <button className="text-sm font-semibold transition-colors" style={{ fontFamily: "'Raleway', sans-serif", color: SKY }}
                  onMouseEnter={e => (e.currentTarget.style.color = SKY_DARK)}
                  onMouseLeave={e => (e.currentTarget.style.color = SKY)}>
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
