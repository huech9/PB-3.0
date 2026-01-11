
import React from 'react';

interface QAEntry {
  category: string;
  date: string;
  enquirySummary: string;
  responseSummary: string;
}

const qaData: QAEntry[] = [
  {
    category: "Architect's Practice",
    date: "25 March 2025",
    enquirySummary: "Inquiry regarding fraudulent practitioner pretending to be a PAM member.",
    responseSummary: "Clarification that PAM only maintains membership records and does not register Building Draughtsmen (under LAM). Advice to lodge a police report for deception."
  },
  {
    category: "Architect's Practice",
    date: "12 March 2025",
    enquirySummary: "Concerns on professional conduct, registration status, and high fees for minor extensions.",
    responseSummary: "Guidance on verifying registration via LAM. PAM notes its lack of power to intervene in private financial matters or fee disputes."
  },
  {
    category: "Architect's Practice",
    date: "12 March 2025",
    enquirySummary: "Payment for authority submissions vs additional charges for site visits and disbursements.",
    responseSummary: "Architect's duties are based on agreed scope; supplementary services may incur fees. Disbursements (tax, fees) are typically borne by the client."
  },
  {
    category: "Architect's Practice",
    date: "15 January 2025",
    enquirySummary: "Legality of clients imposing performance bonds or retention sums on architects.",
    responseSummary: "No provisions in Architects Act 1967 or Scale of Minimum Fees for such bonds. These are not customary professional norms."
  },
  {
    category: "Building Control",
    date: "21 April 2025",
    enquirySummary: "Accountability of PSP regarding falsified survey plans submitted to authorities in Sabah.",
    responseSummary: "PSPs coordinate submissions and rely on other professionals in good faith. Allegations of falsification should be referred to the relevant professional board (Surveyors Board)."
  },
  {
    category: "Contract Administration",
    date: "05 April 2025",
    enquirySummary: "Avenues for redress when a developer's architect signs off on defect rectification despite unresolved issues.",
    responseSummary: "Rights under SPA Clause 30 (Schedule H) explained. Certification does not override purchaser's right to dispute. Referral to Homebuyer Tribunal (KPKT) suggested."
  },
  {
    category: "Contract Administration",
    date: "03 February 2025",
    enquirySummary: "Requirements for CCC and CPC issuance under PWD Form DB (Rev. 1/2010).",
    responseSummary: "Stipulations for 'Completion of Works' are contained within the Standard Form. Parties should refer to contract documents for specific project conditions."
  }
];

export const QAArchive: React.FC = () => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse border-t border-neutral-100">
        <thead>
          <tr className="bg-neutral-50 border-b border-neutral-100">
            <th className="py-4 px-4 text-[10px] uppercase tracking-widest text-neutral-400 font-bold w-32">Category</th>
            <th className="py-4 px-4 text-[10px] uppercase tracking-widest text-neutral-400 font-bold w-32">Date</th>
            <th className="py-4 px-4 text-[10px] uppercase tracking-widest text-neutral-400 font-bold">Enquiry Summary</th>
            <th className="py-4 px-4 text-[10px] uppercase tracking-widest text-neutral-400 font-bold">Response Overview</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-neutral-100">
          {qaData.map((item, idx) => (
            <tr key={idx} className="group hover:bg-white transition-colors">
              <td className="py-6 px-4 align-top">
                <span className="text-[11px] font-semibold text-neutral-500 whitespace-nowrap">
                  {item.category}
                </span>
              </td>
              <td className="py-6 px-4 align-top">
                <span className="text-xs text-neutral-400 whitespace-nowrap">
                  {item.date}
                </span>
              </td>
              <td className="py-6 px-4 align-top">
                <p className="text-sm text-neutral-800 font-medium leading-relaxed group-hover:text-neutral-900 transition-colors">
                  {item.enquirySummary}
                </p>
              </td>
              <td className="py-6 px-4 align-top border-l border-neutral-50">
                <p className="text-xs text-neutral-500 leading-relaxed max-w-sm italic">
                  {item.responseSummary}
                </p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-8 flex justify-center">
        <button className="text-[11px] uppercase tracking-widest font-bold text-neutral-400 hover:text-[#F58220] transition-colors border-b border-neutral-200 pb-1">
          View Complete Archive
        </button>
      </div>
    </div>
  );
};
