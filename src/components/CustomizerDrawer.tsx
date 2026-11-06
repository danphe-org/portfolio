import React, { useRef } from 'react';
import { 
  X, 
  Sparkles, 
  Upload, 
  FileEdit, 
  RotateCcw,
  CheckCircle
} from 'lucide-react';

interface CustomizerDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  activePreset: 'template' | 'backend';
  onSelectPreset: (preset: 'template' | 'backend') => void;
  customPhotoUrl: string | null;
  onPhotoSelected: (url: string | null) => void;
}

export const CustomizerDrawer: React.FC<CustomizerDrawerProps> = ({
  isOpen,
  onClose,
  activePreset,
  onSelectPreset,
  customPhotoUrl,
  onPhotoSelected,
}) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  if (!isOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      onPhotoSelected(url);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div 
        className="w-full max-w-md h-full bg-[#111111] border-l border-neutral-800 shadow-2xl flex flex-col justify-between overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="p-6 border-b border-neutral-800/80 bg-[#161616] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-[#e31b23]/10 text-[#e31b23] border border-[#e31b23]/30">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white tracking-wide uppercase">
                Template Controls & Settings
              </h3>
              <p className="text-xs text-neutral-400">
                Switch presets or test with your photo
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
            aria-label="Close customizer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Drawer Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {/* Preset Selector */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-neutral-300 block mb-3">
              Choose Data Preset
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => onSelectPreset('template')}
                className={`p-3.5 rounded-xl border text-left transition-all ${
                  activePreset === 'template'
                    ? 'bg-[#e31b23]/10 border-[#e31b23] text-white shadow-lg'
                    : 'bg-neutral-900 border-neutral-800 text-neutral-400 hover:border-neutral-700'
                }`}
              >
                <div className="text-xs font-bold uppercase tracking-wider text-[#e31b23] mb-1">
                  1. Image Replica
                </div>
                <div className="text-xs font-medium text-white">Rayhan Aditya</div>
                <div className="text-[10px] text-neutral-400 mt-0.5">
                  Matches reference photo exactly
                </div>
              </button>

              <button
                onClick={() => onSelectPreset('backend')}
                className={`p-3.5 rounded-xl border text-left transition-all ${
                  activePreset === 'backend'
                    ? 'bg-[#e31b23]/10 border-[#e31b23] text-white shadow-lg'
                    : 'bg-neutral-900 border-neutral-800 text-neutral-400 hover:border-neutral-700'
                }`}
              >
                <div className="text-xs font-bold uppercase tracking-wider text-[#e31b23] mb-1">
                  2. Backend / Fullstack
                </div>
                <div className="text-xs font-medium text-white">Nishan Rana</div>
                <div className="text-[10px] text-neutral-400 mt-0.5">
                  Microservices, APIs & Cloud
                </div>
              </button>
            </div>
          </div>

          {/* Test Portrait Upload */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-neutral-300 block mb-2">
              Preview Your Portrait Photo
            </label>
            <p className="text-[11px] text-neutral-400 mb-3">
              Upload a transparent cutout or photo to preview instantly in the hero section:
            </p>

            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept="image/*"
              className="hidden"
            />

            <div className="flex gap-2">
              <button
                onClick={() => fileInputRef.current?.click()}
                className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-neutral-900 border border-neutral-700 hover:border-[#e31b23] text-white text-xs font-semibold uppercase tracking-wider transition-all"
              >
                <Upload className="w-3.5 h-3.5 text-[#e31b23]" />
                <span>Upload Test Photo</span>
              </button>

              {customPhotoUrl && (
                <button
                  onClick={() => onPhotoSelected(null)}
                  className="p-3 rounded-xl bg-neutral-900 border border-neutral-700 text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
                  title="Reset to default portrait"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              )}
            </div>

            {customPhotoUrl && (
              <div className="mt-3 flex items-center gap-2 text-xs text-emerald-400">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>Custom photo preview is currently active!</span>
              </div>
            )}
          </div>

          {/* Guide for Later Customization */}
          <div className="p-4 rounded-xl bg-neutral-900/80 border border-neutral-800 space-y-3">
            <div className="flex items-center gap-2 text-white font-bold text-xs uppercase tracking-wide">
              <FileEdit className="w-4 h-4 text-[#e31b23]" />
              <span>How to add your details later:</span>
            </div>

            <ol className="text-xs text-neutral-300 space-y-2.5 pl-4 list-decimal">
              <li>
                <span className="font-semibold text-white">Your Picture:</span> Save your portrait PNG cutout as <code className="text-[#e31b23] bg-neutral-950 px-1.5 py-0.5 rounded">public/profile.png</code>.
              </li>
              <li>
                <span className="font-semibold text-white">Your Text & Projects:</span> Open <code className="text-[#e31b23] bg-neutral-950 px-1.5 py-0.5 rounded">src/data/portfolioData.ts</code> to update your name, bio, education, skills, and projects.
              </li>
              <li>
                <span className="font-semibold text-white">Production Build:</span> Run <code className="text-[#e31b23] bg-neutral-950 px-1.5 py-0.5 rounded">npm run build</code> to export a lightning-fast static website ready for GitHub Pages or Vercel.
              </li>
            </ol>
          </div>
        </div>

        {/* Drawer Footer */}
        <div className="p-5 border-t border-neutral-800/80 bg-[#161616]">
          <button
            onClick={onClose}
            className="w-full py-2.5 rounded-lg bg-[#e31b23] hover:bg-[#c4141b] text-white text-xs font-bold uppercase tracking-wider transition-colors"
          >
            Apply & View Template
          </button>
        </div>
      </div>
    </div>
  );
};
