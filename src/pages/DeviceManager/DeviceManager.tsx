import { useState } from "react";
import { Search, LayoutGrid, List, Plus } from "lucide-react";
import SensorGridCard from "./components/SensorGridCard";
import AddSensorModal from "./components/AddSensorModal";

interface SensorData {
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

// Mock data
const sensorsData: SensorData[] = [
  {
    id: "1",
    name: "IoT Sensor Alpha",
    imageUrl:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
    revenueGenerated: "$14,582.40",
    profitMargin: "67.3%",
    sensorId: "SNS-5472A",
  },
  {
    id: "2",
    name: "IQ Sensor Beta",
    imageUrl:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
    revenueGenerated: "$12,345.67",
    profitMargin: "72.1%",
    sensorId: "TS-48293",
  },
  {
    id: "3",
    name: "QCSON Sensor",
    imageUrl:
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&h=300&fit=crop",
    revenueGenerated: "$9,876.54",
    profitMargin: "65.5%",
    sensorId: "HS-1943C",
  },
  {
    id: "4",
    name: "MS26i",
    imageUrl:
      "https://images.unsplash.com/photo-1517420879524-86d64ac2f339?w=400&h=300&fit=crop",
    revenueGenerated: "$11,234.00",
    profitMargin: "60.9%",
    sensorId: "MS-37810",
  },
  {
    id: "5",
    name: "QuoDiem",
    imageUrl:
      "https://images.unsplash.com/photo-1606676539940-12768ce0e762?w=400&h=300&fit=crop",
    totalEarnings: "$12,500.00",
    profitRatio: "65%",
    deviceId: "TSN-5621C",
  },
  {
    id: "6",
    name: "Insta24 Sensor",
    imageUrl:
      "https://images.unsplash.com/photo-1563770660941-20978e870e26?w=400&h=300&fit=crop",
    revenueGenerated: "$10,567.89",
    profitMargin: "75.2%",
    sensorId: "LS-8345E",
  },
  {
    id: "7",
    name: "Moisture Sensor",
    imageUrl:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=400&h=300&fit=crop",
    revenueGenerated: "$7,654.32",
    profitMargin: "68.8%",
    sensorId: "SMS-2104F",
  },
  {
    id: "8",
    name: "ERT Sensor",
    imageUrl:
      "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=400&h=300&fit=crop",
    revenueGenerated: "$8,910.11",
    profitMargin: "63.4%",
    sensorId: "GS-5678G",
  },
];

const DeviceManager = () => {
  const [isAddSensorModalOpen, setIsAddSensorModalOpen] = useState(false);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white">Sensors</h1>

        <div className="flex items-center gap-3">
          {/* Search Button */}
          <button className="p-2 rounded-lg text-[#8B8B8B] hover:text-white transition-colors">
            <Search className="w-5 h-5 " />
          </button>

          {/* View Toggle */}
          <div className="flex items-center rounded-lg p-1">
            <button className="p-1.5 rounded-md  text-white">
              <LayoutGrid className="w-4 h-4 text-[#BDFC45]" />
            </button>
            <button className="p-1.5 rounded-md text-[#8B8B8B] hover:text-white transition-colors">
              <List className="w-4 h-4" />
            </button>
          </div>

          {/* Add Sensor Button */}
          <button
            onClick={() => setIsAddSensorModalOpen(true)}
            className="flex items-center gap-2 rounded-lg bg-[#BDFC45] px-4 py-2 text-sm font-medium text-black hover:bg-[#a3e024] transition-colors"
          >
            <Plus className="w-4 h-4" />
            Add sensor
          </button>

          {/* Points Badge */}
          <div className="flex items-center gap-2 bg-[#FFFFFF1A] rounded-lg px-3 py-2 text-sm ml-2">
            <span className="text-white">Points:</span>
            <span className="text-white font-medium">10,895</span>
          </div>
        </div>
      </div>

      {/* Sensors Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:grid-cols-4 xl:grid-cols-4 gap-4">
        {sensorsData.map((sensor) => (
          <SensorGridCard key={sensor.id} {...sensor} />
        ))}
      </div>

      {/* Add Sensor Modal */}
      <AddSensorModal
        isOpen={isAddSensorModalOpen}
        onClose={() => setIsAddSensorModalOpen(false)}
      />
    </div>
  );
};

export default DeviceManager;
