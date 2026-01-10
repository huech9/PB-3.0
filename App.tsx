
import React from 'react';
import { Header } from './components/Header';
import { PrimaryActions } from './components/PrimaryActions';
import { SubmissionTypes } from './components/SubmissionTypes';
import { KnowledgeResources } from './components/KnowledgeResources';
import { SearchSection } from './components/SearchSection';
import { QAArchive } from './components/QAArchive';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Editorial Container */}
      <main className="flex-grow max-w-6xl mx-auto px-6 md:px-12 py-16 md:py-24 space-y-20">
        <Header />
        
        <section className="space-y-6">
          <PrimaryActions />
        </section>

        <section className="space-y-12">
          <div className="border-t border-neutral-200 pt-12">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-neutral-400 mb-8">
              Submission Portals
            </h2>
            <SubmissionTypes />
          </div>
        </section>

        <section className="space-y-12 border-t border-neutral-200 pt-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div className="max-w-xl">
              <h2 className="text-sm font-semibold uppercase tracking-widest text-neutral-400 mb-4">
                Practice Q&A Archive
              </h2>
              <p className="text-neutral-500 text-sm">
                Browse recent enquiries and professional guidance issued by the Practice Bureau.
              </p>
            </div>
            <div className="w-full md:w-80">
              <SearchSection />
            </div>
          </div>
          <QAArchive />
        </section>

        <section className="border-t border-neutral-200 pt-12">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-neutral-400 mb-8">
            Resources & Documentation
          </h2>
          <KnowledgeResources />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
