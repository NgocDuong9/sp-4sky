import { CheckCircle, XCircle, ExternalLink } from "lucide-react";
import { useState, useEffect, useRef } from "react";

type ConnectionStatus = "loading" | "success" | "failed";

interface StepCompletionProps {
  sensorNickname: string;
  sensorType: string;
  connectionType: string;
  onStatusChange?: (status: ConnectionStatus) => void;
  setConnectionStatus: React.Dispatch<React.SetStateAction<ConnectionStatus>>;
  connectionStatus: ConnectionStatus;
}

// Custom loading spinner component
const LoadingSpinner = () => (
  <svg
    className="w-20 h-20 animate-spin"
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Outer dashed circle segments */}
    <circle
      cx="50"
      cy="50"
      r="40"
      stroke="#BDFC45"
      strokeWidth="4"
      strokeLinecap="round"
      strokeDasharray="20 15"
      opacity="0.3"
    />
    {/* Inner rotating arc */}
    <path
      d="M50 10
         A40 40 0 0 1 90 50"
      stroke="#BDFC45"
      strokeWidth="4"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M90 50
         A40 40 0 0 1 50 90"
      stroke="#BDFC45"
      strokeWidth="4"
      strokeLinecap="round"
      fill="none"
      opacity="0.6"
    />
  </svg>
);

const StepCompletion = ({
  sensorNickname,
  sensorType,
  connectionType,
  onStatusChange,
  connectionStatus,
  setConnectionStatus,
}: StepCompletionProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setConnectionStatus("failed");
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const handleGetHelp = () => {
    window.open("https://support.jetivision.com", "_blank");
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h3 className="text-xl font-semibold text-white mb-2">
          Connection Confirmation
        </h3>
        <p className="text-sm text-[#6b6b6b]">
          Testing connection to your sensor
        </p>
      </div>

      {/* Loading State */}
      {connectionStatus === "loading" && (
        <div className="flex flex-col items-center justify-center py-16 min-h-[422px]">
          <LoadingSpinner />
          <h4 className="text-xl font-semibold text-white mt-6">
            Connecting to sensor...
          </h4>
          <p className="text-sm text-[#6b6b6b] mt-2">
            This may take a few moments
          </p>
        </div>
      )}

      {/* Success State */}
      {connectionStatus === "success" && (
        <div className="flex flex-col items-center py-8">
          <div className="w-16 h-16 rounded-full bg-[#05DF72]/20 flex items-center justify-center mb-4">
            <CheckCircle className="w-8 h-8 text-[#05DF72]" />
          </div>
          <h4 className="text-2xl font-semibold text-white mb-2">
            Connection Successful!
          </h4>
          <p className="text-sm text-[#6b6b6b] mb-6">
            Your sensor "{sensorNickname}" is now online and transmitting data
          </p>

          {/* Summary Card */}
          <div className="w-[450px] bg-[#00C9501A] border border-[#00C95033] rounded-xl p-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[13px] text-[#FFFFFFBF]">
                  Sensor Type
                </span>
                <span className="text-[13px] text-white font-medium">
                  {sensorType}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[13px] text-[#FFFFFFBF]">Connection</span>
                <span className="text-[13px] text-white font-medium capitalize">
                  {connectionType}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[13px] text-[#FFFFFFBF]">Status</span>
                <span className="text-[13px] text-[#05DF72] font-medium flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#05DF72]" />
                  Online
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Failed State */}
      {connectionStatus === "failed" && (
        <div className="flex flex-col items-center py-8">
          <div className="w-16 h-16 rounded-full bg-[#FF6B6B]/20 flex items-center justify-center mb-4">
            <XCircle className="w-8 h-8 text-[#FF6B6B]" />
          </div>
          <h4 className="text-2xl font-semibold text-white mb-2">
            Connection Failed
          </h4>
          <p className="text-sm text-[#6b6b6b] mb-6">
            Unable to establish connection with your sensor
          </p>

          {/* Troubleshooting Steps */}
          <div className="w-full bg-[#1a1414] border border-[#3a2a2a] rounded-xl p-4 mb-4">
            <h5 className="text-white font-semibold mb-3">
              Troubleshooting Steps:
            </h5>
            <ul className="space-y-2 text-sm text-[#9a9a9a]">
              <li className="flex items-start gap-2">
                <span className="text-[#6b6b6b]">•</span>
                Verify sensor is powered on
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#6b6b6b]">•</span>
                Check network connection
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#6b6b6b]">•</span>
                Confirm API credentials are correct
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#6b6b6b]">•</span>
                Review firewall settings
              </li>
            </ul>
          </div>

          {/* Get Help Button */}
          <button
            onClick={handleGetHelp}
            className="flex items-center gap-2 text-[#9a9a9a] hover:text-white transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            Get Help
          </button>
        </div>
      )}
    </div>
  );
};

export default StepCompletion;
export type { ConnectionStatus };

// Reset attempt count (for testing purposes)
