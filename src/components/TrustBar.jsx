export default function TrustBar() {
  const line1Companies = [
    {
      name: "Apex Logistics",
      icon: (
        <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L1 21h22L12 2zm0 4.5l6.5 11.5H5.5L12 6.5z" />
        </svg>
      ),
    },
    {
      name: "Sterling Manufacturing",
      icon: (
        <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
        </svg>
      ),
    },
    {
      name: "BuildRight Construction",
      icon: (
        <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="currentColor">
          <rect x="3" y="12" width="4" height="9" rx="1" />
          <rect x="10" y="8" width="4" height="13" rx="1" />
          <rect x="17" y="4" width="4" height="17" rx="1" />
        </svg>
      ),
    },
  ];

  const line2Companies = [
    {
      name: "Global Warehousing Solutions",
      icon: (
        <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          <path d="M2 12h20" />
        </svg>
      ),
    },
    {
      name: "Prime Distribution",
      icon: (
        <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M4 4h9a5 5 0 0 1 5 5 5 5 0 0 1-5 5H8v6H4V4zm4 4v3h5a1.5 1.5 0 0 0 0-3H8z" />
        </svg>
      ),
    },
  ];

  const allCompanies = [...line1Companies, ...line2Companies];

  return (
    <section className="py-8 sm:py-12 border-y border-slate-100 bg-white">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <p className="text-center text-xs sm:text-sm font-medium text-slate-500 mb-6 sm:mb-8">
          Trusted by teams that need consistent inspections
        </p>

        {/* Mobile View (393px iPhone 16): Line 1 (3 logos) and Line 2 (2 logos) */}
        <div className="md:hidden space-y-3.5">
          {/* Line 1: Apex Logistics, Sterling Manufacturing, BuildRight Construction */}
          <div className="flex items-center justify-between gap-1 px-1">
            {line1Companies.map((company, index) => (
              <div
                key={index}
                className="flex items-center gap-1 text-slate-700 shrink-0"
              >
                <div className="text-slate-800 shrink-0">
                  {company.icon}
                </div>
                <span className="text-[10px] font-bold tracking-tight text-slate-800 whitespace-nowrap">
                  {company.name}
                </span>
              </div>
            ))}
          </div>

          {/* Line 2: Global Warehousing Solutions, Prime Distribution */}
          <div className="flex items-center justify-center gap-5 px-1">
            {line2Companies.map((company, index) => (
              <div
                key={index}
                className="flex items-center gap-1.5 text-slate-700 shrink-0"
              >
                <div className="text-slate-800 shrink-0">
                  {company.icon}
                </div>
                <span className="text-[10px] font-bold tracking-tight text-slate-800 whitespace-nowrap">
                  {company.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop / Tablet View: All 5 logos in a single row */}
        <div className="hidden md:grid md:grid-cols-5 gap-6 lg:gap-8 items-center justify-items-center">
          {allCompanies.map((company, index) => (
            <div
              key={index}
              className="flex items-center gap-2.5 text-slate-700 hover:text-slate-900 transition-colors"
            >
              <div className="text-slate-800 shrink-0">
                {company.icon}
              </div>
              <span className="text-sm font-bold tracking-tight text-slate-800 whitespace-nowrap">
                {company.name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
