import { Check } from "lucide-react";

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

// Custom Sensor Icon Component
const SensorIcon = ({ className }: { className?: string }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.2471 7.76099C17.3701 8.88591 18.0008 10.4105 18.0008 12C18.0008 13.5895 17.3701 15.1141 16.2471 16.239"
      stroke="#BDFC45"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M19.0752 4.93298C20.9481 6.80802 22.0001 9.34981 22.0001 12C22.0001 14.6502 20.9481 17.192 19.0752 19.067"
      stroke="#BDFC45"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M4.92487 19.067C3.05199 17.192 2 14.6502 2 12C2 9.34981 3.05199 6.80802 4.92487 4.93298"
      stroke="#BDFC45"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M7.75275 16.239C6.62975 15.1141 5.99902 13.5895 5.99902 12C5.99902 10.4105 6.62975 8.88591 7.75275 7.76099"
      stroke="#BDFC45"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z"
      stroke="#BDFC45"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

interface StepSelectSensorTypeProps {
  selectedSensorType: string | null;
  onSelectSensorType: (id: string) => void;
  sensorNickname: string;
  onNicknameChange: (nickname: string) => void;
}

const StepSelectSensorType = ({
  selectedSensorType,
  onSelectSensorType,
  sensorNickname,
  onNicknameChange,
}: StepSelectSensorTypeProps) => {
  return (
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
              onClick={() => onSelectSensorType(sensor.id)}
              className={`
                relative text-left p-5 rounded-xl border-2 transition-all duration-200
                ${
                  isSelected
                    ? "bg-[#BDFC451A] border-[#BDFC45] shadow-[0_0_20px_rgba(189,252,69,0.1)]"
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
              <div className="flex gap-4 items-center">
                <div
                  className={`
                  w-12 h-12 rounded-lg flex items-center justify-center 
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
                <div className="">
                  <h4 className="text-white font-medium ">{sensor.name}</h4>
                  <span
                    className={`text-sm ${
                      isSelected ? "text-[#BDFC45]" : "text-[#BDFC45]"
                    }`}
                  >
                    {sensor.region}
                  </span>
                </div>
              </div>
              <p className="text-sm text-[#6b6b6b] mt-3 leading-relaxed">
                {sensor.description}
              </p>
            </button>
          );
        })}
      </div>

      {/* Sensor Nickname Input */}
      <div className="space-y-2 pt-2">
        <label className="block text-white font-medium">Sensor Nickname</label>
        <input
          type="text"
          value={sensorNickname}
          onChange={(e) => onNicknameChange(e.target.value)}
          className="w-full px-4 py-3 bg-[#141414] border border-[#2a2a2a] rounded-lg text-white placeholder-[#6b6b6b] focus:outline-none focus:border-[#BDFC45] transition-colors"
          placeholder="Enter sensor nickname"
        />
        <p className="text-sm text-[#6b6b6b]">
          Choose a memorable name to identify this sensor
        </p>
      </div>
    </div>
  );
};

export default StepSelectSensorType;
