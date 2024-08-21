import type { Meta, StoryObj } from "@storybook/react";
import onBoardingScreen from "./onBoardingScreen";

const meta: Meta<typeof onBoardingScreen> = {
  component: onBoardingScreen,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const EmptyInput: Story = {
  args: {
    isNicknameValid: true,
    nicknameMessage: "",
    nickname: "",
  },
};

export const FiledInput: Story = {
  args: {
    isNicknameValid: true,
    nicknameMessage: "Nickname is correct.",
    nickname: "Kaszti",
  },
};
export const TooShortInput: Story = {
  args: {
    isNicknameValid: false,
    nicknameMessage:
      "Nickname is too short. It should be at least 3 characters long.",
    nickname: "Ka",
  },
};
export const TooLongInput: Story = {
  args: {
    isNicknameValid: false,
    nicknameMessage:
      "Nickname is too long. It should be no more than 12 characters long.",
    nickname: "KasztiLubiKasztanyZDrzewaDębowego",
  },
};
export const InvalidCharacterInput: Story = {
  args: {
    isNicknameValid: false,
    nicknameMessage: "Nickname can only contain letters and numbers.",
    nickname: "^%$&&$)(&",
  },
};
