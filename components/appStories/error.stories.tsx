import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { View } from "react-native";
import error from "@/app/error";

const meta: Meta<typeof error> = {
  component: error,
  title: "error",

  argTypes: {
    errorMessage: {
      control: "text",
      description: "The error message to be displayed on the screen",
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

// Story demonstrating ErrorScreen with a typical error message
export const DefaultError: Story = {
  args: {
    errorMessage: "Something went wrong!",
  },
};

// Story demonstrating ErrorScreen with a specific error message
export const SpecificError: Story = {
  args: {
    errorMessage: "Invalid game code. Please try again.",
  },
};

// Story demonstrating ErrorScreen with a generic error message
export const GenericError: Story = {
  args: {
    errorMessage: "An unknown error has occurred. Please contact support.",
  },
};
