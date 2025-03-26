/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      animation: {
        'gradient-shift': 'gradient-shift 4s ease infinite',
        'gradient-shift-reverse': 'gradient-shift-reverse 4s ease infinite',
        'float': 'float 15s ease-in-out infinite',
      },
      keyframes: {
        'gradient-shift': {
          '0%': {
            'background-position': '0% 0%',
          },
          '50%': {
            'background-position': '100% 100%',
          },
          '100%': {
            'background-position': '0% 0%',
          }
        },
        'gradient-shift-reverse': {
          '0%': {
            'background-position': '100% 100%',
          },
          '50%': {
            'background-position': '0% 0%',
          },
          '100%': {
            'background-position': '100% 100%',
          }
        },
        'float': {
          '0%, 100%': {
            transform: 'translateY(0) translateX(0) rotate(0deg)',
          },
          '25%': {
            transform: 'translateY(-30px) translateX(15px) rotate(5deg)',
          },
          '50%': {
            transform: 'translateY(0) translateX(30px) rotate(0deg)',
          },
          '75%': {
            transform: 'translateY(30px) translateX(15px) rotate(-5deg)',
          },
        }
      },
    },
  },
  plugins: [],
} 