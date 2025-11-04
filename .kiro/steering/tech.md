# Technology Stack

## Build System & Tools

- **Build Tool**: Vite 5.4.19
- **Package Manager**: npm (package-lock.json present, also bun.lockb for compatibility)
- **TypeScript**: 5.8.3 with relaxed compiler options
- **Linting**: ESLint 9.32.0 with TypeScript support

## Frontend Framework

- **React**: 18.3.1 with React DOM
- **Router**: React Router DOM 6.30.1
- **State Management**: TanStack React Query 5.83.0

## UI & Styling

- **Component Library**: shadcn/ui (Radix UI primitives)
- **Styling**: Tailwind CSS 3.4.17 with custom theme
- **CSS Preprocessor**: PostCSS with Autoprefixer
- **Animations**: 
  - GSAP 3.13.0 with ScrollTrigger
  - Lenis 1.0.42 for smooth scrolling
  - Tailwind Animate plugin

## Form Handling

- **Forms**: React Hook Form 7.61.1
- **Validation**: Zod 3.25.76
- **Resolvers**: @hookform/resolvers 3.10.0

## Additional Libraries

- **Icons**: Lucide React 0.462.0
- **Date Handling**: date-fns 3.6.0
- **Theming**: next-themes 0.3.0
- **Notifications**: Sonner 1.7.4
- **Charts**: Recharts 2.15.4
- **3D Graphics**: Three.js 0.180.0
- **Carousels**: Embla Carousel React 8.6.0

## Development Tools

- **Dev Server**: Vite with SWC plugin (@vitejs/plugin-react-swc)
- **Lovable Integration**: lovable-tagger for component tracking
- **TypeScript Config**: Project references with separate app and node configs

## Common Commands

```bash
# Development
npm run dev              # Start dev server on port 8080

# Building
npm run build            # Production build
npm run build:dev        # Development build

# Code Quality
npm run lint             # Run ESLint

# Preview
npm run preview          # Preview production build
```

## Path Aliases

- `@/*` maps to `./src/*` for clean imports

## TypeScript Configuration

- `noImplicitAny`: false
- `noUnusedParameters`: false
- `noUnusedLocals`: false
- `strictNullChecks`: false
- `skipLibCheck`: true
- `allowJs`: true

These relaxed settings prioritize development speed over strict type safety.
