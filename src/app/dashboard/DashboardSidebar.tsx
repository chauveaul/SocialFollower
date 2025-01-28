import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { SidebarTemplate } from "@/components/ui/prebuilts/SidebarTemplate";

export default function DashboardSidebar({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <SidebarTemplate />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
}
