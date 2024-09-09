import type { Meta, StoryObj } from "@storybook/react";
import RoleCard from "./RoleCard";
import StoryDecorator from "@/decorators/StoryDecorator";
import { Role } from "@/components/types/Role";

const meta: Meta<typeof RoleCard> = {
  component: RoleCard,
  decorators: [StoryDecorator],
  argTypes: {
    role: {
      options: ["police", "mafia", "detective", "medic"], // Add other roles as needed
      control: { type: "radio" },
    },
  },
  args: {
    role: "police", // Default role for the story
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Police: Story = {
  args: {
    role: "police" as Role,
  },
};

export const Mafia: Story = {
  args: {
    role: "mafia" as Role,
  },
};

export const Detective: Story = {
  args: {
    role: "detective" as Role,
  },
};
export const Medic: Story = {
  args: {
    role: "medic" as Role,
  },
};
