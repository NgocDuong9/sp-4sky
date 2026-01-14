import { twMerge } from "tailwind-merge";

const WrapBox = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={twMerge(
        "rounded-xl bg-[#171D1E] border border-[#FFFFFF0D] p-4",
        className
      )}
    >
      {children}
    </div>
  );
};

export default WrapBox;
