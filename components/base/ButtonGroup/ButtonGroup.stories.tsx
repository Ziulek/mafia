import type { Meta, StoryObj } from "@storybook/react";
import { ButtonGroup } from "./ButtonGroup";
import StoryDecorator from "@/decorators/StoryDecorator";
import { Button } from "../Button/Button";
import { View } from "react-native";

const meta: Meta<typeof ButtonGroup> = {
  component: ButtonGroup,
  decorators: [StoryDecorator],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <View style={{ width: 400, height: 200 }}>
      <ButtonGroup>
        <Button color="kill" onPress={() => {}}>
          {"Kill Player"}
        </Button>
        <Button color="secondary" onPress={() => {}}>
          {"Kick Player"}
        </Button>
        <Button color="back" onPress={() => {}}>
          {"Cancel"}
        </Button>
      </ButtonGroup>
    </View>
  ),
};
