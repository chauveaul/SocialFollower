import type { Meta, StoryObj } from "@storybook/react";

import { FormInput } from "@/components/ui/prebuilts/FormInput";

const meta: Meta<typeof FormInput> = {
  component: FormInput,
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
  argTypes: {
    name: String,
  },
};

export default meta;
type Story = StoryObj<typeof FormInput>;

export const Primary: Story = {
  args: {
    primary: true,
    name: "email",
    labelName: "Email",
  },
};
