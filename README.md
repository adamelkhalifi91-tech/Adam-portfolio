# Adam El Khalifi — Portfolio

Personal portfolio and tools hub for Adam El Khalifi Tagzouti, a biotechnologist
with a hybrid wet-lab / computational (Tech-Bio) profile. The site fuses a CV
with a hub of interactive scientific tools — including the Biomatch platform and
the open-source Tech-Bio suite.

Four routes: `/` (landing), `/cv`, `/tools`, `/about`. Light-only, brutalist
minimalism with a locked palette and Geist typography.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS v4 (CSS-first `@theme` config in `app/globals.css`)
- `geist` for typography (Geist Sans + Geist Mono)
- `lucide-react` for iconography
- `clsx` + `tailwind-merge` (`cn` helper)

No UI libraries, no state/fetching/animation libraries, no tests. Server
Components by default.

## Commands

```bash
npm run dev     # start the dev server (http://localhost:3000)
npm run build   # production build
npm run start   # serve the production build
```

## License

MIT.

## Authorship

Built and designed by Adam El Khalifi Tagzouti, 2026.
