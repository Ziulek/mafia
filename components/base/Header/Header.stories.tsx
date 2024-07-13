import type { Meta, StoryObj } from "@storybook/react";
import Header from "./Header";
import { Text } from "react-native";
import OpenController from "@/decorators/OpenController";

const meta: Meta<typeof Header> = {
  component: Header,
  render: (args) => {
    return (
      <OpenController
        renderContent={(isVisible) => (
          <Header {...args} isVisible={isVisible}>
            <Text style={{ fontSize: 30, marginVertical: 50 }}>
              Mafia wins!
            </Text>
          </Header>
        )}
      />
    );
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
