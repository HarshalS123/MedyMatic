import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          red: "#d71920",
          dark: "#221f20",
          ink: "#111827",
          muted: "#6b7280",
          soft: "#fff5f5",
          line: "#eceef2"
        }
      },
      boxShadow: {
        card: "0 20px 50px rgba(17, 24, 39, 0.08)"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        heading: ["Space Grotesk", "ui-sans-serif", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
