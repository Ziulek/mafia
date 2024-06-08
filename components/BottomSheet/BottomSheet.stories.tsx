import type { Meta, StoryObj } from "@storybook/react";
import StoryDecorator from "@/decorators/StoryDecorator";
import { BottomSheetComponent } from "./BottomSheet";
import { ButtonGroup } from "../ButtonGroup/ButtonGroup";
import { View } from "react-native";
import { Button } from "../Button/Button";

const meta: Meta<typeof BottomSheetComponent> = {
  component: BottomSheetComponent,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Lorem Ipsum Dupol",
    content: (
      <ButtonGroup>
        <View style={{ gap: 20, width: "100%" }}>
          <Button color="kill" onPress={() => {}}>
            {"Kill Player"}
          </Button>
          <Button color="secondary" onPress={() => {}}>
            {"Kick Player"}
          </Button>
          <Button color="back" onPress={() => {}}>
            {"Cancel"}
          </Button>
        </View>
      </ButtonGroup>
    ),
  },
};
