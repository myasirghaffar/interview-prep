import { useMemo, useState } from 'react';
import { InterviewContent } from './components/InterviewContent';
import { InterviewHeader } from './components/InterviewHeader';
import { SectionFooter } from './components/SectionFooter';
import { sections } from './data/sections';
import './styles/interview-guide.css';

function useFilteredTopics(search, levelFilter) {
  return useMemo(() => {
    if (!search.trim()) return null;
    return sections.flatMap((s) =>
      s.topics
        .filter((t) => levelFilter === 'all' || t.level === levelFilter)
        .filter(
          (t) =>
            t.q.toLowerCase().includes(search.toLowerCase()) ||
            t.qUrdu.toLowerCase().includes(search.toLowerCase()) ||
            t.a.toLowerCase().includes(search.toLowerCase()) ||
            t.aUrdu.toLowerCase().includes(search.toLowerCase()) ||
            t.tags.some((tag) => tag.toLowerCase().includes(search.toLowerCase())),
        )
        .map((t) => ({ ...t, color: s.color, section: s.label })),
    );
  }, [search, levelFilter]);
}

export default function InterviewGuide() {
  const [active, setActive] = useState('javascript');
  const [search, setSearch] = useState('');
  const [levelFilter, setLevelFilter] = useState('all');

  const filtered = useFilteredTopics(search, levelFilter);
  const currentSection = sections.find((s) => s.id === active);
  const sectionTopics = currentSection?.topics.filter(
    (t) => levelFilter === 'all' || t.level === levelFilter,
  );

  return (
    <div className="ig-page">
      <InterviewHeader
        active={active}
        onActiveChange={setActive}
        search={search}
        onSearchChange={setSearch}
        levelFilter={levelFilter}
        onLevelFilterChange={setLevelFilter}
      />

      <main className="ig-main">
        <InterviewContent
          search={search}
          filtered={filtered}
          currentSection={currentSection}
          sectionTopics={sectionTopics}
        />

        <SectionFooter
          onSelectSection={(id) => {
            setActive(id);
            setSearch('');
          }}
        />

        <p className="ig-hint">
          Click any question to expand · Toggle EN / Roman Urdu / Both · Filter by Mid or Senior level
        </p>
      </main>
    </div>
  );
}
