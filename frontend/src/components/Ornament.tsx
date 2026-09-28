/** Decorative engraving, kept out of the accessibility tree. */
export function Ornament({ className = "" }: { className?: string }) {
  return (
    <div className={`ornament ${className}`} aria-hidden="true">
      <span />
      <svg width="58" height="24" viewBox="0 0 58 24" fill="none">
        <path d="M29 3c-6 4-6 8 0 12 6-4 6-8 0-12Z" />
        <path d="M24 17C14 18 11 10 5 12c3 7 9 10 19 5Zm10 0c10 1 13-7 19-5-3 7-9 10-19 5Z" />
        <path d="M19 22c5-4 15-4 20 0M29 16v6" />
        <circle cx="29" cy="22" r="1" fill="currentColor" stroke="none" />
      </svg>
      <span />
    </div>
  );
}
