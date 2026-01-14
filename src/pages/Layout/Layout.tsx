import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Sidebar, Header } from "./components";

const SkyLayout = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleToggleCollapse = () => {
    setIsCollapsed((prev) => !prev);
  };

  return (
    <div className="flex min-h-screen bg-[#000000] px-[27px] pt-[21px] ">
      {/* Sidebar */}
      <Sidebar
        isCollapsed={isCollapsed}
        onToggleCollapse={handleToggleCollapse}
      />

      {/* Main Content */}
      <main
        className={`flex-1 transition-all duration-300 ease-in-out ${
          isCollapsed ? "ml-[80px]" : "ml-[250px]"
        }`}
      >
        {/* Header */}
        <Header />

        {/* Page Content */}
        <div className="p-4 ">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default SkyLayout;
