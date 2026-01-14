import { Building2, Mail, Briefcase, Camera } from "lucide-react";
import WrapBox from "../../components/WrapBox";

interface BusinessProfileProps {
  name: string;
  role: string;
  organization: string;
  email: string;
  jobRole: string;
  avatarUrl: string;
}

const BusinessProfile = ({
  name,
  role,
  organization,
  email,
  jobRole,
  avatarUrl,
}: BusinessProfileProps) => {
  return (
    <WrapBox className="flex h-full flex-col justify-between p-6">
      <div className="flex flex-col">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-bold text-white">Business Profile</h2>
          <Building2 className="w-5 h-5 text-[#BDFC45]" />
        </div>

        <div className="flex items-center gap-4 mb-6">
          <div className="relative">
            <div className="h-16 w-16 rounded-full overflow-hidden  offset-[#141414]">
              <img
                src={avatarUrl}
                alt={name}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-1 -right-0.5 h-6 w-6 rounded-full bg-[#BDFC45] flex justify-center items-center">
              <Camera className="w-4 h-4 text-black" />
            </div>
          </div>
          <div>
            <h3 className="font-bold text-white">{name}</h3>
            <p className="text-[13px] text-[#FFFFFF80]">{role}</p>
          </div>
        </div>

        <div className="space-y-4 border-t border-[#FFFFFF0D] pt-3 font-medium">
          <div className="flex items-center gap-3">
            <Building2 className="w-4 h-4 text-[#FFFFFF80]" />
            <div>
              <p className="text-xs text-[#FFFFFF80]">Organization</p>
              <p className="text-sm text-white">{organization}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="w-4 h-4 text-[#FFFFFF80]" />
            <div>
              <p className="text-xs text-[#FFFFFF80]">Email</p>
              <p className="text-sm text-white">{email}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Briefcase className="w-4 h-4 text-[#FFFFFF80]" />
            <div>
              <p className="text-xs text-[#FFFFFF80]">Role</p>
              <p className="text-sm text-white">{jobRole}</p>
            </div>
          </div>
        </div>
      </div>

      <button className="mt-6 w-full rounded-[8px] border border-[#BDFC45] bg-transparent py-2.5 text-sm font-medium text-white hover:bg-[#1a1a1a] transition-colors">
        Edit Profile
      </button>
    </WrapBox>
  );
};

export default BusinessProfile;
