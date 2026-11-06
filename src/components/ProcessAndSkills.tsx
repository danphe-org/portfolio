import React from 'react';
import { PortfolioData } from '../types/portfolio';
import { GraduationCap, Code2, Database, Cloud, AppWindow } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProcessAndSkillsProps {
  data: PortfolioData;
}

export const ProcessAndSkills: React.FC<ProcessAndSkillsProps> = ({ data }) => {
  return (
    <section id="skills" className="w-full py-16 sm:py-24 bg-[#080808]">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        
        {/* Section Header with smooth viewport reveal */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between pb-6 mb-10 sm:mb-14"
        >
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-[#e31b23] animate-pulse" />
              <span className="text-xs font-bold tracking-widest uppercase text-[#e31b23]">
                BACKGROUND & EXPERTISE
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-white tracking-tight">
              EDUCATION & SKILLS
            </h2>
          </div>
          <p className="text-xs text-neutral-400 mt-2 sm:mt-0 max-w-sm">
            Academic foundation, production systems training, and core technical proficiencies
          </p>
        </motion.div>

        {/* 2-Column Responsive Layout: Left Education (5 cols), Right Skills (7 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* ============================================================ */}
          {/* COLUMN 1: EDUCATION & TRAINING (5 Cols)                      */}
          {/* ============================================================ */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2 pb-3 text-white font-extrabold tracking-widest text-xs uppercase">
              <GraduationCap className="w-4 h-4 text-[#e31b23]" />
              <span>ACADEMIC & PROFESSIONAL EDUCATION</span>
            </div>

            <div className="space-y-4">
              {data.education.map((edu, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  whileHover={{ y: -4, backgroundColor: "rgba(23, 23, 23, 0.7)" }}
                  className="p-5 sm:p-6 rounded-2xl bg-neutral-900/40 transition-all duration-300 group hover:shadow-xl hover:shadow-red-950/20 cursor-default"
                >
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <span className="font-mono text-xs font-bold text-[#e31b23] px-2.5 py-0.5 rounded-full bg-[#e31b23]/10">
                      {edu.period}
                    </span>
                    {edu.badge && (
                      <span className="text-[10px] font-semibold tracking-wider text-neutral-400 uppercase">
                        {edu.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-neutral-100 transition-colors">
                    {edu.degree}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-400 mt-1">
                    {edu.institution}
                  </p>
                  {edu.description && (
                    <p className="text-xs text-neutral-300 mt-2.5 leading-relaxed font-normal">
                      {edu.description}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* ============================================================ */}
          {/* COLUMN 2: TECHNICAL SKILLS MATRIX (7 Cols)                  */}
          {/* ============================================================ */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 pb-3 text-white font-extrabold tracking-widest text-xs uppercase">
              <Code2 className="w-4 h-4 text-[#e31b23]" />
              <span>TECHNICAL SKILLS & DOMAIN EXPERTISE</span>
            </div>

            {/* Categorized Skills Stack */}
            <div className="space-y-4">
              
              {/* Category 1: Backend Architecture & Core Java */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -2 }}
                className="p-5 sm:p-6 rounded-2xl bg-neutral-900/40 space-y-3.5 transition-all"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#e31b23]" />
                    <span className="text-xs font-bold tracking-wider uppercase text-neutral-200">
                      BACKEND ARCHITECTURE & ENTERPRISE JAVA
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-[#e31b23] font-bold">CORE</span>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {[
                    'JAVA (ADVANCED)',
                    'SPRING BOOT 4',
                    'JAKARTA EE',
                    'REST APIS & OPENAPI',
                    'SPRING SECURITY & JWT',
                    'BUCKET4J RATE LIMITING',
                  ].map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ 
                        scale: 1.08, 
                        y: -2,
                        backgroundColor: "#1c1c1f",
                        color: "#ffffff"
                      }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 450, damping: 20 }}
                      className="px-3 py-1.5 rounded-lg bg-neutral-950 text-neutral-200 text-xs font-semibold uppercase tracking-wide transition-colors shadow-sm cursor-pointer select-none inline-block"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {/* Category 2: Fullstack Web & Modern Frontend */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.08 }}
                whileHover={{ y: -2 }}
                className="p-5 sm:p-6 rounded-2xl bg-neutral-900/40 space-y-3.5 transition-all"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <AppWindow className="w-3.5 h-3.5 text-[#e31b23]" />
                    <span className="text-xs font-bold tracking-wider uppercase text-neutral-200">
                      FULLSTACK WEB & MODERN FRONTEND
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-[#e31b23] font-bold">REACT / NEXT</span>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {[
                    'REACT.JS (TS / JS)',
                    'NEXT.JS (SSR & APP ROUTER)',
                    'TYPESCRIPT',
                    'JAVASCRIPT (ES6+)',
                    'TAILWIND CSS',
                    'STATE MANAGEMENT',
                    'RESPONSIVE UI ARCHITECTURE',
                  ].map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ 
                        scale: 1.08, 
                        y: -2,
                        backgroundColor: "#1c1c1f",
                        color: "#ffffff"
                      }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 450, damping: 20 }}
                      className="px-3 py-1.5 rounded-lg bg-neutral-950 text-neutral-200 text-xs font-semibold uppercase tracking-wide transition-colors shadow-sm cursor-pointer select-none inline-block"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {/* Category 2: Databases & Persistence */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{ y: -2 }}
                className="p-5 sm:p-6 rounded-2xl bg-neutral-900/40 space-y-3.5 transition-all"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Database className="w-3.5 h-3.5 text-[#e31b23]" />
                    <span className="text-xs font-bold tracking-wider uppercase text-neutral-200">
                      DATABASE SYSTEMS & ORM PERSISTENCE
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-[#e31b23] font-bold">SQL / NOSQL</span>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {[
                    'POSTGRESQL',
                    'MYSQL',
                    'MYBATIS',
                    'HIBERNATE',
                    'FLYWAY MIGRATIONS',
                    'MONGODB',
                  ].map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ 
                        scale: 1.08, 
                        y: -2,
                        backgroundColor: "#1c1c1f",
                        color: "#ffffff"
                      }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 450, damping: 20 }}
                      className="px-3 py-1.5 rounded-lg bg-neutral-950 text-neutral-200 text-xs font-semibold uppercase tracking-wide transition-colors shadow-sm cursor-pointer select-none inline-block"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {/* Category 3: Cloud & DevOps */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ y: -2 }}
                className="p-5 sm:p-6 rounded-2xl bg-neutral-900/40 space-y-3.5 transition-all"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Cloud className="w-3.5 h-3.5 text-[#e31b23]" />
                    <span className="text-xs font-bold tracking-wider uppercase text-neutral-200">
                      CONTAINERS, CLOUD & CI/CD AUTOMATION
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-[#e31b23] font-bold">DEVOPS</span>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {[
                    'DOCKER & CONTAINERS',
                    'JENKINS CI/CD',
                    'AWS S3 & CLOUD',
                  ].map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ 
                        scale: 1.08, 
                        y: -2,
                        backgroundColor: "#1c1c1f",
                        color: "#ffffff"
                      }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 450, damping: 20 }}
                      className="px-3 py-1.5 rounded-lg bg-neutral-950 text-neutral-200 text-xs font-semibold uppercase tracking-wide transition-colors shadow-sm cursor-pointer select-none inline-block"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
