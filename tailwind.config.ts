import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      colors: {
        primary: "#0066FF",
        cyan: "#00D4FF",
        green: "#00F5A0",
        purple: "#8A2BFF",
        magenta: "#FF00E0",
        background: "#0B0B12",
        surface: "#14141F",
        "surface-elevated": "#1C1C28",
        text: "#FFFFFF",
        "text-bright": "#ECECF3",
        muted: "#A6A6BD",
      },
    },
  },
};

export default config;
