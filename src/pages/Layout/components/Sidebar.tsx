import {
  Calendar,
  Code,
  HardDrive,
  HelpCircle,
  House,
  Map,
  Maximize2,
  Minimize2,
  Search,
  Trophy,
  Wifi,
} from "lucide-react";
import { NavLink } from "react-router-dom";

interface NavItem {
  label: string;
  path: string;
  icon: React.ReactNode;
  badge?: string;
  disabled?: boolean;
}

interface SidebarProps {
  isCollapsed: boolean;
  onToggleCollapse: () => void;
}

const navItems: NavItem[] = [
  {
    label: "4D Viewer",
    path: "/viewer",
    icon: <Map className="w-5 h-5" />,
  },
  {
    label: "Account overview",
    path: "/",
    icon: <House className="w-5 h-5" />,
  },
  {
    label: "Device Manager",
    path: "/device-manager",
    icon: <HardDrive className="w-5 h-5" />,
  },
  {
    label: "4DSKY API",
    path: "/api",
    icon: <Code className="w-5 h-5" />,
    badge: "coming soon",
    disabled: true,
  },
  {
    label: "AI Analytics",
    path: "/analytics",
    icon: <Calendar className="w-5 h-5" />,
    badge: "coming soon",
    disabled: true,
  },
  {
    label: "Leaderboards",
    path: "/leaderboards",
    icon: <Trophy className="w-5 h-5" />,
  },
  {
    label: "Network Status",
    path: "/network",
    icon: <Wifi className="w-5 h-5" />,
  },
];

const Sidebar = ({ isCollapsed, onToggleCollapse }: SidebarProps) => {
  return (
    <aside
      className={`fixed left-[27px] top-[21px] z-40 h-[calc(100vh-42px)] bg-[#171D1E] py-6 text-xs rounded-2xl transition-all duration-300 ease-in-out ${
        isCollapsed ? "w-[68px] px-3" : "w-[238px] px-[21px]"
      }`}
    >
      <div className="flex h-full flex-col">
        {/* Search Bar / Toggle Button */}
        <div className="mb-8 flex items-center justify-between w-full">
          {!isCollapsed ? (
            <>
              <div className="flex items-center gap-2 bg-[#2E3435] px-3 py-2.5 rounded-full w-[calc(100%-26px)]">
                <Search className="h-4 w-4 text-[#FFFFFFBF] flex-shrink-0" />
                <input
                  type="text"
                  placeholder="Search for anything..."
                  className="bg-transparent text-xs placeholder:text-[#FFFFFFBF] focus:outline-none"
                />
              </div>
              <button
                onClick={onToggleCollapse}
                className="p-1 hover:bg-[#2E3435] rounded-lg transition-colors"
                title="Thu gọn sidebar"
              >
                <Minimize2 className="w-[15px] h-[15px] text-[#FFFFFFBF] hover:text-white" />
              </button>
            </>
          ) : (
            <button
              onClick={onToggleCollapse}
              className="w-full flex justify-center p-2 hover:bg-[#2E3435] rounded-lg transition-colors"
              title="Mở rộng sidebar"
            >
              <Maximize2 className="w-[18px] h-[18px] text-[#FFFFFFBF] hover:text-white" />
            </button>
          )}
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto">
          <ul className="flex flex-col gap-4 mb-3">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.disabled ? "#" : item.path}
                  end={item.path === "/"}
                  className={({ isActive }) =>
                    `group flex items-center gap-2 text-xs rounded-xl px-3 py-2 font-medium transition-all duration-200 ${
                      isCollapsed ? "justify-center" : ""
                    } ${
                      item.disabled
                        ? "cursor-not-allowed opacity-50"
                        : isActive
                        ? "bg-[#BDFC45] text-[#21005D]"
                        : "text-[#ffffff79] hover:bg-[#1a1a1a] hover:text-white"
                    }`
                  }
                  onClick={(e) => item.disabled && e.preventDefault()}
                  title={isCollapsed ? item.label : undefined}
                >
                  <span className="flex-shrink-0">{item.icon}</span>
                  {!isCollapsed && <span className="flex-1">{item.label}</span>}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* User Profile */}
          <div className="mt-auto pt-3 border-t border-[#FFFFFF1A]">
            <div
              className={`flex items-center gap-3 ${
                isCollapsed ? "justify-center" : ""
              }`}
            >
              <div className="relative">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
                    alt="Andrew Newman"
                    className="h-full w-full object-cover"
                  />
                </div>
                <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-green-500 ring-2 ring-[#111111]" />
              </div>
              {!isCollapsed && (
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-white truncate">
                    Andrew Newman
                  </p>
                </div>
              )}
            </div>
          </div>
        </nav>

        {/* Help Link */}
        <div className="pt-4">
          <a
            href="#"
            className={`flex items-center gap-3 text-xs text-[#FFFFFF] hover:text-white transition-colors ${
              isCollapsed ? "justify-center" : ""
            }`}
            title={isCollapsed ? "Help me" : undefined}
          >
            <HelpCircle className="h-5 w-5" />
            {!isCollapsed && <span className="font-medium">Help me</span>}
          </a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
