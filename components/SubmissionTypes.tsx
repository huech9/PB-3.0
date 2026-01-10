
import React from 'react';

interface CardProps {
  title: string;
  description: string;
  cta: string;
}

const SubmissionCard: React.FC<CardProps> = ({ title, description, cta }) => (
  <div className="flex flex-col h-full p-8 bg-white border border-neutral-200">
    <h3 className="text-lg font-medium text-neutral-900 mb-4">{title}</h3>
    <p className="text-neutral-500 text-sm leading-relaxed mb-8 flex-grow">
      {description}
    </p>
    <div className="space-y-4">
      <button className="w-full py-3 px-4 border border-neutral-900 text-neutral-900 text-sm font-semibold hover:bg-neutral-900 hover:text-white transition-all duration-200">
        {cta}
      </button>
      <p className="text-[10px] uppercase tracking-wider text-neutral-400 text-center">
        Subject to PAM Practice Bureau review
      </p>
    </div>
  </div>
);

export const SubmissionTypes: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <SubmissionCard
        title="Enquiry by PAM Member"
        description="Practice-related enquiries submitted by PAM members. Requires membership verification."
        cta="Submit Member Enquiry"
      />
      <SubmissionCard
        title="Enquiry by Public / Non-PAM Member"
        description="General enquiries on architectural practice matters. Available to the general public and allied professionals."
        cta="Submit Public Enquiry"
      />
      <SubmissionCard
        title="Reporting of Professional Practice Matters"
        description="Reporting of specific professional practice matters by PAM members for internal tracking and institutional feedback."
        cta="Submit Practice Matter Report"
      />
    </div>
  );
};
