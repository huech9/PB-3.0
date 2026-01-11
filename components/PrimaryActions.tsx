
import React from 'react';

const actions = [
  { label: 'Submit an Enquiry', href: '#' },
  { label: 'Browse Previous Q&A', href: '#' },
  { label: 'Top 10 Frequently Asked Questions', href: '#' },
  { label: 'Practice Resources', href: '#' },
];

export const PrimaryActions: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {actions.map((action, idx) => (
        <a
          key={idx}
          href={action.href}
          className="group block p-6 bg-white border border-neutral-200 hover:border-neutral-400 transition-colors duration-200"
        >
          <span className="text-neutral-800 text-sm font-medium tracking-wide">
            {action.label}
          </span>
          <div className="mt-4 w-0 group-hover:w-full h-px bg-[#F58220] transition-all duration-300" />
        </a>
      ))}
    </div>
  );
};
