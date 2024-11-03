import type { Meta, StoryObj } from "@storybook/react";

import FormCitiesComboBox from "@/components/ui/prebuilts/FormCitiesComboBox";

const meta: Meta<typeof FormCitiesComboBox> = {
  component: FormCitiesComboBox,
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

export default meta;
type Story = StoryObj<typeof FormCitiesComboBox>;

export const Primary: Story = {
  args: {
    primary: true,
    label: "Combobox",
  },
};
