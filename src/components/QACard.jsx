import { useState } from 'react';
import { langToggleOptions } from '../constants';
import { LevelBadge } from './LevelBadge';
import { Tag } from './Tag';

export function QACard({ topic, color, index }) {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState('both');

  return (
    <article
      className={`ig-qa-card ${open ? 'ig-qa-card--open' : ''}`}
      style={{ '--accent': color }}
      onClick={() => setOpen((o) => !o)}
    >
      <div className="ig-qa-card__row">
        <span className="ig-qa-card__index">{String(index + 1).padStart(2, '0')}</span>
        <div className="ig-qa-card__main">
          <div className="ig-qa-card__head">
            <div className="ig-qa-card__titles">
              <p className="ig-qa-card__q">{topic.q}</p>
              <p className="ig-qa-card__q-urdu">{topic.qUrdu}</p>
            </div>
            <LevelBadge level={topic.level || 'mid'} />
          </div>
          {open && (
            <div
              className="ig-qa-card__body"
              onClick={(e) => e.stopPropagation()}
              role="presentation"
            >
              <div className="ig-qa-card__lang-row">
                {langToggleOptions.map(([val, lbl]) => (
                  <button
                    key={val}
                    type="button"
                    className={`ig-lang-btn ${lang === val ? 'ig-lang-btn--active' : ''}`}
                    onClick={() => setLang(val)}
                  >
                    {lbl}
                  </button>
                ))}
              </div>
              <div className="ig-qa-card__answer-block">
                {(lang === 'en' || lang === 'both') && (
                  <p className="ig-qa-card__answer-en">{topic.a}</p>
                )}
                {lang === 'both' && <div className="ig-qa-card__divider" />}
                {(lang === 'ur' || lang === 'both') && (
                  <div className="ig-qa-card__urdu-box">
                    <span className="ig-qa-card__urdu-label">Roman Urdu Explanation</span>
                    <p className="ig-qa-card__answer-ur">{topic.aUrdu}</p>
                  </div>
                )}
              </div>
              <div className="ig-qa-card__tags">
                {topic.tags.map((t) => (
                  <Tag key={t} label={t} accentColor={color} />
                ))}
              </div>
            </div>
          )}
        </div>
        <span className={`ig-qa-card__chevron ${open ? 'ig-qa-card__chevron--open' : ''}`} aria-hidden>
          ›
        </span>
      </div>
    </article>
  );
}
