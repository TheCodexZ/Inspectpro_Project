import { Info } from "lucide-react";

export default function AboutChecklist() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-8">
          What is a Forklift Inspection Checklist?
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Explanatory text */}
          <div className="lg:col-span-7 space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            <p>
              A Forklift Inspection Checklist helps teams perform consistent safety checks and pre-operational evaluations to ensure equipment safety and workplace compliance.
            </p>
            <p>
              Forklift inspection routines reduce costly mechanical breakdowns, identify small defects before they escalate, and restore safety and compliance to standard operating requirements.
            </p>
          </div>

          {/* Right Column: Highlighted information callout box */}
          <div className="lg:col-span-5">
            <div className="bg-[#edf5fd] border border-blue-100 rounded-xl p-5 flex items-start gap-3.5 shadow-sm">
              <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0 mt-0.5">
                <Info className="w-3.5 h-3.5" />
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-normal">
                Key inspections are essential since being compliant with daily safety standards is central to meeting{" "}
                <span className="font-bold text-slate-900">regulatory requirements</span>.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
