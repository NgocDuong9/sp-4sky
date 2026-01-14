import { Calendar, Wifi, Shield, CreditCard } from "lucide-react";
import WrapBox from "../../components/WrapBox";

type ActivityType = "deployment" | "api" | "purchase";

interface ActivityItem {
  id: string;
  type: ActivityType;
  title: string;
  description: string;
  time: string;
}

interface RecentActivityProps {
  activities: ActivityItem[];
}

const RecentActivity = ({ activities }: RecentActivityProps) => {
  return (
    <WrapBox className="h-full">
      <div className="flex items-center justify-between mb-3">
        <div>
          <h2 className="text-lg font-semibold text-white">Recent Activity</h2>
          <p className="text-sm text-[#FFFFFF80]">
            Latest events and system updates
          </p>
        </div>
        <button className="flex items-center gap-2 bg-[#FFFFFF0D] text-xs hover:text-white transition-colors rounded-lg px-3 py-1.5">
          <Calendar className="w-3 h-3 text-[#FFFFFF80]" />
          Last 7 days
        </button>
      </div>

      <div className="flex gap-4 flex-col">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start gap-4 py-3">
            <div
              className={`flex h-2 w-2 rounded-full bg-[#05DF72] mt-1.5`}
            ></div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-medium text-white">
                  {activity.title}
                </h4>
                <span className="text-xs text-[#FFFFFF80]">
                  {activity.time}
                </span>
              </div>
              <p className="text-sm text-[#FFFFFF80] truncate">
                {activity.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </WrapBox>
  );
};

export default RecentActivity;
