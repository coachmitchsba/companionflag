/* Self-Test / Reflection Page — Companion Flag "Warm Globe" Design
   Interactive reflection prompts + curated external resources */

import { useState, useEffect, useRef } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ChevronRight, ExternalLink, BookOpen, Globe, Heart, Users } from "lucide-react";
import { Link } from "wouter";

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

const reflections = [
  {
    id: 1,
    prompt: "Think of someone you consider very different from yourself — in culture, belief, or background. What is one thing you know you both share?",
    hint: "It might be as simple as the love of a good meal, the desire to be understood, or the fear of losing someone you love.",
  },
  {
    id: 2,
    prompt: "When you look at a flag — any flag — what do you feel? Pride? Distance? Curiosity? What would change if a Companion Flag flew beneath it?",
    hint: "Flags are powerful symbols. The CF doesn't replace that power — it adds a layer to it.",
  },
  {
    id: 3,
    prompt: "Is there a moment in your life when you felt a sudden, unexpected connection with a stranger from a very different background? What made that connection possible?",
    hint: "These moments of recognition are what the Companion Flag is trying to make permanent and visible.",
  },
  {
    id: 4,
    prompt: "What do you think children learn from the flags they grow up seeing? What might they learn differently if a Companion Flag were always present?",
    hint: "The CF was conceived with children in mind — the next generation's understanding of identity and belonging.",
  },
  {
    id: 5,
    prompt: "If you were to fly a Companion Flag below your own flag — whatever flag you feel most connected to — what stripe color would you choose, and why?",
    hint: "The stripe color matches a color in the host flag. This small act of choice is itself a reflection on what connects you to others.",
  },
  {
    id: 6,
    prompt: "Do you believe that celebrating our shared humanity in any way diminishes our unique identities and differences? Why or why not?",
    hint: "The CF's premise is that both are true simultaneously — and that holding both is more honest than holding only one.",
  },
];

const resources = [
  {
    category: "Philosophy & Identity",
    icon: <BookOpen size={18} />,
    items: [
      { title: "The Ethics of Identity", author: "Kwame Anthony Appiah", desc: "A philosopher's exploration of how we balance individual identity with our membership in larger communities.", url: "https://press.princeton.edu/books/paperback/9780691130286/the-ethics-of-identity" },
      { title: "Cosmopolitanism: Ethics in a World of Strangers", author: "Kwame Anthony Appiah", desc: "On the moral obligations we have to people very different from ourselves — and what we share.", url: "https://wwnorton.com/books/cosmopolitanism/" },
      { title: "The Righteous Mind", author: "Jonathan Haidt", desc: "Why good people are divided by politics and religion — and what moral psychology tells us about our shared foundations.", url: "https://righteousmind.com/" },
    ],
  },
  {
    category: "Human Unity & Shared Experience",
    icon: <Heart size={18} />,
    items: [
      { title: "The Human Family Tree", author: "National Geographic", desc: "An exploration of human genetic unity — how all people on Earth are connected through a shared ancestry.", url: "https://www.nationalgeographic.com/science/article/human-family-tree" },
      { title: "Humankind: A Hopeful History", author: "Rutger Bregman", desc: "A counterintuitive look at human nature, arguing that people are fundamentally decent and cooperative.", url: "https://www.bloomsbury.com/us/humankind-9781635575996/" },
      { title: "The Story of Human Language", author: "The Great Courses / John McWhorter", desc: "How the diversity of the world's languages reveals the underlying unity of human communication.", url: "https://www.thegreatcourses.com/courses/the-story-of-human-language" },
    ],
  },
  {
    category: "Flags, Symbols & Identity",
    icon: <Globe size={18} />,
    items: [
      { title: "Flag: An American Biography", author: "Marc Leepson", desc: "The history of how a piece of cloth became a powerful symbol — and what that tells us about the power of flags generally.", url: "https://www.thomasdunnebooks.com/9780312335229/" },
      { title: "Vexillology (the study of flags)", author: "Wikipedia", desc: "An introduction to the academic study of flags, their history, symbolism, and design principles.", url: "https://en.wikipedia.org/wiki/Vexillology" },
      { title: "Roman Mars: Why City Flags May Be the Worst-Designed Thing You've Never Noticed", author: "TED Talk", desc: "A delightful and insightful TED talk on flag design and what makes a flag meaningful.", url: "https://www.ted.com/talks/roman_mars_why_city_flags_may_be_the_worst_designed_thing_you_ve_never_noticed" },
    ],
  },
  {
    category: "Compassion & Connection",
    icon: <Users size={18} />,
    items: [
      { title: "Greater Good Science Center", author: "UC Berkeley", desc: "Research-based insights into the roots of compassion, empathy, and human connection.", url: "https://greatergood.berkeley.edu/" },
      { title: "The Empathy Effect", author: "Helen Riess, MD", desc: "The science of human connection and how empathy can transform our relationships and our world.", url: "https://www.soundstrue.com/products/the-empathy-effect" },
      { title: "Brené Brown on Empathy vs. Sympathy", author: "RSA Animate", desc: "A short, powerful animated video on the difference between empathy and sympathy — and why it matters.", url: "https://www.youtube.com/watch?v=1Evwgu369Jw" },
    ],
  },
];

export default function SelfTest() {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [activeQ, setActiveQ] = useState<number | null>(1);
  const [completed, setCompleted] = useState(false);

  const answeredCount = Object.values(answers).filter(a => a.trim().length > 0).length;

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F5EDD6" }}>
      <Navigation />

      {/* Page Header */}
      <div className="pt-32 pb-16 relative" style={{ backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663344373217/Gt9L2E9sF7QsUjdxWiBePy/cf-hero-v2-cVgkMLJTXteqZtNer2dfLS.webp)`, backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="absolute inset-0 bg-[#F5EDD6]/60" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm tracking-[0.25em] uppercase text-[#8B6E4E] mb-3" style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 500 }}>A Moment of Reflection</p>
          <h1 className="text-5xl sm:text-6xl text-[#3D2B1F] leading-tight mb-4" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 500 }}>Is this idea for you?</h1>
          <p className="text-lg text-[#5C4033] max-w-2xl mx-auto" style={{ fontFamily: "'Lora', Georgia, serif", fontStyle: "italic" }}>
            Take a few minutes. There are no right or wrong answers. These questions are simply an invitation to think.
          </p>
          <div className="h-0.5 w-16 bg-[#C9A84C] mx-auto mt-6" />
        </div>
      </div>

      {/* Intro */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
        <FadeInSection>
          <p className="text-lg text-[#3D2B1F] leading-relaxed mb-4" style={{ fontFamily: "'Lora', Georgia, serif" }}>
            The Companion Flag is not for everyone — and that's perfectly fine. It's for people who feel, at some level, that our shared humanity deserves a symbol as visible and proud as the flags of our differences.
          </p>
          <p className="text-lg text-[#3D2B1F] leading-relaxed" style={{ fontFamily: "'Lora', Georgia, serif" }}>
            The six questions below are not a quiz. They're an invitation to sit with an idea. Your answers are private — they're just for you. But we hope they spark something worth holding onto.
          </p>
        </FadeInSection>
      </div>

      {/* Reflection Questions */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {!completed ? (
          <FadeInSection delay={100}>
            <div className="space-y-4">
              {reflections.map((r) => (
                <div
                  key={r.id}
                  className="rounded-sm overflow-hidden shadow-sm transition-all"
                  style={{ border: `1px solid ${activeQ === r.id ? "#87CEEB" : "#D4C4A0"}`, backgroundColor: activeQ === r.id ? "#F8F2E4" : "#EDE3CC" }}
                >
                  <button
                    onClick={() => setActiveQ(activeQ === r.id ? null : r.id)}
                    className="w-full text-left px-6 py-4 flex items-start gap-4"
                  >
                    <span
                      className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mt-0.5"
                      style={{
                        backgroundColor: answers[r.id]?.trim() ? "#5BA3C9" : activeQ === r.id ? "#C9A84C" : "#D4C4A0",
                        color: answers[r.id]?.trim() || activeQ === r.id ? "white" : "#8B6E4E",
                        fontFamily: "'Raleway', sans-serif",
                      }}
                    >
                      {answers[r.id]?.trim() ? "✓" : r.id}
                    </span>
                    <span className="text-lg text-[#3D2B1F] leading-snug" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 500 }}>
                      {r.prompt}
                    </span>
                  </button>

                  {activeQ === r.id && (
                    <div className="px-6 pb-5">
                      <p className="text-sm italic text-[#8B6E4E] mb-3 pl-12" style={{ fontFamily: "'Lora', Georgia, serif" }}>
                        {r.hint}
                      </p>
                      <textarea
                        rows={4}
                        placeholder="Your thoughts (private — just for you)…"
                        value={answers[r.id] || ""}
                        onChange={e => setAnswers({ ...answers, [r.id]: e.target.value })}
                        className="w-full px-4 py-3 rounded-sm border text-[#3D2B1F] placeholder-[#B8A890] focus:outline-none focus:ring-2 focus:ring-[#87CEEB] transition-all resize-none"
                        style={{ backgroundColor: "#FDFAF4", borderColor: "#D4C4A0", fontFamily: "'Lora', Georgia, serif" }}
                      />
                      <div className="flex justify-end mt-2">
                        <button
                          onClick={() => {
                            const next = r.id < reflections.length ? r.id + 1 : null;
                            setActiveQ(next);
                            if (!next) setCompleted(true);
                          }}
                          className="flex items-center gap-1.5 text-sm font-semibold text-[#5BA3C9] hover:text-[#3D8AB0] transition-colors"
                          style={{ fontFamily: "'Raleway', sans-serif" }}
                        >
                          {r.id < reflections.length ? "Next question" : "Finish reflection"}
                          <ChevronRight size={16} />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {answeredCount > 0 && (
              <div className="mt-6 text-center">
                <p className="text-sm text-[#8B6E4E] mb-3" style={{ fontFamily: "'Raleway', sans-serif" }}>
                  {answeredCount} of {reflections.length} questions reflected on
                </p>
                {answeredCount === reflections.length && (
                  <button
                    onClick={() => setCompleted(true)}
                    className="px-6 py-3 text-white rounded-sm shadow hover:shadow-md transition-all hover:-translate-y-0.5 text-sm font-semibold"
                    style={{ backgroundColor: "#5BA3C9", fontFamily: "'Raleway', sans-serif" }}
                  >
                    See what comes next →
                  </button>
                )}
              </div>
            )}
          </FadeInSection>
        ) : (
          <FadeInSection>
            <div className="rounded-sm p-10 text-center shadow-md mb-10" style={{ backgroundColor: "#EDE3CC", border: "1px solid #D4C4A0" }}>
              <div className="w-16 h-16 rounded-full bg-[#87CEEB] flex items-center justify-center mx-auto mb-5">
                <Heart size={28} className="text-[#1A4A6B]" />
              </div>
              <h2 className="text-3xl text-[#3D2B1F] mb-4" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 500 }}>
                Thank you for reflecting.
              </h2>
              <p className="text-lg text-[#5C4033] leading-relaxed max-w-xl mx-auto mb-6" style={{ fontFamily: "'Lora', Georgia, serif" }}>
                If these questions resonated with you — if you found yourself nodding, or feeling something — then the Companion Flag may be for you. The next step is simply to learn more, or to take action.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/how-to-acquire">
                  <button className="px-6 py-3 text-white rounded-sm shadow hover:shadow-md transition-all hover:-translate-y-0.5 text-sm font-semibold" style={{ backgroundColor: "#5BA3C9", fontFamily: "'Raleway', sans-serif" }}>
                    How to Acquire a CF
                  </button>
                </Link>
                <Link href="/about">
                  <button className="px-6 py-3 rounded-sm border text-[#3D2B1F] hover:border-[#5BA3C9] transition-all text-sm font-semibold" style={{ borderColor: "#8B6E4E", fontFamily: "'Raleway', sans-serif" }}>
                    Learn More
                  </button>
                </Link>
                <button onClick={() => { setCompleted(false); setActiveQ(1); }} className="text-sm text-[#8B6E4E] hover:text-[#5BA3C9] transition-colors" style={{ fontFamily: "'Raleway', sans-serif" }}>
                  Start over
                </button>
              </div>
            </div>
          </FadeInSection>
        )}
      </div>

      {/* Resources Section */}
      <section className="py-16 lg:py-24" style={{ backgroundColor: "#3D2B1F" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="text-center mb-12">
              <p className="text-sm tracking-[0.25em] uppercase text-[#C9A84C] mb-3" style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 500 }}>Go Deeper</p>
              <h2 className="text-4xl sm:text-5xl text-[#F5EDD6] mb-4" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 500 }}>
                Curated Resources
              </h2>
              <p className="text-[#B8A890] max-w-2xl mx-auto" style={{ fontFamily: "'Lora', Georgia, serif" }}>
                The Companion Flag idea connects to a rich body of thought on identity, empathy, human unity, and the power of symbols. Here are some resources worth exploring.
              </p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {resources.map((cat, ci) => (
              <FadeInSection key={ci} delay={ci * 100}>
                <div className="rounded-sm overflow-hidden" style={{ backgroundColor: "#2A1F15", border: "1px solid #4A3828" }}>
                  <div className="px-6 py-4 flex items-center gap-3" style={{ backgroundColor: "#1A1008", borderBottom: "1px solid #4A3828" }}>
                    <span className="text-[#87CEEB]">{cat.icon}</span>
                    <h3 className="text-sm tracking-wide uppercase text-[#C9A84C]" style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 600 }}>
                      {cat.category}
                    </h3>
                  </div>
                  <div className="divide-y" style={{ borderColor: "#3D2B1F" }}>
                    {cat.items.map((item, ii) => (
                      <a
                        key={ii}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-start gap-3 px-6 py-4 group hover:bg-[#3D2B1F] transition-colors"
                      >
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start gap-2">
                            <p className="text-[#E8D8B8] text-sm font-medium group-hover:text-[#87CEEB] transition-colors leading-snug" style={{ fontFamily: "'Lora', Georgia, serif" }}>
                              {item.title}
                            </p>
                            <ExternalLink size={12} className="flex-shrink-0 mt-1 text-[#6B5A48] group-hover:text-[#87CEEB] transition-colors" />
                          </div>
                          <p className="text-xs text-[#8B7A62] mt-0.5 mb-1.5" style={{ fontFamily: "'Raleway', sans-serif" }}>
                            {item.author}
                          </p>
                          <p className="text-xs text-[#7A6A58] leading-relaxed" style={{ fontFamily: "'Lora', Georgia, serif" }}>
                            {item.desc}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>

          <FadeInSection delay={400}>
            <div className="mt-12 text-center">
              <p className="text-[#8B7A62] text-sm" style={{ fontFamily: "'Lora', Georgia, serif", fontStyle: "italic" }}>
                Know a resource that belongs here? <a href="mailto:info@companionflag.org" className="text-[#87CEEB] hover:underline">Let us know.</a>
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
