export default function CTA() {
  return (
    <section className="bg-[#0b192c] py-20 text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight mb-3">
          Ready to simplify your forklift inspections?
        </h2>

        <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">
          Start with a structured checklist your team can use consistently.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#checklist"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 text-sm font-bold text-slate-900 bg-white hover:bg-slate-100 rounded-lg shadow-sm transition-colors"
          >
            Get the Checklist
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-white hover:text-blue-300 transition-colors"
          >
            Talk to our team
          </a>
        </div>

      </div>
    </section>
  );
}
