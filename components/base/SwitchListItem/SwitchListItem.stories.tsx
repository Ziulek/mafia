import type { Meta, StoryObj } from "@storybook/react";
import { SwitchListItem } from "./SwitchListItem";
import StoryDecorator from "@/decorators/StoryDecorator";
import { useState } from "react";

const meta: Meta<typeof SwitchListItem> = {
  component: SwitchListItem,
  decorators: [StoryDecorator],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const SwitchOn: Story = {
  render: () => {
    const [isSwitchOn, setIsSwitchOn] = useState(true);

    return (
      <SwitchListItem
        title="Reveal roles after death "
        isOn={isSwitchOn}
        setIsOn={setIsSwitchOn}
      />
    );
  },
};

export const switchOff: Story = {
  render: () => {
    const [isSwitchOn, setIsSwitchOn] = useState(false);

    return (
      <SwitchListItem
        title="Reveal roles after death "
        isOn={isSwitchOn}
        setIsOn={setIsSwitchOn}
      />
    );
  },
};
