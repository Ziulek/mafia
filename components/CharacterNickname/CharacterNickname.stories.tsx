import type { Meta, StoryObj } from "@storybook/react";
import StoryDecorator from "@/decorators/StoryDecorator";
import { CharacterNickname } from "./CharacterNickname";

const meta: Meta<typeof CharacterNickname> = {
  component: CharacterNickname,
  decorators: [StoryDecorator],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Male1: Story = {
  args: {
    nickname: "Placeholder",
  },
};
