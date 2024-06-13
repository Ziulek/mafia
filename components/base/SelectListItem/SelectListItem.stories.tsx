import type { Meta, StoryObj } from "@storybook/react";

import { SelectListItem } from "./SelectListItem";
import StoryDecorator from "@/decorators/StoryDecorator";

const meta: Meta<typeof SelectListItem> = {
  component: SelectListItem,
  decorators: [StoryDecorator],
};

export default meta;

type Story = StoryObj<typeof meta>;

// const data = [
//   { id: 1, name: "Detective" },
//   { id: 2, name: "Medic" },
//   { id: 3, name: "Serial Killer" },
//   { id: 4, name: "Medium" },
// ];

const data = [
  { id: 1, name: "Apple" },
  { id: 2, name: "Pear" },
  { id: 3, name: "Blackberry" },
  { id: 4, name: "Peach" },
  { id: 5, name: "Apricot" },
  { id: 6, name: "Melon" },
  { id: 7, name: "Honeydew" },
  { id: 8, name: "Starfruit" },
  { id: 9, name: "Blueberry" },
  { id: 10, name: "Raspberry" },
  { id: 11, name: "Strawberry" },
  { id: 12, name: "Mango" },
  { id: 13, name: "Pineapple" },
  { id: 14, name: "Lime" },
  { id: 15, name: "Lemon" },
  { id: 16, name: "Coconut" },
  { id: 17, name: "Guava" },
  { id: 18, name: "Papaya" },
  { id: 19, name: "Orange" },
  { id: 20, name: "Grape" },
  { id: 21, name: "Jackfruit" },
  { id: 22, name: "Durian" },
];

export const Default: Story = {
  // args: {
  //   // items: data,
  // },
};
