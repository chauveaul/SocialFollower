import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  PieChartOutline,
  PersonCircleOutline,
  SettingsOutline,
} from "react-ionicons";

export function SidebarTemplate() {
  return (
    <Sidebar variant="floating" collapsible="icon">
      <SidebarHeader>
        <span>Logo</span>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup />
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem key="charts">
                <SidebarMenuButton size="lg">
                  <PieChartOutline
                    color={"#ffffff"}
                    title="chart"
                    height="40px"
                    width="40px"
                  />
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem key="profile">
                <SidebarMenuButton size="lg">
                  <PersonCircleOutline
                    color={"#ffffff"}
                    title="profile"
                    height="40px"
                    width="40px"
                  />
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem key="settings">
                <SidebarMenuButton size="lg">
                  <SettingsOutline
                    color={"#ffffff"}
                    title="settings"
                    height="40px"
                    width="40px"
                  />
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
