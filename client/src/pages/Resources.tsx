/* Resources Page — Companion Flag "Warm Globe" Design
   Categorized external links: philosophy, human unity, flags, compassion, media */

import { useEffect, useRef } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ExternalLink, BookOpen, Globe, Heart, Users, Tv, Landmark } from "lucide-react";

function FadeInSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add("visible"); obs.disconnect(); } },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return <div ref={ref} className="fade-in-up" style={{ transitionDelay: `${delay}ms` }}>{children}</div>;
}

interface ResourceItem {
  title: string;
  author: string;
  desc: string;
  url: string;
  type: "book" | "article" | "video" | "website" | "organization";
}

interface ResourceCategory {
  label: string;
  icon: React.ReactNode;
  color: string;
  items: ResourceItem[];
}

const categories: ResourceCategory[] = [
  {
    label: "Flags, Symbols & Vexillology",
    icon: <Globe size={20} />,
    color: "#7BAF7B",
    items: [
      {
        title: "Why City Flags May Be the Worst-Designed Thing You've Never Noticed",
        author: "Roman Mars — TED Talk",
        desc: "A delightful and insightful TED talk on flag design principles and what makes a flag truly meaningful as a symbol. One of the most-watched TED talks ever.",
        url: "https://www.ted.com/talks/roman_mars_why_city_flags_may_be_the_worst_designed_thing_you_ve_never_noticed",
        type: "video",
      },
      {
        title: "Vexillology — The Study of Flags",
        author: "Wikipedia",
        desc: "An introduction to the academic discipline devoted to the history, symbolism, and design of flags — the field the Companion Flag belongs to.",
        url: "https://en.wikipedia.org/wiki/Vexillology",
        type: "article",
      },
      {
        title: "Flag: An American Biography",
        author: "Marc Leepson",
        desc: "The history of how a piece of cloth became one of the world's most powerful symbols — and what that tells us about the nature of flags in general.",
        url: "https://www.thomasdunnebooks.com/9780312335229/",
        type: "book",
      },
      {
        title: "North American Vexillological Association (NAVA)",
        author: "NAVA",
        desc: "The leading organization for the study of flags in North America — resources, publications, and the annual flag design survey.",
        url: "https://nava.org/",
        type: "organization",
      },
    ],
  },
  {
    label: "Philosophy & Human Identity",
    icon: <BookOpen size={20} />,
    color: "#5BA3C9",
    items: [
      {
        title: "The Ethics of Identity",
        author: "Kwame Anthony Appiah",
        desc: "A philosopher's exploration of how we balance individual identity with our membership in larger communities — and what we owe to each other across those boundaries.",
        url: "https://press.princeton.edu/books/paperback/9780691130286/the-ethics-of-identity",
        type: "book",
      },
      {
        title: "Cosmopolitanism: Ethics in a World of Strangers",
        author: "Kwame Anthony Appiah",
        desc: "On the moral obligations we have to people very different from ourselves — and what we genuinely share across cultures.",
        url: "https://wwnorton.com/books/cosmopolitanism/",
        type: "book",
      },
      {
        title: "The Righteous Mind",
        author: "Jonathan Haidt",
        desc: "Why good people are divided by politics and religion — and what moral psychology tells us about our shared foundations as human beings.",
        url: "https://righteousmind.com/",
        type: "book",
      },
      {
        title: "Strangers Drowning",
        author: "Larissa MacFarquhar",
        desc: "Portraits of people who have devoted their lives to doing good — a meditation on what it means to care deeply about strangers.",
        url: "https://www.penguinrandomhouse.com/books/234857/strangers-drowning-by-larissa-macfarquhar/",
        type: "book",
      },
    ],
  },
  {
    label: "Human Unity & Shared Experience",
    icon: <Heart size={20} />,
    color: "#C9A84C",
    items: [
      {
        title: "Humankind: A Hopeful History",
        author: "Rutger Bregman",
        desc: "A counterintuitive and deeply researched look at human nature, arguing that people are fundamentally decent, cooperative, and capable of great compassion.",
        url: "https://www.bloomsbury.com/us/humankind-9781635575996/",
        type: "book",
      },
      {
        title: "The Human Family Tree",
        author: "National Geographic",
        desc: "An exploration of human genetic unity — how all people on Earth are connected through a shared ancestry that transcends every cultural and national boundary.",
        url: "https://www.nationalgeographic.com/science/article/human-family-tree",
        type: "article",
      },
      {
        title: "The Story of Human Language",
        author: "John McWhorter / The Great Courses",
        desc: "How the stunning diversity of the world's 6,000+ languages actually reveals the underlying unity of human communication and thought.",
        url: "https://www.thegreatcourses.com/courses/the-story-of-human-language",
        type: "video",
      },
      {
        title: "Born to Be Good: The Science of a Meaningful Life",
        author: "Dacher Keltner",
        desc: "A UC Berkeley psychologist's exploration of the biological roots of human kindness, compassion, and our deep need for connection.",
        url: "https://www.wwnorton.com/books/born-to-be-good/",
        type: "book",
      },
    ],
  },
  {
    label: "Compassion, Empathy & Connection",
    icon: <Users size={20} />,
    color: "#B07BA8",
    items: [
      {
        title: "Greater Good Science Center",
        author: "UC Berkeley",
        desc: "Research-based insights into the roots of compassion, empathy, gratitude, and human connection — with practical tools for applying them in daily life.",
        url: "https://greatergood.berkeley.edu/",
        type: "website",
      },
      {
        title: "Brené Brown on Empathy vs. Sympathy",
        author: "RSA Animate",
        desc: "A short, powerful animated video on the difference between empathy and sympathy — and why that distinction matters for how we relate to one another.",
        url: "https://www.youtube.com/watch?v=1Evwgu369Jw",
        type: "video",
      },
      {
        title: "The Empathy Effect",
        author: "Helen Riess, MD",
        desc: "The neuroscience and psychology of human connection — how empathy can transform our relationships, our communities, and our world.",
        url: "https://www.soundstrue.com/products/the-empathy-effect",
        type: "book",
      },
      {
        title: "Charter for Compassion",
        author: "Karen Armstrong",
        desc: "A global initiative affirming the principle of compassion as central to all religious, ethical, and spiritual traditions — and to our shared humanity.",
        url: "https://charterforcompassion.org/",
        type: "organization",
      },
    ],
  },
  {
    label: "Children, Education & Belonging",
    icon: <Landmark size={20} />,
    color: "#C97A5B",
    items: [
      {
        title: "Teaching Tolerance / Learning for Justice",
        author: "Southern Poverty Law Center",
        desc: "Free educational resources for teachers on diversity, equity, and helping children develop a sense of belonging and respect for others.",
        url: "https://www.learningforjustice.org/",
        type: "organization",
      },
      {
        title: "The Danger of a Single Story",
        author: "Chimamanda Ngozi Adichie — TED Talk",
        desc: "One of the most important TED talks ever given — on how the stories we tell about others shape our understanding of them, and what happens when we hear only one.",
        url: "https://www.ted.com/talks/chimamanda_ngozi_adichie_the_danger_of_a_single_story",
        type: "video",
      },
      {
        title: "Belonging: The Science of Creating Connection and Bridging Divides",
        author: "Geoffrey L. Cohen",
        desc: "A Stanford psychologist's research on how a sense of belonging affects children's development, learning, and long-term wellbeing.",
        url: "https://www.penguinrandomhouse.com/books/645004/belonging-by-geoffrey-l-cohen/",
        type: "book",
      },
      {
        title: "Facing History and Ourselves",
        author: "Facing History",
        desc: "An educational organization that uses lessons of history to challenge teachers and students to stand up to bigotry and hate — and to recognize our shared humanity.",
        url: "https://www.facinghistory.org/",
        type: "organization",
      },
    ],
  },
  {
    label: "Media & Further Exploration",
    icon: <Tv size={20} />,
    color: "#8B6E4E",
    items: [
      {
        title: "One Small Step — StoryCorps",
        author: "StoryCorps",
        desc: "A project pairing Americans of opposing political views to have a conversation — not about politics, but about their lives. A model for human connection across difference.",
        url: "https://storycorps.org/discover/one-small-step/",
        type: "website",
      },
      {
        title: "The Moth",
        author: "The Moth",
        desc: "True stories told live — a celebration of the universal human experience through personal narrative. Every story is a reminder of what we share.",
        url: "https://themoth.org/",
        type: "website",
      },
      {
        title: "Humans of New York",
        author: "Brandon Stanton",
        desc: "A photography project that has become a global phenomenon — intimate portraits and stories of ordinary people that reveal the depth of our shared humanity.",
        url: "https://www.humansofnewyork.com/",
        type: "website",
      },
      {
        title: "What I Wish My Teacher Knew",
        author: "Kyle Schwartz — TED Talk",
        desc: "A teacher asks her students to complete the sentence 'I wish my teacher knew…' — and discovers the universal desires for connection and understanding beneath every difference.",
        url: "https://www.ted.com/talks/kyle_schwartz_i_wish_my_teacher_knew",
        type: "video",
      },
    ],
  },
];

const typeLabel: Record<string, string> = {
  book: "Book",
  article: "Article",
  video: "Video",
  website: "Website",
  organization: "Organization",
};

const typeBg: Record<string, string> = {
  book: "#EDE3CC",
  article: "#E3EDF5",
  video: "#F5EDE3",
  website: "#E3F0E3",
  organization: "#F0E3F0",
};

export default function Resources() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F5EDD6" }}>
      <Navigation />

      {/* Page Header */}
      <div
        className="pt-32 pb-16 relative"
        style={{
          backgroundImage: `url(/manus-storage/cf-hero-v2_cdce503b.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#F5EDD6]/60" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p
            className="text-sm tracking-[0.25em] uppercase text-[#8B6E4E] mb-3"
            style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 500 }}
          >
            Go Deeper
          </p>
          <h1
            className="text-5xl sm:text-6xl text-[#3D2B1F] leading-tight mb-4"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 500 }}
          >
            Resources & Links
          </h1>
          <p
            className="text-lg text-[#5C4033] max-w-2xl mx-auto"
            style={{ fontFamily: "'Lora', Georgia, serif", fontStyle: "italic" }}
          >
            A curated collection of books, talks, organizations, and websites that illuminate the ideas behind the Companion Flag.
          </p>
          <div className="h-0.5 w-16 bg-[#C9A84C] mx-auto mt-6" />
        </div>
      </div>

      {/* Intro */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-4">
        <FadeInSection>
          <p
            className="text-lg text-[#3D2B1F] leading-relaxed"
            style={{ fontFamily: "'Lora', Georgia, serif" }}
          >
            The Companion Flag draws on a rich tradition of thought about human identity, shared experience, compassion, and the power of symbols. The resources below are offered as invitations to explore these ideas further — from philosophy and psychology to education, storytelling, and the surprising world of flag design.
          </p>
        </FadeInSection>
      </div>

      {/* Categories */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
        {categories.map((cat, ci) => (
          <FadeInSection key={ci} delay={ci * 60}>
            {/* Category Header */}
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm"
                style={{ backgroundColor: cat.color, color: "white" }}
              >
                {cat.icon}
              </div>
              <h2
                className="text-2xl sm:text-3xl text-[#3D2B1F]"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 600 }}
              >
                {cat.label}
              </h2>
              <div className="flex-1 h-px ml-2" style={{ backgroundColor: "#D4C4A0" }} />
            </div>

            {/* Resource Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {cat.items.map((item, ii) => (
                <a
                  key={ii}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block rounded-sm p-5 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5"
                  style={{
                    backgroundColor: "#F8F2E4",
                    border: "1px solid #D4C4A0",
                    textDecoration: "none",
                  }}
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <span
                      className="text-xs px-2 py-0.5 rounded-full font-semibold"
                      style={{
                        backgroundColor: typeBg[item.type] || "#EDE3CC",
                        color: "#5C4033",
                        fontFamily: "'Raleway', sans-serif",
                        letterSpacing: "0.05em",
                      }}
                    >
                      {typeLabel[item.type]}
                    </span>
                    <ExternalLink
                      size={14}
                      className="flex-shrink-0 mt-0.5 text-[#B8A890] group-hover:text-[#5BA3C9] transition-colors"
                    />
                  </div>
                  <h3
                    className="text-base text-[#3D2B1F] group-hover:text-[#5BA3C9] transition-colors leading-snug mb-1"
                    style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 600 }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-xs text-[#8B6E4E] mb-2"
                    style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 500 }}
                  >
                    {item.author}
                  </p>
                  <p
                    className="text-sm text-[#5C4033] leading-relaxed"
                    style={{ fontFamily: "'Lora', Georgia, serif" }}
                  >
                    {item.desc}
                  </p>
                </a>
              ))}
            </div>
          </FadeInSection>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <FadeInSection delay={200}>
          <div
            className="rounded-sm p-8 text-center shadow-md"
            style={{ backgroundColor: "#3D2B1F" }}
          >
            <h3
              className="text-2xl text-[#F5EDD6] mb-3"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 500 }}
            >
              Know a resource we should add?
            </h3>
            <p
              className="text-[#B8A890] mb-6"
              style={{ fontFamily: "'Lora', Georgia, serif" }}
            >
              We're always looking to expand this list. If you know of a book, article, organization, or video that speaks to the ideas behind the Companion Flag, we'd love to hear about it.
            </p>
            <a
              href="mailto:info@companionflag.org"
              className="inline-flex items-center gap-2 px-6 py-3 text-[#1A1008] rounded-sm shadow hover:shadow-md transition-all hover:-translate-y-0.5 text-sm font-semibold"
              style={{
                backgroundColor: "#87CEEB",
                fontFamily: "'Raleway', sans-serif",
                letterSpacing: "0.06em",
              }}
            >
              Suggest a Resource
            </a>
          </div>
        </FadeInSection>
      </div>

      <Footer />
    </div>
  );
}
