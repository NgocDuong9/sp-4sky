import { Database, Zap, CreditCard } from "lucide-react";
import {
  StatCard,
  BusinessProfile,
  EventsServed,
  Leaderboard,
  ActiveSensors,
  RecentActivity,
  ActiveIcon,
} from "./components";

// Types
interface LeaderboardUser {
  rank: number;
  name: string;
  tokens: string;
  events: string;
  time: string;
  isCurrentUser?: boolean;
}

interface Sensor {
  id: string;
  name: string;
  revenue: string;
  profitMargin: string;
  sensorId: string;
  imageUrl: string;
}

interface ActivityItem {
  id: string;
  type: "deployment" | "api" | "purchase";
  title: string;
  description: string;
  time: string;
}

// Mock Data
const leaderboardData: LeaderboardUser[] = [
  {
    rank: 1,
    name: "Andrew Newman",
    tokens: "523,450",
    events: "42,187",
    time: "2.2s",
    isCurrentUser: true,
  },
  {
    rank: 2,
    name: "Emily Davis",
    tokens: "487,230",
    events: "38,934",
    time: "2.4s",
  },
  {
    rank: 3,
    name: "Sarah Connor",
    tokens: "412,876",
    events: "34,567",
    time: "2.7s",
  },
  {
    rank: 4,
    name: "John Smith",
    tokens: "356,234",
    events: "29,876",
    time: "2.9s",
  },
  {
    rank: 5,
    name: "Michael Brown",
    tokens: "298,123",
    events: "25,432",
    time: "3.1s",
  },
  {
    rank: 6,
    name: "Lisa Anderson",
    tokens: "267,891",
    events: "21,345",
    time: "3.2s",
  },
  {
    rank: 7,
    name: "David Wilson",
    tokens: "234,567",
    events: "20,345",
    time: "3.5s",
  },
];

const sensorsData: Sensor[] = [
  {
    id: "1",
    name: "IoT Sensor Alpha",
    revenue: "$14,582.40",
    profitMargin: "67.3%",
    sensorId: "SNS-8472A",
    imageUrl:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=200&h=150&fit=crop",
  },

  {
    id: "2",
    name: "IoT Sensor Beta",
    revenue: "$14,582.40",
    profitMargin: "67.3%",
    sensorId: "SNS-8472A",
    imageUrl:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=200&h=150&fit=crop",
  },
];

const recentActivities: ActivityItem[] = [
  {
    id: "1",
    type: "deployment",
    title: "Sensor deployment completed",
    description: "New sensor 'Sensor-NX-12' added to network",
    time: "2 hours ago",
  },
  {
    id: "2",
    type: "api",
    title: "API key regenerated",
    description: "Security credentials updated successfully",
    time: "5 hours ago",
  },
  {
    id: "3",
    type: "purchase",
    title: "Credit purchase",
    description: "Purchased 5,000 credits",
    time: "2 days ago",
  },
];

const AccountOverview = () => {
  const handleAddSensor = () => {
    // TODO: Implement add sensor functionality
    console.log("Add sensor clicked");
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-white">Account Overview</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Active Sensors"
          value="12"
          change="2 this week"
          changeType="positive"
          icon={<ActiveIcon size={14} />}
          iconBg="bg-[#2B7FFF1A] "
        />
        <StatCard
          title="Data Usage"
          value="2.4 GB"
          change="12% vs last month"
          changeType="positive"
          icon={<Database className="w-4 h-4 text-[#C27AFF]" />}
          iconBg="bg-[#AD46FF1A]"
        />
        <StatCard
          title="API Requests"
          value="45.2K"
          change="18% this month"
          changeType="positive"
          icon={<Zap className="w-4 h-4 text-[#05DF72]" />}
          iconBg="bg-[#00C9501A]"
        />
        <StatCard
          title="Points Balance"
          value="10,354"
          change="Points remaining"
          icon={<CreditCard className="w-4 h-4 text-[#FF8904]" />}
          iconBg="bg-[#FF89041A]"
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-10 2xl:grid-cols-8 gap-4">
        {/* Business Profile Card */}
        <div className="2xl:col-span-2 lg:col-span-3">
          <BusinessProfile
            name="Andrew Newman"
            role="Senior Drone Operator"
            organization="Neuron World"
            email="andrew@neuron.world"
            jobRole="Pilot, Neuron Asset Admin"
            avatarUrl="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
          />
        </div>

        {/* Events Served Card */}
        <div className="2xl:col-span-3 lg:col-span-3 h-full">
          <EventsServed
            dataTransferred="256"
            dataUnit="KB"
            apiCalls="1,234"
            successRate={99.8}
          />
        </div>

        {/* Leaderboard Card */}
        <div className="2xl:col-span-3 lg:col-span-4">
          <Leaderboard
            users={leaderboardData}
            userRank={1}
            userTotalTokens="521,450 tokens"
          />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-10 gap-4">
        {/* Active Sensors */}
        <div className="lg:col-span-6">
          {" "}
          <ActiveSensors sensors={sensorsData} onAddSensor={handleAddSensor} />
        </div>

        {/* Recent Activity */}
        <div className="lg:col-span-4">
          <RecentActivity activities={recentActivities} />
        </div>
      </div>
    </div>
  );
};

export default AccountOverview;
