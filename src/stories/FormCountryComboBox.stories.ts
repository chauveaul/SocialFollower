import type { Meta, StoryObj } from "@storybook/react";

import { FormCountryComboBox } from "@/components/ui/prebuilts/FormCountryComboBox";

const meta: Meta<typeof FormCountryComboBox> = {
  component: FormCountryComboBox,
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

export default meta;
type Story = StoryObj<typeof FormCountryComboBox>;

export const Primary: Story = {
  args: {
    primary: true,
    label: "Combobox",
  },
};
