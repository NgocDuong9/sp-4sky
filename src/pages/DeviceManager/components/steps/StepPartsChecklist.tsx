import { Check } from "lucide-react";

interface PartItem {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
}

const parts: PartItem[] = [
  {
    id: "sensor",
    name: "JetiVision Sensor Unit",
    description: "Main sensor device with antenna",
    imageUrl:
      "https://images.unsplash.com/photo-1606676539940-12768ce0e762?w=400&h=300&fit=crop",
  },
  {
    id: "adapter",
    name: "Power Adapter",
    description: "12V DC power supply with regional plug",
    imageUrl:
      "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=400&h=300&fit=crop",
  },
  {
    id: "cable",
    name: "Ethernet Cable",
    description: "Cat6 cable (if using wired connection)",
    imageUrl:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
  },
];

interface StepPartsChecklistProps {
  hasAllParts: boolean;
  onToggleHasAllParts: () => void;
}

const StepPartsChecklist = ({
  hasAllParts,
  onToggleHasAllParts,
}: StepPartsChecklistProps) => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold text-white mb-2">
          Parts Checklist
        </h3>
        <p className="text-sm text-[#6b6b6b]">
          Please ensure you have all required components before proceeding
        </p>
      </div>

      {/* Confirmation Checkbox */}
      <button
        onClick={onToggleHasAllParts}
        className={`
          w-full p-4 rounded-xl border transition-all duration-200 text-left
          ${
            hasAllParts
              ? "bg-[#1a2a0d] border-[#05DF72]"
              : "bg-[#141414] border-[#2a2a2a] hover:border-[#3a3a3a]"
          }
        `}
      >
        <div className="flex items-start gap-3">
          <div
            className={`
            w-6 h-6 rounded-md border-2 flex items-center justify-center flex-shrink-0 mt-0.5 transition-all
            ${
              hasAllParts
                ? "bg-[#05DF72] border-[#05DF72]"
                : "border-[#4a4a4a] bg-transparent"
            }
          `}
          >
            {hasAllParts && <Check className="w-4 h-4 text-black" />}
          </div>
          <div>
            <p className="text-white font-medium">
              I have all the required parts
            </p>
            <p className="text-sm text-[#05DF72] mt-1">
              Please confirm you have received and verified all components
            </p>
          </div>
        </div>
      </button>

      {/* Parts Grid */}
      <div className="grid grid-cols-3 gap-4">
        {parts.map((part) => (
          <div
            key={part.id}
            className="bg-[#141414] rounded-xl overflow-hidden border border-[#2a2a2a]"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={part.imageUrl}
                alt={part.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h4 className="text-white font-medium text-sm">{part.name}</h4>
              <p className="text-[#6b6b6b] text-xs mt-1">{part.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepPartsChecklist;
