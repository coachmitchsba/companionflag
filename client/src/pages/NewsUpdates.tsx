// Design: Warm parchment tones, old-world map background, Raleway typography
// Matches the Companion Flag landing page aesthetic

import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const SKY = "#3CCDFC";
const DARK_BROWN = "#3D2B1F";
const PARCHMENT = "#F5EDD6";

const newsItems = [
  {
    date: "May 2026",
    title: "Companion Flag Interpretive Sign Installed",
    body:
      "A new interpretive sign explaining the meaning and purpose of the Companion Flag has been installed at a public location, helping passersby understand the symbolism of the two flags flying together. The sign describes the concept of human samenesses and human differences in accessible, everyday language.",
  },
  {
    date: "April 2026",
    title: "Hamilton International Middle School Assembly",
    body:
      "Students at Hamilton International Middle School participated in a special assembly introducing the Companion Flag. The event included a presentation on the CF's core message — that all people share fundamental human samenesses regardless of their differences — and students had the opportunity to ask questions and reflect on what the flag means to them.",
  },
  {
    date: "March 2026",
    title: "CF Debut in Andijan, Uzbekistan",
    body:
      "A group of teenagers in Andijan, Uzbekistan became some of the first young people in Central Asia to display the Companion Flag. Photographed outside their school holding their new CFs, the students expressed enthusiasm for the idea of a universal symbol of shared humanity flying alongside their national flag.",
  },
  {
    date: "February 2026",
    title: "Kyrgyzstan Demonstration: Companion Flag with Two Host Flags",
    body:
      "A new demonstration image was produced showing the Companion Flag paired with two different versions of the Kyrgyzstan national flag — each with a different stripe color on the CF to match the host flag. This illustration makes clear how the CF adapts to any host flag while maintaining its core identity.",
  },
  {
    date: "January 2026",
    title: "CF Pins and Buttons Now Available",
    body:
      "A new set of Companion Flag pins and buttons has been produced, making it easier than ever for individuals to carry and share the CF message. The pins are available in several stripe colors to represent a variety of host flags, and can be acquired through the Acquire a CF page.",
  },
  {
    date: "December 2025",
    title: "Website Launch",
    body:
      "The Companion Flag's new website launched, providing a central resource for learning about the CF, its history, its meaning, and how to acquire one. The site includes an interactive world map of host flags, a self-test, a full FAQ, and a contact form for questions and feedback.",
  },
  {
    date: "2024",
    title: "The Companion Flag Concept Formalized",
    body:
      "After years of development, the Companion Flag concept was formally articulated as a nonprofit initiative. The core idea — a simple white flag with a stripe of color matching any host flag, symbolizing the dual nature of human identity — was documented and shared with educators, community leaders, and interested individuals around the world.",
  },
];

export default function NewsUpdates() {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: PARCHMENT }}>
      <Navigation />

      {/* Page header */}
      <div
        className="py-12 px-6 text-center"
        style={{
          background: `linear-gradient(rgba(245,237,214,0.85), rgba(245,237,214,0.85)), url('/images/world-map-bg.jpg') center/cover`,
          borderBottom: `2px solid ${SKY}`,
        }}
      >
        <p
          className="text-sm font-semibold tracking-widest uppercase mb-2"
          style={{ color: SKY, fontFamily: "'Raleway', sans-serif" }}
        >
          A Nonprofit Initiative
        </p>
        <h1
          className="text-4xl md:text-5xl font-bold mb-3"
          style={{ color: DARK_BROWN, fontFamily: "'Playfair Display', serif" }}
        >
          News &amp; Updates
        </h1>
        <div className="flex items-center justify-center gap-3 mt-4">
          <div className="h-px w-16" style={{ background: SKY }} />
          <img
            src="/images/globe-icon.jpg"
            alt="Globe"
            className="rounded-full object-cover"
            style={{
              width: 32,
              height: 32,
              objectPosition: "center 45%",
              border: `2px solid ${SKY}`,
            }}
          />
          <div className="h-px w-16" style={{ background: SKY }} />
        </div>
      </div>

      {/* News items */}
      <main className="flex-1 max-w-3xl mx-auto w-full px-6 py-12">
        <div className="space-y-10">
          {newsItems.map((item, i) => (
            <article
              key={i}
              className="border-l-4 pl-6"
              style={{ borderColor: SKY }}
            >
              <p
                className="text-xs font-bold tracking-widest uppercase mb-1"
                style={{ color: SKY, fontFamily: "'Raleway', sans-serif" }}
              >
                {item.date}
              </p>
              <h2
                className="text-xl font-bold mb-2"
                style={{ color: DARK_BROWN, fontFamily: "'Playfair Display', serif" }}
              >
                {item.title}
              </h2>
              <p
                className="text-base font-semibold leading-relaxed"
                style={{ color: "#5C4033", fontFamily: "'Raleway', sans-serif" }}
              >
                {item.body}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/"
            className="inline-block px-6 py-2 rounded font-semibold text-sm"
            style={{
              background: SKY,
              color: "#fff",
              fontFamily: "'Raleway', sans-serif",
              textDecoration: "none",
            }}
          >
            ← Back to Home
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
