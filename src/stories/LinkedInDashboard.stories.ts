import type { Meta, StoryObj } from "@storybook/react";
import { LinkedInDashboard } from "@/components/ui/prebuilts/Dashboard/LinkedInDashboard";

const meta: Meta<typeof LinkedInDashboard> = {
  component: LinkedInDashboard,
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

export default meta;
type Story = StoryObj<typeof LinkedInDashboard>;

export const Primary: Story = {
  args: {
    primary: true,
  },
};
