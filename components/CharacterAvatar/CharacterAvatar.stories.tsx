import type { Meta, StoryObj } from "@storybook/react";
import { CharacterAvatar } from "./CharacterAvatar";

const CharacterAvatarMeta: Meta<typeof CharacterAvatar> = {
  title: "CharacterAvatar",
  component: CharacterAvatar,
};

export default CharacterAvatarMeta;

export const Male1: StoryObj<typeof CharacterAvatar> = {
  args: {
    character: "M1",
  },
};
export const Male2: StoryObj<typeof CharacterAvatar> = {
  args: {
    character: "M2",
  },
};
