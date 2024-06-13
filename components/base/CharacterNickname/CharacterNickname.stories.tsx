import type { Meta, StoryObj } from "@storybook/react";
import StoryDecorator from "@/decorators/StoryDecorator";
import { CharacterNickname } from "./CharacterNickname";
import BoxDecorator from "@/decorators/BoxDecorator";

const meta: Meta<typeof CharacterNickname> = {
  component: CharacterNickname,
  decorators: [BoxDecorator, StoryDecorator],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    nickname: "Placeholder",
  },
};
