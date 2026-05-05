/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#0F172A", // Deep Navy
        "primary-container": "#1E293B", // Lighter Navy
        "accent": "#C2410C", // Refined Burnt Orange
        "secondary": "#64748B", // Slate
        "secondary-container": "#F1F5F9", // Slate Light
        "surface-bright": "#FFFFFF",
        "on-surface": "#0F172A",
        "surface-container": "#F8FAFC",
      },
      spacing: {
        "margin": "24px",
        "gutter": "16px",
        "stack-sm": "8px",
        "stack-md": "24px",
        "stack-lg": "40px",
        "section-padding": "80px",
      },
      fontFamily: {
        "sans": ["Inter", "sans-serif"],
        "serif": ["Playfair Display", "serif"],
      },
      fontSize: {
        "headline-xl": ["clamp(2.5rem, 6vw, 4rem)", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" }],
        "headline-lg": ["clamp(2rem, 4vw, 3rem)", { lineHeight: "1.2", letterSpacing: "-0.01em", fontWeight: "600" }],
        "headline-md": ["1.5rem", { lineHeight: "1.3", letterSpacing: "0", fontWeight: "600" }],
        "body-lg": ["1.125rem", { lineHeight: "1.6", fontWeight: "400" }],
        "body-md": ["1rem", { lineHeight: "1.6", fontWeight: "400" }],
        "label-bold": ["0.875rem", { lineHeight: "1.2", letterSpacing: "0.05em", fontWeight: "600" }],
        "label-sm": ["0.75rem", { lineHeight: "1.2", letterSpacing: "0.02em", fontWeight: "500" }],
      },
    },
  },
  plugins: [],
};
