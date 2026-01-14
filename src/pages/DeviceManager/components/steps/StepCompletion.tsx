import { CheckCircle, Wifi, Settings, Database } from "lucide-react";

interface StepCompletionProps {
  sensorNickname: string;
  sensorType: string;
  connectionType: string;
}

const StepCompletion = ({
  sensorNickname,
  sensorType,
  connectionType,
}: StepCompletionProps) => {
  return (
    <div className="space-y-6">
      {/* Success Header */}
      <div className="text-center py-6">
        <div className="w-20 h-20 rounded-full bg-[#05DF72]/10 flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-10 h-10 text-[#05DF72]" />
        </div>
        <h3 className="text-2xl font-semibold text-white mb-2">
          Setup Complete!
        </h3>
        <p className="text-sm text-[#6b6b6b]">
          Your sensor has been configured and is ready to go
        </p>
      </div>

      {/* Summary Card */}
      <div className="bg-[#141414] border border-[#2a2a2a] rounded-xl p-5">
        <h4 className="text-white font-semibold mb-4">Configuration Summary</h4>
        <div className="space-y-4">
          {/* Sensor Name */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#1f1f1f] flex items-center justify-center">
              <Settings className="w-5 h-5 text-[#05DF72]" />
            </div>
            <div>
              <p className="text-xs text-[#6b6b6b]">Sensor Name</p>
              <p className="text-white font-medium">{sensorNickname}</p>
            </div>
          </div>

          {/* Sensor Type */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#1f1f1f] flex items-center justify-center">
              <Database className="w-5 h-5 text-[#05DF72]" />
            </div>
            <div>
              <p className="text-xs text-[#6b6b6b]">Sensor Type</p>
              <p className="text-white font-medium">{sensorType}</p>
            </div>
          </div>

          {/* Connection Type */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#1f1f1f] flex items-center justify-center">
              <Wifi className="w-5 h-5 text-[#05DF72]" />
            </div>
            <div>
              <p className="text-xs text-[#6b6b6b]">Connection</p>
              <p className="text-white font-medium capitalize">
                {connectionType}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Next Steps */}
      <div className="bg-[#0d1a0d] border border-[#1a3a1a] rounded-xl p-5">
        <h4 className="text-white font-semibold mb-3">What's Next?</h4>
        <ul className="space-y-2 text-sm text-[#9a9a9a]">
          <li className="flex items-start gap-2">
            <span className="text-[#05DF72]">•</span>
            Your sensor will appear in the dashboard within a few minutes
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#05DF72]">•</span>
            Monitor sensor status and data in real-time
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#05DF72]">•</span>
            Start earning rewards once your sensor is verified
          </li>
        </ul>
      </div>
    </div>
  );
};

export default StepCompletion;
