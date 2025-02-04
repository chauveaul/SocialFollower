import { SidebarProvider } from "@/components/ui/sidebar";
import { SidebarTemplate } from "@/components/ui/prebuilts/SidebarTemplate";

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
      <main>{children}</main>
    </SidebarProvider>
  );
}
