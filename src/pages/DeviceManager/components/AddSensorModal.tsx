import { X, ChevronLeft, ChevronRight, Check } from "lucide-react";
import { useState, useEffect, useCallback } from "react";

interface SensorType {
  id: string;
  name: string;
  region: string;
  description: string;
}

const sensorTypes: SensorType[] = [
  {
    id: "adsb",
    name: "JetiVision ADSB",
    region: "Global",
    description:
      "Automatic Dependent Surveillance-Broadcast receiver for aircraft tracking",
  },
  {
    id: "au",
    name: "JetiVision AU",
    region: "Australia",
    description: "Regional sensor optimized for Australian frequencies",
  },
  {
    id: "canada",
    name: "JetiVision Canada",
    region: "Canada",
    description: "Canadian regulatory compliant sensor device",
  },
  {
    id: "eu",
    name: "JetiVision EU",
    region: "Europe",
    description: "European frequency band compliant sensor",
  },
];

interface AddSensorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TOTAL_STEPS = 7;

const AddSensorModal = ({ isOpen, onClose }: AddSensorModalProps) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedSensorType, setSelectedSensorType] = useState<string | null>(
    null
  );
  const [sensorNickname, setSensorNickname] = useState("Sensor_PRG_alpha");

  // Reset state when modal closes
  useEffect(() => {
    if (!isOpen) {
      setCurrentStep(1);
      setSelectedSensorType(null);
      setSensorNickname("Sensor_PRG_alpha");
    }
  }, [isOpen]);

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  const handleOverlayClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.target === e.currentTarget) {
        onClose();
      }
    },
    [onClose]
  );

  const handlePrevious = useCallback(() => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  }, [currentStep]);

  const handleNext = useCallback(() => {
    if (currentStep < TOTAL_STEPS) {
      setCurrentStep((prev) => prev + 1);
    }
  }, [currentStep]);

  if (!isOpen) return null;

  const progressPercentage = (currentStep / TOTAL_STEPS) * 100;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      onClick={handleOverlayClick}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-[800px] max-h-[90vh] mx-4 bg-[#0d0d0d] rounded-2xl border border-[#2a2a2a] shadow-2xl flex flex-col overflow-hidden">
        {/* Header - Fixed */}
        <div className="flex-shrink-0">
          <div className="flex items-start justify-between p-6 pb-4">
            <div>
              <h2 className="text-2xl font-semibold text-white">
                Add New Sensor
              </h2>
              <p className="text-sm text-[#6b6b6b] mt-1">
                Step {currentStep} of {TOTAL_STEPS}
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-1 text-[#6b6b6b] hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Progress Bar - Fixed */}
          <div className="px-6 pb-4">
            <div className="h-1 bg-[#1a1a1a] rounded-full overflow-hidden">
              <div
                className="h-full bg-[#BDFC45] rounded-full transition-all duration-300 ease-out"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>
        </div>

        {/* Content - Scrollable */}
        <div className="flex-1 overflow-y-auto p-6 pt-4">
          {/* Step 1: Select Sensor Type */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Select Sensor Type
                </h3>
                <p className="text-sm text-[#6b6b6b]">
                  Choose the JetiVision sensor model you want to add
                </p>
              </div>

              {/* Sensor Type Grid */}
              <div className="grid grid-cols-2 gap-4">
                {sensorTypes.map((sensor) => {
                  const isSelected = selectedSensorType === sensor.id;
                  return (
                    <button
                      key={sensor.id}
                      onClick={() => setSelectedSensorType(sensor.id)}
                      className={`
                        relative text-left p-5 rounded-xl border transition-all duration-200
                        ${
                          isSelected
                            ? "bg-[#1a2a0d] border-[#BDFC45] shadow-[0_0_20px_rgba(189,252,69,0.1)]"
                            : "bg-[#141414] border-[#2a2a2a] hover:border-[#3a3a3a] hover:bg-[#1a1a1a]"
                        }
                      `}
                    >
                      {/* Check mark for selected */}
                      {isSelected && (
                        <div className="absolute top-4 right-4">
                          <Check className="w-5 h-5 text-[#BDFC45]" />
                        </div>
                      )}

                      {/* Sensor Icon */}
                      <div
                        className={`
                        w-12 h-12 rounded-lg flex items-center justify-center mb-4
                        ${isSelected ? "bg-[#BDFC45]/10" : "bg-[#1f1f1f]"}
                      `}
                      >
                        <SensorIcon
                          className={`w-6 h-6 ${
                            isSelected ? "text-[#BDFC45]" : "text-[#6b6b6b]"
                          }`}
                        />
                      </div>

                      {/* Sensor Info */}
                      <h4 className="text-white font-medium mb-1">
                        {sensor.name}
                      </h4>
                      <span
                        className={`text-sm ${
                          isSelected ? "text-[#BDFC45]" : "text-[#BDFC45]"
                        }`}
                      >
                        {sensor.region}
                      </span>
                      <p className="text-sm text-[#6b6b6b] mt-3 leading-relaxed">
                        {sensor.description}
                      </p>
                    </button>
                  );
                })}
              </div>

              {/* Sensor Nickname Input */}
              <div className="space-y-2 pt-2">
                <label className="block text-white font-medium">
                  Sensor Nickname
                </label>
                <input
                  type="text"
                  value={sensorNickname}
                  onChange={(e) => setSensorNickname(e.target.value)}
                  className="w-full px-4 py-3 bg-[#141414] border border-[#2a2a2a] rounded-lg text-white placeholder-[#6b6b6b] focus:outline-none focus:border-[#BDFC45] transition-colors"
                  placeholder="Enter sensor nickname"
                />
                <p className="text-sm text-[#6b6b6b]">
                  Choose a memorable name to identify this sensor
                </p>
              </div>
            </div>
          )}

          {/* Placeholder for other steps */}
          {currentStep > 1 && (
            <div className="flex items-center justify-center h-64">
              <p className="text-[#6b6b6b]">Step {currentStep} content</p>
            </div>
          )}
        </div>

        {/* Footer - Fixed */}
        <div className="flex-shrink-0 flex items-center justify-between p-6 pt-4 border-t border-[#1a1a1a] bg-[#0d0d0d]">
          <button
            onClick={handlePrevious}
            disabled={currentStep === 1}
            className={`
              flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors
              ${
                currentStep === 1
                  ? "text-[#3a3a3a] cursor-not-allowed"
                  : "text-white hover:text-[#BDFC45]"
              }
            `}
          >
            <ChevronLeft className="w-4 h-4" />
            Previous
          </button>

          <button
            onClick={handleNext}
            disabled={currentStep === 1 && !selectedSensorType}
            className={`
              flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-medium transition-all
              ${
                currentStep === 1 && !selectedSensorType
                  ? "bg-[#2a2a2a] text-[#6b6b6b] cursor-not-allowed"
                  : "bg-white text-black hover:bg-[#e5e5e5]"
              }
            `}
          >
            Next
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

// Custom Sensor Icon Component
const SensorIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M4.5 12c0-4.14 3.36-7.5 7.5-7.5s7.5 3.36 7.5 7.5-3.36 7.5-7.5 7.5-7.5-3.36-7.5-7.5" />
    <path d="M12 1v3M12 20v3M1 12h3M20 12h3" />
    <circle cx="12" cy="12" r="1" fill="currentColor" />
  </svg>
);

export default AddSensorModal;
