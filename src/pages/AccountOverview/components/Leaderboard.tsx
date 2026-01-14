import { Trophy, ChevronDown } from "lucide-react";
import WrapBox from "../../components/WrapBox";

interface LeaderboardUser {
  rank: number;
  name: string;
  tokens: string;
  events: string;
  time: string;
  isCurrentUser?: boolean;
}

interface LeaderboardProps {
  users: LeaderboardUser[];
  userRank: number;
  userTotalTokens: string;
}

const RankBadge = ({ rank }: { rank: number }) => {
  const isTopThree = rank <= 3;

  if (isTopThree) {
    return (
      <span className="w-6 h-6 rounded-full bg-[#BDFC4533] flex items-center justify-center text-xs font-semibold text-[#BDFC45]">
        {rank}
      </span>
    );
  }

  return <span className="w-6 text-center text-gray-400 text-sm">{rank}</span>;
};

const Leaderboard = ({
  users,
  userRank,
  userTotalTokens,
}: LeaderboardProps) => {
  return (
    <WrapBox className="p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Trophy className="w-5 h-5 text-[#BDFC45]" />
          <h2 className="text-lg font-bold text-white">Leaderboard</h2>
        </div>
        <button className="flex items-center gap-1 text-xs text-gray-400 hover:text-white transition-colors bg-[#FFFFFF1A] hover:bg-[#333] rounded-[6px] px-3 py-1.5 border border-[#FFFFFF1A]">
          Last month
          <ChevronDown className="w-3 h-3" />
        </button>
      </div>

      <p className="text-sm text-[#FFFFFF80] mb-4">
        Top contributors by tokens
      </p>

      {/* Table Header */}
      <div className="grid grid-cols-[32px_1fr_80px_60px_50px] gap-3 text-xs text-gray-500 mb-2 px-3 overflow-hidden">
        <span>#</span>
        <span className="truncate">Name</span>
        <span className="text-right">Tokens</span>
        <span className="text-right">Events</span>
        <span className="text-right">Time</span>
      </div>

      {/* Table Body */}
      <div className="flex flex-col gap-1 max-h-[280px] overflow-y-auto overflow-x-hidden">
        {users.map((user, index) => {
          const isTopThree = user.rank <= 3;

          return (
            <div
              key={user.rank}
              className={`grid hover:bg-[#2a2a2a] grid-cols-[32px_1fr_80px_60px_50px] gap-3 items-center rounded-[6px] px-3 py-1.5 text-sm transition-colors text-[11px] ${
                index === 0
                  ? "bg-[#BDFC4526]"
                  : index === 1
                  ? "bg-[#BDFC451A]"
                  : index === 2
                  ? "bg-[#BDFC450D]"
                  : "hover:opacity-80 "
              }`}
            >
              <RankBadge rank={user.rank} />
              <span className="text-white truncate font-medium">
                {user.name}
              </span>
              <span className="text-right text-[#ffffff] font-bold ">
                {user.tokens}
              </span>
              <span className="text-right text-[#FFFFFFBF] ">
                {user.events}
              </span>
              <span className="text-right text-[#FFFFFFBF] ">{user.time}</span>
            </div>
          );
        })}
      </div>

      {/* User Ranking */}
      <div className="mt-3 pt-3 border-t border-[#2a2a2a]">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-500 text-[10px]">Your ranking</span>
          <div className="flex items-center gap-1.5">
            <span className="text-[#ffffff] text-[11px] font-bold">
              #{userRank}
            </span>
            <span className="text-white text-[11px] ">·</span>
            <span className="text-white text-[11px] ">{userTotalTokens}</span>
          </div>
        </div>
      </div>
    </WrapBox>
  );
};

export default Leaderboard;
