
import React from 'react';

export const SearchSection: React.FC = () => {
  return (
    <div className="relative group">
      <input
        type="text"
        placeholder="Search previous practice enquiries by keyword or category"
        className="w-full bg-white border border-neutral-200 p-4 pr-12 text-sm text-neutral-800 placeholder:text-neutral-400 focus:outline-none focus:border-neutral-900 transition-colors"
      />
      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
        <svg
          className="w-5 h-5 text-neutral-400 group-focus-within:text-neutral-900 transition-colors"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
    </div>
  );
};
