/* Such As? Page — Companion Flag "Warm Globe" Design
   Full-page interactive gallery of human samenesses slides */

import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ChevronLeft, ChevronRight } from "lucide-react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663344373217/Gt9L2E9sF7QsUjdxWiBePy/cf-hero-v2-cVgkMLJTXteqZtNer2dfLS.webp";

const slides = [
  { src: "/manus-storage/processes-of-birth_770cd134.jpg", alt: "The processes of birth, aging, and death", title: "The Processes of Birth, Aging, and Death" },
  { src: "/manus-storage/love-of-children_8a8ca5a8.jpg", alt: "The love of children", title: "The Love of Children" },
  { src: "/manus-storage/love-of-music_9fae1457.jpg", alt: "The love of music, stories, and dance", title: "The Love of Music, Stories, and Dance" },
  { src: "/manus-storage/need-for-food_923c3764.jpg", alt: "The need for food, water, and air", title: "The Need for Food, Water, and Air" },
  { src: "/manus-storage/concern-for-friends_4d0b6595.jpg", alt: "Concern for the safety and happiness of loved ones", title: "Concern for the Safety of Loved Ones" },
  { src: "/manus-storage/susceptibility-to-pain_00359040.jpg", alt: "Susceptibility to pain and pleasure", title: "Susceptibility to Pain and Pleasure" },
  { src: "/manus-storage/survive-flourish_dc2c3a29.jpg", alt: "The desire to survive and flourish", title: "The Desire to Survive and Flourish" },
  { src: "/manus-storage/desire-to-feel-safe_74c57464.jpg", alt: "The desire to feel safe and at home in the world", title: "The Desire to Feel Safe and at Home in the World" },
  { src: "/manus-storage/setbacks-uncertainties_e825ce39.jpg", alt: "Setbacks and uncertainties", title: "Setbacks and Uncertainties" },
  { src: "/manus-storage/desiretofitinv1_8d466ea4.jpg", alt: "The desire to fit in. To matter to oneself and others.", title: "The Desire to Fit In. To Matter to Oneself and Others." },
];

export default function SuchAs() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [viewMode, setViewMode] = useState<"gallery" | "slideshow">("gallery");

  const goTo = (index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => { setCurrent(index); setIsTransitioning(false); }, 300);
  };
  const prev = () => goTo((current - 1 + slides.length) % slides.length);
  const next = () => goTo((current + 1) % slides.length);

  useEffect(() => {
    if (viewMode !== "slideshow") return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [viewMode, current, isTransitioning]);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F5EDD6" }}>
      <Navigation />
      <div className="pt-32 pb-16 relative" style={{ backgroundImage: `url(${HERO_BG})`, backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="absolute inset-0 bg-[#F5EDD6]/60" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm tracking-[0.25em] uppercase text-[#8B6E4E] mb-3" style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 500 }}>Human Samenesses</p>
          <h1 className="text-5xl sm:text-6xl text-[#3D2B1F] leading-tight mb-4" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 500 }}>Such as?</h1>
          <p className="text-lg text-[#5C4033] max-w-2xl mx-auto mb-4" style={{ fontFamily: "'Lora', Georgia, serif", fontStyle: "italic" }}>Illuminating the common threads that connect us all…</p>
          <div className="h-0.5 w-16 bg-[#C9A84C] mx-auto" />
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <p className="text-lg text-[#3D2B1F] leading-relaxed" style={{ fontFamily: "'Lora', Georgia, serif" }}>
          Each of these slides illustrates one of the "human samenesses" that the Companion Flag represents — universal experiences, desires, and susceptibilities shared by all people everywhere, regardless of nationality, culture, or creed. Notice how each slide shows the Companion Flag alongside flags from different parts of the world.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex justify-center gap-2">
          <button onClick={() => setViewMode("gallery")}
            className={`px-5 py-2 text-sm rounded-sm transition-all ${viewMode === "gallery" ? "bg-[#5BA3C9] text-white" : "bg-[#EDE3CC] text-[#5C4033] hover:bg-[#E0D4B8]"}`}
            style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 500 }}>
            Gallery View
          </button>
          <button onClick={() => { setViewMode("slideshow"); setCurrent(0); }}
            className={`px-5 py-2 text-sm rounded-sm transition-all ${viewMode === "slideshow" ? "bg-[#5BA3C9] text-white" : "bg-[#EDE3CC] text-[#5C4033] hover:bg-[#E0D4B8]"}`}
            style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 500 }}>
            Slideshow View
          </button>
        </div>
      </div>

      {viewMode === "gallery" ? (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {slides.map((slide, i) => (
              <button key={i} onClick={() => { setViewMode("slideshow"); setCurrent(i); }}
                className="group relative overflow-hidden rounded-sm shadow-md hover:shadow-xl transition-all hover:-translate-y-1 text-left">
                <img src={slide.src} alt={slide.alt} className="w-full h-auto group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3D2B1F]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white text-sm font-medium" style={{ fontFamily: "'Lora', Georgia, serif" }}>{slide.title}</p>
                  </div>
                </div>
                <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-white/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-[#5BA3C9] text-xs font-bold" style={{ fontFamily: "'Raleway', sans-serif" }}>{i + 1}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="relative">
            <div className="relative rounded-sm overflow-hidden shadow-2xl bg-[#EDE3CC]">
              <img src={slides[current].src} alt={slides[current].alt}
                className={`w-full h-auto transition-opacity duration-300 ${isTransitioning ? "opacity-0" : "opacity-100"}`} />
              <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow-lg transition-all hover:scale-110">
                <ChevronLeft size={22} className="text-[#3D2B1F]" />
              </button>
              <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow-lg transition-all hover:scale-110">
                <ChevronRight size={22} className="text-[#3D2B1F]" />
              </button>
            </div>
            <div className="text-center mt-4">
              <p className="text-lg text-[#3D2B1F] font-medium" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 500 }}>{slides[current].title}</p>
              <p className="text-sm text-[#8B6E4E] mt-1" style={{ fontFamily: "'Raleway', sans-serif" }}>{current + 1} of {slides.length}</p>
            </div>
            <div className="flex justify-center gap-2 mt-4">
              {slides.map((_, i) => (
                <button key={i} onClick={() => goTo(i)}
                  className={`transition-all rounded-full ${i === current ? "w-6 h-2.5 bg-[#5BA3C9]" : "w-2.5 h-2.5 bg-[#C9A84C]/40 hover:bg-[#C9A84C]/70"}`} />
              ))}
            </div>
            <div className="grid grid-cols-5 sm:grid-cols-10 gap-2 mt-6">
              {slides.map((slide, i) => (
                <button key={i} onClick={() => goTo(i)}
                  className={`relative overflow-hidden rounded-sm transition-all ${i === current ? "ring-2 ring-[#5BA3C9] ring-offset-1" : "opacity-60 hover:opacity-100"}`}
                  style={{ aspectRatio: "4/3" }}>
                  <img src={slide.src} alt={slide.alt} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}
