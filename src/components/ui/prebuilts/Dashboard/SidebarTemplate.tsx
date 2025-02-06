import { useState } from "react";
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
  const [focused, setFocused] = useState("charts");

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
                <SidebarMenuButton
                  size="lg"
                  onClick={() => {
                    setFocused("charts");
                  }}
                  className={
                    focused === "charts" ? "bg-[#363636]" : "bg-transparent"
                  }
                >
                  <ChartIcon
                    color={focused === "charts" ? "#171717" : "#363636"}
                  />
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem key="profile">
                <SidebarMenuButton
                  size="lg"
                  onClick={() => {
                    setFocused("profile");
                  }}
                  className={
                    focused === "profile" ? "bg-[#363636]" : "bg-transparent"
                  }
                >
                  <UserIcon
                    color={focused === "profile" ? "#171717" : "#363636"}
                  />
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem key="settings">
                <SidebarMenuButton
                  size="lg"
                  onClick={() => {
                    setFocused("settings");
                  }}
                  className={
                    focused === "settings" ? "bg-[#363636]" : "bg-transparent"
                  }
                >
                  <SettingsIcon
                    color={focused === "settings" ? "#171717" : "#363636"}
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
