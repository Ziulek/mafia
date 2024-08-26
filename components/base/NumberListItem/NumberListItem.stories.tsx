import type { Meta, StoryObj } from "@storybook/react";
import { NumberListItem } from "./NumberListItem";
import StoryDecorator from "@/decorators/StoryDecorator";
import { useState } from "react";

const meta: Meta<typeof NumberListItem> = {
  component: NumberListItem,
  decorators: [StoryDecorator],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const NumberAtMin: Story = {
  render: () => {
    const [value, setValue] = useState(1);

    return (
      <NumberListItem
        title="Number of Players"
        value={value}
        setValue={setValue}
        min={1}
        max={10}
      />
    );
  },
};

export const NumberAtMax: Story = {
  render: () => {
    const [value, setValue] = useState(10);

    return (
      <NumberListItem
        title="Number of Players"
        value={value}
        setValue={setValue}
        min={1}
        max={10}
      />
    );
  },
};
