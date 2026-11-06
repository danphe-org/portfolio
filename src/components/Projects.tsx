import React, { useState } from 'react';
import { ProjectItem } from '../types/portfolio';
import { ProjectModal } from './ProjectModal';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

interface ProjectsProps {
  projects: ProjectItem[];
}

export const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section id="projects" className="w-full py-16 sm:py-20 border-b border-white/5 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center justify-between pb-8 border-b border-white/10 mb-8 sm:mb-12">
          <h2 className="text-sm sm:text-base font-extrabold tracking-widest uppercase text-white">
            SELECTED PROJECTS
          </h2>

          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider uppercase text-neutral-400 hover:text-white transition-colors"
          >
            <span>VIEW ALL PROJECTS</span>
            <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-[#e31b23] group-hover:translate-x-1 transition-all" />
          </a>
        </div>

        {/* 3-Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer flex flex-col transition-all duration-300"
            >
              {/* Project Image Frame */}
              <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-neutral-900 border border-neutral-800/80 group-hover:border-neutral-600 transition-colors">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center filter grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                />

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="px-3.5 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-[#e31b23] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <span>View Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#e31b23]" />
                  </div>
                </div>
              </div>

              {/* Bottom Info Bar matching reference image */}
              <div className="flex items-center justify-between mt-3.5 pt-2">
                <div className="flex items-start gap-3">
                  {/* Red Number: 01, 02, 03 */}
                  <span className="font-display text-xl sm:text-2xl font-bold text-[#e31b23] leading-none">
                    {project.number}
                  </span>

                  {/* Title & Category */}
                  <div className="flex flex-col">
                    <span className="text-xs sm:text-sm font-bold text-white tracking-wide uppercase group-hover:text-[#e31b23] transition-colors leading-snug">
                      {project.title}
                    </span>
                    <span className="text-[10px] sm:text-[11px] font-semibold text-neutral-400 tracking-wider uppercase mt-0.5">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Right arrow */}
                <div className="text-neutral-500 group-hover:text-white group-hover:translate-x-1.5 transition-all duration-300">
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-neutral-400 group-hover:text-[#e31b23]" />
                </div>
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
