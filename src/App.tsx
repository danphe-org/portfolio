import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { ProcessAndSkills } from './components/ProcessAndSkills';
import { ContactFooter } from './components/ContactFooter';
import { CustomizerDrawer } from './components/CustomizerDrawer';
import { templatePreset, backendFullstackPreset } from './data/portfolioData';
import { SlidersHorizontal } from 'lucide-react';

export const App: React.FC = () => {
  const [activePreset, setActivePreset] = useState<'template' | 'backend'>('template');
  const [customPhotoUrl, setCustomPhotoUrl] = useState<string | null>(null);
  const [isCustomizerOpen, setIsCustomizerOpen] = useState(false);

  // Active portfolio data based on selected preset
  const data = activePreset === 'template' ? templatePreset : backendFullstackPreset;

  const handleTogglePreset = () => {
    setActivePreset((prev) => (prev === 'template' ? 'backend' : 'template'));
  };

  return (
    <div className="min-h-screen bg-[#080808] text-white relative selection:bg-[#e31b23] selection:text-white">
      {/* Top Navbar */}
      <Navbar
        data={data}
        activePreset={activePreset}
        onTogglePreset={handleTogglePreset}
        onOpenCustomizer={() => setIsCustomizerOpen(true)}
      />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero
          data={data}
          customPhotoUrl={customPhotoUrl}
          onUploadClick={() => setIsCustomizerOpen(true)}
        />

        {/* Selected Projects */}
        <Projects projects={data.projects} />

        {/* 3-Column Skills, Process & Philosophy */}
        <ProcessAndSkills data={data} />
      </main>

      {/* Contact & Footer */}
      <ContactFooter data={data} />

      {/* Floating Customizer Trigger Widget */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setIsCustomizerOpen(true)}
          className="flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-neutral-900/90 border border-neutral-700 hover:border-[#e31b23] text-white shadow-2xl backdrop-blur-md transition-all hover:scale-105 group"
          title="Customize portfolio & toggle presets"
        >
          <SlidersHorizontal className="w-4 h-4 text-[#e31b23] group-hover:rotate-45 transition-transform" />
          <span className="text-xs font-bold uppercase tracking-wider hidden sm:inline">
            Customize
          </span>
        </button>
      </div>

      {/* Customizer Settings Drawer */}
      <CustomizerDrawer
        isOpen={isCustomizerOpen}
        onClose={() => setIsCustomizerOpen(false)}
        activePreset={activePreset}
        onSelectPreset={(preset) => setActivePreset(preset)}
        customPhotoUrl={customPhotoUrl}
        onPhotoSelected={(url) => setCustomPhotoUrl(url)}
      />
    </div>
  );
};

export default App;
