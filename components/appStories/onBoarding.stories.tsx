import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import OnBoarding from "@/app/onBoarding";

// Define metadata for the Storybook story
const meta: Meta = {
  title: "OnBoarding",
  component: OnBoarding,
};
// Create a default story for the onBoarding component
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    nickname: "1234",
    onPress: () => console.log("Join game pressed"),
    setnickname: (code: string) => console.log(`Game code set to: ${code}`),
  },
};

// Story demonstrating JoinScreen with an empty game code
export const Emptynickname: Story = {
  args: {
    nickname: "",
    onPress: () => console.log("Attempted to join with empty game code"),
    setnickname: (code: string) => console.log(`Game code set to: ${code}`),
  },
};

// Story demonstrating JoinScreen with an error scenario (mocked error)
export const ErrorState: Story = {
  args: {
    nickname: "wrong-code",
    onPress: () => console.log("Join game pressed with wrong code"),
    setGameCode: (code: string) => console.log(`Game code set to: ${code}`),
  },
};
