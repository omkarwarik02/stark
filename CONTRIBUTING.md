# Contributing to Stark

Thanks for your interest in contributing to Stark! This guide covers everything you need to get started.

## Prerequisites

- Node.js (LTS recommended)
- npm
- React 19+ (peer dependency — the playground app already has this set up)

## Setup

1. Fork and clone the repo:

```bash
   git clone https://github.com/omkarwarik02/stark.git
   cd stark
```

2. Install dependencies:

```bash
   npm install
```

3. Start the dev playground to preview components:

```bash
   npm run dev
```

## Project structure

Each component lives in its own folder under `src/`:

src/
DropdownMenu/
DropdownMenu.tsx
DynamicIslandNavbar/
DynamicIslandNavbar.tsx
FAQAccordion/
FAQAccordion.tsx
FileDownloadButton/
FileDownloadButton.tsx
index.ts # exports all public components
style.css

If you're adding a new component, follow this same pattern: create a new folder under `src/`, and export it from `src/index.ts`.

## Before submitting a change

Run these to make sure everything's clean:

```bash
npm run lint
npm run build
```

- `lint` runs ESLint across the project — fix any errors it reports.
- `build` runs `tsc -b && vite build` — this must succeed without type errors, since it's what gets published to npm.

There's currently no automated test suite — if you're adding one, feel free to propose it in an issue first.

## Submitting a pull request

1. Create a branch off `main`:

```bash
   git checkout -b feature/your-component-name
```

2. Make your changes, following the existing code style (Tailwind for styling, TypeScript throughout).
3. Run `npm run lint` and `npm run build` to confirm everything passes.
4. Commit with a clear message describing the change.
5. Push your branch and open a PR against `main`.
6. In the PR description, explain what the component/fix does and include a screenshot or short clip if it's a UI change.

## Proposing a new component

Open an issue first describing the component, its use case, and rough API (props) before submitting a PR — this avoids wasted work if the direction needs discussion.

## Style guidelines

- Use Tailwind utility classes for styling (see existing components for patterns)
- Keep components accessible (proper ARIA attributes, keyboard navigation where relevant)
- Export types alongside components so consumers get full TypeScript support
