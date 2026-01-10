
import React from 'react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-100 border-t border-neutral-200 mt-20">
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <div className="text-[#F58220] font-bold text-sm tracking-widest uppercase">
              PAM Practice Bureau
            </div>
            <p className="text-xs text-neutral-500 font-medium leading-relaxed max-w-md">
              The PAM Practice Bureau is an advisory platform of the Pertubuhan Akitek Malaysia (PAM). 
              Our mission is to provide support for architectural practitioners and the public on matters 
              concerning professional practice.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400">
              Legal Disclaimer
            </h4>
            <div className="text-[11px] leading-relaxed text-neutral-400 space-y-3">
              <p>
                The PAM Practice Bureau is not a statutory authority. Our guidance is provided on a 
                best-effort basis and does not constitute official legal advice or statutory rulings.
              </p>
              <p>
                Certain professional practice matters, specifically those involving legal disputes, 
                statutory compliance, or professional misconduct, fall under the jurisdiction of the 
                Lembaga Arkitek Malaysia (LAM) or other relevant statutory authorities.
              </p>
              <p>
                Users are advised that the content of this platform does not replace the need for 
                independent professional or legal advice relative to specific circumstances.
              </p>
            </div>
          </div>
        </div>
        <div className="border-t border-neutral-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-[10px] text-neutral-400 uppercase tracking-widest">
            © {currentYear} Pertubuhan Akitek Malaysia. All Rights Reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-[10px] text-neutral-400 uppercase tracking-widest hover:text-neutral-900 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-[10px] text-neutral-400 uppercase tracking-widest hover:text-neutral-900 transition-colors">
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
