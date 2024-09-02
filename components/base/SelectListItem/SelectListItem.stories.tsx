import type { Meta, StoryObj } from "@storybook/react";
import StoryDecorator from "@/decorators/StoryDecorator";
import SelectListItem from "./SelectListItem";
import AvailableRoles from "@/gameConfig/AvailableRoles.config";

const meta: Meta<typeof SelectListItem> = {
  component: SelectListItem,
  decorators: [StoryDecorator],
};

const items2 = [
  { label: "Male", value: "male" },
  { label: "Female", value: "female" },
];

export default meta;

type Story = StoryObj<typeof meta>;

export const MultiSelectable: Story = {
  args: {
    items: AvailableRoles,
    isMultiSelected: true,
  },
};

export const MultiSelectableFull: Story = {
  args: {
    items: AvailableRoles,
    isMultiSelected: true,
    value: ["detective", "medic", "serial killer", "medium"],
  },
};

export const SingleSelectable: Story = {
  args: {
    items: items2,
    isMultiSelected: false,
  },
};
