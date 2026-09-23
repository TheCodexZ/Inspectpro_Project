import { Warehouse, HardHat, Factory } from "lucide-react";
import { industries } from "@/data/checklistData";

export default function Industries() {
  const getIndustryIcon = (name) => {
    switch (name) {
      case "warehouse":
        return <Warehouse className="w-6 h-6 text-teal-600" />;
      case "hard-hat":
        return <HardHat className="w-6 h-6 text-teal-600" />;
      case "factory":
        return <Factory className="w-6 h-6 text-teal-600" />;
      default:
        return <Warehouse className="w-6 h-6 text-teal-600" />;
    }
  };

  return (
    <section id="industries" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Built for teams that inspect equipment every day
          </h2>
        </div>

        {/* 3 Industry Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {industries.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col items-start"
            >
              {/* Icon Container */}
              <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center mb-5 shrink-0">
                {getIndustryIcon(item.iconName)}
              </div>

              {/* Title */}
              <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
