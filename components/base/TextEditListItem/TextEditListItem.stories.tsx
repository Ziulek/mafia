import type { Meta, StoryObj } from "@storybook/react";
import StoryDecorator from "@/decorators/StoryDecorator";
import { useState } from "react";
import { TextEditListItem } from "./TextEditListItem";

const meta: Meta<typeof TextEditListItem> = {
  component: TextEditListItem,
  decorators: [StoryDecorator],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Your nickname",
  },
};
