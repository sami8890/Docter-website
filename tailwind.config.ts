import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
          primary: {
            main: '#0D47A1',      // Deep blue
            light: '#1565C0',     // Slightly lighter blue
            dark: '#093170',      // Darker blue
            contrastText: '#FFFFFF'
          },
          secondary: {
            main: '#2E7D32',      // Deep green
            light: '#4CAF50',     // Brighter green
            dark: '#1B5E20',      // Darker green
            contrastText: '#FFFFFF'
          },
          neutral: {
            50: '#F5F7FA',        // Very light grey (almost white)
            100: '#E8EAED',       // Light grey
            700: '#2D3748',       // Dark grey
            900: '#1A202C'        // Very dark grey
          },
          background: '#FFFFFF'
        
      },
    },
  },
  plugins: [],
} satisfies Config;
