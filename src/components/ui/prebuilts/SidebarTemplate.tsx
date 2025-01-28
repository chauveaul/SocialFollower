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
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem key="charts">
                <SidebarMenuButton asChild>
                  <a href="#">
                    <PieChartOutline
                      color={"#ffffff"}
                      title="chart"
                      height="25px"
                      width="25px"
                    />
                    <span>Charts</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem key="profile">
                <SidebarMenuButton asChild>
                  <a href="#">
                    <PersonCircleOutline
                      color={"#ffffff"}
                      title="profile"
                      height="25px"
                      width="25px"
                    />
                    <span>Profile</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem key="settings">
                <SidebarMenuButton asChild>
                  <a href="#">
                    <SettingsOutline
                      color={"#ffffff"}
                      title="settings"
                      height="25px"
                      width="25px"
                    />
                    <span>Settings</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
