import { generateTailwindConfig } from "dappkit/src/utils/tailwind";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./{app,dappkit}/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}",
    "!./**/node_modules/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: generateTailwindConfig(),
  plugins: [],
} satisfies Config;
