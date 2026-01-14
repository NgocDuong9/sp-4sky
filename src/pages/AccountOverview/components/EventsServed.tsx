import { ChartColumn } from "lucide-react";

interface EventsServedProps {
  dataTransferred: string;
  dataUnit: string;
  apiCalls: string;
  successRate: number;
}

const EventsServed = ({
  dataTransferred,
  dataUnit,
  apiCalls,
  successRate,
}: EventsServedProps) => {
  return (
    <div className="rounded-xl bg-[#171D1E] border border-[#FFFFFF0D] p-6 h-full">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-white">Events Served</h2>
        <ChartColumn className="w-5 h-5 text-[#BDFC45]" />
      </div>

      <p className="text-sm text-[#FFFFFF80] mb-6">
        Real-time data streaming from active sensor network across deployed
        locations
      </p>

      <div className="space-y-6">
        <div>
          <p className="text-4xl font-bold text-white flex items-center gap-2">
            {dataTransferred}{" "}
            <span className="text-lg text-[#FFFFFF80]">{dataUnit}</span>
          </p>
          <p className="text-sm text-[#FFFFFF80]">Data transferred today</p>
        </div>

        <div>
          <p className="text-4xl font-bold text-white flex items-center gap-2">
            {apiCalls}{" "}
            <span className="text-lg text-[#FFFFFF80]">Requests</span>
          </p>
          <p className="text-sm text-[#FFFFFF80]">API calls this month</p>
        </div>

        <div className="border-t border-[#FFFFFF1A] pt-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-[#b8ff29]">Success rate</span>
            <span className="text-sm font-medium text-[#b8ff29]">
              {successRate}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsServed;
