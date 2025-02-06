import type { Meta, StoryObj } from "@storybook/react";
import Settings from "@/components/ui/prebuilts/Dashboard/Settings";

const meta: Meta<typeof Settings> = {
  component: Settings,
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Settings>;

export const Primary: Story = {
  args: {
    primary: true,
  },
};
