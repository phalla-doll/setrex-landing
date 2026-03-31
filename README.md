# Setrex Landing Page

A premium, dark-themed landing page designed for fintech startups, SaaS platforms, and digital agencies. The design focuses on high contrast, modern typography, and immersive visual effects to create a trustworthy yet cutting-edge brand presence.

## Design Characteristics

### 1. Color Palette
- **Base:** Deep black (`#000000`) background combined with pure white text for maximum contrast and a sleek, premium feel.
- **Accent:** A vibrant lime green (`#D4FF3E`) is used sparingly but intentionally for primary call-to-action buttons, active states, badges, and subtle glowing effects. This creates a high-energy, tech-forward vibe.
- **Surfaces:** Dark gray/off-black (`#111111`) with subtle borders (`#222222` or `white/10`) are used for cards and elevated surfaces to create depth without breaking the dark mode aesthetic.

### 2. Typography
- **Font Family:** **Satoshi** (via Fontshare). A modern sans-serif that balances geometric precision with grotesque characteristics.
- **Hierarchy & Styling:**
  - **Headings:** Massive, bold headings (up to `100px` on desktop) with tight letter spacing (`tracking-tight`, `tracking-tighter`) and tight line heights (`leading-[1.1]`, `leading-[0.9]`). This creates an editorial, confident look.
  - **Body Text:** Muted gray (`text-gray-400`) with relaxed line heights (`leading-relaxed`) to ensure readability against the dark background.

### 3. Layout & Structure
- **Bento Box Grids:** Information is organized into distinct, rounded containers (often `rounded-[32px]` or `rounded-[40px]`). This modular "bento" approach keeps complex information digestible and visually structured.
- **Split Layouts:** Alternating between centered, maximum-width content (like the Hero and CTA) and 50/50 split layouts (like the Feature Highlight) to maintain visual rhythm.

### 4. Visual Effects & Texture
- **Glassmorphism:** Navigation bars and floating badges utilize `backdrop-blur` and semi-transparent backgrounds (`bg-white/5`) to create a frosted glass effect.
- **Glows & Ambient Light:** Large, highly blurred radial gradients (`blur-[100px]`, `blur-[120px]`) are placed behind key elements (the hero planet, the popular pricing card, the final CTA) to create an ethereal, atmospheric depth.
- **Image Masking:** The hero section uses a CSS `mask-image` with a linear gradient to smoothly fade the bottom of the planet image into the black background, avoiding harsh edges.

### 5. Micro-Interactions
- **Hover States:** 
  - Partner logos transition from 50% opacity grayscale to full color/opacity on hover.
  - Cards feature a subtle gradient overlay that fades in on hover (`opacity-0 group-hover:opacity-100`).
  - Buttons and images utilize smooth scaling (`hover:scale-105`) to provide tactile feedback.
