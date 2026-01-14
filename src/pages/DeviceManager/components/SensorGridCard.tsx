interface SensorGridCardProps {
  id: string;
  name: string;
  imageUrl: string;
  revenueGenerated?: string;
  totalEarnings?: string;
  profitMargin?: string;
  profitRatio?: string;
  sensorId?: string;
  deviceId?: string;
}

const SensorGridCard = ({
  name,
  imageUrl,
  revenueGenerated,
  totalEarnings,
  profitMargin,
  profitRatio,
  sensorId,
  deviceId,
}: SensorGridCardProps) => {
  // Determine which fields to show based on what's provided
  const field1Label = revenueGenerated ? "Revenue Generated" : "Total Earnings";
  const field1Value = revenueGenerated || totalEarnings || "-";

  const field2Label = profitMargin ? "Profit Margin" : "Profit Ratio";
  const field2Value = profitMargin || profitRatio || "-";

  const field3Label = sensorId ? "Sensor ID" : "Device ID";
  const field3Value = sensorId || deviceId || "-";

  return (
    <div className="rounded-xl bg-[#0A0F10] overflow-hidden hover:border-[#BDFC45]/30 transition-colors cursor-pointer group backdrop-blur-[50px]">
      {/* Image */}
      <div className="h-[140px] w-full overflow-hidden bg-gradient-to-br from-[#0a0f10] to-[#1a1f20]">
        <img
          src={imageUrl}
          alt={name}
          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-xl font-bold text-white mb-2">{name}</h3>

        <div className="flex flex-col gap-1 text-sm">
          <div className="flex justify-between items-center py-1.5 ">
            <span className="text-[#8B8B8B]">{field1Label}</span>
            <span className="text-white font-medium">{field1Value}</span>
          </div>
          <div className="flex justify-between items-center py-1.5">
            <span className="text-[#8B8B8B]">{field2Label}</span>
            <span className="text-white font-medium">{field2Value}</span>
          </div>
          <div className="flex justify-between items-center py-1.5">
            <span className="text-[#8B8B8B]">{field3Label}</span>
            <span className="text-white font-medium">{field3Value}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SensorGridCard;
