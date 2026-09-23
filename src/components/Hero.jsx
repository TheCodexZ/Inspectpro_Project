"use client";

import { Check, AlertTriangle, MessageSquare } from "lucide-react";

export default function Hero() {
  const previewItems = [
    { name: "Forks and mast", status: "pass", naStyle: "normal" },
    { name: "Tires and wheels", status: "pass", naStyle: "normal" },
    { name: "Brakes", status: "pass", naStyle: "warning" },
    { name: "Steering", status: "pass", naStyle: "normal" },
    { name: "Warning devices", status: "pass", naStyle: "warning" },
    { name: "Lights", status: "pass", naStyle: "normal" },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#edf7f6] via-[#edf7f6] to-[#f5fbfb] pt-10 pb-16 lg:pt-14 lg:pb-24 border-b border-[#e2f0ee]/60">
      
      {/* Background Dark Teal Accent Shape: hidden on mobile, visible on tab & laptop */}
      <div 
        aria-hidden="true" 
        className="hidden md:block absolute top-0 right-0 w-80 lg:w-[480px] h-[340px] lg:h-[420px] bg-[#0c4c5a] rounded-bl-[120px] lg:rounded-bl-[160px] pointer-events-none z-0 shadow-[0_20px_60px_-15px_rgba(12,76,90,0.3)]" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Heading, Subtext & Call-to-actions */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <span className="text-xs font-bold text-slate-500 tracking-wider uppercase mb-3">
              FORKLIFT SAFETY
            </span>

            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.12] mb-5">
              Forklift Inspection <br className="hidden sm:inline" />
              Checklist
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-lg">
              This checklist helps you teams perform consistent inspections and identify issues befoes before their equipment is used.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
              <a
                href="#checklist"
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-[#1a66e5] hover:bg-blue-700 rounded-lg shadow-sm transition-all text-center"
              >
                Get the Checklist
              </a>
              <a
                href="#checklist"
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm sm:text-base font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 rounded-lg shadow-sm transition-all text-center"
              >
                See What&apos;s Included
              </a>
            </div>

            <p className="text-xs sm:text-sm text-slate-500 mt-4 flex items-center gap-2">
              Ready-to-use checklist for daily forklift inspections
            </p>
          </div>

          {/* Right Column: Floating Checklist Mockup Preview with Frosted Glass Blur */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-end mt-4 lg:mt-0">
            
            {/* Soft backdrop blur card wrapper */}
            <div className="relative w-full max-w-md">
              
              {/* Subtle glass reflection glow behind card */}
              <div 
                aria-hidden="true"
                className="absolute -inset-1 bg-white/40 rounded-3xl blur-md pointer-events-none"
              />

              {/* The white checklist card preview with frosted glass backdrop blur */}
              <div className="relative bg-white/92 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/90 p-5 sm:p-6 z-10">
                
                <div className="flex items-center justify-between pb-3.5 border-b border-slate-100">
                  <h2 className="text-sm sm:text-base font-bold text-slate-900">
                    Inspection Checklist
                  </h2>
                </div>

                {/* Rows with ticks 100% straight vertically aligned using CSS Grid */}
                <div className="divide-y divide-slate-100">
                  {previewItems.map((item, index) => (
                    <div 
                      key={index} 
                      className="grid grid-cols-[1fr_26px_52px_20px] items-center gap-2 sm:gap-2.5 py-2.5"
                    >
                      {/* Col 1: Checkbox + Name */}
                      <div className="flex items-center gap-2.5 min-w-0 pr-1">
                        <div className="w-4 h-4 rounded border border-slate-300 shrink-0" />
                        <span className="font-medium text-slate-800 text-xs sm:text-sm truncate">
                          {item.name}
                        </span>
                      </div>

                      {/* Col 2: Tick / Checkmark Circle - PERFECT VERTICAL ALIGNMENT */}
                      <div className="flex items-center justify-center">
                        <span className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-xs">
                          <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                        </span>
                      </div>

                      {/* Col 3: NA / Warning Pill - Fixed column width */}
                      <div className="flex items-center justify-center">
                        {item.naStyle === "warning" ? (
                          <span className="px-1.5 py-0.5 rounded text-[10px] font-semibold bg-amber-50 text-amber-700 border border-amber-200 flex items-center gap-0.5">
                            <AlertTriangle className="w-2.5 h-2.5 text-amber-500 shrink-0" />
                            <span>NA</span>
                          </span>
                        ) : (
                          <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-slate-100 text-slate-600">
                            NA
                          </span>
                        )}
                      </div>

                      {/* Col 4: Note / Message icon */}
                      <div className="flex items-center justify-center text-slate-400">
                        <MessageSquare className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom progress bar & counter */}
                <div className="pt-3.5 mt-1 border-t border-slate-100">
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                    <div className="w-36 sm:w-44 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                      <div className="w-3/5 h-full bg-blue-600 rounded-full" />
                    </div>
                    <span className="text-[11px] text-slate-400 font-medium">6/10 completed</span>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
