import { apiTopics } from './apiTopics';
import { architectureTopics } from './architectureTopics';
import { backendTopics } from './backendTopics';
import { coreReactTopics } from './coreReactTopics';
import { cssTopics } from './cssTopics';
import { gitTopics } from './gitTopics';
import { htmlTopics } from './htmlTopics';
import { javascriptTopics } from './javascriptTopics';
import { performanceTopics } from './performanceTopics';
import { reactNativeTopics } from './reactNativeTopics';
import { realWorldTopics } from './realWorldTopics';

export const sections = [
  {
    id: 'javascript',
    emoji: '🟨',
    label: 'JavaScript',
    labelUrdu: 'Basics se Advanced — 25+ Qs',
    color: '#F7DF1E',
    topics: javascriptTopics,
  },
  {
    id: 'css',
    emoji: '🎨',
    label: 'CSS',
    labelUrdu: 'Styling aur Layout — 25+ Qs',
    color: '#38BDF8',
    topics: cssTopics,
  },
  {
    id: 'html',
    emoji: '🌐',
    label: 'HTML',
    labelUrdu: 'Structure aur Semantics — 25+ Qs',
    color: '#FB923C',
    topics: htmlTopics,
  },
  {
    id: 'core-react',
    emoji: '⚛️',
    label: 'Core React',
    labelUrdu: 'React Core Concepts — 25+ Qs',
    color: '#818CF8',
    topics: coreReactTopics,
  },
  {
    id: 'react-native',
    emoji: '📱',
    label: 'React Native',
    labelUrdu: 'Beginner se 4+ Years — 50+ Qs',
    color: '#FB7185',
    topics: reactNativeTopics,
  },
  {
    id: 'apis',
    emoji: '🔌',
    label: 'API Integration',
    labelUrdu: 'API Integration — 25+ Qs',
    color: '#34D399',
    topics: apiTopics,
  },
  {
    id: 'backend-for-frontend',
    emoji: '🖥️',
    label: 'Backend for FE',
    labelUrdu: 'Frontend ke liye Backend — 25+ Qs',
    color: '#A78BFA',
    topics: backendTopics,
  },
  {
    id: 'performance',
    emoji: '🚀',
    label: 'Performance',
    labelUrdu: 'Performance Optimization — 25+ Qs',
    color: '#FBBF24',
    topics: performanceTopics,
  },
  {
    id: 'architecture',
    emoji: '🏗️',
    label: 'Architecture',
    labelUrdu: 'App Architecture — 25+ Qs',
    color: '#6EE7B7',
    topics: architectureTopics,
  },
  {
    id: 'realworld',
    emoji: '💡',
    label: 'Real-World',
    labelUrdu: 'Amali Tajruba — 25+ Qs',
    color: '#F97316',
    topics: realWorldTopics,
  },
  {
    id: 'git',
    emoji: '🔀',
    label: 'Git',
    labelUrdu: 'Git Workflow — 25+ Qs',
    color: '#F05032',
    topics: gitTopics,
  },
];
