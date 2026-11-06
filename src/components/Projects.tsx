import React, { useState } from 'react';
import { ProjectItem } from '../types/portfolio';
import { ProjectModal } from './ProjectModal';
import { ArrowRight, ArrowUpRight, Terminal, Server, ShieldCheck, Database, Cpu } from 'lucide-react';

interface ProjectsProps {
  projects: ProjectItem[];
}

export const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  // Return custom system icon for each project
  const getProjectIcon = (id: string) => {
    switch (id) {
      case 'event-management':
        return <Server className="w-5 h-5 text-[#e31b23]" />;
      case 'us-legal-platform':
        return <Database className="w-5 h-5 text-[#e31b23]" />;
      case 'danphe-access-control':
        return <ShieldCheck className="w-5 h-5 text-[#e31b23]" />;
      case 'pacesetter-taxation':
        return <Cpu className="w-5 h-5 text-[#e31b23]" />;
      default:
        return <Terminal className="w-5 h-5 text-[#e31b23]" />;
    }
  };

  const getSystemRoute = (id: string) => {
    switch (id) {
      case 'event-management':
        return 'svc://events.api.prod';
      case 'us-legal-platform':
        return 'svc://legal.records.cluster';
      case 'danphe-access-control':
        return 'svc://auth.danphe.gateway';
      case 'pacesetter-taxation':
        return 'svc://tax.queue.pipeline';
      default:
        return 'svc://backend.cluster';
    }
  };

  return (
    <section id="projects" className="w-full py-16 sm:py-20 bg-[#080808]">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 mb-8 sm:mb-12">
          <div>
            <h2 className="text-sm sm:text-base font-extrabold tracking-widest uppercase text-white">
              FEATURED ENGINEERING PROJECTS
            </h2>
            <p className="text-xs text-neutral-400 mt-1">
              Production backends, distributed systems, and security architectures
            </p>
          </div>

          <a
            href="https://github.com/nishan9813"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider uppercase text-neutral-400 hover:text-white transition-colors"
          >
            <span>VIEW GITHUB REPOSITORIES</span>
            <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-[#e31b23] group-hover:translate-x-1 transition-all" />
          </a>
        </div>

        {/* 2-Column Responsive Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer flex flex-col bg-neutral-900/40 rounded-xl p-5 sm:p-6 transition-all duration-300 hover:shadow-2xl hover:shadow-red-950/20"
            >
              {/* Terminal Architecture Header Box */}
              <div className="relative w-full rounded-lg overflow-hidden bg-neutral-950 p-4 transition-colors">
                {/* Traffic dots & status */}
                <div className="flex items-center justify-between pb-3 mb-3 text-[11px] font-mono">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                    <span className="text-neutral-500 ml-2">{getSystemRoute(project.id)}</span>
                  </div>

                  <span className="text-emerald-400 font-semibold flex items-center gap-1 text-[10px] tracking-wider uppercase">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Active</span>
                  </span>
                </div>

                {/* System Specs in Terminal Window */}
                <div className="py-2 space-y-2 font-mono text-xs">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {getProjectIcon(project.id)}
                      <span className="text-white font-bold tracking-wide uppercase">
                        {project.title}
                      </span>
                    </div>
                    <span className="text-[#e31b23] text-[11px] font-bold">
                      {project.number}
                    </span>
                  </div>

                  <p className="text-[11px] text-neutral-400 line-clamp-2 leading-relaxed font-sans pt-1">
                    {project.description}
                  </p>
                </div>

                {/* Metrics pill */}
                {project.metrics && (
                  <div className="mt-3 pt-2.5 flex items-center justify-between text-[11px]">
                    <span className="text-neutral-500 font-mono text-[10px] uppercase tracking-wider">Metrics</span>
                    <span className="text-neutral-200 font-medium font-mono text-[11px] text-[#e31b23]">
                      ✦ {project.metrics}
                    </span>
                  </div>
                )}

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                  <div className="px-4 py-2 rounded-full bg-neutral-900 text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform shadow-xl">
                    <span>View Architecture & Specs</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#e31b23]" />
                  </div>
                </div>
              </div>

              {/* Bottom Info Bar */}
              <div className="flex items-center justify-between mt-4 pt-1">
                <div className="flex flex-col">
                  <span className="text-xs sm:text-sm font-bold text-white tracking-wide uppercase group-hover:text-[#e31b23] transition-colors leading-snug">
                    {project.title}
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-semibold text-neutral-400 tracking-wider uppercase mt-0.5">
                    {project.category}
                  </span>
                </div>

                <div className="text-neutral-500 group-hover:text-white group-hover:translate-x-1.5 transition-all duration-300">
                  <ArrowRight className="w-5 h-5 text-neutral-400 group-hover:text-[#e31b23]" />
                </div>
              </div>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-1.5 mt-3 pt-3">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-900/90 text-neutral-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
