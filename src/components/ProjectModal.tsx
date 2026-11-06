import React from 'react';
import { ProjectItem } from '../types/portfolio';
import { X, ExternalLink, Github, Layers } from 'lucide-react';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-3xl bg-[#121212] border border-neutral-800 rounded-2xl overflow-hidden shadow-2xl transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800/80 bg-[#161616]">
          <div className="flex items-center gap-3">
            <span className="font-display text-2xl text-[#e31b23] font-bold">
              {project.number}
            </span>
            <div>
              <h3 className="text-base font-bold text-white tracking-wide uppercase">
                {project.title}
              </h3>
              <p className="text-xs text-neutral-400 font-medium tracking-wider uppercase">
                {project.category}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal body */}
        <div className="p-6 max-h-[75vh] overflow-y-auto space-y-6">
          {/* Main preview */}
          <div className="relative rounded-xl overflow-hidden border border-neutral-800 bg-[#0a0a0a]">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto max-h-[340px] object-cover object-top"
            />
            {project.metrics && (
              <div className="absolute bottom-3 left-3 px-3 py-1.5 rounded-lg bg-black/85 backdrop-blur-md border border-[#e31b23]/40 text-xs font-semibold text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#e31b23] animate-ping" />
                <span>Impact: {project.metrics}</span>
              </div>
            )}
          </div>

          {/* Description */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">
              Overview & Architecture
            </h4>
            <p className="text-sm text-neutral-300 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Technologies used */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-3 flex items-center gap-2">
              <Layers className="w-3.5 h-3.5 text-[#e31b23]" />
              <span>Tech Stack & Tools</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-md text-xs font-medium bg-neutral-900 border border-neutral-800 text-neutral-300 hover:border-[#e31b23]/50 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-neutral-800/80">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#e31b23] hover:bg-[#c2141b] text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-lg"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-white text-xs font-bold uppercase tracking-wider transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>Source Code</span>
              </a>
            )}
            <button
              onClick={onClose}
              className="ml-auto text-xs text-neutral-400 hover:text-white transition-colors"
            >
              Close Window
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
