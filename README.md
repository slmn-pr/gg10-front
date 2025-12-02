# GG10 Front – React + Vite + Material Design 3 Starter

Foundational React 18 + Vite project prepared for a gaming-styled dashboard that follows Material Design 3 (MD3) guidelines, features reusable UI primitives, routing scaffolding, and provider architecture for theming, fonts, and RTL.

## Tech Stack
- React 18 with Vite bundler
- React Router DOM for routing
- Material UI v6 (MD3) with Emotion + RTL cache
- ESLint + Prettier + alias support (`@/`)

## Getting Started
```bash
npm install
npm run dev
```

### Tooling
- `npm run lint` – run ESLint with Prettier config
- `npm run build` – create production build

## Project Structure
```
src/
  app/
    providers/ (font, RTL, theme)
    router/ (routes + ProtectedRoute)
  assets/ (fonts, icons, images placeholders)
  components/
    layout/ (AppBar, BottomNavigation, Drawer, PageContainer)
    ui/ (MD3 cards, chips, badges, icon buttons, lists, tabs, surfaces, avatar)
  features/
    home/ | user/ | admin/ | auth/ (pages for future expansion)
  lib/
    api/ | utils/ | constants/
  styles/
    global.css | theme.js
```

## Environment
Duplicate `.env.example` → `.env` and update values when backend URLs or RTL defaults change.

## Next Steps
- Flesh out Home dashboard sections using the primitives in `src/components/ui`
- Hook `ProtectedRoute` into real auth state
- Load actual font files into `FontProvider` (currently wired for Fontsource)
- Populate `lib/api` client helpers and constants
