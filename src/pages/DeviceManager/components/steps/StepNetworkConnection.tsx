import { Check, Wifi, Cable } from "lucide-react";

type ConnectionType = "wifi" | "ethernet" | "";

interface ConnectionOption {
  id: ConnectionType;
  name: string;
  description: string;
  icon: typeof Wifi;
  pros: string[];
  warning: string;
}

const connectionOptions: ConnectionOption[] = [
  {
    id: "wifi",
    name: "WiFi Connection",
    description: "Wireless connection for flexible placement",
    icon: Wifi,
    pros: ["Easy installation", "Flexible positioning"],
    warning: "Requires stable WiFi signal",
  },
  {
    id: "ethernet",
    name: "Ethernet Connection",
    description: "Wired connection for maximum reliability",
    icon: Cable,
    pros: ["Most stable connection", "Better performance"],
    warning: "Requires cable routing",
  },
];

interface StepNetworkConnectionProps {
  selectedConnection: ConnectionType;
  onSelectConnection: (type: ConnectionType) => void;
}

const StepNetworkConnection = ({
  selectedConnection,
  onSelectConnection,
}: StepNetworkConnectionProps) => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold text-white mb-2">
          Network Connection
        </h3>
        <p className="text-sm text-[#6b6b6b]">
          Choose how your sensor will connect to the network
        </p>
      </div>

      {/* Connection Options */}
      <div className="grid grid-cols-2 gap-4">
        {connectionOptions.map((option, index) => {
          const isSelected = selectedConnection === option.id;
          const Icon = option.icon;

          return (
            <button
              key={option.id}
              onClick={() => onSelectConnection(option.id)}
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

              {/* Icon */}
              <div
                className={`
                w-12 h-12 rounded-lg flex items-center justify-center mb-4
               ${index === 0 ? "bg-[#AD46FF1A]" : "bg-[#00C9501A]"}
              `}
              >
                <Icon
                  className={`w-6 h-6 ${
                    index === 0 ? "text-[#C27AFF]" : "text-[#05DF72]"
                  }`}
                />
              </div>

              {/* Connection Info */}
              <h4 className="text-white font-medium mb-1 text-center">
                {option.name}
              </h4>
              <p className="text-sm text-[#6b6b6b] mb-4 text-center">
                {option.description}
              </p>

              {/* Pros */}
              <div className="space-y-2 mt-2">
                {option.pros.map((pro, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#05DF72]" />
                    <span className="text-sm text-[#05DF72]">{pro}</span>
                  </div>
                ))}
                <div className="flex items-center gap-2">
                  <span className="text-amber-500">⚠</span>
                  <span className="text-sm text-amber-500">
                    {option.warning}
                  </span>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default StepNetworkConnection;
export type { ConnectionType };
