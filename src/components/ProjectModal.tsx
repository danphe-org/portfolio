import React from 'react';
import { ProjectItem } from '../types/portfolio';
import { X, Github, Layers, Server, CheckCircle2 } from 'lucide-react';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-3xl bg-[#121212] rounded-2xl overflow-hidden shadow-2xl transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#161616]">
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
          {/* Architecture Terminal Card */}
          <div className="rounded-xl overflow-hidden bg-[#0d0d0f] p-5 font-mono">
            {/* Terminal Topbar */}
            <div className="flex items-center justify-between pb-3 text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <span className="text-neutral-400 text-[11px] ml-2">architecture://cluster/specs</span>
              </div>
              <span className="text-emerald-400 text-xs flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Production Ready</span>
              </span>
            </div>

            {/* Terminal Details */}
            <div className="pt-4 space-y-3 text-xs">
              <div className="flex items-start gap-3">
                <span className="text-[#e31b23] font-bold">[ENGINE]</span>
                <span className="text-neutral-200">Java / Spring Boot & Jakarta EE Core Platform</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#e31b23] font-bold">[SECURITY]</span>
                <span className="text-neutral-200">Stateless JWT Authentication & Fine-Grained RBAC</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#e31b23] font-bold">[DEPLOY]</span>
                <span className="text-neutral-200">Dockerized Multi-Stage Container + Jenkins Automated CI/CD</span>
              </div>
              {project.metrics && (
                <div className="flex items-start gap-3 pt-1">
                  <span className="text-emerald-400 font-bold">[METRICS]</span>
                  <span className="text-neutral-100 font-semibold">{project.metrics}</span>
                </div>
              )}
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2 flex items-center gap-2">
              <Server className="w-3.5 h-3.5 text-[#e31b23]" />
              <span>Overview & Architectural Design</span>
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
                  className="px-3 py-1 rounded-md text-xs font-medium font-mono bg-neutral-900 text-neutral-300 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#e31b23] hover:bg-[#c2141b] text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-lg"
              >
                <Github className="w-4 h-4" />
                <span>View Source Code</span>
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
