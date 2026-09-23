import { FileCheck, SearchCheck, ClipboardPenLine } from "lucide-react";
import { howItWorksSteps } from "@/data/checklistData";

export default function HowItWorks() {
  const getStepIcon = (name) => {
    switch (name) {
      case "file-check":
        return <FileCheck className="w-6 h-6 text-teal-600" />;
      case "search-check":
        return <SearchCheck className="w-6 h-6 text-teal-600" />;
      case "clipboard-pen":
        return <ClipboardPenLine className="w-6 h-6 text-teal-600" />;
      default:
        return <FileCheck className="w-6 h-6 text-teal-600" />;
    }
  };

  return (
    <section className="py-20 bg-slate-50/80 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            How It Works
          </h2>
        </div>

        {/* 3 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {howItWorksSteps.map((step) => (
            <div key={step.stepNumber} className="flex flex-col items-start">
              
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center mb-6">
                {getStepIcon(step.iconName)}
              </div>

              {/* Step Number Badge */}
              <div className="text-sm font-bold text-slate-800 tracking-wider mb-2">
                {step.stepNumber} —
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
