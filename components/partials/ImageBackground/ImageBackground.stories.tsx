import type { Meta, StoryObj } from "@storybook/react";
import ImageBackground from "./ImageBackground";

const meta: Meta<typeof ImageBackground> = {
  component: ImageBackground,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
