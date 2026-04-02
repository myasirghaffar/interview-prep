import { sections } from '../data/sections';

export function SectionFooter({ onSelectSection }) {
  return (
    <footer className="ig-footer-grid">
      {sections.map((s) => (
        <button
          key={s.id}
          type="button"
          className="ig-footer-cell"
          style={{ '--cell': s.color }}
          onClick={() => {
            onSelectSection(s.id);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <div className="ig-footer-cell__emoji" aria-hidden>
            {s.emoji}
          </div>
          <div className="ig-footer-cell__label">{s.label}</div>
          <div className="ig-footer-cell__urdu">{s.labelUrdu}</div>
          <div className="ig-footer-cell__stats">
            <span className="ig-footer-cell__mid">{s.topics.filter((t) => t.level === 'mid').length}M</span>
            {' · '}
            <span className="ig-footer-cell__senior">{s.topics.filter((t) => t.level === 'senior').length}S</span>
            {' · '}
            {s.topics.length} total
          </div>
        </button>
      ))}
    </footer>
  );
}
