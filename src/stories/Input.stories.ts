import type { Meta, StoryObj } from "@storybook/react";

import { Input } from "@/components/ui/input";

const meta: Meta<typeof Input> = {
  component: Input,
  parameters: {
    backgrounds: {
      // 👇 Set default background value for all component stories
      default: "light",
    },
  },
  argTypes: {
    placeholder: String,
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Primary: Story = {
  args: {
    primary: true,
    label: "Button",
    placeholder: "Email",
  },
};
