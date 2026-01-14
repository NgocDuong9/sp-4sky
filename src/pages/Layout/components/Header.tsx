import { skyLogo } from "../../../assets";
import { twMerge } from "tailwind-merge";

interface HeaderProps {
  breadcrumb?: string;
}

const Header = ({ breadcrumb = "Account overview" }: HeaderProps) => {
  return (
    <header
      className={twMerge(
        " flex h-16 items-center justify-between bg-[#000000] px-4"
        // sticky top-[21px] z-30
      )}
    >
      <div className="flex items-center gap-2 text-sm text-gray-400">
        <span>4DSKY</span>
        <span>/</span>
        <span className="text-white">{breadcrumb}</span>
      </div>

      {/* Logo */}
      <div className="flex items-center gap-2">
        <img src={skyLogo} alt="" />
      </div>
    </header>
  );
};

export default Header;
