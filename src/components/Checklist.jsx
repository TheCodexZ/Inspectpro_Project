"use client";

import { useState } from "react";
import { Check, AlertTriangle, Flag, CheckCircle2, RotateCcw } from "lucide-react";
import { initialChecklistItems } from "@/data/checklistData";

export default function Checklist() {
  // Store the list of inspection items in React state
  const [items, setItems] = useState(initialChecklistItems);

  // Update status for a specific item (pass, fail, or na)
  const handleStatusChange = (id, newStatus) => {
    setItems((prevItems) =>
      prevItems.map((item) => {
        if (item.id === id) {
          // If clicking the currently selected status, toggle it off (set to null)
          // Otherwise set to the newStatus
          const updatedStatus = item.status === newStatus ? null : newStatus;
          return { 
            ...item, 
            status: updatedStatus,
            // Automatically sync checkbox when marked Pass
            isChecked: updatedStatus === "pass" ? true : item.isChecked 
          };
        }
        return item;
      })
    );
  };

  // Toggle item checkbox
  const handleToggleCheck = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) => {
        if (item.id === id) {
          return { ...item, isChecked: !item.isChecked };
        }
        return item;
      })
    );
  };

  // Update note text for an item
  const handleNoteChange = (id, text) => {
    setItems((prevItems) =>
      prevItems.map((item) => {
        if (item.id === id) {
          return { ...item, note: text };
        }
        return item;
      })
    );
  };

  // Reset all to unselected
  const handleReset = () => {
    setItems((prevItems) =>
      prevItems.map((item) => ({ ...item, status: null, isChecked: false, note: "" }))
    );
  };

  // Mark all items as Pass
  const handleMarkAllPass = () => {
    setItems((prevItems) =>
      prevItems.map((item) => ({ ...item, status: "pass", isChecked: true }))
    );
  };

  // Calculate dynamic completion numbers
  // An item is considered completed if it has a status ('pass', 'fail', or 'na')
  const completedCount = items.filter((item) => item.status !== null).length;
  const totalCount = items.length;
  const progressPercent = Math.round((completedCount / totalCount) * 100);

  return (
    <section id="checklist" className="py-16 sm:py-20 bg-[#f8fafc] border-y border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            What&apos;s included in the checklist?
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            Click Pass, Fail, or NA to log inspection results in real time.
          </p>
        </div>

        {/* Dynamic Progress Card */}
        <div className="bg-white rounded-xl p-4 sm:p-5 shadow-sm border border-slate-200 mb-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-semibold text-slate-900">
                Inspection Progress: <span className="text-blue-600 font-bold">{completedCount} of {totalCount} completed</span>
              </div>
              <div className="w-48 sm:w-64 h-2 bg-slate-100 rounded-full mt-1.5 overflow-hidden">
                <div
                  className="h-full bg-blue-600 rounded-full transition-all duration-300"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>
          </div>

          {/* Quick Helper Action Buttons */}
          <div className="flex items-center gap-2 self-end sm:self-center">
            <button
              type="button"
              onClick={handleMarkAllPass}
              className="text-xs font-semibold px-3 py-1.5 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 rounded-md border border-emerald-200 transition-colors"
            >
              Mark All Pass
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="text-xs font-semibold px-3 py-1.5 bg-slate-100 text-slate-600 hover:bg-slate-200 rounded-md flex items-center gap-1 transition-colors"
            >
              <RotateCcw className="w-3 h-3" />
              Reset
            </button>
          </div>
        </div>

        {/* Checklist Rows Container */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 divide-y divide-slate-100 overflow-hidden">
          {items.map((item) => {
            const isPass = item.status === "pass";
            const isFail = item.status === "fail";
            const isNA = item.status === "na";

            return (
              <div
                key={item.id}
                className="p-4 sm:p-5 transition-colors hover:bg-slate-50/40"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start sm:items-center">
                  
                  {/* Left Column: Checkbox, Title & Description (5 cols) */}
                  <div className="lg:col-span-5 flex items-start gap-3">
                    <button
                      type="button"
                      onClick={() => handleToggleCheck(item.id)}
                      className={`w-4 h-4 mt-0.5 rounded border flex items-center justify-center transition-colors shrink-0 ${
                        item.isChecked || isPass
                          ? "bg-blue-600 border-blue-600 text-white"
                          : "border-slate-300 bg-white hover:border-slate-400"
                      }`}
                      aria-label={`Toggle check for ${item.title}`}
                    >
                      {(item.isChecked || isPass) && <Check className="w-3 h-3 stroke-[2.5]" />}
                    </button>

                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Middle Column: Pass / Fail / NA Button Group (3.5 cols) */}
                  <div className="lg:col-span-3 flex items-center gap-1.5 sm:gap-2">
                    {/* Pass Button */}
                    <button
                      type="button"
                      onClick={() => handleStatusChange(item.id, "pass")}
                      className={`flex-1 sm:flex-initial inline-flex items-center justify-center gap-1 px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
                        isPass
                          ? "bg-[#188038] text-white shadow-sm ring-1 ring-emerald-700"
                          : "bg-[#f1f8f3] text-[#137333] hover:bg-[#e4f4e8] border border-[#ceead6]"
                      }`}
                    >
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                      <span>Pass</span>
                    </button>

                    {/* Fail Button */}
                    <button
                      type="button"
                      onClick={() => handleStatusChange(item.id, "fail")}
                      className={`flex-1 sm:flex-initial inline-flex items-center justify-center gap-1 px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
                        isFail
                          ? "bg-[#d9381e] text-white shadow-sm ring-1 ring-red-700"
                          : "bg-[#fef7e0] text-[#b06000] hover:bg-[#feefc3] border border-[#fdd663]"
                      }`}
                    >
                      <AlertTriangle className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                      <span>Fail</span>
                    </button>

                    {/* NA Button */}
                    <button
                      type="button"
                      onClick={() => handleStatusChange(item.id, "na")}
                      className={`flex-1 sm:flex-initial inline-flex items-center justify-center px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
                        isNA
                          ? "bg-slate-700 text-white shadow-sm"
                          : "bg-slate-100 text-slate-600 hover:bg-slate-200 border border-slate-200"
                      }`}
                    >
                      <span>NA</span>
                    </button>
                  </div>

                  {/* Right Column: Note Input & Maintenance Alert (4 cols) */}
                  <div className="lg:col-span-4 flex flex-col gap-1 w-full">
                    <span className="text-[11px] font-medium text-slate-500">
                      {item.id === 5 ? "Note options" : "Note (optional)"}
                    </span>

                    {/* Maintenance Alert Badge */}
                    {item.hasWarning && (
                      <div className="inline-flex items-center gap-1.5 text-[11px] font-medium text-amber-800 bg-amber-50 border border-amber-200 rounded px-2 py-0.5 self-start mb-0.5">
                        <AlertTriangle className="w-3 h-3 text-amber-600 shrink-0" />
                        <span>{item.warningText}</span>
                        <Flag className="w-2.5 h-2.5 text-amber-600 ml-1" />
                      </div>
                    )}

                    <input
                      type="text"
                      value={item.note}
                      onChange={(e) => handleNoteChange(item.id, e.target.value)}
                      placeholder={item.id === 1 ? "Add a open note (optional)" : "Use note here..."}
                      className="w-full text-xs px-2.5 py-1.5 bg-slate-50 border border-slate-200 rounded-md text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:bg-white transition-all"
                    />
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
