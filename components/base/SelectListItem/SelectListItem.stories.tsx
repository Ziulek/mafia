import type { Meta, StoryObj } from "@storybook/react";
import StoryDecorator from "@/decorators/StoryDecorator";
import SelectListItem from "./SelectListItem";

const meta: Meta<typeof SelectListItem> = {
  component: SelectListItem,
  decorators: [StoryDecorator],
};

const items = [
  { label: "Detective", value: "detective" },
  { label: "Medic", value: "medic" },
  { label: "Serial Killer", value: "serial killer" },
  { label: "Medium", value: "medium" },
];

const items2 = [
  { label: "Male", value: "male" },
  { label: "Female", value: "female" },
];

export default meta;

type Story = StoryObj<typeof meta>;

export const MultiSelectable: Story = {
  args: {
    items: items,
    isMultiSelected: true,
  },
};

export const SingleSelectable: Story = {
  args: {
    items: items2,
    isMultiSelected: false,
  },
};
