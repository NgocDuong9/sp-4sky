import { TrendingDown, TrendingUp } from "lucide-react";
import WrapBox from "../../components/WrapBox";

interface StatCardProps {
  title: string;
  value: string;
  change?: string;
  changeType?: "positive" | "negative";
  icon: React.ReactNode;
  iconBg?: string;
}

const StatCard = ({
  title,
  value,
  change,
  changeType,
  icon,
  iconBg = "bg-[#b8ff29]/20",
}: StatCardProps) => {
  return (
    <WrapBox>
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <div
              className={`flex h-8 w-8 items-center justify-center rounded-[10px] ${iconBg} text-[#b8ff29]`}
            >
              {icon}
            </div>
            <span className="text-xs text-[#FFFFFF80]">{title}</span>
          </div>
          <p className="text-2xl font-bold text-white">{value}</p>
          {change && (
            <p
              className={`mt-2 flex items-center gap-1 text-xs ${
                changeType === "positive"
                  ? "text-[#05DF72]"
                  : changeType === "negative"
                  ? "text-[#FF4B4B]"
                  : "text-gray-500"
              }`}
            >
              {changeType === "positive" && <TrendingUp className="w-3 h-3" />}
              {changeType === "negative" && (
                <TrendingDown className="w-3 h-3" />
              )}
              {change}
            </p>
          )}
        </div>
      </div>
    </WrapBox>
  );
};

export default StatCard;
