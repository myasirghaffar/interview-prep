import { QACard } from './QACard';

export function InterviewContent({
  search,
  filtered,
  currentSection,
  sectionTopics,
}) {
  if (search) {
    return (
      <div className="ig-content">
        <p className="ig-content__results-meta">
          {filtered.length} result{filtered.length !== 1 ? 's' : ''} for &quot;{search}&quot;
        </p>
        {filtered.length === 0 ? (
          <div className="ig-empty">
            <div className="ig-empty__icon" aria-hidden>
              🔍
            </div>
            <p className="ig-empty__title">No matches found</p>
            <p className="ig-empty__urdu">Koi nateeja nahi mila</p>
          </div>
        ) : (
          filtered.map((t, i) => (
            <div key={`${t.section}-${t.q}-${i}`}>
              <p className="ig-content__section-tag" style={{ '--sec': t.color }}>
                {t.section}
              </p>
              <QACard topic={t} color={t.color} index={i} />
            </div>
          ))
        )}
      </div>
    );
  }

  return (
    <div className="ig-content">
      <div className="ig-section-head">
        <div className="ig-section-head__bar" style={{ background: currentSection.color }} />
        <div className="ig-section-head__text">
          <h2 className="ig-section-head__title">
            {currentSection.emoji} {currentSection.label}
          </h2>
          <p className="ig-section-head__urdu">{currentSection.labelUrdu}</p>
        </div>
        <span className="ig-section-head__count" style={{ '--count': currentSection.color }}>
          {sectionTopics?.length} Q
        </span>
      </div>
      {sectionTopics?.length === 0 ? (
        <p className="ig-no-level">No questions for this level. Try &quot;All&quot;.</p>
      ) : (
        sectionTopics?.map((t, i) => <QACard key={i} topic={t} color={currentSection.color} index={i} />)
      )}
    </div>
  );
}
