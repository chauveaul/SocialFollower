import { SidebarProvider } from "@/components/ui/sidebar";
import { SidebarTemplate } from "@/components/ui/prebuilts/Dashboard/SidebarTemplate";

export default function DashboardSidebar({
  children,
  primary,
}: {
  children: React.ReactNode;
  primary?: boolean;
}) {
  primary ? "" : "";
  return (
    <SidebarProvider>
      <SidebarTemplate />
      <main className="overflow-hidden">{children}</main>
    </SidebarProvider>
  );
}
