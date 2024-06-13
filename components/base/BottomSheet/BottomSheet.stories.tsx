import type { Meta, StoryObj } from "@storybook/react";
import { BottomSheet } from "./BottomSheet";
import { TouchableOpacity, View } from "react-native";

import { useState } from "react";

const meta: Meta<typeof BottomSheet> = {
  component: BottomSheet,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [showBottomSheet, setShowBottomSheet] = useState(false);

    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <TouchableOpacity
          style={{ width: 200, height: 50, backgroundColor: "red" }}
          onPress={() => setShowBottomSheet(true)}
        />

        <BottomSheet
          title="Lorem Ipsum Dupol"
          handleClose={() => setShowBottomSheet(false)}
          isVisible={showBottomSheet}
        ></BottomSheet>
      </View>
    );
  },
};
