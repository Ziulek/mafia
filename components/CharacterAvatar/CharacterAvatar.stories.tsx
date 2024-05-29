import type { Meta, StoryObj } from "@storybook/react";
import { CharacterAvatar } from "./CharacterAvatar";
import StoryDecorator from "@/decorators/StoryDecorator";
import GridDecorator from "@/decorators/GridDecorator";
import BoxDecorator from "@/decorators/BoxDecorator";

const meta: Meta<typeof CharacterAvatar> = {
  component: CharacterAvatar,
  decorators: [StoryDecorator],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Male1: Story = {
  args: {
    character: "M1",
    nickname: "Szlajmi",
  },
  decorators: [BoxDecorator],
};

export const Male2: Story = {
  args: {
    character: "M2",
    nickname: "Shroomi",
  },
  decorators: [BoxDecorator],
};

export const Male3: Story = {
  args: {
    character: "M3",
  },
  decorators: [BoxDecorator],
};

export const Male4: Story = {
  args: {
    character: "M4",
  },
  decorators: [BoxDecorator],
};

export const Female1: Story = {
  args: {
    character: "F1",
    nickname: "PlaceHolder",
  },
  decorators: [BoxDecorator],
};

export const Female2: Story = {
  args: {
    character: "F2",
  },
  decorators: [BoxDecorator],
};

export const Female3: Story = {
  args: {
    character: "F3",
  },
  decorators: [BoxDecorator],
};

export const Female4: Story = {
  args: {
    character: "F4",
  },
  decorators: [BoxDecorator],
};

const Avatars = [
  <CharacterAvatar character="M1" nickname="placeholder" />,
  <CharacterAvatar character="M2" nickname="placeholder" />,
  <CharacterAvatar character="M3" />,
  <CharacterAvatar character="M4" nickname="placeholder" />,
  <CharacterAvatar character="F1" />,
  <CharacterAvatar character="F2" nickname="placeholder" />,
  <CharacterAvatar character="F3" nickname="placeholder" />,
  <CharacterAvatar character="F4" />,
];

export const AllAvatars: Story = {
  render: () => <GridDecorator items={Avatars} columns={2.5} />,
};
