import { ClipboardList, AlertTriangle, FileText, Layers } from "lucide-react";
import { features } from "@/data/checklistData";

export default function FeatureCards() {
  // Helper to render the appropriate Lucide icon based on name
  const renderIcon = (name) => {
    switch (name) {
      case "clipboard-list":
        return <ClipboardList className="w-6 h-6 text-teal-600" />;
      case "alert-triangle":
        return <AlertTriangle className="w-6 h-6 text-teal-600" />;
      case "file-text":
        return <FileText className="w-6 h-6 text-teal-600" />;
      case "layers":
        return <Layers className="w-6 h-6 text-teal-600" />;
      default:
        return <ClipboardList className="w-6 h-6 text-teal-600" />;
    }
  };

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Make every forklift inspection consistent
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Ensure operators perform dependable pre-shift evaluations and prevent hazards before equipment is put to work.
          </p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col items-start"
            >
              {/* Rounded Teal Icon Badge */}
              <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center mb-5 shrink-0">
                {renderIcon(feature.iconName)}
              </div>

              {/* Title */}
              <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
