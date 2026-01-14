import { Check, X, AlertTriangle, CheckCircle, XCircle } from "lucide-react";

const bestPractices = [
  "Mount at least 2 meters above ground level",
  "Ensure clear line of sight to the sky",
  "Position antenna vertically for best reception",
  "Secure all cable connections firmly",
  "Protect from direct rain and moisture",
];

const avoidThese = [
  "Installing near metal structures or walls",
  "Placing in enclosed spaces or basements",
  "Mounting near power lines or transmitters",
  "Leaving cables exposed to weather",
  "Installing without proper grounding",
];

const StepPhysicalInstallation = () => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold text-white mb-2">
          Physical Installation
        </h3>
        <p className="text-sm text-[#6b6b6b]">
          Follow these guidelines for optimal sensor placement
        </p>
      </div>

      {/* Guidelines Grid */}
      <div className="grid grid-cols-2 gap-4">
        {/* Best Practices */}
        <div className="bg-[#0d1a0d] border border-[#1a3a1a] rounded-xl p-5">
          <div className="flex items-center gap-2 mb-4">
            <CheckCircle className="w-5 h-5 text-green-500" />
            <h4 className="text-white font-semibold">Best Practices</h4>
          </div>
          <div className="space-y-3">
            {bestPractices.map((practice, index) => (
              <div key={index} className="flex items-start gap-3">
                <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-[#9a9a9a]">{practice}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Avoid These */}
        <div className="bg-[#1a0d0d] border border-[#3a1a1a] rounded-xl p-5">
          <div className="flex items-center gap-2 mb-4">
            <XCircle className="w-5 h-5 text-red-500" />
            <h4 className="text-white font-semibold">Avoid These</h4>
          </div>
          <div className="space-y-3">
            {avoidThese.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <X className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-[#9a9a9a]">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Safety Note */}
      <div className="bg-[#BDFC451A] border border-[#BDFC451A] rounded-xl p-4">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-[#BDFC45] flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="text-[#ffffff] font-semibold mb-1">Safety Note</h4>
            <p className="text-sm text-[#BDFC45]/80">
              Always follow local building codes and regulations. Consider
              hiring a professional installer for rooftop or high-altitude
              installations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepPhysicalInstallation;
