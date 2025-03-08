import type { Meta, StoryObj } from "@storybook/react";
import CharacterChip from "./CharacterChip";
import StoryDecorator from "@/decorators/StoryDecorator";

const meta: Meta<typeof CharacterChip> = {
  component: CharacterChip,
  decorators: [StoryDecorator],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
