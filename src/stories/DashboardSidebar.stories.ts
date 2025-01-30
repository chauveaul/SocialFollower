import type { Meta, StoryObj } from "@storybook/react";
import DashboardSidebar from "@/app/dashboard/DashboardSidebar";

const meta: Meta<typeof DashboardSidebar> = {
  component: DashboardSidebar,
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

export default meta;
type Story = StoryObj<typeof DashboardSidebar>;

export const Primary: Story = {
  args: {
    primary: true,
  },
};
