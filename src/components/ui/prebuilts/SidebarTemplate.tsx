import { ChartIcon, UserIcon, SettingsIcon } from "@/assets/Icons";
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
                  <ChartIcon />
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem key="profile">
                <SidebarMenuButton size="lg">
                  <UserIcon />
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem key="settings">
                <SidebarMenuButton size="lg">
                  <SettingsIcon />
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
