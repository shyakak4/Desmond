# Next.js 15+ Specifics
Standard training data is outdated. Use Next.js 15 App Router conventions.
# 🎯 ACTIVE SPRINT: Final Hero Precision

## Task 1: Fix Book Swapper Exit Logic
- [ ] **Rewrite Exit Animation:** Change `{ x: 300, rotate: 15, opacity: 0 }` to `{ scale: 0.9, opacity: 0, zIndex: 0 }`.
- [ ] **Containment:** Ensure the `relative` container has `overflow-hidden` if necessary, but ideally, keep the motion subtle so it doesn't need to be hidden.
- [ ] **Auto-cycle:** Maintain the 4s interval but ensure the transition is "seamless" (no white flash).

## Task 2: Equalize Hero Columns
- [ ] **Layout:** In the Hero section (`page.tsx`), wrap the Left Text and Right Swapper in a `grid-cols-2` with `items-center` or `items-stretch`.
- [ ] **Consistency:** Ensure the "A Lifetime of Architectural Impression" headline stays visually level with the top of the book stack.

## Task 3: Title & Award Alignment
- [ ] **Design:** Move the Title and Award text into a clean, non-jumping container. Use `font-bold` Roman Playfair as per `CLAUDE.md`.