import { useState } from "react";
import { Shield, Cpu, HelpCircle, FileText } from "lucide-react";
import Z6Simulator from "./components/Z6Simulator";
import Z6Compiler from "./components/Z6Compiler";

export default function App() {
  const [activeTab, setActiveTab] = useState<"simulator" | "compiler">("simulator");
  const [showPaperAbstract, setShowPaperAbstract] = useState(false);

  return (
    <div className="min-h-screen bg-[#07080c] flex flex-col selection:bg-[#45f3ff]/30 selection:text-white pb-12">
      {/* Dynamic Header */}
      <header className="border-b border-[#1f2833]/30 bg-[#0c0d12]/80 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col">
            <div className="flex items-center gap-2.5">
              <Shield className="w-6 h-6 text-[#45f3ff]" />
              <h1 className="font-sans font-bold tracking-tight text-xl text-white">
                Z₆ Quantum Lattice Lab
              </h1>
            </div>
            <p className="font-mono text-[10px] text-gray-500 mt-0.5 uppercase tracking-wider">
              A Unified Platform for Finite Parity Transitions
            </p>
          </div>

          {/* Academic References Button */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowPaperAbstract(!showPaperAbstract)}
              className="p-1.5 px-3 rounded border border-[#1f2833]/60 bg-[#11141a]/60 text-gray-400 hover:text-[#45f3ff] hover:border-[#45f3ff]/40 font-mono text-xs flex items-center gap-1.5 transition-all cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              <span>Read Abstract</span>
            </button>
          </div>
        </div>
      </header>

      {/* Abstract Modal/Drawer */}
      {showPaperAbstract && (
        <div className="bg-[#0c0d12]/95 border-b border-[#1f2833]/60 px-4 py-6 transition-all font-sans">
          <div className="max-w-3xl mx-auto relative text-sm leading-relaxed text-[#c5c6c7]">
            <button
              onClick={() => setShowPaperAbstract(false)}
              className="absolute top-0 right-0 text-gray-500 hover:text-white font-mono text-xs border border-gray-800 rounded px-2 py-0.5"
            >
              Close [X]
            </button>
            <h2 className="font-sans font-bold text-white text-lg mb-2">
              The Emergence of Time and Space
            </h2>
            <p className="text-gray-400 font-serif text-sm italic mb-4">
              By Robert Fogeborg, 2026
            </p>
            <div className="bg-[#11141a] border border-[#1f2833]/30 rounded p-4 font-mono text-[11px] leading-relaxed text-gray-400">
              <strong>Abstract:</strong> At its foundation, the framework begins with one bookkeeping identity: a parity transition cannot be completed in zero time. This finite transition lag forces a geometry that separates mutually exclusive states without causal intersection. The earlier formulation derived a six-axis topology, a native discrete angular invariant Π_Z, charge partitioning, generation limits, mass hierarchies, and several dimensionless numerical outputs from that structure. This paper formalizes three core mechanical consequences of the primitive rule. First, transition lag can be read through path length, yielding a strict saturation ratio. Second, the existing graph language imposes a strict turn-budget mechanism, demonstrating that as the available transition budget collapses toward the operational floor, admissible spatial routing drops discretely from 6 to 3 to 1.
            </div>
          </div>
        </div>
      )}

      {/* Main Tab Navigation */}
      <div className="max-w-7xl mx-auto w-full px-4 mt-6">
        <div className="flex bg-[#0c0d12]/90 border border-[#1f2833]/40 p-1.5 rounded-xl gap-2 font-mono text-xs shadow-lg max-w-xs">
          <button
            onClick={() => setActiveTab("simulator")}
            className={`flex-1 py-2 px-3 rounded-lg font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
              activeTab === "simulator"
                ? "bg-[#45f3ff]/15 border border-[#45f3ff]/30 text-[#45f3ff]"
                : "text-gray-400 hover:text-white"
            }`}
          >
            <Shield className="w-3.5 h-3.5" />
            <span>Lattice Sim</span>
          </button>

          <button
            onClick={() => setActiveTab("compiler")}
            className={`flex-1 py-2 px-3 rounded-lg font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
              activeTab === "compiler"
                ? "bg-[#45f3ff]/15 border border-[#45f3ff]/30 text-[#45f3ff]"
                : "text-gray-400 hover:text-white"
            }`}
          >
            <Cpu className="w-3.5 h-3.5" />
            <span>Transpiler</span>
          </button>
        </div>
      </div>

      {/* Main Workspace Frame */}
      <main className="max-w-7xl mx-auto w-full px-4 mt-6 flex-1">
        {activeTab === "simulator" && (
          <div className="h-full">
            <Z6Simulator />
          </div>
        )}
        {activeTab === "compiler" && (
          <div className="h-full">
            <Z6Compiler />
          </div>
        )}
      </main>
    </div>
  );
}
