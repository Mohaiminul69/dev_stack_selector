# Dev Stack

Dev Stack is a website for exploring frontend, backend, database, and tooling
technologies, and putting together a personal "stack" from them. Browse the
technology cards, add the ones you want with a click, and manage your
selections in a live sidebar — with duplicate protection, per-item removal,
and a "Remove All" reset.

## Tech Stack

- **React 19** (with the `use` hook + `Suspense` for data loading)
- **TypeScript**
- **Vite**
- **Tailwind CSS v4**
- **react-toastify** for alerts

## Features

1. **Interactive stack builder** — add any technology to "Your Stack" with one click. The button disables itself once added, a duplicate attempt is blocked with a toast warning, and each stack item can be removed individually or all at once.
2. **JSON-driven technology data** — all 12 technologies are loaded from a local JSON file at runtime via `fetch` + React's `use` hook, wrapped in `Suspense`, instead of being hardcoded into a component.
3. **Single-source gradient theming** — the signature orange-to-pink brand gradient is defined once as CSS variables and reused across the logo, hero heading, and primary buttons, so the whole look can be re-themed by changing one value.

## Getting Started

```bash
npm install
npm run dev
```

## React Q&A

**1. What is JSX, and why is it used in React?**
JSX is a syntax extension that lets us write HTML-like markup directly inside JavaScript/TypeScript files. React uses it because it makes describing what the UI should look like much more readable than calling nested function calls like `createElement` by hand — it reads like the actual markup while still being plain JavaScript under the hood.

**2. What is the difference between props and state?**
Props are data passed **into** a component from its parent — the component receiving them can't change them, only read them (e.g. `technology` and `onAdd` passed into `TechnologyCard`). State is data a component **owns and manages itself**, and can change over time (e.g. the `stack` array in `TechnologiesSection`). Props flow down, state lives locally and triggers a re-render when updated.

**3. What does the `useState` hook do, and where did you use it in this project?**
`useState` lets a component keep a value across re-renders and re-render whenever that value changes. In this project it's used for things like the mobile menu's open/closed state in `Navbar`, and the `stack` array of selected technologies in `TechnologiesSection`.

**4. What does the `useEffect` hook do, and why did you need it to load the JSON data?**
`useEffect` runs side effects (like fetching data, subscriptions, or timers) after a component renders. Originally it was used here to `fetch` the technology JSON once when the component mounted. The project has since moved to React's newer `use` hook combined with `Suspense`, which handles the same "wait for async data" job more directly, but `useEffect` is the classic way to do this and is still the right tool outside of Suspense-based data fetching.

**5. Why does every item in a `.map()` list need a unique `key` prop?**
React uses the `key` to tell list items apart between re-renders, so it knows which DOM elements to update, reuse, or remove instead of re-creating the whole list every time. Without a stable unique key, React can mismatch items, which shows up as janky UI, lost input state, or wrong data on cards. Here, each technology and stack item is keyed by its unique `id`.

**6. What is conditional rendering? Show one place you used it (example: the empty stack message).**
Conditional rendering means showing different UI depending on some condition, instead of always rendering the same thing. In `YourStack.tsx`, the sidebar checks `stack.length === 0` — if true it shows "No technologies selected yet." with an empty-state box, otherwise it renders the actual list of added technologies and a "Remove All" button.

**7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?**
A parent passes data down to a child as props (e.g. `TechnologiesSection` passes `technology` and `isAdded` into `TechnologyCard`). For a child to send something back up, the parent passes a **function** down as a prop, and the child calls that function (usually with some data as an argument) when something happens — e.g. `TechnologyCard` calls the `onAdd(technology)` prop when its button is clicked, and `TechnologiesSection` (which owns the `stack` state) reacts to that call.
