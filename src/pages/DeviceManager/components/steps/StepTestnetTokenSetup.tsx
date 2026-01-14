import { AlertTriangle, Wallet, ExternalLink } from "lucide-react";

interface StepTestnetTokenSetupProps {
  walletAddress: string;
  onWalletAddressChange: (address: string) => void;
}

const StepTestnetTokenSetup = ({
  walletAddress,
  onWalletAddressChange,
}: StepTestnetTokenSetupProps) => {
  const handleOpenFaucet = () => {
    window.open("https://portal.hedera.com/faucet", "_blank");
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold text-white mb-2">
          Testnet Token Setup
        </h3>
        <p className="text-sm text-[#6b6b6b]">
          Fund your sensor with testnet tokens to begin operations
        </p>
      </div>

      {/* Wallet Address Input */}
      <div className="space-y-2">
        <label className="block text-white font-medium text-sm">
          Wallet Address
        </label>
        <input
          type="text"
          value={walletAddress}
          onChange={(e) => onWalletAddressChange(e.target.value)}
          className="w-full px-4 py-3 bg-[#141414] border border-[#2a2a2a] rounded-lg text-white placeholder-[#6b6b6b] focus:outline-none focus:border-[#BDFC45] transition-colors font-mono"
          placeholder="0.0.xxxxx"
        />
        <p className="text-xs text-[#6b6b6b]">
          Enter your Hedera wallet address for testnet tokens
        </p>
      </div>

      {/* Get Testnet Tokens Card */}
      <div className="bg-[#141414] border border-[#2a2a2a] rounded-xl p-5">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-lg bg-[#C27AFF]/10 flex items-center justify-center flex-shrink-0">
            <Wallet className="w-6 h-6 text-[#C27AFF]" />
          </div>
          <div className="flex-1">
            <h4 className="text-white font-semibold mb-1">
              Get Testnet Tokens
            </h4>
            <p className="text-sm text-[#6b6b6b] mb-4">
              Use the Hedera testnet faucet to receive free tokens for testing
              your sensor
            </p>
            <button
              onClick={handleOpenFaucet}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#C27AFF]/10 border border-[#C27AFF] text-[#C27AFF] rounded-lg transition-colors text-sm font-medium"
            >
              <ExternalLink className="w-4 h-4" />
              Open Hedera Faucet
            </button>
          </div>
        </div>
      </div>

      {/* Important Note */}
      <div className="bg-[#BDFC451A] border border-[#BDFC454D] rounded-xl p-4">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-[#BDFC45] flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="text-[#ffffff] font-semibold mb-1">
              Important Note
            </h4>
            <p className="text-sm text-[#BDFC45]">
              Testnet tokens have no real value and are only for testing
              purposes. For production use, you'll need to fund your wallet with
              mainnet HBAR tokens.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepTestnetTokenSetup;
