import DashboardSidebar from "./DashboardSidebar";
import { LinkedInDashboard } from "@/components/ui/prebuilts/LinkedInDashboard";

export default function Dashboard() {
  return (
    <div className="w-full">
      <DashboardSidebar children={<LinkedInDashboard />} />
    </div>
  );
}
