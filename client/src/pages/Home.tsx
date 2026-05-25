/* Home Page — Companion Flag "Warm Globe" Design
   Old-world map fixed background throughout (hero → Is This Idea For You?).
   Four subsections per client spec, then Is This Idea For You? in dark mountain-blue, then Footer.
   Sky blue accent: #3CCDFC | Dark sky: #1AAAD4
   Parchment: #F5EDD6 | Warm brown text: #3D2B1F */

import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import DefinitionPopup from "@/components/DefinitionPopup";

const OLD_WORLD_MAP = "/manus-storage/cf-hero-v2_cdce503b.jpg";
const MOUNTAIN_BLUE = "#3CCDFC";
const SKY = "#3CCDFC";
const SKY_DARK = "#1AAAD4";

// ─── Reusable section divider: short line + globe icon + short line ───────────
function SectionDivider() {
  return (
    <div className="flex items-center justify-center gap-4 py-10">
      <div className="h-px w-20" style={{ backgroundColor: MOUNTAIN_BLUE }} />
      <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 shadow-md" style={{ border: `2px solid ${MOUNTAIN_BLUE}` }}>
        <img src="/images/globe-icon.jpg" alt="Globe" className="w-full h-full object-cover" style={{ objectPosition: "center 45%" }} />
      </div>
      <div className="h-px w-20" style={{ backgroundColor: MOUNTAIN_BLUE }} />
    </div>
  );
}

// ─── Fade-in animation wrapper ────────────────────────────────────────────────
function FadeInSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add("visible"); observer.disconnect(); } },
      { threshold: 0.08 }
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

// ─── Zoomable hero photo ──────────────────────────────────────────────────────
function ZoomablePhoto({ src, alt }: { src: string; alt: string }) {
  const [zoomed, setZoomed] = useState(false);
  return (
    <>
      <div className="relative w-full max-w-lg cursor-zoom-in" onClick={() => setZoomed(true)}>
        <div className="absolute -inset-3 bg-[#C9A84C]/20 rounded-sm -rotate-1" />
        <img
          src={src}
          alt={alt}
          className="relative rounded-sm shadow-2xl w-full object-cover"
          style={{ border: "6px solid white", maxHeight: "380px" }}
        />
        <div className="absolute bottom-3 right-3 bg-black/50 text-white text-xs px-2 py-1 rounded-sm" style={{ fontFamily: "'Raleway', sans-serif" }}>
          Click to enlarge
        </div>
      </div>
      {zoomed && (
        <div
          style={{ position: 'fixed', inset: 0, zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.88)', cursor: 'zoom-out' }}
          onClick={() => setZoomed(false)}
        >
          <div style={{ position: 'relative', maxWidth: '90vw', width: '100%' }} onClick={e => e.stopPropagation()}>
            <button
              onClick={() => setZoomed(false)}
              style={{ position: 'absolute', top: '-2.5rem', right: 0, color: 'rgba(255,255,255,0.85)', background: 'none', border: 'none', cursor: 'pointer', fontSize: '1rem', fontFamily: "'Raleway', sans-serif" }}
            >
              Close ✕
            </button>
            <img
              src={src}
              alt={alt}
              style={{ width: '100%', height: 'auto', border: '6px solid white', borderRadius: '2px', boxShadow: '0 25px 60px rgba(0,0,0,0.6)', display: 'block' }}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* ══════════════════════════════════════════════════════════════════════
          FIXED OLD-WORLD MAP BACKGROUND — covers entire page hero→Is This For You
          All sections below sit on top of this via position:relative + z-index
      ══════════════════════════════════════════════════════════════════════ */}
      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: `url(${OLD_WORLD_MAP})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      />
      {/* Warm parchment overlay so text stays readable */}
      <div className="fixed inset-0 z-0 bg-[#F5EDD6]/70" />

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 1 — HERO
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="relative z-10 flex items-center pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: text */}
            <FadeInSection>
              <p className="text-sm tracking-[0.25em] uppercase mb-4 text-[#8B6E4E]" style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 500 }}>
                A Non-Profit Initiative
              </p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl text-[#3D2B1F] leading-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 500 }}>
                Imagine it<br />
                <em style={{ color: MOUNTAIN_BLUE }}>everywhere.</em>
              </h1>
              <div className="h-0.5 w-24 mb-6" style={{ backgroundColor: MOUNTAIN_BLUE }} />
              <p className="text-xl leading-relaxed mb-0 max-w-lg font-semibold text-[#3D2B1F]" style={{ fontFamily: "'Lora', Georgia, serif" }}>
                A new flag displayed directly below the world's existing flags, on the same pole. A universal symbol reminding people everywhere of our shared realities—all that we humans have and experience in common throughout our lives (our differences and physical separation notwithstanding).
              </p>
            </FadeInSection>

            {/* Right: zoomable hero photo */}
            <FadeInSection delay={150}>
              <div className="flex justify-center lg:justify-end">
                <ZoomablePhoto
                  src="/images/hero-flags.jpg"
                  alt="Five flagpoles with national flags and Companion Flags flying together"
                />
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Section divider 1→2 */}
      <div className="relative z-10">
        <SectionDivider />
      </div>

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 2 — THE COMPANION FLAG (what it is + human differences/samenesses)
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="relative z-10 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: text */}
            <FadeInSection>
              <p className="text-sm tracking-[0.25em] uppercase mb-4 text-[#8B6E4E]" style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 500 }}>
                A Non-Profit Initiative
              </p>
              <h2 className="text-5xl sm:text-6xl text-[#3D2B1F] leading-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 500 }}>
                Imagine it<br />
                <em style={{ color: MOUNTAIN_BLUE }}>everywhere.</em>
              </h2>
              <div className="h-0.5 w-24 mb-6" style={{ backgroundColor: MOUNTAIN_BLUE }} />

              <div className="space-y-5 font-semibold text-[#3D2B1F]" style={{ fontFamily: "'Lora', Georgia, serif" }}>
                <p className="text-lg leading-relaxed">
                  A simple white flag with a single stripe of color across the top. Its name? The Companion Flag.
                </p>
                <p className="text-lg leading-relaxed">
                  The color of the stripe at the top of the Companion Flag matches any color appearing in the "host flag," that is, the flag that will fly directly above the Companion Flag. This color match confirms the companionship of the two flags, but also serves as a visual reminder that each of us, no matter who we are or where we live on this planet, embodies throughout our life, relies on, and manifests to others the same two distinct but interdependent descriptive categories of identification at the highest level of abstraction: one category, our particular{" "}
                  <DefinitionPopup
                    term="human differences"
                    underlineColor={MOUNTAIN_BLUE}
                    definition={
                      <>
                        A &lsquo;human difference&rsquo; is: any characteristic, experience, concern, desire, belief, or susceptibility that is not shared by all people everywhere. (NOTE: many human differences&mdash;e.g., owning a television set, or knowing how to ride a bicycle&mdash;are shared by millions, or even billions of people worldwide. Still, &lsquo;shared differences&rsquo; are, by definition, not human samenesses, a fact frequently (although not exclusively) lost on the very young). More examples in Glossary.
                      </>
                    }
                  />{" "}
                  and the other, our{" "}
                  <DefinitionPopup
                    term="human samenesses"
                    underlineColor={MOUNTAIN_BLUE}
                    definition={
                      <>
                        A &lsquo;human sameness,&rsquo; for our purposes, is: any characteristic, experience, concern, desire, belief, or susceptibility that is shared by all people everywhere, our human differences notwithstanding. Examples include the experiences of birth, aging, and death, concern for the safety and happiness of loved ones, and the desire to communicate effectively, and to understand others when they are trying to communicate with us. More examples in Glossary.
                      </>
                    }
                  />. [Click underlined terms for definitions]
                </p>
                <p className="text-lg leading-relaxed">
                  This bifurcation of relevant information about our identities is necessitated by the little-known fact that the human brain has evolved such that it cannot 'cognize' (process and make sense of) sensory data confirming the presence of differences and that of samenesses in multiple objects at the same instant. This, of course, can be accomplished sequentially… but never simultaneously. This counter-intuitive limitation, as we'll see, figures prominently in our species' current global fracturing and the ever-intensifying meta-meaning crisis.{" "}
                  <a href="/resources" className="underline transition-colors" style={{ color: MOUNTAIN_BLUE }}
                    onMouseEnter={e => (e.currentTarget.style.color = SKY_DARK)}
                    onMouseLeave={e => (e.currentTarget.style.color = MOUNTAIN_BLUE)}>
                    See A Deeper Dive, below.
                  </a>
                </p>
              </div>
            </FadeInSection>

            {/* Right: Kyrgyzstan + Hamilton photos */}
            <FadeInSection delay={150}>
              <div className="space-y-8">
                {/* Kyrgyzstan image with caption */}
                <div className="flex flex-col items-center gap-2">
                  <p className="text-sm font-bold tracking-widest uppercase text-center" style={{ color: "#000", fontFamily: "'Raleway', sans-serif" }}>
                    FLAG OF KYRGYZSTAN
                  </p>
                  <img
                    src="/images/kyrgyzstan-cf-options.jpg"
                    alt="Two flags of Kyrgyzstan with different stripe-colored Companion Flags"
                    className="rounded-sm shadow-xl w-full max-w-md"
                    style={{ border: "6px solid white" }}
                  />
                </div>
                {/* Hamilton Middle School */}
                <div className="flex justify-center">
                  <img
                    src="/images/hamilton-middle-school.jpg"
                    alt="Hamilton International Middle School Companion Flag assembly"
                    className="rounded-sm shadow-xl w-full max-w-md"
                    style={{ border: "6px solid white" }}
                  />
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Section divider 2→3 */}
      <div className="relative z-10">
        <SectionDivider />
      </div>

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 3 — WHAT FLAGS COUNT AS HOST FLAGS?
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="relative z-10 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <p className="text-sm tracking-[0.25em] uppercase mb-3 text-[#8B6E4E]" style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 500 }}>
              A Crucial Question
            </p>
            <h2 className="text-4xl sm:text-5xl text-[#3D2B1F] leading-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 500 }}>
              What Flags Count as Host Flags?
            </h2>
            <div className="h-0.5 w-24 mb-8" style={{ backgroundColor: MOUNTAIN_BLUE }} />
          </FadeInSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: text + host flag list */}
            <FadeInSection delay={100}>
              <div className="space-y-5 font-semibold text-[#3D2B1F]" style={{ fontFamily: "'Lora', Georgia, serif" }}>
                <p className="text-lg leading-relaxed">
                  The answer in the broadest terms is revealed by the Companion Flag interpretive sign.
                </p>
                <p className="text-lg leading-relaxed">
                  A host flag can be any flag that foregrounds and makes salient to the public eye a particular subset of shared human differences (citizenship and allegiance to a particular country, or pride in one's university, for example). Therefore, everyday examples of host flags include the flags of:
                </p>
              </div>

              {/* Three-column bullet list */}
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-1">
                {[
                  "Nations", "States", "Tribes", "Provinces", "Municipalities", "Counties",
                  "Parishes", "Chiefdoms", "Principalities", "Clans", "Empires", "Republics",
                  "Prefectures", "City-States", "Military branches", "Military units",
                  "International alliances", "Hospitals", "Trade blocs", "Religions",
                  "Universities", "Schools", "Private corporations", "Guilds",
                  "Professional associations", "Fraternal organizations", "Charitable foundations",
                  "Sports leagues", "Sports clubs", "Yacht clubs", "Civil rights movements",
                  "Political parties", "Cultural organizations", "Historical societies",
                  "Indigenous groups", "Maritime shipping entities"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2 py-0.5">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: MOUNTAIN_BLUE }} />
                    <span className="text-sm text-[#3D2B1F] font-semibold leading-snug" style={{ fontFamily: "'Lora', Georgia, serif" }}>{item}</span>
                  </div>
                ))}
              </div>

              <p className="mt-6 text-base font-semibold text-[#3D2B1F] leading-relaxed italic" style={{ fontFamily: "'Lora', Georgia, serif" }}>
                "Where local law prohibits the display of a second flag below what would otherwise be a host flag, the option remains to choose another host flag from the list."
              </p>
            </FadeInSection>

            {/* Right: CF sign + pins */}
            <FadeInSection delay={150}>
              <div className="space-y-8">
                <img
                  src="/images/cf-interpretive-sign.jpg"
                  alt="The Companion Flag interpretive sign"
                  className="rounded-sm shadow-xl w-full"
                />
                <div className="flex justify-center">
                  <img
                    src="/images/cf-pins-montage.jpg"
                    alt="Companion Flag pins and buttons"
                    className="w-full max-w-sm"
                  />
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Section divider 3→4 */}
      <div className="relative z-10">
        <SectionDivider />
      </div>

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 4 — A BOTTOM-UP, PEOPLE-LEVEL RESPONSE
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="relative z-10 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: text */}
            <FadeInSection>
              <p className="text-sm tracking-[0.25em] uppercase mb-3 text-[#8B6E4E]" style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 500 }}>
                A Global Movement
              </p>
              <h2 className="text-4xl sm:text-5xl text-[#3D2B1F] leading-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 500 }}>
                A Bottom-up, People-level Response to Today's Global Meaning Crisis
              </h2>
              <div className="h-0.5 w-24 mb-8" style={{ backgroundColor: MOUNTAIN_BLUE }} />

              <div className="space-y-5 font-semibold text-[#3D2B1F]" style={{ fontFamily: "'Lora', Georgia, serif" }}>
                <p className="text-lg leading-relaxed">
                  Adding the Companion Flag to the world's symbolic landscape is a vehicle of truth-telling and connection for people everywhere. A song of the heart. This, we submit, will be particularly true for the world's children and all future generations, who will, from an early age, absorb and normalize the message of the two flags constantly flying together in dignified companionship: "We humans, both individually and in the light of our various affiliations and groups, are different from other people in important ways, but also, and always, we are the same as those people (and all people) in important ways, as well. It's not a matter of one or the other. It's both. This is our identity… it's who we are and how we see others, as well."
                </p>
                <p className="text-lg leading-relaxed">
                  Flying the Companion Flag and teaching its meaning will, in time:
                </p>
                <ul className="space-y-3 pl-2">
                  <li className="flex items-start gap-3 text-lg leading-relaxed">
                    <span className="mt-2 w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: MOUNTAIN_BLUE }} />
                    <span>Alter the way we humans see ourselves and all others, whether across the street or across the globe.</span>
                  </li>
                  <li className="flex items-start gap-3 text-lg leading-relaxed">
                    <span className="mt-2 w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: MOUNTAIN_BLUE }} />
                    <span>Clear a space in our hearts for greater patience, care, and fellow-feeling for people of all types, and in all weathers.</span>
                  </li>
                  <li className="flex items-start gap-3 text-lg leading-relaxed">
                    <span className="mt-2 w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: MOUNTAIN_BLUE }} />
                    <span>Normalize across the globe non-violent, non-bullying conflict resolution alternatives whenever and wherever possible.</span>
                  </li>
                </ul>
              </div>
            </FadeInSection>

            {/* Right: Uzbekistan + Kids on stage */}
            <FadeInSection delay={150}>
              <div className="space-y-8">
                <img
                  src="/images/andijan-uzbekistan.jpg"
                  alt="Teenagers in Uzbekistan holding their new Companion Flag outside their school"
                  className="rounded-sm shadow-xl w-full"
                  style={{ border: "6px solid white" }}
                />
                <img
                  src="/images/kidsonstage.jpg"
                  alt="Elementary school children on stage proudly holding their art-project national flags and Companion Flags"
                  className="rounded-sm shadow-xl w-full"
                  style={{ border: "6px solid white" }}
                />
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          IS THIS IDEA FOR YOU? — dark mountain-blue background, distinct from footer
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="relative z-10 py-20 lg:py-24" style={{ backgroundColor: "#1E3A5F" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeInSection>
            <h2 className="text-4xl sm:text-5xl text-[#F5EDD6] mb-6 leading-tight" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 500 }}>
              Is this idea for you?
            </h2>
            <p className="text-lg text-[#C8D8C8] mb-10 max-w-2xl mx-auto leading-relaxed font-semibold" style={{ fontFamily: "'Lora', Georgia, serif" }}>
              Take a few minutes to reflect. The Companion Flag is for anyone who believes that our human samenesses, like our important human differences, constitute, by themselves, an integral part in the continuous co-shaping of who we are as individuals of value and worth to the world and its well-being.
            </p>
            <Link href="/self-test">
              <button
                className="px-8 py-4 rounded-sm shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 text-base font-semibold"
                style={{ fontFamily: "'Raleway', sans-serif", backgroundColor: SKY, color: "#fff", letterSpacing: "0.06em" }}
              >
                Reflect &amp; Explore
              </button>
            </Link>
          </FadeInSection>
        </div>
      </section>

      {/* Spacer strip — last glimpse of old-world map before footer */}
      <div className="relative z-10 h-12" />

      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}
