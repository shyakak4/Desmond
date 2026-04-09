# Portfolio Design Language

## Motion: The "Internal Swap"
- **Constraints:** Cards must never exceed their parent container's width.
- **Exit Logic:** To swap, the top card should `opacity: 0` and `scale: 0.8` while the next card scales up to `1`. No large X/Y translations.
- **Alignment:** Use `items-stretch` in the Hero to ensure the Text column (Left) and Image column (Right) maintain equal height regardless of content.

## Typography
- **Title Stability:** Use a minimum height and flex-centering for book titles to prevent "layout shift" during the swap.