import { AlertTriangle, Key, Copy, Check } from "lucide-react";
import { useState, useCallback } from "react";

interface StepSoftwareConfigurationProps {
  apiKey: string;
  devicePrivateKey: string;
  onApiKeyChange: (key: string) => void;
  onDevicePrivateKeyChange: (key: string) => void;
}

const StepSoftwareConfiguration = ({
  apiKey,
  devicePrivateKey,
  onApiKeyChange,
  onDevicePrivateKeyChange,
}: StepSoftwareConfigurationProps) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = useCallback((text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  }, []);

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold text-white mb-2">
          Software Configuration
        </h3>
        <p className="text-sm text-[#6b6b6b]">
          Configure your sensor with the required security credentials
        </p>
      </div>

      {/* API Key Input */}
      <div className="space-y-2">
        <label className="block text-white font-medium text-sm">API Key</label>
        <div className="flex gap-2">
          <input
            type="text"
            value={apiKey}
            onChange={(e) => onApiKeyChange(e.target.value)}
            className="flex-1 px-4 py-3 bg-[#141414] border border-[#2a2a2a] rounded-lg text-white placeholder-[#6b6b6b] focus:outline-none focus:border-[#BDFC45] transition-colors font-mono"
            placeholder="Enter your API key"
          />
          <button
            onClick={() => handleCopy(apiKey, "apiKey")}
            className="px-4 py-3 bg-[#2a2a2a] hover:bg-[#3a3a3a] rounded-lg transition-colors"
            title="Copy API Key"
          >
            {copiedField === "apiKey" ? (
              <Check className="w-5 h-5 text-[#BDFC45]" />
            ) : (
              <Key className="w-5 h-5 text-[#6b6b6b]" />
            )}
          </button>
        </div>
        <p className="text-xs text-[#6b6b6b]">
          Your API key for authenticating with the 4DSKY network
        </p>
      </div>

      {/* Device Private Key Input */}
      <div className="space-y-2">
        <label className="block text-white font-medium text-sm">
          Device Private Key
        </label>
        <div className="flex gap-2">
          <input
            type="text"
            value={devicePrivateKey}
            onChange={(e) => onDevicePrivateKeyChange(e.target.value)}
            className="flex-1 px-4 py-3 bg-[#141414] border border-[#2a2a2a] rounded-lg text-white placeholder-[#6b6b6b] focus:outline-none focus:border-[#BDFC45] transition-colors font-mono"
            placeholder="Enter device private key"
          />
          <button
            onClick={() => handleCopy(devicePrivateKey, "privateKey")}
            className="px-4 py-3 bg-[#2a2a2a] hover:bg-[#3a3a3a] rounded-lg transition-colors"
            title="Copy Private Key"
          >
            {copiedField === "privateKey" ? (
              <Check className="w-5 h-5 text-[#BDFC45]" />
            ) : (
              <Key className="w-5 h-5 text-[#6b6b6b]" />
            )}
          </button>
        </div>
        <p className="text-xs text-[#6b6b6b]">
          Unique private key for your sensor device
        </p>
      </div>

      {/* Security Warning */}
      <div className="bg-[#FFDAD6] border border-[#BA1A1A] rounded-xl p-4">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-[#BA1A1A] flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="text-[#BA1A1A] font-semibold mb-1">
              Security Warning
            </h4>
            <p className="text-sm text-[#BA1A1A]">
              Store these credentials securely. Never share your private key
              with anyone. These cannot be recovered if lost.
            </p>
          </div>
        </div>
      </div>

      {/* Installation Guide */}
      <div className="bg-[#141414] border border-[#2a2a2a] rounded-xl p-4">
        <h4 className="text-white font-semibold mb-3">Installation Guide</h4>
        <ol className="space-y-2 text-sm text-[#9a9a9a]">
          <li className="flex items-start gap-2">
            Copy the API key and Device Private Key
          </li>
          <li className="flex items-start gap-2">
            Access your sensor's admin panel (default: 192.168.1.100)
          </li>
          {/* <li className="flex items-start gap-2">
            Navigate to Configuration &gt; Network Settings
          </li>
          <li className="flex items-start gap-2">
            Paste the credentials in the respective fields
          </li> */}
        </ol>
      </div>
    </div>
  );
};

export default StepSoftwareConfiguration;
