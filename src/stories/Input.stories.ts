import type { Meta, StoryObj } from "@storybook/react";

import { Input } from "@/components/ui/input";

const meta: Meta<typeof Input> = {
  component: Input,
  parameters: {
    backgrounds: {
      default: "dark",
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
    label: "Input",
    placeholder: "Email",
  },
};
