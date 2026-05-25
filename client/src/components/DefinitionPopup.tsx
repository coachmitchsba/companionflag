/* DefinitionPopup — inline underlined term with a white pop-up definition box
   Used for "human samenesses" and "human differences" throughout the site */

import { useState, useRef, useEffect } from "react";

interface DefinitionPopupProps {
  term: string;
  definition: React.ReactNode;
  underlineColor?: string;
}

export default function DefinitionPopup({ term, definition, underlineColor = "#1AAAD4" }: DefinitionPopupProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  return (
    <span ref={ref} className="relative inline">
      {/* Underlined clickable term */}
      <button
        onClick={() => setOpen(!open)}
        className="underline decoration-2 cursor-pointer transition-colors"
        style={{
          textDecorationColor: underlineColor,
          color: "inherit",
          fontFamily: "inherit",
          fontSize: "inherit",
          fontWeight: "inherit",
          fontStyle: "inherit",
          lineHeight: "inherit",
          background: "none",
          border: "none",
          padding: 0,
        }}
      >
        {term}
      </button>

      {/* Pop-up box */}
      {open && (
        <span
          className="absolute z-50 left-0 top-full mt-2 w-80 sm:w-96 rounded shadow-xl border border-[#D4C4A0]"
          style={{ backgroundColor: "white" }}
        >
          {/* Arrow */}
          <span
            className="absolute -top-2 left-4 w-4 h-4 rotate-45 border-l border-t border-[#D4C4A0]"
            style={{ backgroundColor: "white" }}
          />
          <span className="block p-4 pt-5">
            <span
              className="block text-sm text-[#3D2B1F] leading-relaxed"
              style={{ fontFamily: "'Lora', Georgia, serif" }}
            >
              {definition}
            </span>
            <button
              onClick={() => setOpen(false)}
              className="mt-3 text-xs font-semibold underline"
              style={{
                fontFamily: "'Raleway', sans-serif",
                color: underlineColor,
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0,
              }}
            >
              Got it!
            </button>
          </span>
        </span>
      )}
    </span>
  );
}
