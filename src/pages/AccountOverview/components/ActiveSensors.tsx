import { Plus } from "lucide-react";
import WrapBox from "../../components/WrapBox";
import SensorCard from "./SensorCard";

export interface Sensor {
  id: string;
  name: string;
  revenue: string;
  profitMargin: string;
  sensorId: string;
  imageUrl: string;
}

interface ActiveSensorsProps {
  sensors: Sensor[];
  onAddSensor?: () => void;
}

const ActiveSensors = ({ sensors, onAddSensor }: ActiveSensorsProps) => {
  return (
    <WrapBox>
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-lg font-bold text-white">Active sensors</h2>
          <p className="text-[13px] text-[#FFFFFF80]">
            List of your active sensors
          </p>
        </div>
        <button
          onClick={onAddSensor}
          className="flex items-center gap-2 rounded-[8px] bg-[#BDFC45] px-4 py-2 text-sm font-medium text-black hover:bg-[#a3e024] transition-colors"
        >
          <Plus className="w-4 h-4" />
          Add sensor
        </button>
      </div>

      <div className="space-y-4 max-h-[400px] overflow-y-auto">
        {sensors.map((sensor) => (
          <SensorCard key={sensor.id} sensor={sensor} />
        ))}
      </div>
    </WrapBox>
  );
};

export default ActiveSensors;
