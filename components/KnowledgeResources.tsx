
import React from 'react';

const resources = [
  'Practice Notes',
  'PAM Practice Bureau (Q&A Archive)',
  'Practice Forum Presentations',
  'Standards & Guidelines',
  'ADR / Related Professional Resources',
];

export const KnowledgeResources: React.FC = () => {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12">
      {resources.map((item, idx) => (
        <li key={idx} className="border-b border-neutral-100 last:border-0 md:last:border-b py-3">
          <a
            href="#"
            className="flex items-center justify-between group py-1"
          >
            <span className="text-neutral-700 text-sm group-hover:text-[#F58220] transition-colors">
              {item}
            </span>
            <svg
              className="w-4 h-4 text-neutral-300 group-hover:text-[#F58220] transform group-hover:translate-x-1 transition-all"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </li>
      ))}
    </ul>
  );
};
