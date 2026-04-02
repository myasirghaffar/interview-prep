export function Tag({ label, accentColor }) {
  return (
    <span
      className="ig-tag"
      style={{
        '--tag-accent': accentColor,
      }}
    >
      {label}
    </span>
  );
}
