import type { Meta, StoryObj } from "@storybook/react";
import Header from "./Header";
import { Text, View } from "react-native";
import { ButtonGroup } from "../ButtonGroup/ButtonGroup";
import { Button } from "../Button/Button";

const meta: Meta<typeof Header> = {
  component: Header,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const ShortText: Story = {
  render: () => (
    <Header>
      <Text style={{ fontSize: 30, marginVertical: 50 }}>Mafia wins!</Text>
    </Header>
  ),
};

export const LongText: Story = {
  render: () => (
    <Header>
      <View style={{ marginVertical: 50, alignItems: "center" }}>
        <Text style={{ fontSize: 30 }}>Game Code: 420xdlol</Text>
        <Text style={{ fontSize: 30 }}>Players:7</Text>
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>
          Waiting for players
        </Text>
      </View>
    </Header>
  ),
};

// export const BigComponent: Story = {
//   render: () => (
//     <Header>
//       <ButtonGroup>
//         <Button color="kill" onPress={() => {}}>
//           {"Kill Player"}
//         </Button>
//         <Button color="secondary" onPress={() => {}}>
//           {"Kick Player"}
//         </Button>
//         <Button color="back" onPress={() => {}}>
//           {"Cancel"}
//         </Button>
//       </ButtonGroup>
//     </Header>
//   ),
// };
