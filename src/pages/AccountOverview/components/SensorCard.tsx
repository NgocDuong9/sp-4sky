import { Sensor } from "./ActiveSensors";

interface SensorCardProps {
  sensor: Sensor;
}

const SensorCard = ({ sensor }: SensorCardProps) => {
  const { name, imageUrl, revenue, sensorId, profitMargin } = sensor;
  return (
    <div className="flex items-center gap-4 rounded-xl bg-[#0A0F10] shadow-[50px] h-[190px]">
      <div className="h-full w-2/5 rounded-l-lg  overflow-hidden flex items-center justify-center">
        <img
          src={imageUrl}
          alt={name}
          className="h-[190px] w-full object-cover "
        />
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-bold text-white mb-4">{name}</h3>
        <div className="flex flex-col pr-4 gap-y-4 text-sm">
          <div className="flex justify-between">
            <span className="text-[#8B8B8B]">Revenue Generated</span>
            <span className="text-white font-medium">{revenue}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#8B8B8B]">Sensor ID</span>
            <span className="text-white font-medium">{sensorId}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#8B8B8B]">Profit Margin</span>
            <span className="text-[#ffffff] font-medium">{profitMargin}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SensorCard;
