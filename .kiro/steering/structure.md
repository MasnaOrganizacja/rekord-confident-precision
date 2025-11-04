# Project Structure

## Directory Organization

```
src/
├── components/
│   ├── sections/      # Page section components (Hero, Navbar, FAQ, etc.)
│   ├── ui/            # shadcn/ui components (Button, Card, Dialog, etc.)
│   └── ScrollToTop.tsx
├── hooks/             # Custom React hooks
├── lib/               # Utility functions and helpers
├── pages/             # Route components
│   ├── Index.tsx      # Home page
│   ├── RekordERP.tsx  # Rekord.ERP product page
│   ├── Ratusz.tsx     # RATUSZ product page
│   ├── Blog.tsx       # Blog listing
│   └── NotFound.tsx   # 404 page
├── App.tsx            # Main app component with routing
├── main.tsx           # Application entry point
├── index.css          # Global styles
└── vite-env.d.ts      # Vite type definitions
```

## Component Architecture

### Pages
- Full-page route components in `src/pages/`
- Each page imports and composes section components
- Pages handle routing and high-level layout

### Sections
- Reusable page sections in `src/components/sections/`
- Examples: Navbar, Hero, FAQ, Testimonials, OurTeam
- Self-contained with their own logic and styling
- Can be composed into different pages

### UI Components
- shadcn/ui components in `src/components/ui/`
- Radix UI primitives with Tailwind styling
- Reusable, accessible, and customizable
- Follow shadcn/ui conventions

## Routing

- Client-side routing with React Router DOM
- Routes defined in `App.tsx`
- Custom routes must be added ABOVE the catch-all "*" route
- ScrollToTop component ensures page scrolls to top on navigation

## Styling Conventions

- Tailwind CSS utility classes
- Custom theme colors defined in `tailwind.config.ts`:
  - `deep-navy`, `electric-cyan`, `warm-white`, `near-black`, `luxury-forest-green`
- Custom animations: fade-in, slide-in-left, scale-in, float, infinite-scroll
- Font families: Rubik (primary), Space Grotesk (secondary)

## Animation Patterns

- GSAP for complex animations and scroll-triggered effects
- Lenis for smooth scrolling
- ScrollTrigger for scroll-based animations
- Tailwind animate utilities for simple transitions

## State Management

- React Query for server state and data fetching
- Local component state with useState
- No global state management library (Redux, Zustand, etc.)

## Import Conventions

- Use `@/` alias for imports from `src/`
- Example: `import { Button } from "@/components/ui/button"`
- Prefer named exports over default exports for components

## File Naming

- React components: PascalCase (e.g., `Navbar.tsx`, `Hero.tsx`)
- Utilities and hooks: camelCase (e.g., `useToast.ts`)
- Config files: kebab-case (e.g., `vite.config.ts`)

## Code Organization Best Practices

- Keep components focused and single-purpose
- Extract reusable logic into custom hooks
- Use composition over prop drilling
- Colocate related files (component + styles + tests)
- Section components should be self-contained with minimal dependencies
