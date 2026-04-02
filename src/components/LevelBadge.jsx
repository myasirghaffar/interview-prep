import { levelColors } from '../constants';

export function LevelBadge({ level }) {
  const lv = level || 'mid';
  return (
    <span
      className="ig-level-badge"
      style={{
        '--level': levelColors[lv],
      }}
    >
      {lv === 'mid' ? 'Mid' : 'Senior'}
    </span>
  );
}
