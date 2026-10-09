import React from 'react';
import { PersonaProvider, usePersona } from './context/PersonaContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { FloatingAIButton } from './components/common/FloatingAIButton';
import { AudioTranscriptBanner } from './components/common/AudioTranscriptBanner';
import { HomeView } from './components/views/HomeView';
import { ProblemExplorerView } from './components/views/ProblemExplorerView';
import { SolutionTransferView } from './components/views/SolutionTransferView';
import { PatternLibraryView } from './components/views/PatternLibraryView';
import { CaseStudyHubView } from './components/views/CaseStudyHubView';
import { DroughtDashboardView } from './components/views/DroughtDashboardView';
import { EvidenceVaultView } from './components/views/EvidenceVaultView';
import { ContributeView } from './components/views/ContributeView';
import { AboutMethodologyView } from './components/views/AboutMethodologyView';
import { AIEngineStudioView } from './components/views/AIEngineStudioView';

const AppContent: React.FC = () => {
  const { activeView } = usePersona();

  return (
    <div className="min-h-screen flex flex-col bg-sky-50/40 text-slate-800 selection:bg-sky-400 selection:text-white relative">
      <Navbar />
      <AudioTranscriptBanner />

      <main className="flex-1 max-w-7xl w-full mx-auto px-3.5 sm:px-6 lg:px-8 pt-5 sm:pt-8">
        {activeView === 'home' && <HomeView />}
        {activeView === 'ai-studio' && <AIEngineStudioView />}
        {activeView === 'explorer' && <ProblemExplorerView />}
        {activeView === 'transfer' && <SolutionTransferView />}
        {activeView === 'patterns' && <PatternLibraryView />}
        {activeView === 'cases' && <CaseStudyHubView />}
        {activeView === 'drought' && <DroughtDashboardView />}
        {activeView === 'vault' && <EvidenceVaultView />}
        {activeView === 'contribute' && <ContributeView />}
        {activeView === 'about' && <AboutMethodologyView />}
      </main>

      {/* Floating AI Action Button - Always Present Across All Views */}
      <FloatingAIButton />

      <Footer />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <PersonaProvider>
      <AppContent />
    </PersonaProvider>
  );
};

export default App;
