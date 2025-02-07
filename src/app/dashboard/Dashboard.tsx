import DashboardCarousel from "@/components/ui/prebuilts/Dashboard/DashboardCarousel";
import DashboardSidebar from "./DashboardSidebar";

export default function Dashboard() {
  return (
    <div className="w-full h-[100vh]">
      <DashboardSidebar children={<DashboardCarousel />} />
    </div>
  );
}
