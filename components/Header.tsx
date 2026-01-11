
import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="max-w-3xl">
      <div className="w-12 h-1 bg-[#F58220] mb-8" />
      <h1 className="text-4xl md:text-5xl font-light tracking-tight text-neutral-900 mb-6">
        PAM Practice Bureau
      </h1>
      <p className="text-xl md:text-2xl text-neutral-600 font-light leading-relaxed mb-4">
        A professional reference and enquiry platform on architectural practice matters in Malaysia.
      </p>
      <p className="text-sm text-neutral-400 font-medium">
        Responses provided are non-statutory and for general guidance only.
      </p>
    </header>
  );
};
