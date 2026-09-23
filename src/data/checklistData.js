// Reusable data for the InspectPro landing page
// Kept in simple JavaScript objects and arrays so they are easy to explain in an interview.

export const initialChecklistItems = [
  {
    id: 1,
    title: "Forks and mast",
    description: "Check forks for cracks, bends, and surface wear. Inspect mast chains and rollers.",
    status: "pass", // 'pass', 'fail', 'na', or null
    note: "",
    hasWarning: false,
    warningText: "",
  },
  {
    id: 2,
    title: "Tires and wheels",
    description: "Check tires for excessive wear, missing chunks, and ensure wheel lug nuts are secure.",
    status: "pass",
    note: "",
    hasWarning: false,
    warningText: "",
  },
  {
    id: 3,
    title: "Brakes",
    description: "Test service brakes, parking brake, and seat switch for positive stopping power.",
    status: "pass",
    note: "Pedal has slight travel, scheduled check",
    hasWarning: true,
    warningText: "Need need maintenance",
  },
  {
    id: 4,
    title: "Steering",
    description: "Ensure smooth operation from lock to lock without excessive play or binding.",
    status: "pass",
    note: "",
    hasWarning: false,
    warningText: "",
  },
  {
    id: 5,
    title: "Warning devices",
    description: "Verify horn, backup alarm, flashing beacon, and safety directional signals are working.",
    status: "fail",
    note: "Horn volume is muffled",
    hasWarning: true,
    warningText: "Need a maintenance",
  },
  {
    id: 6,
    title: "Lights",
    description: "Check headlights, tail lights, and reverse indicator lamps for full illumination.",
    status: "pass",
    note: "",
    hasWarning: false,
    warningText: "",
  },
];

export const trustedCompanies = [
  {
    name: "Apex Logistics",
    symbol: "apex",
  },
  {
    name: "Sterling Manufacturing",
    symbol: "sterling",
  },
  {
    name: "BuildRight Construction",
    symbol: "buildright",
  },
  {
    name: "Global Warehousing Solutions",
    symbol: "global",
  },
  {
    name: "Prime Distribution",
    symbol: "prime",
  },
];

export const features = [
  {
    id: 1,
    title: "Standardize inspections",
    description: "Standardize inspection workflows across all facilities, shifts, operators, and equipment.",
    iconName: "clipboard-list",
  },
  {
    id: 2,
    title: "Identify issues early",
    description: "Identify issues early for proactive repairs before minor damage causes costly downtime.",
    iconName: "alert-triangle",
  },
  {
    id: 3,
    title: "Keep inspection records organized",
    description: "Keep complete inspection records organized, time-stamped, and ready for safety audits.",
    iconName: "file-text",
  },
  {
    id: 4,
    title: "Give teams a simple process to follow",
    description: "Give teams a simple step-by-step process that operators can complete in minutes.",
    iconName: "layers",
  },
];

export const howItWorksSteps = [
  {
    stepNumber: "01",
    title: "Choose your checklist",
    description: "Select the checklist tailored for your specific forklift type and facility requirements.",
    iconName: "file-check",
  },
  {
    stepNumber: "02",
    title: "Complete the inspection",
    description: "Conduct the pre-operation walk-around, verify key components, and tap Pass or Fail.",
    iconName: "search-check",
  },
  {
    stepNumber: "03",
    title: "Record and act on findings",
    description: "Instantly record inspection logs and automatically notify maintenance when issues arise.",
    iconName: "clipboard-pen",
  },
];

export const industries = [
  {
    id: 1,
    title: "Warehouse operations",
    description: "Ensure fast-paced forklift fleets operate safely across distribution centers and loading docks.",
    iconName: "warehouse",
  },
  {
    id: 2,
    title: "Construction sites",
    description: "Keep rough-terrain forklifts compliant and job-site operators protected in tough conditions.",
    iconName: "hard-hat",
  },
  {
    id: 3,
    title: "Manufacturing facilities",
    description: "Prevent factory floor disruptions with regular pre-shift equipment safety checks.",
    iconName: "factory",
  },
];

export const faqList = [
  {
    question: "What should be checked during a forklift inspection?",
    answer: "A complete inspection includes checking the forks, mast, lift chains, tires, wheels, service and parking brakes, steering responsiveness, warning devices (horn, reverse alarm), safety lights, seatbelt, and hydraulic fluid levels.",
  },
  {
    question: "How often should a forklift be inspected?",
    answer: "According to OSHA standard 29 CFR 1910.178, forklifts must be inspected at least daily before being placed in service. If the forklift is used on a round-the-clock basis, it must be inspected prior to each shift.",
  },
  {
    question: "Can this checklist be used for daily inspections?",
    answer: "Yes, this checklist is specifically engineered for daily pre-shift inspections, ensuring operators systematically inspect all critical mechanical and electrical safety items.",
  },
  {
    question: "What should I do if I find a defect?",
    answer: "If any defect, leak, or safety hazard is identified, the forklift should be immediately tagged out of service, keys removed, and reported to the shift supervisor or maintenance department.",
  },
  {
    question: "Can I customize the checklist?",
    answer: "Yes! InspectPro allows you to customize checklist items to match your facility's specific forklift models (electric, propane, diesel), attachments, and site safety protocols.",
  },
];
