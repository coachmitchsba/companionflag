/* Wall of Flags — Interactive World Map
   Companion Flag "Warm Globe" Design
   Click any country → see the CF paired with that nation's flag */

import { useState, useCallback, useRef, useEffect } from "react";
import { ComposableMap, Geographies, Geography, ZoomableGroup } from "react-simple-maps";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { flagData, searchFlags, type FlagEntry } from "@/lib/flagData";
import { Search, X, Globe, ChevronDown } from "lucide-react";
import { Link } from "wouter";

const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// Map ISO numeric (from topojson) to ISO alpha-3
const numericToAlpha3: Record<string, string> = {
  "004": "AFG", "008": "ALB", "012": "DZA", "020": "AND", "024": "AGO",
  "032": "ARG", "051": "ARM", "036": "AUS", "040": "AUT", "031": "AZE",
  "044": "BHS", "048": "BHR", "050": "BGD", "112": "BLR", "056": "BEL",
  "084": "BLZ", "204": "BEN", "064": "BTN", "068": "BOL", "070": "BIH",
  "072": "BWA", "076": "BRA", "096": "BRN", "100": "BGR", "854": "BFA",
  "108": "BDI", "132": "CPV", "116": "KHM", "120": "CMR", "124": "CAN",
  "140": "CAF", "148": "TCD", "152": "CHL", "156": "CHN", "170": "COL",
  "174": "COM", "180": "COD", "178": "COG", "188": "CRI", "384": "CIV",
  "191": "HRV", "192": "CUB", "196": "CYP", "203": "CZE", "208": "DNK",
  "262": "DJI", "214": "DOM", "218": "ECU", "818": "EGY", "222": "SLV",
  "226": "GNQ", "232": "ERI", "233": "EST", "748": "SWZ", "231": "ETH",
  "242": "FJI", "246": "FIN", "250": "FRA", "266": "GAB", "270": "GMB",
  "268": "GEO", "276": "DEU", "288": "GHA", "300": "GRC", "320": "GTM",
  "324": "GIN", "624": "GNB", "328": "GUY", "332": "HTI", "340": "HND",
  "348": "HUN", "352": "ISL", "356": "IND", "360": "IDN", "364": "IRN",
  "368": "IRQ", "372": "IRL", "376": "ISR", "380": "ITA", "388": "JAM",
  "392": "JPN", "400": "JOR", "398": "KAZ", "404": "KEN", "408": "PRK",
  "410": "KOR", "414": "KWT", "417": "KGZ", "418": "LAO", "428": "LVA",
  "422": "LBN", "426": "LSO", "430": "LBR", "434": "LBY", "438": "LIE",
  "440": "LTU", "442": "LUX", "450": "MDG", "454": "MWI", "458": "MYS",
  "462": "MDV", "466": "MLI", "470": "MLT", "478": "MRT", "480": "MUS",
  "484": "MEX", "498": "MDA", "492": "MCO", "496": "MNG", "499": "MNE",
  "504": "MAR", "508": "MOZ", "104": "MMR", "516": "NAM", "524": "NPL",
  "528": "NLD", "554": "NZL", "558": "NIC", "562": "NER", "566": "NGA",
  "807": "MKD", "578": "NOR", "512": "OMN", "586": "PAK", "585": "PLW",
  "591": "PAN", "598": "PNG", "600": "PRY", "604": "PER", "608": "PHL",
  "616": "POL", "620": "PRT", "634": "QAT", "642": "ROU", "643": "RUS",
  "646": "RWA", "682": "SAU", "686": "SEN", "688": "SRB", "694": "SLE",
  "702": "SGP", "703": "SVK", "705": "SVN", "706": "SOM", "710": "ZAF",
  "728": "SSD", "724": "ESP", "144": "LKA", "729": "SDN", "740": "SUR",
  "752": "SWE", "756": "CHE", "760": "SYR", "158": "TWN", "762": "TJK",
  "834": "TZA", "764": "THA", "626": "TLS", "768": "TGO", "780": "TTO",
  "788": "TUN", "792": "TUR", "795": "TKM", "800": "UGA", "804": "UKR",
  "784": "ARE", "826": "GBR", "840": "USA", "858": "URY", "860": "UZB",
  "862": "VEN", "704": "VNM", "887": "YEM", "894": "ZMB", "716": "ZWE",
};

function CFPreview({ entry, countryCode }: { entry: FlagEntry; countryCode: string }) {
  const flagUrl = `https://flagcdn.com/w160/${entry.iso2.toLowerCase()}.png`;
  return (
    <div className="flex flex-col items-center gap-3">
      {/* Flag pole with both flags */}
      <div className="flex items-start gap-4">
        {/* Pole */}
        <div className="flex flex-col items-center mt-1">
          <div className="w-1.5 rounded-full" style={{ height: "160px", backgroundColor: "#8B6E4E" }} />
          <div className="w-3 h-3 rounded-full mt-0.5" style={{ backgroundColor: "#C9A84C" }} />
        </div>
        {/* Flags stacked */}
        <div className="flex flex-col gap-0.5">
          {/* Host flag */}
          <div className="shadow-md rounded-sm overflow-hidden" style={{ width: 120, height: 72 }}>
            <img
              src={flagUrl}
              alt={`${entry.name} flag`}
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
          </div>
          {/* Companion Flag */}
          <div
            className="shadow-md rounded-sm overflow-hidden flex flex-col"
            style={{ width: 120, height: 72 }}
          >
            {/* Stripe — 20% of flag height */}
            <div style={{ height: "14px", backgroundColor: entry.stripeColor }} />
            {/* White field */}
            <div className="flex-1" style={{ backgroundColor: "#FFFFFF" }} />
          </div>
        </div>
      </div>
      {/* Color swatch row */}
      <div className="flex items-center gap-1.5">
        {entry.flagColors.slice(0, 5).map((c, i) => (
          <div key={i} className="w-4 h-4 rounded-full shadow-sm border border-white/30" style={{ backgroundColor: c }} title={c} />
        ))}
      </div>
      <p className="text-xs text-center text-[#8B6E4E]" style={{ fontFamily: "'Raleway', sans-serif" }}>
        CF stripe: <span className="font-semibold" style={{ color: entry.stripeColor === "#FFFFFF" ? "#999" : entry.stripeColor }}>{entry.stripeColorName}</span>
      </p>
    </div>
  );
}

function FadeInSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add("visible"); obs.disconnect(); } }, { threshold: 0.08 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return <div ref={ref} className="fade-in-up" style={{ transitionDelay: `${delay}ms` }}>{children}</div>;
}

export default function WallOfFlags() {
  const [selected, setSelected] = useState<{ code: string; entry: FlagEntry } | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<Array<{ code: string; entry: FlagEntry }>>([]);
  const [showSearch, setShowSearch] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  const handleCountryClick = useCallback((geo: { id: string }) => {
    const alpha3 = numericToAlpha3[geo.id];
    if (alpha3 && flagData[alpha3]) {
      setSelected({ code: alpha3, entry: flagData[alpha3] });
    }
  }, []);

  const handleSearch = (q: string) => {
    setSearchQuery(q);
    setSearchResults(q.length > 1 ? searchFlags(q) : []);
  };

  const selectFromSearch = (code: string, entry: FlagEntry) => {
    setSelected({ code, entry });
    setSearchQuery("");
    setSearchResults([]);
    setShowSearch(false);
  };

  // Close search on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setShowSearch(false);
        setSearchResults([]);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const getCountryColor = (geoId: string) => {
    const alpha3 = numericToAlpha3[geoId];
    if (!alpha3) return "#D4C4A0";
    if (selected?.code === alpha3) return "#5BA3C9";
    if (hovered === alpha3) return "#87CEEB";
    return flagData[alpha3] ? "#C8B898" : "#D4C4A0";
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F5EDD6" }}>
      <Navigation />

      {/* Page Header */}
      <div
        className="pt-32 pb-12 relative"
        style={{
          backgroundImage: `url(/manus-storage/cf-hero-v2_cdce503b.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#F5EDD6]/60" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm tracking-[0.25em] uppercase text-[#8B6E4E] mb-3" style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 500 }}>
            Imagine It Everywhere
          </p>
          <h1 className="text-5xl sm:text-6xl text-[#3D2B1F] leading-tight mb-4" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 500 }}>
            A Flag for Every Flag
          </h1>
          <p className="text-lg text-[#5C4033] max-w-2xl mx-auto" style={{ fontFamily: "'Lora', Georgia, serif", fontStyle: "italic" }}>
            Click any country on the map to see what the Companion Flag looks like flying below its national flag.
          </p>
          <div className="h-0.5 w-16 bg-[#C9A84C] mx-auto mt-6" />
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col lg:flex-row gap-8 items-start">

          {/* Map */}
          <div className="flex-1 min-w-0">
            <FadeInSection>
              {/* Search bar */}
              <div ref={searchRef} className="relative mb-4 max-w-xs">
                <button
                  onClick={() => setShowSearch(!showSearch)}
                  className="flex items-center gap-2 px-4 py-2 rounded-sm text-sm shadow-sm transition-all hover:shadow-md"
                  style={{ backgroundColor: "#EDE3CC", border: "1px solid #D4C4A0", fontFamily: "'Raleway', sans-serif", color: "#5C4033" }}
                >
                  <Search size={14} />
                  Search for a country…
                  <ChevronDown size={14} className={`transition-transform ${showSearch ? "rotate-180" : ""}`} />
                </button>
                {showSearch && (
                  <div className="absolute top-full left-0 mt-1 w-72 z-30 rounded-sm shadow-lg overflow-hidden" style={{ backgroundColor: "#F8F2E4", border: "1px solid #D4C4A0" }}>
                    <div className="flex items-center gap-2 px-3 py-2 border-b" style={{ borderColor: "#D4C4A0" }}>
                      <Search size={14} className="text-[#8B6E4E]" />
                      <input
                        autoFocus
                        type="text"
                        value={searchQuery}
                        onChange={e => handleSearch(e.target.value)}
                        placeholder="Type a country name…"
                        className="flex-1 bg-transparent text-sm text-[#3D2B1F] placeholder-[#B8A890] outline-none"
                        style={{ fontFamily: "'Lora', Georgia, serif" }}
                      />
                      {searchQuery && <button onClick={() => { setSearchQuery(""); setSearchResults([]); }}><X size={14} className="text-[#8B6E4E]" /></button>}
                    </div>
                    {searchResults.length > 0 ? (
                      <div className="max-h-56 overflow-y-auto">
                        {searchResults.map(({ code, entry }) => (
                          <button
                            key={code}
                            onClick={() => selectFromSearch(code, entry)}
                            className="w-full text-left px-4 py-2.5 flex items-center gap-3 hover:bg-[#EDE3CC] transition-colors"
                          >
                            <span className="text-xl">{entry.emoji}</span>
                            <span className="text-sm text-[#3D2B1F]" style={{ fontFamily: "'Raleway', sans-serif" }}>{entry.name}</span>
                            <span className="ml-auto w-4 h-4 rounded-full flex-shrink-0 shadow-sm border border-white/30" style={{ backgroundColor: entry.stripeColor }} />
                          </button>
                        ))}
                      </div>
                    ) : searchQuery.length > 1 ? (
                      <p className="px-4 py-3 text-sm text-[#8B6E4E]" style={{ fontFamily: "'Lora', Georgia, serif", fontStyle: "italic" }}>No results found.</p>
                    ) : (
                      <p className="px-4 py-3 text-sm text-[#8B6E4E]" style={{ fontFamily: "'Lora', Georgia, serif", fontStyle: "italic" }}>Start typing to search…</p>
                    )}
                  </div>
                )}
              </div>

              {/* Map container */}
              <div
                className="rounded-sm overflow-hidden shadow-md"
                style={{ backgroundColor: "#E8DCC8", border: "1px solid #D4C4A0", cursor: "pointer" }}
              >
                <ComposableMap
                  projectionConfig={{ scale: 147, center: [0, 10] }}
                  style={{ width: "100%", height: "auto" }}
                >
                  <ZoomableGroup>
                    <Geographies geography={GEO_URL}>
                      {({ geographies }) =>
                        geographies.map((geo) => {
                          const alpha3 = numericToAlpha3[geo.id];
                          const hasData = alpha3 && flagData[alpha3];
                          return (
                            <Geography
                              key={geo.rsmKey}
                              geography={geo}
                              onClick={() => handleCountryClick(geo)}
                              onMouseEnter={() => hasData && setHovered(alpha3)}
                              onMouseLeave={() => setHovered(null)}
                              style={{
                                default: {
                                  fill: getCountryColor(geo.id),
                                  stroke: "#F5EDD6",
                                  strokeWidth: 0.5,
                                  outline: "none",
                                  transition: "fill 0.15s ease",
                                },
                                hover: {
                                  fill: hasData ? "#87CEEB" : "#D4C4A0",
                                  stroke: "#F5EDD6",
                                  strokeWidth: 0.5,
                                  outline: "none",
                                  cursor: hasData ? "pointer" : "default",
                                },
                                pressed: {
                                  fill: "#5BA3C9",
                                  stroke: "#F5EDD6",
                                  strokeWidth: 0.5,
                                  outline: "none",
                                },
                              }}
                            />
                          );
                        })
                      }
                    </Geographies>
                  </ZoomableGroup>
                </ComposableMap>
              </div>
              <p className="text-xs text-[#8B6E4E] mt-2 text-center" style={{ fontFamily: "'Raleway', sans-serif" }}>
                Scroll to zoom · Click and drag to pan · Click a country to see its Companion Flag
              </p>
            </FadeInSection>
          </div>

          {/* Sidebar: CF Preview */}
          <div className="w-full lg:w-72 flex-shrink-0">
            <FadeInSection delay={100}>
              {selected ? (
                <div className="rounded-sm shadow-md overflow-hidden" style={{ backgroundColor: "#F8F2E4", border: "1px solid #D4C4A0" }}>
                  {/* Header */}
                  <div className="px-5 py-4 flex items-center justify-between" style={{ backgroundColor: "#EDE3CC", borderBottom: "1px solid #D4C4A0" }}>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{selected.entry.emoji}</span>
                      <h2 className="text-lg text-[#3D2B1F]" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 600 }}>
                        {selected.entry.name}
                      </h2>
                    </div>
                    <button onClick={() => setSelected(null)} className="text-[#8B6E4E] hover:text-[#5BA3C9] transition-colors">
                      <X size={16} />
                    </button>
                  </div>

                  {/* CF Preview */}
                  <div className="p-6 flex flex-col items-center">
                    <CFPreview entry={selected.entry} countryCode={selected.code} />

                    <div className="mt-5 w-full rounded-sm p-4" style={{ backgroundColor: "#EDE3CC", border: "1px solid #D4C4A0" }}>
                      <p className="text-xs text-[#8B6E4E] uppercase tracking-wide mb-2" style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 600 }}>
                        About this pairing
                      </p>
                      <p className="text-sm text-[#3D2B1F] leading-relaxed" style={{ fontFamily: "'Lora', Georgia, serif" }}>
                        The Companion Flag for <strong>{selected.entry.name}</strong> carries a{" "}
                        <span className="font-semibold" style={{ color: selected.entry.stripeColor === "#FFFFFF" ? "#999" : selected.entry.stripeColor }}>
                          {selected.entry.stripeColorName.toLowerCase()}
                        </span>{" "}
                        stripe — borrowed from the colors of the host flag above it. Together, they say: <em>"We are proud of who we are, and we share our humanity with all."</em>
                      </p>
                    </div>

                    <Link href="/how-to-acquire">
                      <button
                        className="mt-4 w-full py-2.5 text-sm text-white rounded-sm shadow hover:shadow-md transition-all hover:-translate-y-0.5"
                        style={{ backgroundColor: "#5BA3C9", fontFamily: "'Raleway', sans-serif", fontWeight: 600, letterSpacing: "0.06em" }}
                      >
                        Get this Companion Flag →
                      </button>
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="rounded-sm p-6 text-center shadow-sm" style={{ backgroundColor: "#EDE3CC", border: "1px solid #D4C4A0" }}>
                  <div className="w-14 h-14 rounded-full bg-[#87CEEB]/30 flex items-center justify-center mx-auto mb-4">
                    <Globe size={28} className="text-[#5BA3C9]" />
                  </div>
                  <h3 className="text-xl text-[#3D2B1F] mb-2" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 600 }}>
                    Select a Country
                  </h3>
                  <p className="text-sm text-[#5C4033] leading-relaxed" style={{ fontFamily: "'Lora', Georgia, serif" }}>
                    Click any country on the map — or search above — to see what the Companion Flag looks like flying below its national flag.
                  </p>
                  <div className="mt-5 space-y-2">
                    {["USA", "GBR", "JPN", "BRA", "ZAF", "IND"].map(code => {
                      const entry = flagData[code];
                      return entry ? (
                        <button
                          key={code}
                          onClick={() => setSelected({ code, entry })}
                          className="w-full flex items-center gap-3 px-3 py-2 rounded-sm text-sm hover:bg-[#D4C4A0] transition-colors"
                          style={{ fontFamily: "'Raleway', sans-serif", color: "#5C4033" }}
                        >
                          <span className="text-lg">{entry.emoji}</span>
                          <span>{entry.name}</span>
                          <span className="ml-auto w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: entry.stripeColor, border: "1px solid #B8A890" }} />
                        </button>
                      ) : null;
                    })}
                  </div>
                  <p className="text-xs text-[#8B6E4E] mt-4" style={{ fontFamily: "'Lora', Georgia, serif", fontStyle: "italic" }}>
                    …or explore any of {Object.keys(flagData).length} countries on the map
                  </p>
                </div>
              )}
            </FadeInSection>

            {/* Philosophy note */}
            <FadeInSection delay={200}>
              <div className="mt-4 rounded-sm p-5 shadow-sm" style={{ backgroundColor: "#3D2B1F" }}>
                <p className="text-sm text-[#E8D8B8] leading-relaxed italic" style={{ fontFamily: "'Lora', Georgia, serif" }}>
                  "The Companion Flag, like — and with! — each host flag flying above it, is a vehicle of connection. A song of the heart."
                </p>
                <Link href="/about">
                  <span className="text-xs text-[#87CEEB] hover:underline mt-3 block" style={{ fontFamily: "'Raleway', sans-serif" }}>
                    Read the full story →
                  </span>
                </Link>
              </div>
            </FadeInSection>
          </div>
        </div>
      </div>

      {/* CF Sticker Gallery */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <FadeInSection>
          <div className="text-center mb-10">
            <p className="text-sm tracking-[0.25em] uppercase text-[#8B6E4E] mb-2" style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 500 }}>The CF in the World</p>
            <h2 className="text-3xl sm:text-4xl text-[#3D2B1F] mb-3" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 500 }}>Companion Flag Badges</h2>
            <p className="text-[#5C4033] max-w-xl mx-auto" style={{ fontFamily: "'Lora', Georgia, serif" }}>
              Each badge shows the Companion Flag paired with a specific host flag — a visual expression of the idea in action. More badges are added as the CF spreads around the world.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 items-center justify-items-center">
            {[
              { src: "/images/stickers/costa-rica.png", label: "Costa Rica" },
              { src: "/images/stickers/croatia.png", label: "Croatia" },
              { src: "/images/stickers/cuba.png", label: "Cuba" },
            ].map((badge, i) => (
              <div key={i} className="flex flex-col items-center gap-2 group">
                <div className="w-28 h-28 rounded-full overflow-hidden shadow-md group-hover:shadow-lg transition-shadow border-2" style={{ borderColor: "#D4C4A0" }}>
                  <img src={badge.src} alt={`${badge.label} Companion Flag badge`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <span className="text-xs text-[#8B6E4E] text-center" style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 500 }}>{badge.label}</span>
              </div>
            ))}
            {/* Placeholder slots for upcoming badges */}
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={`placeholder-${i}`} className="flex flex-col items-center gap-2">
                <div className="w-28 h-28 rounded-full flex items-center justify-center border-2 border-dashed" style={{ borderColor: "#D4C4A0", backgroundColor: "#EDE3CC" }}>
                  <Globe size={28} className="text-[#C4B090]" />
                </div>
                <span className="text-xs text-[#C4B090] text-center" style={{ fontFamily: "'Raleway', sans-serif" }}>Coming soon</span>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-[#8B6E4E] mt-8 italic" style={{ fontFamily: "'Lora', Georgia, serif" }}>
            Have a CF badge to share? <a href="mailto:info@companionflag.org" className="text-[#5BA3C9] hover:underline">Send it to us</a> and we'll add it here.
          </p>
        </FadeInSection>
      </div>

      {/* Bottom CTA */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 pt-4">
        <FadeInSection delay={150}>
          <div className="rounded-sm p-8 text-center shadow-md" style={{ backgroundColor: "#EDE3CC", border: "1px solid #D4C4A0" }}>
            <h3 className="text-2xl text-[#3D2B1F] mb-3" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 500 }}>
              Ready to fly one?
            </h3>
            <p className="text-[#5C4033] mb-6 max-w-xl mx-auto" style={{ fontFamily: "'Lora', Georgia, serif" }}>
              Any flag maker can produce a Companion Flag from our simple spec sheet. Download it free and take it to your local flag shop.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/how-to-acquire">
                <button className="px-7 py-3 text-sm text-white rounded-sm shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5" style={{ backgroundColor: "#5BA3C9", fontFamily: "'Raleway', sans-serif", fontWeight: 600, letterSpacing: "0.08em" }}>
                  How to Acquire a CF
                </button>
              </Link>
              <Link href="/self-test">
                <button className="px-7 py-3 text-sm rounded-sm shadow transition-all hover:-translate-y-0.5" style={{ backgroundColor: "transparent", border: "1px solid #8B6E4E", color: "#5C4033", fontFamily: "'Raleway', sans-serif", fontWeight: 600, letterSpacing: "0.08em" }}>
                  Is this idea for you?
                </button>
              </Link>
            </div>
          </div>
        </FadeInSection>
      </div>

      <Footer />
    </div>
  );
}
