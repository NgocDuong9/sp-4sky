import { X, ChevronLeft, ChevronRight, RotateCcw } from "lucide-react";
import { useState, useEffect, useCallback, useMemo } from "react";
import {
  StepSelectSensorType,
  StepPartsChecklist,
  StepNetworkConnection,
  StepPhysicalInstallation,
  StepSoftwareConfiguration,
  StepTestnetTokenSetup,
  StepCompletion,
  type ConnectionType,
} from "./steps";
import type { ConnectionStatus } from "./steps/StepCompletion";

interface AddSensorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TOTAL_STEPS = 7;

// Sensor type mapping for display
const sensorTypeNames: Record<string, string> = {
  adsb: "JetiVision ADSB",
  au: "JetiVision AU",
  canada: "JetiVision Canada",
  eu: "JetiVision EU",
};

const AddSensorModal = ({ isOpen, onClose }: AddSensorModalProps) => {
  const [currentStep, setCurrentStep] = useState(1);

  // Step 1: Select Sensor Type
  const [selectedSensorType, setSelectedSensorType] = useState<string | null>(
    null
  );
  const [sensorNickname, setSensorNickname] = useState("Sensor_PRG_alpha");

  // Step 2: Parts Checklist
  const [hasAllParts, setHasAllParts] = useState(false);

  // Step 3: Network Connection
  const [connectionType, setConnectionType] = useState<ConnectionType>("");

  // Step 5: Software Configuration
  const [apiKey, setApiKey] = useState("");
  const [devicePrivateKey, setDevicePrivateKey] = useState("");

  // Step 6: Testnet Token Setup
  const [walletAddress, setWalletAddress] = useState("");

  // Step 7: Connection Status
  const [connectionStatus, setConnectionStatus] =
    useState<ConnectionStatus>("loading");
  const [retryKey, setRetryKey] = useState(0);

  // Reset state when modal closes
  useEffect(() => {
    if (!isOpen) {
      setCurrentStep(1);
      setSelectedSensorType(null);
      setSensorNickname(" ");
      setHasAllParts(false);
      setConnectionType("");
      setApiKey("");
      setDevicePrivateKey("");
      setWalletAddress("");
      setConnectionStatus("loading");
      setRetryKey(0);
      // Reset attempt count when modal closes
    }
  }, [isOpen]);

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  const handleOverlayClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.target === e.currentTarget) {
        onClose();
      }
    },
    [onClose]
  );

  const handlePrevious = useCallback(() => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  }, [currentStep]);

  const handleNext = useCallback(() => {
    if (currentStep < TOTAL_STEPS) {
      setCurrentStep((prev) => prev + 1);
    } else if (connectionStatus === "success") {
      onClose();
    }
  }, [currentStep, onClose, connectionStatus]);

  const handleRetry = useCallback(() => {
    setConnectionStatus("loading");
    setRetryKey((prev) => prev + 1);
  }, []);

  const handleToggleHasAllParts = useCallback(() => {
    setHasAllParts((prev) => !prev);
  }, []);

  const handleConnectionStatusChange = useCallback(
    (status: ConnectionStatus) => {
      setConnectionStatus(status);
    },
    []
  );

  // Determine if Next button should be disabled
  const isNextDisabled = useMemo(() => {
    switch (currentStep) {
      case 1:
        return !selectedSensorType;
      case 2:
        return !hasAllParts;
      case 3:
        return !connectionType;
      case 5:
        return !apiKey || !devicePrivateKey;
      case 6:
        return !walletAddress;
      case 7:
        return connectionStatus === "loading";
      default:
        return false;
    }
  }, [
    currentStep,
    selectedSensorType,
    hasAllParts,
    connectionType,
    apiKey,
    devicePrivateKey,
    walletAddress,
    connectionStatus,
  ]);

  // Get button text and action for step 7
  const step7ButtonConfig = useMemo(() => {
    if (currentStep !== TOTAL_STEPS) return null;

    switch (connectionStatus) {
      case "loading":
        return {
          text: "Try Again",
          icon: null,
          disabled: true,
          action: handleRetry,
        };
      case "success":
        return {
          text: "Finish",
          icon: null,
          disabled: false,
          action: onClose,
        };
      case "failed":
        return {
          text: "Try Again",
          icon: <RotateCcw className="w-4 h-4" />,
          disabled: false,
          action: handleRetry,
        };
    }
  }, [currentStep, connectionStatus, handleRetry, onClose]);

  // Get button text
  const nextButtonText = useMemo(() => {
    if (step7ButtonConfig) {
      return step7ButtonConfig.text;
    }
    return "Next";
  }, [step7ButtonConfig]);

  if (!isOpen) return null;

  const progressPercentage = (currentStep / TOTAL_STEPS) * 100;

  // Render current step content
  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <StepSelectSensorType
            selectedSensorType={selectedSensorType}
            onSelectSensorType={setSelectedSensorType}
            sensorNickname={sensorNickname}
            onNicknameChange={setSensorNickname}
          />
        );
      case 2:
        return (
          <StepPartsChecklist
            hasAllParts={hasAllParts}
            onToggleHasAllParts={handleToggleHasAllParts}
          />
        );
      case 3:
        return (
          <StepNetworkConnection
            selectedConnection={connectionType}
            onSelectConnection={setConnectionType}
          />
        );
      case 4:
        return <StepPhysicalInstallation />;
      case 5:
        return (
          <StepSoftwareConfiguration
            apiKey={apiKey}
            devicePrivateKey={devicePrivateKey}
            onApiKeyChange={setApiKey}
            onDevicePrivateKeyChange={setDevicePrivateKey}
          />
        );
      case 6:
        return (
          <StepTestnetTokenSetup
            walletAddress={walletAddress}
            onWalletAddressChange={setWalletAddress}
          />
        );
      case 7:
        return (
          <StepCompletion
            key={retryKey}
            sensorNickname={sensorNickname}
            sensorType={
              selectedSensorType
                ? sensorTypeNames[selectedSensorType] || selectedSensorType
                : "Unknown"
            }
            connectionType={connectionType}
            onStatusChange={handleConnectionStatusChange}
            setConnectionStatus={setConnectionStatus}
            connectionStatus={connectionStatus}
          />
        );
      default:
        return null;
    }
  };

  const handleButtonClick = step7ButtonConfig
    ? step7ButtonConfig.action
    : handleNext;

  return (
    <div
      className="fixed top-0 inset-0 z-50 flex items-center justify-center !mt-0"
      onClick={handleOverlayClick}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-[800px] max-h-[90vh] mx-4 bg-[#0d0d0d] rounded-2xl border border-[#2a2a2a] shadow-2xl flex flex-col overflow-hidden">
        {/* Header - Fixed */}
        <div className="flex-shrink-0">
          <div className="flex items-start justify-between p-6 pb-4">
            <div>
              <h2 className="text-2xl font-semibold text-white">
                Add New Sensor
              </h2>
              <p className="text-sm text-[#6b6b6b] mt-1">
                Step {currentStep} of {TOTAL_STEPS}
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-1 text-[#6b6b6b] hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Progress Bar - Fixed */}
          <div className="px-6 pb-4">
            <div className="h-1 bg-[#1a1a1a] rounded-full overflow-hidden">
              <div
                className="h-full bg-[#BDFC45] rounded-full transition-all duration-300 ease-out"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>
        </div>

        {/* Content - Scrollable */}
        <div className="flex-1 overflow-y-auto p-6 pt-4">
          {renderStepContent()}
        </div>

        {/* Footer - Fixed */}
        <div className="flex-shrink-0 flex items-center justify-between p-6 pt-4 border-t border-[#1a1a1a] bg-[#0d0d0d]">
          <button
            onClick={handlePrevious}
            disabled={currentStep === 1}
            className={`
              flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors
              ${
                currentStep === 1
                  ? "text-[#3a3a3a] cursor-not-allowed"
                  : "text-white hover:text-[#BDFC45]"
              }
            `}
          >
            <ChevronLeft className="w-4 h-4" />
            Previous
          </button>

          <button
            onClick={handleButtonClick}
            disabled={isNextDisabled}
            className={`
              flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-medium transition-all
              ${
                isNextDisabled
                  ? "bg-[#2a2a2a] text-[#6b6b6b] cursor-not-allowed"
                  : "bg-white text-black hover:bg-[#e5e5e5]"
              }
            `}
          >
            {nextButtonText}
            {step7ButtonConfig?.icon}
            {currentStep < TOTAL_STEPS && <ChevronRight className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddSensorModal;
