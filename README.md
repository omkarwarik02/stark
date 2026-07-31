<p align="center">
  <img src="./public/images/logo.png" alt="stark logo" width="80" />
</p>

<h1 align="center">@omkarwarik1204/stark</h1>

<p align="center"><b><a href="https://stark-projects.vercel.app">🔗 Live Showcase</a></b></p>

[![npm version](https://img.shields.io/npm/v/@omkarwarik1204/stark?color=black&label=npm)](https://www.npmjs.com/package/@omkarwarik1204/stark)
[![npm downloads](https://img.shields.io/npm/dt/@omkarwarik1204/stark?color=black)](https://www.npmjs.com/package/@omkarwarik1204/stark)
[![license](https://img.shields.io/badge/license-MIT-black)](https://github.com/omkarwarik02/stark/blob/main/LICENSE)

A minimal collection of polished, animated React components — built with TypeScript and Tailwind CSS, shipped with full type declarations and zero runtime dependencies beyond React.

![stark showcase](./public/images/webstark.jpeg)

Currently includes:

- **DynamicIslandNavbar** — a floating, Apple-style navbar that stretches smoothly on hover
- **FAQAccordion** — an accessible, animated accordion for FAQs
- **DropdownMenu** — a customizable dropdown with keyboard support and click-outside detection
- **FileDownloadButton** — a minimal button component for file downloads
- **LikeButton** — an animated like/heart button with count tracking

---

## Installation

```bash
npm install @omkarwarik1204/stark
```

Requires **React 19+** in your project (it's a peer dependency — most React projects already have it).

---

## Quick Start

**1. Install**

```bash
npm install @omkarwarik1204/stark
```

**2. Import the components _and_ the CSS**

```tsx
import {
  DynamicIslandNavbar,
  FAQAccordion,
  DropdownMenu,
  FileDownloadButton,
  LikeButton,
} from "@omkarwarik1204/stark";
import "@omkarwarik1204/stark/style.css";
```

**3. Use them**

```tsx
<DynamicIslandNavbar />
<FAQAccordion />
<DropdownMenu label="Select an option" />
<FileDownloadButton href="/file.pdf" download="file.pdf" />
```

You don't need Tailwind installed in your own project — all styles are bundled into the CSS file above.

---

## DynamicIslandNavbar

A fixed, centered navbar pill that smoothly stretches outward on hover.

```tsx
<DynamicIslandNavbar
  brand="Omkar"
  links={[
    { label: "Home", href: "#home" },
    { label: "Projects", href: "#projects" },
  ]}
  ctaHref="https://github.com/omkarwarik02"
/>
```

### Props

| Prop        | Type                                | Default        | Description                                                                                           |
| ----------- | ------------------------------------ | -------------- | ------------------------------------------------------------------------------------------------------ |
| `brand`     | `string`                            | `"Brand"`      | Text shown on the left of the pill (your name/logo).                                                  |
| `links`     | `{ label: string; href: string }[]` | 4 sample links | The center navigation links.                                                                          |
| `ctaHref`   | `string`                            | `"#"`          | URL for the right-side action item.                                                                   |
| `ctaLabel`  | `React.ReactNode`                   | `</>`          | Content shown on the right (text, icon, etc.).                                                        |
| `className` | `string`                            | `""`           | Extra classes merged onto the pill — use this to override background, text color, or any other style. |

### Custom background / theming

The navbar ships with a dark pill by default. To match it to your own site's background, pass Tailwind (or any CSS) classes via `className` — they're appended after the built-in styles, so they can override them:

```tsx
{
  /* Light navbar */
}
<DynamicIslandNavbar className="bg-white text-black" />;

{
  /* Brand color */
}
<DynamicIslandNavbar className="bg-indigo-600" />;
```

> Note: overriding `bg-*` changes the pill's background, but link/text colors (`text-white/80` etc.) are set on inner elements and won't automatically flip. For a fully custom palette, fork the component or target it with your own CSS selector.

---

## FAQAccordion

An accordion where one item is open at a time, with a smooth height animation and full keyboard/screen-reader accessibility (`aria-expanded`, `aria-controls`).

```tsx
<FAQAccordion
  items={[
    { question: "Do you ship internationally?", answer: "Yes, worldwide." },
    { question: "What is your return policy?", answer: "30-day returns." },
  ]}
/>
```

### Props

| Prop        | Type                                              | Default        | Description                              |
| ----------- | -------------------------------------------------- | -------------- | ----------------------------------------- |
| `items`     | `{ question: string; answer: React.ReactNode }[]` | 3 sample items | The list of question/answer pairs.       |
| `className` | `string`                                          | `""`           | Extra classes merged onto the container. |

### Custom background / theming

```tsx
{
  /* Dark mode FAQ */
}
<FAQAccordion className="bg-gray-900 divide-gray-700" />;
```

> Note: like the navbar, text colors on individual questions/answers (`text-gray-900`, `text-gray-500`) are set internally. `className` covers the container background and divider color; for full color overrides, target the component with your own CSS or fork it.

---

## DropdownMenu

A customizable dropdown with keyboard support, click-outside detection, and smooth animations.

```tsx
<DropdownMenu
  label="Choose something"
  placeholder="Pick one..."
  options={[
    { value: "opt1", label: "Option 1" },
    { value: "opt2", label: "Option 2" },
    { value: "opt3", label: "Option 3" },
  ]}
  handleChange={(value) => console.log("Selected:", value)}
/>
```

### Props

| Prop           | Type                                         | Default              | Description                                |
| -------------- | ---------------------------------------------- | --------------------- | -------------------------------------------- |
| `label`        | `string`                                     | Required             | Label text displayed above the dropdown.   |
| `options`      | `{ value: string\|number; label: string }[]` | 3 sample options     | Array of dropdown options.                 |
| `value`        | `string \| number \| null`                   | `null`               | Initially selected value.                  |
| `placeholder`  | `string`                                     | `"Select an option"` | Placeholder text when nothing is selected. |
| `handleChange` | `(value: string \| number) => void`          | Optional              | Callback fired when an option is selected. |
| `className`    | `string`                                     | `""`                  | Extra classes for custom styling.          |

### Example with custom styling

```tsx
<DropdownMenu
  label="Priority"
  options={[
    { value: "low", label: "Low" },
    { value: "medium", label: "Medium" },
    { value: "high", label: "High" },
  ]}
  handleChange={(value) => setPriority(value)}
  className="w-full"
/>
```

---

## FileDownloadButton

A minimal button component for file downloads with customizable labels and styling.

```tsx
<FileDownloadButton
  href="/sample_text.pdf"
  download="sample_text.pdf"
  label="Download PDF"
/>
```

### Props

| Prop        | Type     | Default           | Description                                  |
| ----------- | -------- | ------------------ | --------------------------------------------- |
| `href`      | `string` | Required          | Path or URL to the file being downloaded.    |
| `download`  | `string` | Required          | Filename that will be used when downloading. |
| `label`     | `string` | `"Download File"` | Text displayed on the button.                |
| `className` | `string` | `""`               | Extra classes for custom styling.            |

### Example with custom styling

```tsx
{
  /* Blue button */
}
<FileDownloadButton
  href="/document.pdf"
  download="my_document.pdf"
  label="Get Document"
  className="bg-blue-600 hover:bg-blue-700"
/>;

{
  /* With icon (using external icon library) */
}
<FileDownloadButton
  href="/report.xlsx"
  download="report.xlsx"
  label="📊 Download Report"
/>;
```

---

## LikeButton

An animated like button with a filled/outline heart icon and live count tracking — fully controlled via props, so you decide the initial state (e.g. from your backend).

```tsx
<LikeButton initialCount={245} initialIsLiked={false} />
```

### Props

| Prop             | Type      | Default  | Description                                                  |
| ----------------- | --------- | -------- | -------------------------------------------------------------- |
| `initialCount`   | `number`  | Required | The starting like count (e.g. fetched from your backend).    |
| `initialIsLiked` | `boolean` | Required | Whether the item is already liked when the component mounts. |

### Example — pre-liked post

```tsx
{
  /* User already liked this post */
}
<LikeButton initialCount={12} initialIsLiked={true} />;

{
  /* Fresh post, never liked */
}
<LikeButton initialCount={0} initialIsLiked={false} />;
```

> Note: `LikeButton` manages its own click/toggle state internally — once mounted, count and liked status update automatically on click. There's no `onChange` callback yet; if you need to sync the like state back to a server, wrap the component or fork it to add one.

---

## Minimal usage (no props)

Components with sensible defaults:

```tsx
<DynamicIslandNavbar />
<FAQAccordion />
<DropdownMenu label="Select" />
<FileDownloadButton href="/file.pdf" download="file.pdf" />
```

> Note: `LikeButton` isn't listed here since both props are required by design — see the [LikeButton](#likebutton) section above for usage.

---

## TypeScript

Types are bundled — full autocomplete and type-checking out of the box, no `@types` package needed.

---

## License

MIT © [Omkar Warik](https://github.com/omkarwarik02)
