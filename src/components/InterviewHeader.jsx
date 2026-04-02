import { headerCategoryBadges, levelFilterOptions } from '../constants';
import { sections } from '../data/sections';

function computeTotalQuestions() {
  return sections.reduce((acc, s) => acc + s.topics.length, 0);
}

export function InterviewHeader({
  active,
  onActiveChange,
  search,
  onSearchChange,
  levelFilter,
  onLevelFilterChange,
}) {
  const totalQ = computeTotalQuestions();

  return (
    <header className="ig-header">
      <div className="ig-header__inner">
        <div className="ig-header__badges">
          {headerCategoryBadges.map(([lbl, c]) => (
            <span
              key={lbl}
              className="ig-pill"
              style={{ '--pill': c }}
            >
              {lbl}
            </span>
          ))}
          <span className="ig-pill ig-pill--count" style={{ '--pill': '#FBBF24' }}>
            {totalQ} Questions
          </span>
        </div>

        <h1 className="ig-header__title">Frontend Interview Prep Guide</h1>
        <p className="ig-header__subtitle">
          JavaScript · CSS · HTML · React · React Native · API · Backend — with Roman Urdu
          explanations
        </p>

        <div className="ig-header__toolbar">
          <div className="ig-search">
            <span className="ig-search__icon" aria-hidden>
              🔍
            </span>
            <input
              type="search"
              className="ig-search__input"
              value={search}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search questions, topics, tags..."
              aria-label="Search questions"
            />
            {search ? (
              <button
                type="button"
                className="ig-search__clear"
                onClick={() => onSearchChange('')}
                aria-label="Clear search"
              >
                ✕
              </button>
            ) : null}
          </div>
          <div className="ig-levels">
            {levelFilterOptions.map(([val, lbl, c]) => (
              <button
                key={val}
                type="button"
                className={`ig-level-btn ${levelFilter === val ? 'ig-level-btn--active' : ''}`}
                style={{ '--level-btn': c }}
                onClick={() => onLevelFilterChange(val)}
              >
                {lbl}
              </button>
            ))}
          </div>
        </div>

        {!search ? (
          <nav className="ig-tabs" aria-label="Topics">
            {sections.map((s) => (
              <button
                key={s.id}
                type="button"
                className={`ig-tabs__btn ${active === s.id ? 'ig-tabs__btn--active' : ''}`}
                style={{ '--tab': s.color }}
                onClick={() => onActiveChange(s.id)}
              >
                {s.emoji} {s.label}
              </button>
            ))}
          </nav>
        ) : null}
      </div>
    </header>
  );
}
